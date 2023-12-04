import { Language } from '@/types/wakatime/Language';
import { ProjectStat } from '@/types/wakatime/ProjectStat';

const { WAKATIME_SECRET_KEY: secretKey } = process.env;

const WAKATIME_ACTIVITY_ENDPOINT = `https://wakatime.com/api/v1/users/hakkaofdev/all_time_since_today`;
const WAKATIME_STATS_ENDPOINT = `https://wakatime.com/api/v1/users/hakkaofdev/stats`;

export const getActivity = async () => {
  const response = await fetch(WAKATIME_ACTIVITY_ENDPOINT, {
    headers: {
      Authorization: `Basic ${new Buffer(secretKey).toString('base64')}`,
    },
  });

  const data = await response.json();
  const activity = {
    total: data.data.text,
    total_seconds: data.data.total_seconds,
  };
  return activity;
};

export const getLanguages = async (range: string) => {
  const response = await fetch(`${WAKATIME_STATS_ENDPOINT}/${range}`, {
    headers: {
      Authorization: `Basic ${new Buffer(secretKey).toString('base64')}`,
    },
  });

  const data = await response.json();
  const languages: Language[] = [...data.data.languages];
  return languages;
};

export const getStats = async (range: string) => {
  const response = await fetch(`${WAKATIME_STATS_ENDPOINT}/${range}`, {
    headers: {
      Authorization: `Basic ${new Buffer(secretKey).toString('base64')}`,
    },
  });

  const data = await response.json();
  const stats = {
    total: data.data.human_readable_total,
    total_seconds: data.data.total_seconds,
    range: range,
  };
  return stats;
};

export const getProjectStats = async (range: string) => {
  const response = await fetch(`${WAKATIME_STATS_ENDPOINT}/${range}`, {
    headers: {
      Authorization: `Basic ${new Buffer(secretKey).toString('base64')}`,
    },
  });

  const data = await response.json();
  const projectStats: ProjectStat[] = [...data.data.projects];
  return projectStats;
};
