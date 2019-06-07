import React from 'react';
import PropTypes from 'prop-types';

const Tab = props => {
  const { tab, selectedTab, selectTabHandler } = props;
  const active = selectedTab === tab ? 'tab active-tab' : null;
  
  return (
    <div className={active} onClick={() => selectTabHandler(tab)}>
      {tab.toUpperCase()}
    </div>
  );
};

Tab.propTypes = {
  tab: PropTypes.string.isRequired,
  selectedTab: PropTypes.string.isRequired,
  selectTabHandler: PropTypes.func.isRequired
};

export default Tab;
