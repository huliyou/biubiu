import React from 'react';
import {
  Container,
  Group,
  Button,
  Slider,
} from 'amazeui-touch';

const onAction = function (index, direction) {
  console.log('激活的幻灯片编号：', index, '，滚动方向：', direction);
};

const sliderIntance = (
  <Slider
    onAction={onAction}
  >
    <Slider.Item>
      <img src="http://s.amazeui.org/media/i/demos/bing-1.jpg" />
    </Slider.Item>
    <Slider.Item>
      <img src="http://s.amazeui.org/media/i/demos/bing-2.jpg" />
    </Slider.Item>
    <Slider.Item>
      <img src="http://s.amazeui.org/media/i/demos/bing-3.jpg" />
    </Slider.Item>
    <Slider.Item>
      <img src="http://s.amazeui.org/media/i/demos/bing-4.jpg" />
    </Slider.Item>
  </Slider>
);

const data = [
  {
    thumb: 'http://s.amazeui.org/media/i/demos/bing-1.jpg',
    img: 'http://s.amazeui.org/media/i/demos/bing-1.jpg',
  },
  {
    thumb: 'http://s.amazeui.org/media/i/demos/bing-2.jpg',
    img: 'http://s.amazeui.org/media/i/demos/bing-2.jpg',
  },
  {
    thumb: 'http://s.amazeui.org/media/i/demos/bing-3.jpg',
    img: 'http://s.amazeui.org/media/i/demos/bing-3.jpg',
  },
  {
    thumb: 'http://s.amazeui.org/media/i/demos/bing-4.jpg',
    img: 'http://s.amazeui.org/media/i/demos/bing-4.jpg',
  }];


class SliderExample extends React.Component {
  render() {
    return (
      <Container>
          {sliderIntance}
      </Container>
    );
  }
}

export default SliderExample;