import style from './style.module.scss'
import '../../app/styles/globals.scss'
import Image from "next/image";

type AvatarProps = {
    avatarLink: string,
    name: string,
    role: string
}

export function Avatar(props: AvatarProps) {
    return (
        <div className={` ${style.teamCard} `}>
            <Image
                width={144} height={144}
                src={props.avatarLink}
                alt=''
                className={` ${style.profilePic}`}
            />
            <h3 className={`heading`}>{props.name}</h3>
            <p className={`paragraph14`}>{props.role}</p>
        </div>
    )
}