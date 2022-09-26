import classes from './hero.module.css';
import Image from 'next/image';


function Hero() {
    return <section className={classes.hero}>
        <div className={classes.image}>
            <Image  src="/images/site/riefky.jpg" 
                    alt="An image showing Riefky" 
                    width={300} 
                    height={300} 
            /> 
        </div>
        <h1>
            Hi, I&apos;m Riefky
        </h1>
        <p>
            I blog about web development - especially frontend frameworks like Vue or React.
        </p>
    </section>

}

export default Hero;