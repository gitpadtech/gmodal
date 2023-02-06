[![Build Status](https://travis-ci.org/gitpadtech/gmodal.svg?branch=master)](https://travis-ci.org/gitpadtech/gmodal)
[![Coverage Status](https://coveralls.io/repos/github/gitpadtech/gmodal/badge.svg?branch=master)](https://coveralls.io/github/gitpadtech/gmodal?branch=master)


# GModal

A modal layer for React 16

## Install

```shell
npm install @gitpad/gmodal
```

## Usage

```jsx
import GModal from '@gitpad/gmodal';
import '@gitpad/gmodal/dist/gmodal.css';
// ...
<GModal show>
  <div className="popup">A popup window</div>
</GModal>
// ...
```

## How does it work?

It's powered by React portal in React 16, so it's only compatible with React 16
