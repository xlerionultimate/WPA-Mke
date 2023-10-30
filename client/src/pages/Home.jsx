import { motion, AnimatePresence } from 'framer-motion';
import { useSnapshot } from 'valtio';
import { CustomButton } from '../components';
import state from '../store';

import { headContainerAnimation, headContentAnimation, headTextAnimation, slideAnimation } from '../config/motion';

const Home = () => {
    const snap = useSnapshot(state);

    return (
        <AnimatePresence>
            {snap.intro && (
                <motion.section className="home" {...slideAnimation('right')}>
                    <motion.header {...slideAnimation("down")}>
                        <img
                            src='./threejs.png'
                            alt="logo"
                            className="w-8 h-8 object-contain"
                        />
                    </motion.header>
                    <motion.div className="home-content" {...headContainerAnimation}>
                        <motion.div {...headTextAnimation}>
                            <h1 className="head-text">
                                Mike <br className="xl:block hidden" /> Hellawaits
                            </h1>
                        </motion.div>
                        <motion.div
                            {...headContainerAnimation}
                            className="flex flex-col gap-5"
                        >
                            <p className="max-w-md font-normal text-gray-600 text-base">
                                Hello and welcome to my <strong>interactive portfolio,</strong>{" "} I hope you enjoy this site where I put my works and projects that I have done over the last 15 years, also my studies, but mostly I have been empirical since I really like to learn and apply it in my daily life and jobs.
                            </p>

                            <CustomButton
                                type="filled"
                                title="Customize it"
                                handleClick={() => state.intro = false}
                                customStyles="w-fit px-4 py-2.5 font-bold text-small"
                            />
                        </motion.div>
                        <div id="info">Description</div>
                    </motion.div>
                </motion.section>
            )}
        </AnimatePresence>
    )
}

export default Home