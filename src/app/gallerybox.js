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
        image_link: "https://cdn.discordapp.com/attachments/601356253666607115/1464976777267908792/image.png?ex=69776d71&is=69761bf1&hm=9ac0fb8e7a11205cc5c3553978d091366fef5d01cad22028f748e70eb80c0f90&"
    }),
    new Gallery({}),
    new Gallery({}),
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