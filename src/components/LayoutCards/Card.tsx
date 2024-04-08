import style from './style.module.scss'

type cardProps = {
    className?: string
    children:React.ReactNode;
}

export function LayoutCard (props: cardProps) {
    return (
        <div className={` ${style.divBlockCard} ${props.className}`}>
            {props.children}
        </div>
    )
}