import React, { Component } from 'react';

import Tabs from './Tabs';
import Cards from './Cards';

import { tabData, cardData } from '../../data';

export default class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'all',
      tabs: [],
      cards: []
    };
  }

  componentDidMount() {
    this.setState({
      tabs: tabData,
      cards: cardData
    });
  }

  changeSelected = tab => {
    this.setState({ selected: tab });
  };

  filterCards = () => {
    const currentOption = this.state.selected;
    if (currentOption === 'all') {
      return this.state.cards;
    } else {
      return this.state.cards.filter(card => card.tab === currentOption);
    }
  };

  render() {
    return (
      <div className="content-container">
        {/* 
          Add 2 props to the Tabs component, 
          `selectedTab` that includes the currently selected tab
          and `selectTabHandler` that includes the function to change the selected tab
        */}
        <Tabs tabs={this.state.tabs} />
        <Cards cards={this.filterCards()} />
      </div>
    );
  }
}
