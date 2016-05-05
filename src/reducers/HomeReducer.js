import Immutable from 'immutable';

const defaultState = Immutable.Map(
  isFetching: false,
  slider: Immutable.List([
    Immutable.Map({
      imageURL:'../assets/images/slide1.jpg'
    }),
    Immutable.Map({
      imageURL:'../assets/images/slide2.jpg'
    }),
    Immutable.Map({
      imageURL:'../assets/images/slide3.jpg'
    }),
  ]),
);
