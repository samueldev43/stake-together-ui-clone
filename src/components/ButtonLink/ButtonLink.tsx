import style from './style.module.scss'

type buttonProps = {
    type: string,
    text: string
}

export function ButtonLink(props: buttonProps) {
    return (
        <a href="#" 
           className={`${style.button} ${props.type == 'w-link' ? style.wLink : style.wButton}`}
           >
            {props.text}
        </a>
    )
}