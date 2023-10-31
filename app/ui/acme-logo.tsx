import {  CalculatorIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';

export default function AcmeLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      <CalculatorIcon className="h-30 w-30 rotate-[15deg]" />
      <p className="text-[30px]">Casa Mantua</p>
    </div>
  );
}
