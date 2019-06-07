import React, { Component } from 'react';
import styled from 'styled-components';
import { carouselData } from '../../data';

const CarouselContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  height: 500px;
  position: relative;
  overflow: hidden;
  margin-top: 16px;
  @media (min-width: 1200px) {
    width: 1200px;
  }

  img {
    width: 100%;
    display: none;
  }
`;

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: none;
  flex-direction: row;
  color: #fff;
  background-color: #333;
  font-size: 40px;
  border-radius: 50%;
  position: absolute;
  width: 50px;
  height: 50px;
  cursor: pointer;
  &:hover {
    color: #333;
    background-color: #fff;
    border: 2px solid #333;
  }
`;

const LeftButton = styled(Button)`
  top: 50%;
  left: 25px;
  transform: translate(0, -50%);
`;

const RightButton = styled(Button)`
  top: 50%;
  right: 25px;
  transform: translate(0, -50%);
`;
export default class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carouselData: [],
      currentIndex: 0
    };
  }
  componentDidMount() {
    this.setState({ carouselData });
  }

  leftClick = () => {
    if (this.state.currentIndex === 0) {
      this.setState({ currentIndex: this.state.carouselData.length - 1 });
    } else {
      this.setState(prevState => ({
        currentIndex: prevState.currentIndex - 1
      }));
    }
  };

  rightClick = () => {
    if (this.state.currentIndex === this.state.carouselData.length - 1) {
      this.setState({ currentIndex: 0 });
    } else {
      this.setState(prevState => ({
        currentIndex: prevState.currentIndex + 1
      }));
    }
  };

  selectedImage = () => {
    return (
      <img
        src={this.state.carouselData[this.state.currentIndex]}
        style={{ display: 'block' }}
        alt="carousel pictures"
      />
    );
  };

  render() {
    return (
      <CarouselContainer>
        <LeftButton onClick={this.leftClick}>{'<'}</LeftButton>
        {this.selectedImage()}
        <RightButton onClick={this.rightClick}>{'>'}</RightButton>
      </CarouselContainer>
    );
  }
}
