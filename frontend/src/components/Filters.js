import { applyCpfMask, applyCnpjMask, applyPhoneMask } from '@/utils/masks';

export default function Filters({
                                    filters,
                                    personTypeFilter,
                                    handleFilterChange,
                                    handlePersonTypeClick,
                                    setIsModalOpen,
                                    setEditingCustomer,
                                    setNewCustomer,
                                    setModalPersonType,
                                }) {
    return (
        <div className="mb-6">
            <div className="flex items-center mb-4 gap-4">
                <div>
                    <label className="block mb-2 font-medium text-gray-700">Tipo de Pessoa</label>
                    <div className="flex gap-4">
                        <label className="flex items-center cursor-pointer text-gray-700">
                            <input
                                type="radio"
                                name="personTypeFilter"
                                checked={personTypeFilter === 'PF'}
                                onClick={() => handlePersonTypeClick('PF')}
                                onChange={() => {}}
                                className="mr-2 text-blue-500 focus:ring-blue-500"
                            />
                            Pessoa Física
                        </label>
                        <label className="flex items-center cursor-pointer text-gray-700">
                            <input
                                type="radio"
                                name="personTypeFilter"
                                checked={personTypeFilter === 'PJ'}
                                onClick={() => handlePersonTypeClick('PJ')}
                                onChange={() => {}}
                                className="mr-2 text-blue-500 focus:ring-blue-500"
                            />
                            Pessoa Jurídica
                        </label>
                    </div>
                </div>
                <button
                    onClick={() => {
                        setEditingCustomer(null);
                        setNewCustomer({
                            name: '',
                            cpf: '',
                            cnpj: '',
                            phone: '',
                            birthDate: '',
                            companyName: '',
                            tradeName: '',
                        });
                        setModalPersonType('PF');
                        setIsModalOpen(true);
                    }}
                    className="bg-green-500 text-white p-2 rounded-lg shadow-md hover:bg-green-600 transition duration-200 font-medium"
                >
                    Incluir
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                    <label className="block mb-1 text-gray-700">Criado em</label>
                    <input
                        type="text"
                        name="createdAt"
                        value={filters.createdAt}
                        onChange={handleFilterChange}
                        placeholder="dd/mm/yyyy"
                        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
                    />
                </div>
                <div>
                    <label className="block mb-1 text-gray-700">Nome</label>
                    <input
                        type="text"
                        name="name"
                        value={filters.name}
                        onChange={handleFilterChange}
                        placeholder="Digite o nome"
                        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
                    />
                </div>
                <div>
                    <label className="block mb-1 text-gray-700">CPF/CNPJ</label>
                    <input
                        type="text"
                        name="cpf"
                        value={filters.cpf}
                        onChange={handleFilterChange}
                        placeholder="Digite o CPF ou CNPJ"
                        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
                    />
                </div>
            </div>
        </div>
    );
}
