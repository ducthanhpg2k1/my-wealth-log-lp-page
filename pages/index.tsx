import LangdingPage from '@components/LangdingPage';

const HomePage = ({ dataMaster }: any) => {
  return <LangdingPage dataConfig={dataMaster?.content} />;
};

export async function getStaticProps() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_APP_API_URL}/api/v1/configs/ldpage-contents`,
    );

    const itemsData: any = await res.json();

    return {
      props: {
        dataMaster: itemsData?.data,
      },
      revalidate: 60,
    };
  } catch (error) {
    console.error('Error fetching data:', error);

    return {
      props: {
        dataMaster: [],
      },
    };
  }
}

export default HomePage;
