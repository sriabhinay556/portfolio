import React from 'react'
import dva from "@/public/icons/dva.png"
import Link from 'next/link'
import Image from 'next/image'
import { motion } from "framer-motion"

export default function AWS_DVA() {

const fadeInAnimationVariants = {
  initial: {
      opacity: 0,
      y: 100,
  },

  animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
          delay: 0.05 * index,
      },
  }),
}
    return (
      <>
        <motion.li
          className="flex flex-row justify-end items-center text-center"
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
        >
          <Image alt="AWS Developer Associate" src={dva} width={60} height={60} className="pr-2
                    transition-transform duration-200 hover:scale-125" ></Image>
                    <Link href="https://www.credly.com/badges/6f452292-fc21-4f4c-b472-30ce05321b8e/linked_in_profile" target="_blank">
                        <h3 className="text-sm font-semibold hover:text-[#867f7a] hover:duration-[0.4s]">AWS Certified Developer Associate</h3>
                    </Link>
        </motion.li>
        
      </>
    )
  }

