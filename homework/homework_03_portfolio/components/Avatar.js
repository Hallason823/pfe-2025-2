import styles from "@/app/page.module.css"

export default function Avatar({src, alt = '', size = 400}) {
    return (
        <img className={styles.avatar} src={src} alt={alt} style={{ width: size, height: size }}/>
    );
}