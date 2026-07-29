import { awsServiceIcons, brandIconMap } from '../utils/icons';

/**
 * Return the public icon path for an AWS service name.
 * Case-insensitive lookup. Falls back to the AWS brand logo.
 */
export const getAwsIcon = (service) => {
  // fallback to centralized brand AWS icon
  if (!service) return brandIconMap.AWS;
  const key = Object.keys(awsServiceIcons).find(k => k.toLowerCase() === String(service).toLowerCase());
  return awsServiceIcons[key] || brandIconMap.AWS;
};