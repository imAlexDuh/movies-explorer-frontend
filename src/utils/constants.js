export const NAME_REGEX = '^[а-яА-ЯёЁa-zA-Z\\s\\-]+$';

export const EMAIL_REGEX = '^\\S+@\\S+\\.\\S+$';

export function countDuration(duration) {
  const hours = Math.trunc(duration / 60);
  const minutes = duration % 60;
  if (hours === 0) {
    return `${minutes}м`;
  }
  return `${hours}ч ${minutes}м`;
}