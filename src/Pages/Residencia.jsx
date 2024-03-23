import React from 'react';
import { Activa, Pasiva, Residencias } from '../Components';
import { Helmet } from 'react-helmet-async';
import {useTranslation} from "react-i18next";


const Residencia = () => {
  const [t] = useTranslation("global");

  return (
    <div>
       <Helmet>
        <title>{t("residencia.pagina")}</title>
        <meta name="description" content={t("residencia.paragrafo")}/>
      </Helmet>
        <Residencias />
        <Activa />
        <Pasiva />
    </div>
  )
}

export default Residencia