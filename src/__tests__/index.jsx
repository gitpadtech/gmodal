import React from 'react';
import { mount } from 'enzyme';
import GModal from  '../index';

function findLayers() {
  return [...document.body.querySelectorAll('.g-modal-layer')];
}
afterEach(() => {
  document.body.innerHTML = '';
  jest.useRealTimers();
});

describe('Should render children correctly', () => {
  test('Should render children when show is true', () => {
    mount(
      <GModal show>
        <div className="popup">children</div>
      </GModal>
    );
    expect(document.querySelector('.popup')).toBeTruthy();
  });
  test("Shouldn't render children when show is false", () => {
    mount(
      <GModal>
        <div className="popup">children</div>
      </GModal>
    );
    expect(document.querySelector('.popup')).toBeFalsy();
  });
});
test('Should create layer element lazily', () => {
  mount(
    <GModal/>
  );
  expect(findLayers().length).toBe(0);
  mount(
    <GModal show />
  );
  expect(findLayers().length).toBe(1);
});

test('Should destroy layer element when unmount', () => {
  const showed = mount(
    <GModal show />
  );
  expect(findLayers().length).toBe(1);
  showed.unmount();
  expect(findLayers().length).toBe(0);
  const hided = mount(
    <GModal />
  );
  expect(findLayers().length).toBe(0);
  hided.unmount();
  expect(findLayers().length).toBe(0);
});

describe('Change appearance', () => {
  test('From disappearance to appearance', () => {
    const wrapper = mount(
      <GModal />
    );
    wrapper.setProps({
      show: true,
    });
    expect(findLayers().length).toBe(1);
  });
  test('From appearance to disappearance', () => {
    const wrapper = mount(
      <GModal show animated={false} />
    );
    wrapper.setProps({
      show: false,
    });
    expect(findLayers().length).toBe(0);
  });
});

describe('Show layer', () => {
  test('Should show with transition', () => {
    jest.useFakeTimers();
    const instance = mount(
      <GModal show />
    ).instance();
  
    expect(instance.layer.style.opacity).toBe('0');
    jest.runOnlyPendingTimers();
    expect(instance.layer.style.opacity).toBe('1');
  });
  test('Should show without transition', () => {
    const instance = mount(
      <GModal show animated={false} />
    ).instance();
    expect(instance.layer.style.opacity).not.toBe('0');
  });
});

describe('Hide layer', () => {
  test('Should destroy layer when transition end', () => {
    const wrapper = mount(
      <GModal show preventBouncing={false} />
    );
    const instance = wrapper.instance();
    wrapper.setProps({
      show: false,
    });
    instance.layer.dispatchEvent(new Event('transitionend'));
    expect(instance.state.show).toBe(false);
    expect(findLayers().length).toBe(0);
  });
});