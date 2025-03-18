import { applyCpfMask, applyCnpjMask, formatDateForDisplay } from '@/utils/masks';

export default function CustomerTable({ paginatedCustomers, isAdmin, handleEditCustomer, handleDeleteCustomer }) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200 rounded">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-3 text-left text-gray-700">Criado em</th>
            <th className="p-3 text-left text-gray-700">Nome</th>
            <th className="p-3 text-left text-gray-700">CPF/CNPJ</th>
            <th className="p-3 text-left text-gray-700">Ações</th>
          </tr>
        </thead>
        <tbody>
          {paginatedCustomers.map((customer) => (
            <tr key={customer.customerId} className="border-t border-gray-200">
              <td className="p-3 text-gray-700">{formatDateForDisplay(customer.createdAt)}</td>
              <td className="p-3 text-gray-700">{customer.name || customer.companyName || '-'}</td>
              <td className="p-3 text-gray-700">
                {customer.cpf ? applyCpfMask(customer.cpf) : customer.cnpj ? applyCnpjMask(customer.cnpj) : '-'}
              </td>
              <td className="p-3">
                <button
                  onClick={() => isAdmin && handleEditCustomer(customer)}
                  disabled={!isAdmin}
                  className={`mr-2 transition duration-200 ${
                    isAdmin ? 'text-blue-500 hover:text-blue-700' : 'text-gray-400 cursor-not-allowed'
                  }`}
                  title={isAdmin ? 'Editar' : 'Você não tem permissão'}
                >
                  ✎
                </button>
                <button
                  onClick={() => isAdmin && handleDeleteCustomer(customer.customerId)}
                  disabled={!isAdmin}
                  className={`transition duration-200 ${
                    isAdmin ? 'text-red-500 hover:text-red-700' : 'text-gray-400 cursor-not-allowed'
                  }`}
                  title={isAdmin ? 'Excluir' : 'Você não tem permissão'}
                >
                  🗑
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
