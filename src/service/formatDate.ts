import { format } from 'date-fns';

const formatDate = (date: string) => {
  return format(new Date(date), 'yyyy/MM/dd HH:mm:ss');
};

export { formatDate };
