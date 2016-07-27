import React, { PropTypes } from 'react';
import Cog from './Cog';
import styles from '../styles/Bike.scss';

const Bike = (props) => {
  const chainRingStyle = {animationDuration: `${60 / props.cadence}s`};
  const sprocketStyle = {animationDuration: `${60 / (props.ratio * props.cadence)}s`}
  return (
    <div className={styles.bikeContainer}>
      <svg
        version="1.1"
        viewBox="0 0 100 100"
        width="700px"
        className={styles.wheel}
        style={sprocketStyle}>
        <path d="M50,5.2C25.258,5.2,5.2,25.258,5.2,50S25.258,94.8,50,94.8S94.8,74.742,94.8,50S74.742,5.2,50,5.2z M80.441,80.441  c-3.955,3.953-8.559,7.059-13.685,9.227C61.45,91.912,55.812,93.05,50,93.05s-11.45-1.138-16.757-3.382  c-5.126-2.168-9.729-5.273-13.685-9.227c-3.954-3.955-7.058-8.559-9.227-13.685C8.088,61.45,6.95,55.812,6.95,50  s1.138-11.45,3.382-16.757c2.169-5.126,5.272-9.73,9.227-13.684c3.955-3.954,8.559-7.059,13.685-9.227  C38.55,8.088,44.188,6.95,50,6.95s11.45,1.138,16.757,3.382c5.126,2.168,9.729,5.272,13.685,9.227  c3.954,3.954,7.058,8.558,9.227,13.684C91.912,38.55,93.05,44.188,93.05,50s-1.138,11.45-3.382,16.757  C87.499,71.883,84.396,76.486,80.441,80.441z"/><path d="M50,15.525C30.96,15.525,15.525,30.96,15.525,50S30.96,84.475,50,84.475S84.475,69.04,84.475,50S69.04,15.525,50,15.525z   M56.696,51.826c0.084-0.309,0.147-0.627,0.188-0.951h25.828c-0.097,3.739-0.819,7.376-2.148,10.838L56.696,51.826z M19.436,61.713  c-1.329-3.462-2.052-7.099-2.148-10.838h25.828c0.041,0.324,0.104,0.643,0.188,0.951L19.436,61.713z M43.304,48.174  c-0.084,0.309-0.147,0.627-0.188,0.951H17.287c0.097-3.739,0.819-7.376,2.148-10.838L43.304,48.174z M50,55.191  c-2.867,0-5.191-2.324-5.191-5.191s2.324-5.191,5.191-5.191s5.191,2.324,5.191,5.191S52.867,55.191,50,55.191z M54.247,44.516  c-0.255-0.198-0.523-0.378-0.805-0.54l9.888-23.871c3.395,1.515,6.478,3.578,9.183,6.145L54.247,44.516z M51.826,43.304  c-0.309-0.084-0.627-0.147-0.951-0.188V17.287c3.739,0.097,7.376,0.819,10.838,2.148L51.826,43.304z M49.125,43.115  c-0.324,0.041-0.643,0.104-0.951,0.188l-9.887-23.868c3.462-1.329,7.099-2.051,10.838-2.148V43.115z M46.558,43.976  c-0.281,0.162-0.55,0.342-0.805,0.54L27.487,26.25c2.705-2.568,5.788-4.63,9.183-6.145L46.558,43.976z M45.753,55.484  c0.255,0.198,0.523,0.379,0.805,0.54l-9.888,23.87c-3.395-1.514-6.478-3.577-9.183-6.145L45.753,55.484z M48.174,56.696  c0.309,0.084,0.627,0.147,0.951,0.188v25.828c-3.739-0.097-7.376-0.819-10.838-2.148L48.174,56.696z M50.875,56.885  c0.324-0.041,0.643-0.104,0.951-0.188l9.887,23.868c-3.462,1.329-7.099,2.052-10.838,2.148V56.885z M53.442,56.024  c0.281-0.162,0.55-0.342,0.805-0.54L72.513,73.75c-2.706,2.567-5.788,4.631-9.183,6.145L53.442,56.024z M56.885,49.125  c-0.041-0.324-0.104-0.643-0.188-0.951l23.868-9.887c1.329,3.462,2.052,7.099,2.148,10.838H56.885z M56.024,46.558  c-0.162-0.281-0.342-0.55-0.54-0.805L73.75,27.487c2.567,2.705,4.631,5.788,6.145,9.183L56.024,46.558z M26.25,27.487l18.266,18.266  c-0.198,0.255-0.378,0.523-0.54,0.805l-23.87-9.888C21.62,33.275,23.683,30.192,26.25,27.487z M20.105,63.33l23.87-9.888  c0.162,0.281,0.342,0.55,0.54,0.805L26.25,72.513C23.683,69.807,21.619,66.725,20.105,63.33z M73.75,72.513L55.484,54.247  c0.198-0.255,0.378-0.523,0.54-0.805l23.87,9.888C78.381,66.725,76.317,69.808,73.75,72.513z"/><path d="M50,8.992C27.352,8.992,8.992,27.352,8.992,50c0,22.648,18.359,41.008,41.008,41.008S91.008,72.648,91.008,50  C91.008,27.352,72.648,8.992,50,8.992z M77.76,77.76c-3.606,3.605-7.805,6.438-12.479,8.414c-4.839,2.047-9.979,3.084-15.28,3.084  s-10.441-1.037-15.28-3.084c-4.675-1.977-8.873-4.809-12.479-8.414c-3.606-3.606-6.437-7.805-8.414-12.479  c-2.047-4.839-3.084-9.979-3.084-15.28s1.037-10.441,3.084-15.28c1.978-4.675,4.808-8.874,8.414-12.479s7.805-6.437,12.479-8.414  c4.839-2.047,9.979-3.084,15.28-3.084s10.441,1.038,15.28,3.084c4.675,1.977,8.873,4.808,12.479,8.414  c3.605,3.606,6.437,7.805,8.414,12.479c2.047,4.839,3.084,9.979,3.084,15.28s-1.037,10.441-3.084,15.28  C84.196,69.955,81.365,74.153,77.76,77.76z"/><path d="M50,46.51c-1.925,0-3.49,1.565-3.49,3.49s1.565,3.49,3.49,3.49s3.49-1.565,3.49-3.49S51.925,46.51,50,46.51z M50,51.74  c-0.961,0-1.74-0.779-1.74-1.74s0.779-1.74,1.74-1.74s1.74,0.779,1.74,1.74S50.961,51.74,50,51.74z"/>
      </svg>
      <Cog
        teeth={props.cassette}
        size={90}
        d2={0.85}
        className={styles.sprocket}
        style={sprocketStyle}/>
      <Cog
        teeth={props.chainRings}
        size={200}
        className={styles.chainRing}
        style={chainRingStyle}/>
    </div>
  );
};

Bike.propTypes = {
  cadence: PropTypes.number,
  cassette: PropTypes.number,
  chainRings: PropTypes.number,
  ratio: PropTypes.number,
};

export default Bike;
