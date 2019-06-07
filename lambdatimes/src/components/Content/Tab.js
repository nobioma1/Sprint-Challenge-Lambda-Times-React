import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const TabContainer = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  color: ${props => (props.active ? '#333' : '#fff')};
  background-color: ${props => (props.active ? '#fff' : '#333')};
  margin: 0 5px;
  padding: 2px 10px;
  font-size: 12px;
  letter-spacing: 2px;
  cursor: pointer;
  font-weight: bold;
  border: ${props => (props.active ? '2px solid #333' : 'initial')};

  &:hover {
    text-decoration: underline;
  }
`;

const Tab = props => {
  const { tab, selectedTab, selectTabHandler } = props;

  return (
    <TabContainer
      active={selectedTab === tab}
      onClick={() => selectTabHandler(tab)}
    >
      {tab.toUpperCase()}
    </TabContainer>
  );
};

Tab.propTypes = {
  tab: PropTypes.string.isRequired,
  selectedTab: PropTypes.string.isRequired,
  selectTabHandler: PropTypes.func.isRequired
};

export default Tab;
