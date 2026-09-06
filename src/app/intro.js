import styles from "./page.module.css";
import Image from "next/image"
//const desc = "Started the journey since 2020 with JavaScript as my first language (and my favorite one)          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
const desc = "Di Mata Kuliah Pemrograman Perangkat Bergerak ini, \
saya berencana mengembangkan aplikasi mobile untuk track aktivitas Gym yang bisa melihat \
jadwal, progress, aktivitas, dan pengajuan sertifikat penghargaan."
const interests = [
    "Data Science",
    "Robotics", 
    "Web Development",
    "Software Development",
    "AI",
    "etc"
    ];
let interestsButton = interests.map((interest, index) => {
    return (
        <button key={index}>
            {interest}
        </button>
    )
})

export default function Intro() {
    return (
        <>
        <div className={`${styles.intro} ${styles.main}`} white-space="pre-line">
            <div className={styles.overview}>
                <h1>
                    Hi, I'm Fauzan Hasyim
                </h1>
                <p>
                Software Engineering Student at Institut Teknologi Sepuluh Nopember
                </p>
            <div className={styles.description}>
                <p>
                    NRP: 5053251044 <br/>
                    Asal: Surabaya <br/>
                    Email: fauzan[dot].hasyim[at]gmail[dot]com <br/>
                    Kelebihan: Senang belajar hal baru <br/>
                    Kekurangan: Cepat bosan<br/>
                    Asal Sekolah: SMA Muhammadiyah 2 Surabaya <br/> <br/>
                </p>
                <p>
                    {desc}
                </p>

                <p>
                    
                </p>
                
        </div>
        <div className={styles.social}>
            <a href="https://github.com/Fauzanium">
                <Image src="./github.svg" width={36} height={36}/>             
            </a>
            
            <a href="https://instagram.com/fauzanium_"><Image src="./instagram.svg" width={40} height={40} href=""/></a>
        </div>
        <div className={styles.interest}>
            <h3>My Interest</h3>
            <div>
                {interestsButton}
            </div>
        </div>
        
      </div>
      <div className={styles.fotowrapper}>
        <img src="/saya.jpg" className={styles.foto}></img>
      </div>
    </div>
    
    </>
    )
}
