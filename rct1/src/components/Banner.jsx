import React from 'react'
import styles from './Banner.module.css'

const Banner = () => {
  return (
    <div id={styles.head}>
        <h1>More to Rack, easier and faster.</h1>
        <div id={styles.btn}>Sign In or Create an Account</div>
        <div id={styles.img}>
           <img src="https://n.nordstrommedia.com/id/a5e260e1-2db5-4ba6-8061-fef839a85b85.jpeg?h=720&w=1608" alt="" />
           <p >
Designer accessories and handbags.
Designer watches and sunglasses up to 70% off. Plus, up to 50% off the season's best bags.</p>
        </div>
    </div>
  )
}

export default Banner;