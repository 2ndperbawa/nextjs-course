import { Fragment } from "react";
import { getFeaturedPosts } from "../lib/posts-util";
import Hero from '../components/home-page/hero';
import FeaturedPosts from '../components/home-page/featured-posts';
import Head from 'next/head';

function HomePage(props) {


    return  <Fragment>
                <Head>
                    <title> Riefky&apos;s Blog</title>
                    <meta name="description" content="I post about programming and web development." />
                </Head>
                <Hero /> 
                <FeaturedPosts posts={props.posts} /> 
            </Fragment>;
}


export function getStaticProps() {
    const featuredPosts = getFeaturedPosts();
    

    return {
        props: {
            posts: featuredPosts
        },
        
    }
}

export default HomePage;


// 1) Hero => present ourselves
// 2) Featured Posts
//