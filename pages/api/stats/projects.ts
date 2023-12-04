import type { NextApiRequest, NextApiResponse } from 'next';
import { getProjectStats } from '../../../lib/wakatime';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { range } = req.query;
  const response = await getProjectStats(range ? `${range}` : 'last_7_days');

  res.setHeader(
    'Cache-Control',
    'public, s-maxage=86400, stale-while-revalidate=43200'
  );

  return res.status(200).json(response);
}
