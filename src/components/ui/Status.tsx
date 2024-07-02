interface StatusProps {
   statusColor: 'red' | 'blue' | 'green' | 'yellow';
 }
 
 export const Status: React.FC<StatusProps> = ({ statusColor }) => {
   const statusClasses = {
     red: 'bg-red-500',
     blue: 'bg-blue-500',
     green: 'bg-green-500',
     yellow: 'bg-yellow-500',
   };
 
   return <span className={`flex items-center gap-2 w-2 h-2 rounded-full ${statusClasses[statusColor]}`}></span>;
 };
