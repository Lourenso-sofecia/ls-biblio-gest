import { generateRandomData } from "@/data/users";

export function List() {
  const data = generateRandomData();
  return (
    <div className="pt-10">
        
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-yellow-900 opacity-70">
          <tr>
            <th className="px-6 py-3 text-left text-base font-medium text-white uppercase tracking-wider">
              ID
            </th>
            <th className="px-6 py-3 text-left text-base font-medium text-white uppercase tracking-wider">
              Nome
            </th>
            <th className="px-6 py-3 text-left text-base font-medium text-white uppercase tracking-wider">
              Email
            </th>
            <th className="px-6 py-3 text-left text-base font-medium text-white uppercase tracking-wider">
              Telefone
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-yellow-900">
          {data.map((item, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap">{item.number}</td>
              <td className="px-6 py-4 whitespace-nowrap">{item.name}</td>
              <td className="px-6 py-4 whitespace-nowrap">{item.email}</td>
              <td className="px-6 py-4 whitespace-nowrap">{item.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
