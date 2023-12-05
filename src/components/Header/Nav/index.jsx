import styles from './style.module.scss';
import { motion } from 'framer-motion';
import { links, footerLinks } from './data';
import { perspective, slideIn } from "./anim";
import Image from 'next/image';

export default function index() {
    const logoUrl = 'https://res.cloudinary.com/di1v23yy0/image/upload/v1701126580/goodlife_btcayy.jpg';
  return (
    <div className={styles.nav}>
        <div className={styles.logoContainer}>
        <Image src={logoUrl} alt="Logo" className="rounded-full" width={70} height={60} />
      </div>

       <div className={styles.body}>
        {
            links.map( (link, i) => {
                const { title, href } = link;
                return (
                    <div key={`b_${i}`} className={styles.linkContainer}>
                        <motion.div
                          href={href}
                          custom={i}
                          variants={perspective}
                          initial="initial"
                          animate="enter"
                          exit="exit"
                        >
                            <a>
                                {title}
                            </a>
                        </motion.div>
                    </div>
                )
            })
        }
       </div>
       <motion.div className={styles.footer}>
            {
                footerLinks.map( (link, i) => {
                    const { title, href } = link;
                    return (
                        <motion.a 
                            variants={slideIn}
                            custom={i} 
                            initial="initial"
                            animate="enter"
                            exit="exit"
                            key={`f_${i}`}
                        >
                            {title}
                        </motion.a>
                    )
                })
            }
       </motion.div>
    </div>
  )
}
