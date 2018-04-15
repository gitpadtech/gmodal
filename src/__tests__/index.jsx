import React from 'react';
import { shallow, mount } from 'enzyme';
import GModal from  '../index';
import { wrap } from 'module';

function findLayers() {
  return [...document.body.querySelectorAll('.g-modal-layer')];
}
afterEach(() => {
  document.body.innerHTML = '';
});

test('should create layer element lazily', () => {
  mount(
    <GModal/>
  );
  expect(findLayers().length).toBe(0);
  mount(
    <GModal show/>
  );
  expect(findLayers().length).toBe(1);
});

test('should destroy layer element when unmount', () => {
  const wrapper = mount(
    <GModal show/>
  );
  expect(findLayers().length).toBe(1);
  wrapper.unmount();
  expect(findLayers().length).toBe(0);
})