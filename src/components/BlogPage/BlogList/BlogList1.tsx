// BlogList 1 : "THE MONEY SPEECH"

import {AiOutlineUser} from "react-icons/ai";
import {LiaTagSolid} from "react-icons/lia";
import "../Blog.scss";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Post1() {
    // ============================ REDIRECT TO Top(0, 0) ============================
    const scrollToTop = () => {
        window.scrollTo(0, 0)
    }
    return (
        <>
        <motion.div
        className="post"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0, transition: { delay: 1, duration: 2 } }}
        >
            <Link to='/blog/the-money-speech' onClick={scrollToTop} className="link">
                <div className="title">
                <h3>the money speech</h3>
                </div>
            </Link>
            <p className="summary">Overhearing someone say that money is the root of all evil, he lets them have it. “So you think that money is the root of all evil?” said Francisco d’Anconia. “Have you ever asked what is the root of money?” Money is a tool of exchange, which can’t exist unless there are goods produced and men able to produce them. Money is the material shape of the principle that men who wish to deal with one another must deal by trade and give value for value.</p>
            <div className="info">
            <p className="author"><AiOutlineUser className="info-icon"/>  Fredrik Parker</p>
            <p><LiaTagSolid className="info-icon"/>  Finance</p>
            </div>
        </motion.div>
      </>
    )
};