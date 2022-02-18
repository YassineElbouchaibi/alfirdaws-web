import { addMinutes, format } from 'date-fns';

const getHoursAndMinutes = (time: string): [number, number] => {
  const [hours, minutes] = time.split(':');
  return [parseInt(hours, 10), parseInt(minutes, 10)];
};

export const calculateIqamaTime = (
  adhanTime: string, // "23:00"
  configAuto: string, // "5" or "N/A"
  configManual: string, // "19:30"
): string => {
  const trimmedAdhanTime = adhanTime.trim();
  const trimmedConfigAuto = configAuto.trim();
  const trimmedConfigManual = configManual.trim();

  const [adhanHour, adhanMinutes] = getHoursAndMinutes(adhanTime);

  const isConfigAuto = trimmedConfigAuto !== 'N/A' && trimmedConfigAuto !== '';
  const parsedConfigAuto = parseInt(trimmedConfigAuto, 10);

  const isConfigManual = trimmedConfigManual !== 'N/A' && trimmedConfigManual !== '';
  const [configManualHour, configManualMinutes] = getHoursAndMinutes(trimmedConfigManual);

  // Handle manual and handle cases set iqama time is before adhan time because we are looking to far in the future
  // Note manual has priority over auto
  if (isConfigManual && configManualHour >= 0 && configManualMinutes >= 0 && trimmedConfigManual > trimmedAdhanTime) {
    return trimmedConfigManual;
  }

  // Handle automatic
  if (isConfigAuto && parsedConfigAuto >= 0) {
    return format(
      addMinutes(
        new Date(
          0, // Year
          0, // Month
          0, // Day
          adhanHour, // Hours
          adhanMinutes, // Minutes
        ),
        parsedConfigAuto,
      ),
      'HH:mm', // eg. "23:00"
    );
  }

  return trimmedAdhanTime;
};
