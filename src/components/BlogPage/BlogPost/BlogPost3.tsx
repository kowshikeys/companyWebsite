// Blog Post - 3 "GOING CLEAN"

import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { useMediaQuery } from 'usehooks-ts';

import Response from '../../Response';
import BlogPostHeader from './Header/BlogPostHeader';
import BlogPostFooter from './Footer/BlogPostFooter';
import './Style/BlogPost.scss';
      

const BlogPost3 = () => {
    const isTab = useMediaQuery("(max-width:768px)");

    return (
        <div>
            {!isTab ? (
                <>
                <div className="BlogPost-wrapper">
                    {/* ======= Nav Bar ========= */}
                    <BlogPostHeader />

                    {/* =========================== BLOG PAGE =========================== */}
                    <motion.div
                        className="BlogPostContent"
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0, transition: { delay: 1, duration: 2 } }}
                    >
                        <div className="title">
                            <h2>Going Clean</h2>
                        </div>
                        {/* === From where the static page starts === */}
                        <div className="static-page">
                            <div className="topic-name"></div>
                            <div className="scrolled-content">
                                <div className='content'>
                                    <div className='paragraphs'>
                                        <div className="paragraph" topic-id="introduction">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore odio quo iste asperiores, sequi, tempora id dolorem aliquid, omnis veritatis eum ipsum. Voluptas deserunt repellendus tenetur voluptate corrupti magnam earum. Aut, voluptatibus adipisci quidem provident odio eum mollitia, repellendus sequi molestiae ut fugit? Perferendis quidem, dolor at odit soluta cupiditate accusantium, quos maxime corrupti dolorem maiores quod impedit harum sint. Ratione cumque dolorum, doloribus impedit quae perspiciatis sapiente maiores ipsam ex, doloremque placeat nam consectetur nemo, corrupti nulla repudiandae excepturi quisquam architecto iste fugiat. Id aperiam doloribus dignissimos quo itaque nobis vel fuga ad optio provident! Atque eum odit iure!
                                        </div>
                                        <div className="paragraph" topic-id="cause-root">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore fugit molestias sed adipisci. Ratione modi possimus ipsam quam quae cumque deleniti asperiores necessitatibus in hic harum et qui laudantium dolorem vitae, iure velit. Obcaecati excepturi quos exercitationem eveniet ut est, nisi harum reiciendis fugit ex, tenetur facere magni similique illo deserunt! Repellendus aspernatur quasi veritatis fuga, est maxime porro. Magnam alias culpa commodi, fuga consequuntur rem molestiae deserunt obcaecati quae exercitationem vero illum quod maxime cum, dolorem a reprehenderit tempore.
                                        </div>
                                        <div className="paragraph" topic-id="production">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus sint nemo provident quam eum laboriosam recusandae a officia, magni qui, et reiciendis cumque fugiat necessitatibus, libero nulla itaque perferendis cum tempora harum rerum debitis corrupti nesciunt. Sed aliquam amet sint molestias dolorum beatae id, harum, expedita quidem inventore voluptatibus. At voluptatibus cum repellat nam soluta harum, dignissimos ea fugit obcaecati, saepe id tempore nisi? Ipsum nemo quo minus voluptatum eaque magni facere fugit placeat iste ipsam. Ducimus amet ipsa maiores. Hic, magni assumenda cupiditate ab modi consequuntur, voluptate harum incidunt minima ipsam deserunt at officia vitae officiis ex consectetur porro? Corporis nisi recusandae repellat labore aperiam, cum assumenda porro eaque iste quia explicabo iure fugiat provident fuga sed at laborum!
                                        </div>
                                        <div className="paragraph" topic-id="conclusion">
                                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt ab ullam eligendi odit quas reprehenderit ipsam aliquid molestiae ratione beatae recusandae nam, impedit, alias totam neque, sit nemo cum nulla maiores quis saepe at? Possimus nostrum quibusdam reprehenderit fugit modi, provident obcaecati harum, temporibus non vel saepe illo asperiores. Itaque?
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
                {/* ======== Footer ========= */}
                <BlogPostFooter />
                </>
            ) : (
                <Response />
            )}
        </div>
    )
};

export default BlogPost3;