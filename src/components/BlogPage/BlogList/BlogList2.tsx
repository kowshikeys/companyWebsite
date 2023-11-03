// BlogList 2 : "HELP YOURSELF"

import {AiOutlineUser} from "react-icons/ai";
import {LiaTagSolid} from "react-icons/lia";
import "../Blog.scss";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Post2() {
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
            <Link to='/blog/help-yourself' onClick={scrollToTop} className="link">
                <div className="title">
                <h3>Help Yourself</h3>
                </div>
            </Link>
            <p className="summary">ActionDash (Screen time app for Phone) Screen Timer (Track/Limit Screentime) Block Site (Block websotes/keywords) Remove YT recommendations(Unhook) Remove News Feed(OmniChannel) Remove YT ShortsRemove Reels(Facebook, Instagram) Remove WhatsApp Web StatusBlur WA Messages.</p>
            <div className="info">
            <p className="author"><AiOutlineUser className="info-icon"/>  Fredrik Parker</p>
            <p><LiaTagSolid className="info-icon"/>  Productivity</p>
            </div>
        </motion.div>
      </>
    )
};