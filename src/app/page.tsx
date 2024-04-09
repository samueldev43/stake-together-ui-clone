import Image from "next/image";
import { Header } from "@/components/Header/Header";
import { ButtonLink } from "@/components/ButtonLink/ButtonLink";
import { LayoutCard } from "@/components/LayoutCards/Card";
import { ProductsCard } from "@/components/Products/Products";
import { Avatar } from "@/components/Avatar/Avatar";
import { Footer } from "@/components/Footer/Footer";

import style from './styles/page.module.scss'


export default function Home() {
  return (
    <>
      <Header />
      <section className={style.sectionDefault}>
        <div className={style.containerContent}>
          <div className={` ${style._50_percent} ${style.divBlock25} `}>
            <h1 className={style.titleHero}>Invista em Staking</h1>
            <span className={style.subtitleHero}>Classe de ativos mais seguros e rentáveis do mercado <br />
              cripto com lastro em infraestrutura de tecnologia</span>
            <br /><br />
            <ButtonLink type={"w-button"} text={"Investir Agora"} />
          </div>
          <div className={` ${style._50_percent} ${style.divBlock24}`}>
            <div className={style.cardHero}>
              <Image width={48} height={48} src={"images/multi_produtos.svg"} loading="lazy" alt={""} />
              <h4 className={style.cardTitle}>Multi Produtos</h4>
              <span className={style.textBlock}>Ethereum, Eigen Layer, Polygon, Celestia</span>
            </div>
            <div className={style.cardHero}>
              <Image width={48} height={48} src={"images/multi_network.svg"} loading="lazy" alt={""} />
              <h4 className={style.cardTitle}>Multi Rede</h4>
              <span className={style.textBlock}>Arbitrum, Optimism, Polygon, Ethereum</span>
            </div>
            <div className={style.cardHero}>
              <Image width={48} height={48} src={"images/multi_moeda.svg"} loading="lazy" alt={""} />
              <h4 className={style.cardTitle}>Multi Moeda</h4>
              <span className={style.textBlock}>Real, Dolar, Euro, Ethereum, Bitcoin, USDT</span>
            </div>
            <div className={style.cardHero}>
              <Image width={48} height={48} src={"images/multi_carteira.svg"} loading="lazy" alt={""} />
              <h4 className={style.cardTitle}>Multi Carteira</h4>
              <span className={style.textBlock}>Google, Facebook, Metamask, Wallet Connect</span>
            </div>
          </div>
        </div>
      </section>

      <section className={style.sectionDefault}>
        <div>
          <h2 className={style.titleSection}>Como fazer</h2>
          <div className={` ${style.colContent} ${style._4Col} `}>
            <LayoutCard>
              <h3 className={style.stepNumber}>1</h3>
              <p className={style.paragraph}>Selecione o <br />Produto</p>
            </LayoutCard>

            <LayoutCard>
              <h3 className={style.stepNumber}>2</h3>
              <p className={style.paragraph}>Selecione o Método de Pagamento</p>
            </LayoutCard>

            <LayoutCard>
              <h3 className={style.stepNumber}>3</h3>
              <p className={style.paragraph}>Comprar o Token de Staking</p>
            </LayoutCard>

            <LayoutCard>
              <h3 className={style.stepNumber}>4</h3>
              <p className={style.paragraph}>Receba <br />Recompensas</p>
            </LayoutCard>

          </div>
        </div>
      </section>

      <section className={style.sectionDefault}>
        <div>
          <h2 className={style.titleSection}>Produtos de Staking</h2>
          <div className={` ${style.colContent} ${style.stakingProducts} `}>
            <ProductsCard
              img={"/images/ethereum_products.png"}
              title={"Ethereum"} paragraph={"APY 5.1%"}
              isLinkActive={true} isProduct={true} />
            <ProductsCard
              img={"/images/eigen_layer_products.png"}
              title={"Eigen Layer"} paragraph={"APY 11.1%"}
              isLinkActive={false} isProduct={true} />
            <ProductsCard
              img={"/images/polygon_products.png"}
              title={"Polygon"} paragraph={"5.24%"}
              isLinkActive={false} isProduct={true} />
            <ProductsCard
              img={"/images/solana_products.png"}
              title={"Solana"} paragraph={"7.6%"}
              isLinkActive={false} isProduct={true} />
            <ProductsCard
              img={"/images/celestia_products.png"}
              title={"Celestia"} paragraph={"14.5%"}
              isLinkActive={false} isProduct={true} />
            <ProductsCard
              img={"/images/polkadot_products.png"}
              title={"Polkadot"} paragraph={"5.1%"}
              isLinkActive={false} isProduct={true} />
            <ProductsCard
              img={"/images/cosmo_products.png"}
              title={"Cosmos"} paragraph={"13.8%"}
              isLinkActive={false} isProduct={true} />
            <ProductsCard
              img={"/images/kusama_products.png"}
              title={"Kusama"} paragraph={"APY 8.95%"}
              isLinkActive={false} isProduct={true} />
            <ProductsCard
              img={"/images/near_products.png"}
              title={"Near"} paragraph={"8.7%"}
              isLinkActive={false} isProduct={true} />
            <ProductsCard
              img={"/images/SUI_products.png"}
              title={"SUI"} paragraph={"APY 4.26%"}
              isLinkActive={false} isProduct={true} />
          </div>
        </div>
      </section>

      <section className={style.sectionDefault}>
        <div>
          <h2 className={style.titleSection}>Porque investir em Staking</h2>
          <div className={` ${style.colContent} ${style._4Col} `}>
            <LayoutCard>
              <div className={style.divBlockChild}>
                <span className={style.paragraph}>#01</span>
                <Image width={30} height={30} alt="" src={"/network/staketogether-icon.svg"} />
              </div>
              <p className={style.textBlock}>Para aumentar os seus rendimentos enquanto segura bons ativos pro longo prazo</p>
            </LayoutCard>
            <LayoutCard>
              <div className={style.divBlockChild}>
                <span className={style.paragraph}>#02</span>
                <Image width={30} height={30} alt="" src={"/network/staketogether-icon.svg"} />
              </div>
              <p className={style.textBlock}>Para se proteger do sistema financeiro tradicional por meio de ativos desentralizados</p>
            </LayoutCard>
            <LayoutCard>
              <div className={style.divBlockChild}>
                <span className={style.paragraph}>#03</span>
                <Image width={30} height={30} alt="" src={"/network/staketogether-icon.svg"} />
              </div>
              <p className={style.textBlock}>Para se manter seguro investindo nas melhores infraestruturas de staking</p>
            </LayoutCard>
            <LayoutCard>
              <div className={style.divBlockChild}>
                <span className={style.paragraph}>#04</span>
                <Image width={30} height={30} alt="" src={"/network/staketogether-icon.svg"} />
              </div>
              <p className={style.textBlock}>Acessibilidade para que todos os publicos possam usufruir de investimentos desentralizados</p>
            </LayoutCard>
          </div>
        </div>
      </section>

      <section className={style.sectionDefault}>
        <div className={style.divBlockChild}>
          <h2 className={style.titleSection}>Confiado Por</h2>
          <a href="#">Ver todos</a>
        </div>
        <div className={` ${style.colContent} ${style._6Col}`}>
          <LayoutCard>
            <h3 className={style.stepNumber}>47</h3>
            <p className={style.paragraph}>Projetos</p>
          </LayoutCard>
          <ProductsCard
            img={"/images/yield_hacker.png"}
            paragraph={"Yield Hackers"} isProduct={false} />
          <ProductsCard
            img={"/images/intus_crypto.png"}
            paragraph={"Intus Crypto"} isProduct={false} />
          <ProductsCard
            img={"/images/zero_paralelo.png"}
            paragraph={"Zero Paralelo"} isProduct={false} />
          <ProductsCard
            img={"/images/play4change.png"}
            paragraph={"Play4Change"} isProduct={false} />
          <ProductsCard
            img={"/images/nebula.png"}
            paragraph={"Nebula"} isProduct={false} />
        </div>
      </section>

      <section className={style.sectionDefault}>
        <div>
          <h2 className={style.titleSection}>Segurança</h2>
          <div className={` ${style.colContent}  ${style._4Col} ${style.itemsCenter}`}>
            <LayoutCard>
              <p className={style.textBlock}>Infraestrutura</p>
              <Image width={0} height={0} sizes="100vw" style={{width: '100%', height: 'auto'}} src={"/images/network.png"} alt={""} />
            </LayoutCard>
            <LayoutCard>
              <p className={style.textBlock}>Auditoria</p>
              <Image width={0} height={0} sizes="100vw" style={{width: '100%', height: 'auto'}} src={"/images/block_sec.png"} alt={""} />
            </LayoutCard>
            <LayoutCard>
              <p className={style.textBlock}>Auditoria</p>
              <Image width={0} height={0} sizes="100vw" style={{width: '100%', height: 'auto'}} src={"/images/hacken.png"} alt={""} />
            </LayoutCard>
            <LayoutCard>
              <p className={style.textBlock}>Auditoria</p>
              <Image width={0} height={0} sizes="100vw" style={{width: '100%', height: 'auto'}} src={"/images/sense_security.png"} alt={""} />
            </LayoutCard>
          </div>
        </div>
      </section>

      <section className={style.sectionDefault}>
        <div className={style.divBlockChild}>
          <h2 className={style.titleSection}>Time</h2>
          <a href="#">Linkedin</a>
        </div>
        <div className={`${style._7Col}`}>
          <Avatar avatarLink={"/images/fabricio_miranda_avatar.jpg"} name={"Fabricio Miranda"} role={"CEO"} />
          <Avatar avatarLink={"/images/arthur_avatar.png"} name={"Arthur Ribeiro"} role={"CTO"} />
          <Avatar avatarLink={"/images/andre_avatar.png"} name={"André Montenegro"} role={"CBO"} />
          <Avatar avatarLink={"/images/icaro_avatar.png"} name={"Ícaro Avelar"} role={"CLO"} />
          <Avatar avatarLink={"/images/joao_avatar.png"} name={"João Hazim"} role={"Advisor"} />
          <Avatar avatarLink={"/images/caio_avatar.jpeg"} name={"Caio Vicentino"} role={"Advisor"} />
        </div>
      </section>
      
      <section className={style.sectionDefault}>
        <div className={` ${style.containerContent} ${style.oneColumn} `}>
         <div className={style.ctaBlock}>
          <h2 className={style.ctaTitle}>Investir em Staking de Ethereum</h2>
          <p className={style.ctaSubtitle}>Segurança e rentabilidade em um ativos mais seguros do mercado cripto</p>
         </div>
         <ProductsCard
              img={"/images/ethereum_products.png"}
              title={"Ethereum"} paragraph={"APY 5.1%"}
              isLinkActive={true} isProduct={true} isCta={true}/>
        </div>
      </section>

      <section className={style.sectionDefault}>
        <div className={style.oneColumn}>
          <strong className={style.titleSection}>Receba as Atualizações</strong>
          <input type="email" placeholder="E-mail" className={style.textField}/>
          <ButtonLink type={"w-button"} text={"Cadastrar"} />
        </div>
      </section>

      <Footer />
    </>
  );
}