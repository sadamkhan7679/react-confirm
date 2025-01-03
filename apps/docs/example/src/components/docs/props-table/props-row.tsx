import type { PropDefinition } from './types';

export function PropsRow({ name, type, defaultValue, description }: PropDefinition) {
  return (
    <tr className="border-b">
      <td className="px-4 py-2 font-mono text-sm">{name}</td>
      <td className="px-4 py-2 font-mono text-sm">{type}</td>
      <td className="px-4 py-2 font-mono text-sm">{defaultValue || '-'}</td>
      <td className="px-4 py-2">{description}</td>
    </tr>
  );
}