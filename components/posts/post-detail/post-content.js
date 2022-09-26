import PostHeader from "./post-header";
import  ReactMarkdown  from "React-markdown";
import Image from "next/image";
import {PrismLight as SyntaxHighlighter} from 'react-syntax-highlighter';
import  atomDark  from "react-syntax-highlighter/dist/cjs/styles/prism/atom-dark";
import js from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript';
import css from 'react-syntax-highlighter/dist/cjs/languages/prism/css';


SyntaxHighlighter.registerLanguage('js', js);
SyntaxHighlighter.registerLanguage('css', css);

function PostContent(props) {
    // const {post} = props;

    // const imagePath = `/images/posts/${post.slug}/${post.image}`;

    // const customRenderers = {
    //     // img: (image) => {
    //     //     return <Image src={`${image.src}`} alt={image.alt} width={600} height={300} />
    //     // },
    //     // p:(paragraph) => {
    //     //     const {node} = paragraph;

    //     //     if(node.children[0].type === 'image') {
    //     //         const image = node.children[0];

    //     //         return (<div className={classes.image}>
    //     //             <Image src={`/images/posts/${post.slug}/${image.url}`} alt={image.alt} width={600} height={300} />
    //     //         </div>);
    //     //     }
    //     //     return <p>{paragraph.children}</p>
    //     // },
    //     code: (code) => {
    //         const {className, children} = code;
    //         // console.log('print code');
    //         // console.log(code)
    //         return <SyntaxHighlighter 
    //                         style={atomDark}
    //                         language={className} 
    //                 >
    //                     {children}
    //                 </SyntaxHighlighter>
    //     }
        
    // };

    // return <article>
    //             <PostHeader title={post.title} image={imagePath} />
    //             <ReactMarkdown components={customRenderers}>{post.content}</ReactMarkdown>
    //         </article>
}

export default PostContent;