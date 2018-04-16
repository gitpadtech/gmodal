import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './index.scss';

export default class GModal extends Component {
  static defaultProps = {
    animated: true,
    show: false
  }
  static propTypes = {
    children: PropTypes.any,
    animated: PropTypes.bool,
    show: PropTypes.bool,
  }
  constructor(props) {
    super(props);
    this.getRoot = (() => {
      let $rootLayer = null;
      function create() {
        $rootLayer = document.createElement('div');
        $rootLayer.classList.add('g-modal-layer');
        document.body.appendChild($rootLayer);
        return $rootLayer;
      }
      function destroy() {
        if ($rootLayer) {
          document.body.removeChild($rootLayer);
          $rootLayer = null;
        }
      }
      return () => {
        return {
          get layer() {
            if (!$rootLayer) {
              $rootLayer = create();
            }
            return $rootLayer;
          },
          destroy,
        }
      }
    })();
  }
  state = {
    show: false,
  }
  shouldComponentUpdate(nextProps, nextState) {
    return this.state.show || nextProps.show;
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.show) {
      !this.props.show && this.hideMe();
    } else {
      this.props.show && this.showMe();
    }
  }
  componentDidMount() {
    if (this.props.show) {
      this.showMe();
    }
  }
  componentWillUnmount() {
    this.getRoot().destroy();
  }
  get layer() {
    return this.getRoot().layer;
  }
  showMe() {
    this.setState({
      show: true
    }, () => {
      if (this.props.animated) {
        this.layer.style.opacity = 0;
        setTimeout(() => {
          this.layer.style.opacity = 1;
        }, 0);
      }
    });
  }
  hideMe() {
    if (this.props.animated) {
      this.layer.style.opacity = 0;
      this.layer.addEventListener('transitionend', () => {
        this.setState({
          show: false
        }, () => {
          this.getRoot().destroy();
        });
      });
    } else {
      this.setState({
        show: false
      });
      this.getRoot().destroy();
    }
  }
  render() {
    const { show } = this.state;
    return show ? ReactDOM.createPortal(
      this.props.children,
      this.layer,
    ) : null;
  }
}