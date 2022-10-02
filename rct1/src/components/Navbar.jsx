import React from 'react';
import styles from './Navbar.module.css'


const Navbar = () => {
  return (
    <>
     
        <div id={styles.top}>Free shipping over $89, or shop online and pick up select orders at a Nordstrom Rack or Nordstrom store. Learn More</div>
        <div id={styles.nav}>
        <img src="https://n.nordstrommedia.com/alias/nordstrom-rack-logo.svg" alt="" />
        <input id={styles.input} type="text" placeholder='Search for the products or brand'/>
        <div id={styles.signin}>
            <div id={styles.singindrop}>
            <h3 id={styles.drop}>signin</h3>
            <div id={styles.dropcontent}>
                <p>Purchases</p>
                <p>Wish List</p>
                <p>The Nordy Club Rewards</p>
                <p>Shipping Addresses</p>
                <p>Payment Methods</p>
                <p>Pay & Manage Nordstrom Card</p>
                <p>Store Locator</p>
                
            </div>

            </div>
            <span class="material-symbols-outlined">local_mall</span>
            
        </div>
        </div>
        <hr id={styles.hr}/>
        
    </>
  )
}

export default Navbar