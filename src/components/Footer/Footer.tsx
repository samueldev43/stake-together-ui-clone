import Image from 'next/image'
import style from './style.module.scss'

export function Footer() {
    return (
        <footer className={` ${style.sectionFooter} `}>
         <div className={` ${style.containerFooterContent} `}>
            <div className={` ${style.divBlock1} `}>
                <div className={` ${style.footerBlock} `}>
                    <a href="#" target='_blank' className={` ${style.footerText} `}>
                        <img src="/images/twitter_icon.svg" alt="Twitter" />
                        Twitter
                    </a>
                    <a href="#" target='_blank' className={` ${style.footerText} `}>
                        <img src="/images/discord_icon.svg" alt="Discord" />
                        Discord
                    </a>
                    <a href="#" target='_blank' className={` ${style.footerText} `}>
                        <img src="/images/linkedin_icon.svg" alt="Linkedin" />
                        Linkedin
                    </a>
                    <a href="#" target='_blank' className={` ${style.footerText} `}>
                        <img src="/images/github_icon.svg" alt="Github" />
                        Github
                    </a>
                </div>
                <Image width={240} height={80} alt='Stake Together' src={"/network/stake-together-letra-branca.svg"}/>
            </div>
            <div className={` ${style.divBlock2} `}>
                <div className={` ${style.footerBlock}`}>
                    <a href="#" target='_blank' className={` ${style.footerText} `}>Documentação</a>
                    <a href="#" target='_blank' className={` ${style.footerText} `}>Termos de Uso</a>
                    <a href="#" target='_blank' className={` ${style.footerText} `}>Politica de Privacidade</a>
                    <a href="#" target='_blank' className={` ${style.footerText} `}>Ativos da Marca</a>
                </div>
                <span className={` ${style.textRights} `}>© 2024 Stake Together. All rights reserved.</span>
            </div>
         </div>
        </footer>
    )
}