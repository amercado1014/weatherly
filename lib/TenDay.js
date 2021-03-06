import React from 'react';
import Card from './Card';
import PropTypes from 'prop-types';
import '../styles/TenDay.css';

const TenDay = ({ tenDayData }) => {
  return (
    <div className="Ten-day">
      <div className="day-rows">
      {
        tenDayData.map((day, index) => {
          return <Card key={index} day={day} />;
        })
      }
      </div>
    </div>
  );
};

TenDay.propTypes = {
  tenDayData: PropTypes.array
};

export default TenDay;