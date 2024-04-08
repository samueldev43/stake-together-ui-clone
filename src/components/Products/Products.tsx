import Image from 'next/image'
import style from './style.module.scss'
import { ButtonLink } from '../ButtonLink/ButtonLink'

type ProductsCardProps = {
    img: string,
    title?: string,
    paragraph: string,
    isLinkActive?: boolean
    isProduct: boolean,
    isCta?: boolean
}

export function ProductsCard(props: ProductsCardProps) {
    if (props.isCta) {
        return (
            <div className={` ${style.divBlock} ${style.divBlockCta} `}>
                <Image width={88} height={88} alt='' src={props.img} />
                <h3 className={` ${style.titleProducts} `}>{props.title}</h3>
                <p className={` ${props.isProduct ? style.paragraphProducts : 'paragraph14'} `}>{props.paragraph}</p>
                <ButtonLink type={'w-button'} text={'Investir Agora'} />
            </div>
        )
    } else {
        return (
            <div className={` ${style.divBlock} ${style.divBlockProducts}  `}>
                <Image width={88} height={88} alt='' src={props.img} />
                <h3 className={` ${style.titleProducts} `}>{props.title}</h3>
                <p className={` ${props.isProduct ? style.paragraphProducts : 'paragraph14'} `}>{props.paragraph}</p>

                {
                    props.isProduct ?
                        props.isLinkActive ?
                            <a href="#" className={` ${style.button} ${style.buttonActive} `}>Investir Agora</a>
                            : <a href="#" className={` ${style.button} ${style.buttonDisabled} `} style={{pointerEvents: 'none'}}>Em Breve</a> : ''
                }
            </div>
        )
    }
}