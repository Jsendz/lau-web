import React from 'react';
import { Helmet } from 'react-helmet-async';
import {useTranslation} from "react-i18next";


const Empresa = () => {

  const [t] = useTranslation("global");

  return (
    <div className='h-full 2xl:h-screen w-full flex flex-col justify-around items-center lg:my-10 2xl:my-20 mb-20'>
        <Helmet>
        <title>{t("empresa.pagina")}</title>
        <meta name="description" content={t("empresa.paragrafo")}/>
      </Helmet>
        <div className='max-w-5xl mx-auto flex flex-col' >
          <div className=' my-10 xl:my-20 '>
            <h3 className='text-4xl sm:text-5xl font-extrabold antialiased my-10 text-slate-700'>{t("empresa.titulo")}</h3>
            <p className='text-xl text-slate-600 text-left pl-5 mt-20'>{t("empresa.paragrafo")}</p>
          </div>
            <div className='w-[90%] lg:w-full text-left flex flex-col lg:flex-row lg:flex-wrap justify-around mx-auto lg:mx-0'>
              <div className='w-full lg:w-[30%] p-5 rounded-lg shadow-lg border-2 border-slate-400 mb-2'>
                <h4 className='2xl:text-2xl text-xl font-bold mb-2'>{t("empresa.unotitulo")}</h4>
                <p className='text-md text-slate-600'>{t("empresa.unoparagrafo")}</p>
              </div>
              <div className='w-full lg:w-[30%] p-5 rounded-lg shadow-lg border-2 border-slate-400 mb-2'> 
                <h4 className='2xl:text-2xl text-xl font-bold mb-2'>{t("empresa.dostitulo")}</h4>
                <p className='text-md text-slate-600'>{t("empresa.dosparagrafo")}</p>
              </div>
              <div className='w-full lg:w-[30%] p-5 rounded-lg shadow-lg border-2 border-slate-400 mb-2'> 
                <h4 className='2xl:text-2xl text-xl font-bold mb-2'>{t("empresa.trestitulo")}</h4>
                <p className='text-md text-slate-600'>{t("empresa.tresparagrafo")}</p>
              </div>
              <div className='w-full lg:w-[30%] p-5 rounded-lg shadow-lg border-2 border-slate-400 mb-2'>  
                <h4 className='2xl:text-2xl text-xl font-bold mb-2'>{t("empresa.fortitulo")}</h4>
                <p className='text-md text-slate-600'>{t("empresa.forparagrafo")}</p>
              </div>
              <div className='w-full lg:w-[30%] p-5 rounded-lg shadow-lg border-2 border-slate-400 mb-2'>   
                <h4 className='2xl:text-2xl text-xl font-bold mb-2'>{t("empresa.cinctitulo")}</h4>
                <p className='text-md text-slate-600'>{t("empresa.cincparagrafo")}</p>
              </div>
              <div className='w-full lg:w-[30%] p-5 rounded-lg shadow-lg border-2 border-slate-400 mb-2'>  
                <h4 className='2xl:text-2xl text-xl font-bold mb-2'>{t("empresa.sistitulo")}</h4>
                <p className='text-md text-slate-600'>{t("empresa.sisparagrafo")}</p>
              </div>
              <div className='w-full lg:w-[30%] p-5 rounded-lg shadow-lg border-2 border-slate-400 mb-2'>  
                <h4 className='2xl:text-2xl text-xl font-bold mb-2'>{t("empresa.setitulo")}</h4>
                <p className='text-md text-slate-600'>{t("empresa.separagrafo")}</p>
              </div>
              <div className='w-full lg:w-[30%] p-5 rounded-lg shadow-lg border-2 border-slate-400 mb-2'>  
                <h4 className='2xl:text-2xl text-xl font-bold mb-2'>{t("empresa.otitulo")}</h4>
                <p className='text-md text-slate-600'>{t("empresa.oparagrafo")}</p>
              </div>
              <div className='w-full lg:w-[30%] p-5 rounded-lg shadow-lg border-2 border-slate-400 mb-2'> 
                <h4 className='2xl:text-2xl text-xl font-bold mb-2'>{t("empresa.nutitulo")}</h4>
                <p className='text-md text-slate-600'>{t("empresa.nuparagrafo")}</p>
              </div>   
            </div>
        </div>
    </div>
  )
}

export default Empresa