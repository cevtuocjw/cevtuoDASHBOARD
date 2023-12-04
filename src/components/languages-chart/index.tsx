import fetcher from '@/lib/fetcher';
import { Language } from '@/types/wakatime/Language';
import { Flex } from '@chakra-ui/react';
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import useSWR from 'swr';

ChartJS.register(ArcElement, Tooltip, Legend);

const LanguagesChart = () => {
  const { data } = useSWR<Language[]>(
    '/stats/languages?range=last_30_days',
    fetcher
  );
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'right' as const,
      },
    },
  };

  const labels = data?.map(
    ({ name, hours, minutes }) => `${name} (${hours}h${minutes}m)`
  );

  const dataChart = {
    labels,
    datasets: [
      {
        label: 'Languages',
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(238, 130, 238, 0.2)',
          'rgba(255, 99, 71, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(238, 130, 238, 1)',
          'rgba(255, 99, 71, 1)',
        ],
        borderWidth: 1,
        hoverBackgroundColor: [
          'rgba(255, 99, 132, 0.4)',
          'rgba(54, 162, 235, 0.4)',
          'rgba(255, 206, 86, 0.4)',
          'rgba(75, 192, 192, 0.4)',
          'rgba(153, 102, 255, 0.4)',
          'rgba(255, 159, 64, 0.4)',
          'rgba(238, 130, 238, 0.4)',
          'rgba(255, 99, 71, 0.4)',
        ],
        data: data?.map(({ decimal }) => decimal),
      },
    ],
  };

  return (
    <Flex w='full' h='300px'>
      <Doughnut
        options={options}
        style={{ width: '100%', height: '100%' }}
        data={dataChart}
      />
    </Flex>
  );
};

export default LanguagesChart;
