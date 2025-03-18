import { applyCpfMask, applyCnpjMask, applyPhoneMask, applyDateMask } from '@/utils/masks';

export default function CustomerModal({
                                          isModalOpen,
                                          setIsModalOpen,
                                          editingCustomer,
                                          newCustomer,
                                          setNewCustomer,
                                          modalPersonType,
                                          setModalPersonType,
                                          handleCreateOrUpdateCustomer,
                                      }) {
    if (!isModalOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                <h2 className="text-xl mb-4 text-gray-800">{editingCustomer ? 'Editar Cliente' : 'Novo Cliente'}</h2>
                <form onSubmit={handleCreateOrUpdateCustomer}>
                    <div className="mb-4">
                        <label className="block mb-2 font-medium text-gray-700">Tipo de Pessoa</label>
                        <div className="flex gap-4">
                            <label className="flex items-center cursor-pointer text-gray-700">
                                <input
                                    type="radio"
                                    name="modalPersonType"
                                    checked={modalPersonType === 'PF'}
                                    onChange={() => setModalPersonType('PF')}
                                    className="mr-2 text-blue-500 focus:ring-blue-500"
                                />
                                Pessoa Física
                            </label>
                            <label className="flex items-center cursor-pointer text-gray-700">
                                <input
                                    type="radio"
                                    name="modalPersonType"
                                    checked={modalPersonType === 'PJ'}
                                    onChange={() => setModalPersonType('PJ')}
                                    className="mr-2 text-blue-500 focus:ring-blue-500"
                                />
                                Pessoa Jurídica
                            </label>
                        </div>
                    </div>

                    {modalPersonType === 'PF' ? (
                        <>
                            <div className="mb-4">
                                <label className="block mb-1 text-gray-700">Nome</label>
                                <input
                                    type="text"
                                    value={newCustomer.name}
                                    onChange={(e) => setNewCustomer({ ...newCustomer, name: e.target.value })}
                                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block mb-1 text-gray-700">CPF</label>
                                <input
                                    type="text"
                                    value={newCustomer.cpf}
                                    onChange={(e) => setNewCustomer({ ...newCustomer, cpf: applyCpfMask(e.target.value) })}
                                    placeholder="000.000.000-00"
                                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block mb-1 text-gray-700">Telefone</label>
                                <input
                                    type="text"
                                    value={newCustomer.phone}
                                    onChange={(e) => setNewCustomer({ ...newCustomer, phone: applyPhoneMask(e.target.value) })}
                                    placeholder="(00) 00000-0000"
                                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block mb-1 text-gray-700">Data de Nascimento</label>
                                <input
                                    type="text"
                                    value={newCustomer.birthDate}
                                    onChange={(e) => setNewCustomer({ ...newCustomer, birthDate: applyDateMask(e.target.value) })}
                                    placeholder="dd/mm/yyyy"
                                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
                                />
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="mb-4">
                                <label className="block mb-1 text-gray-700">Nome da Empresa</label>
                                <input
                                    type="text"
                                    value={newCustomer.companyName}
                                    onChange={(e) => setNewCustomer({ ...newCustomer, companyName: e.target.value })}
                                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block mb-1 text-gray-700">Razão Social</label>
                                <input
                                    type="text"
                                    value={newCustomer.tradeName}
                                    onChange={(e) => setNewCustomer({ ...newCustomer, tradeName: e.target.value })}
                                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block mb-1 text-gray-700">CNPJ</label>
                                <input
                                    type="text"
                                    value={newCustomer.cnpj}
                                    onChange={(e) => setNewCustomer({ ...newCustomer, cnpj: applyCnpjMask(e.target.value) })}
                                    placeholder="00.000.000/0000-00"
                                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block mb-1 text-gray-700">Telefone</label>
                                <input
                                    type="text"
                                    value={newCustomer.phone}
                                    onChange={(e) => setNewCustomer({ ...newCustomer, phone: applyPhoneMask(e.target.value) })}
                                    placeholder="(00) 00000-0000"
                                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
                                />
                            </div>
                        </>
                    )}

                    <div className="flex justify-end gap-2">
                        <button
                            type="button"
                            onClick={() => setIsModalOpen(false)}
                            className="bg-gray-300 text-gray-700 p-2 rounded-lg shadow-md hover:bg-gray-400 transition duration-200"
                        >
                            Cancelar
                        </button>
                        <button
                            type="submit"
                            className="bg-blue-500 text-white p-2 rounded-lg shadow-md hover:bg-blue-600 transition duration-200"
                        >
                            {editingCustomer ? 'Salvar' : 'Cadastrar'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
