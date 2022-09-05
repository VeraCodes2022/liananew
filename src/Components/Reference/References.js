import React from 'react';
import styles from './Reference.module.css';

function References() {
  return (
<div className={styles.content}>
    <p className={styles.refer}>Reference</p>
    <div className={styles.tablecontainer}>
        <table className={styles.table}>
                <tbody>
                    <tr>
                        <td className={styles.piccontainer}>
                            <div  className={`${styles.bosch} ${styles.href=""}`}></div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p className={styles.title}>Robert Bosch</p>
                            <p className={styles.main}>Bosch is a multinational engineering and electronics company.</p>
                        </td>
                    </tr>
                </tbody>
        </table>
        <table className={styles.table}>
            <tbody>
                <tr>
                    <td className={`${styles.piccontainer} ${styles.href=""}`}>
                        <div  className={styles.bodyshop}></div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p className={styles.title}>The Body Shop</p>
                        <p className={styles.main}>The Body Shop is a global beauty brand and it has more than 3,000 stores in more than 60 countries.</p>
                    </td>
                </tr>
            </tbody>
        </table>
        <table className={styles.table}>
            <tbody>
                <tr>
                    <td className={styles.piccontainer}>
                        <div  className={`${styles.hotel} ${styles.href=""}`}></div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p className={styles.title}>Lapland Hotels</p>
                        <p className={styles.main}>The Body Shop is a global beauty brand and it has more than 3,000 stores in more than 60 countries.</p>
                    </td>
                </tr>
            </tbody>
        </table>
        
        <table className={styles.table}>
          <tbody>
            <tr>
                <td className={styles.piccontainer}>
                    <div  className={`${styles.ikea} ${styles.href=""}`}></div>
                </td>
            </tr>
            <tr>
                <td>
                    <p className={styles.title}>IKEA</p>
                    <p className={styles.main}>IKEA is multinational furniture store.</p>
                </td>
            </tr>
          </tbody>
        </table>
    </div>
</div>
  )
}

export default References;