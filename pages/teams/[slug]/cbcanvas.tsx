//'use client'
import { GetServerSidePropsContext } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import type { NextPageWithLayout } from 'types';
import { useTranslation } from 'next-i18next';
import useWindowDimensions from 'hooks/useWindowDimensions';
//import Flow from '../../flow'
import Flow from './xflow'

const CBCanvas: NextPageWithLayout = () => {
  const { t } = useTranslation('common');
  const { height, width } = useWindowDimensions();
   return (
    <div>
        <div className="p-3">
          <p className="text-sm">{t('canvas-header-title')}</p>
        </div>
        <div style={{height : height*0.8, width : width*0.6 }} >
          <Flow />
        </div>
    </div>
  );
};

export async function getServerSideProps({
  locale,
}: GetServerSidePropsContext) {
  return {
    props: {
      ...(locale ? await serverSideTranslations(locale, ['common']) : {}),
    },
  };
}

export default CBCanvas;

