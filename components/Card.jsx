
import { motion } from "motion/react"
import { contain } from "three/src/extras/TextureUtils.js"

const Card = ({style, text, image, containerRef}) => {
  return image && !text ?(
    <motion.img src={image} alt="card-image" 
        className="absolute w-15 cursor-grab"
        style={style}
        whileHover={{scale: 1.05}}
        drag
        dragConstraints={containerRef}
        dragElastic={2}
    />
  ) : (
    <motion.div 
        className="absolute px1 py-4 text-xl text-center rounded-full ring ring-gray-700 
            font-extralight bg-storm w-[12rem] cursor-grab"
        style={style}
        whileHover={{scale: 1.05}}
        drag
        dragConstraints={containerRef}
        dragElastic={2}
    >
        {text}
    </motion.div>
  )
}

export default Card