import React from "react";
import PropTypes from "prop-types";
import styles from "./TransactionHistory.module.css";
import styled from "styled-components";

function TransactionHistory({ items }) {
  return (
    <table className={styles.transactionHistory}>
      <thead className={styles.list}>
        <tr>
          <th className={styles.listItem}>Type</th>
          <th className={styles.listItem}>Amount</th>
          <th className={styles.listItem}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map((item) => (
          <tr key={item.id}>
            <td className={styles.bodyItem}>{item.type}</td>
            <td className={styles.bodyItem}>{item.amount}</td>
            <td className={styles.bodyItem}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
TransactionHistory.propTypes = {
  items: PropTypes.array.isRequired,
};

export default TransactionHistory;
