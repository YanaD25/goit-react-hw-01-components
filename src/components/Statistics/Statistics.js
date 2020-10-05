import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

function Statistics({title, stats}) {
    return (
  <section className ={styles.statistics}>
  <h2 className ={styles.title}>Upload stats</h2>

  <ul className ={styles.statlist}>
      {stats.map(stat => (
        <li className={styles.item} key ={stat.id}>
          <span className= {styles.label}>{stat.label}</span>
          <span className= {styles.percentage}>{stat.percentage}%</span>
        </li>
      ))}
  </ul>
</section>
    )
}
// Statistics.propTypes = {
//     stats: PropTypes.arrayOf(
//       PropTypes.exact({
//         title: PropTypes.string,
//         id: PropTypes.string.isRequired,
//         label: PropTypes.string.isRequired,
//         percentage: PropTypes.number.isRequired,
//       }),
//     ).isRequired,
//   };
Statistics.propTypes = {
  title: PropTypes.string,
  label: PropTypes.string,
  percentage: PropTypes.number,
};
export default Statistics;