import React from 'react'
import classes from "./footer.module.css"
import watch from "../../img/watch.png"
import near_me from "../../img/near_me.png"
import call from "../../img/call.png"

function Footer() {
    return (
        <footer className={classes.footer}>
            <div className={classes.info_footer_restoran}>
                <ul>
                    <li>
                        <img src={watch} alt="icon"/>
                            <p>Today 10:00 am - 7:00 pm</p>
                            <p className={classes.text_info}>Working hours</p>
                    </li>
                    <li>
                        <img src={near_me} alt="icon"/>
                            <p>Velyka Vasylkivska 100</p>
                            <p className={classes.text_info}>Get Directions</p>
                    </li>
                    <li>
                        <img src={call} alt="icon"/>
                            <p>+38 (063)833 24 15</p>
                            <p className={classes.text_info}>Call Online</p>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer