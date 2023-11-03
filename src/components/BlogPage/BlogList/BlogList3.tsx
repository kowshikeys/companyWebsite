// BlogList 3 : "GOING CLEAN"

import {AiOutlineUser} from "react-icons/ai";
import {LiaTagSolid} from "react-icons/lia";
import "../Blog.scss";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Post3() {
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
            <Link to='/blog/going-clean' onClick={scrollToTop} className="link">
                <div className="title">
                <h3>Going Clean</h3>
                </div>
            </Link>
            <p className="summary">Upon multiple requests, I have decided to share a part of what I eat in this blog almost everyday. The following link will contain pictures of meals / preps. I will try to include videos of meal prep once we reach a certain momentum. I quit sugar almost 7 years ago (struggled for a year)</p>
            <div className="info">
            <p className="author"><AiOutlineUser className="info-icon"/>  Fredrik Parker</p>
            <p><LiaTagSolid className="info-icon"/>  Health</p>
            </div>
        </motion.div>
      </>
    )
};