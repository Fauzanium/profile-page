import styles from './page.module.css';
import Image from 'next/image'

class Gallery {
    constructor({image_link = undefined, title = "Untitled", desc = "Untitled"}) {
        this.image_link = image_link;
        this.title = title;
        this.desc = desc;
    }
}

const Galleries = [
    new Gallery({
        title: "Calculator in HTML",
        desc: `Calculator in HTML with a twist in it
        GitHub Link: https://github.com/Fauzanium/Kalkulator `,
        image_link: "/kalku.png"
    }),
    new Gallery({
        title: "HUD Mod for Minecraft",
        image_link: "/hudmod.jpeg",
        desc: "HUD Mod for Minecraft to track the kill count using kotlin"
    }),
    new Gallery({
        title: "And Other",
        desc: ""
    }),
    // new Gallery({title: "Halo"}),
];
export default function GalleryBox() {
    return Galleries.map(val => {
        return (
        <div className={styles.gallerybox}>
            {/* <a>{val.title}</a> */}
            {/* <img src="/saya.jpg" className={styles.fotogallery}></img> */}
            {val.image_link ? <img src={val.image_link} className={styles.fotogallery}></img> : <div className={styles.fotogallery}/>  }
            <a className={styles.gallerytitle}>{val.title}</a>
            <p className={styles.gallerydesc}>{val.desc}</p>

        </div>
    )
    })


}
