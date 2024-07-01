import styled from "styled-components";

const STATUS_COLOR = {
   yellow: 'yellow-100',
   green: 'green-100',
   red: 'red-100l',
 } as const

 interface StatusProps {
   statusColor: keyof typeof STATUS_COLOR
 }

export const Status = styled.span<StatusProps> `
   display: flex;
   align-items: center;
   gap: 0.5rem;

   &::before {
      content: '';
      width: 0.5rem;
      height: 0.5rem;
      border-radius: 50%;
      background: #04D361;
   }
`