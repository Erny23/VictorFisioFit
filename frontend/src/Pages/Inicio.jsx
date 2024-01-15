import BannerIni from "../Components/bannerIni"
import ContenidoIni from "../Components/contenidoIni"
import EndBannerIni from "../Components/endBannerIni"

const Inicio = () => {
  return (
    <>
      <main id="mainIni">
        <section>
          <BannerIni />
        </section>
        <section>
          <ContenidoIni />
        </section>
        <section className="mt-5">
          <EndBannerIni />
        </section>
      </main>
    </>
  )
};

export default Inicio