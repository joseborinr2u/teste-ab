import styles from './myButton.module.css'

function myRipple(event) {
    const button = event.currentTarget

    const circle = document.createElement('span')
    const diameter = 196
    const radius = diameter/2

    circle.style.width = circle.style.height = `${diameter}px`
    circle.style.left = `${event.clientX - (button.offsetLeft + radius)}px`
    circle.style.top = `${event.clientY - (button.offsetTop + radius)}px`
    circle.classList.add(styles.ripple)

    document.querySelector(`.${styles.ripple}`)?.remove()

    button.appendChild(circle)
}

export default function MyButton() {
    return (
        <div onClick={(event) => myRipple(event)} className={styles.myButton}>
            CLIQUE AQUI!
        </div>
    )
}