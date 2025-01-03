import { PropsRow } from './props-row';
import { PropsTableHeader } from './header';
import type { PropDefinition } from './types';

interface PropsTableProps {
  props: PropDefinition[];
}

export function PropsTable({ props }: PropsTableProps) {
  return (
    <div className="mt-4 border rounded-lg">
      <table className="w-full">
        <PropsTableHeader />
        <tbody>
          {props.map((prop) => (
            <PropsRow key={prop.name} {...prop} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export type { PropDefinition };