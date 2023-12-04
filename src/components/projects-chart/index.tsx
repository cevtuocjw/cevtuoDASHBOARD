import fetcher from '@/lib/fetcher';
import { ProjectStat } from '@/types/wakatime/ProjectStat';
import { Flex } from '@chakra-ui/react';
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  LinearScale,
  Title,
  Tooltip,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import useSWR from 'swr';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Title);

const ProjectsChart = () => {
  const { data } = useSWR<ProjectStat[]>(
    '/stats/projects?range=last_30_days',
    fetcher
  );
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
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
        label: 'Projects',
        backgroundColor: 'rgba(60, 179, 113,0.2)',
        borderColor: 'rgba(60, 179, 113,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(60, 179, 113,0.4)',
        hoverBorderColor: 'rgba(60, 179, 113,1)',
        data: data?.map(({ decimal }) => decimal),
      },
    ],
  };

  return (
    <Flex h='200px' w='full'>
      <Bar
        options={options}
        style={{ position: 'relative', height: '100%', width: '100%' }}
        data={dataChart}
      />
    </Flex>
  );
};

export default ProjectsChart;
