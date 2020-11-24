import styles from './info.module.css'

export default function Info (props){

    const{number,title}=props
    const getNumberDisplay = number => {
        if (number > 999) {
            return (number / 1000).toString() + "K"
        }
    
        return number.toString();
    }
    
    return (

        <div className={styles.info}>

            <p className={styles.number}>{getNumberDisplay(number)}</p>
            <p>{title}</p>

        </div>

    )
}