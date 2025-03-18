import { removeMask } from '@/utils/masks';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const fetchCustomers = async (token) => {
    const response = await fetch(`${API_URL}/customers`, {
        method: 'GET',
        headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
    });
    if (!response.ok) throw new Error('Erro ao buscar clientes');
    return await response.json();
};

export const createOrUpdateCustomer = async (token, endpoint, newCustomer, editingCustomer, modalPersonType) => {
    const url = editingCustomer
        ? `${API_URL}/customers/${editingCustomer.customerId}`
        : `${API_URL}/customers/${endpoint}`;
    const method = editingCustomer ? 'PUT' : 'POST';
    const payload =
        modalPersonType === 'PF'
            ? {
                name: newCustomer.name,
                cpf: removeMask(newCustomer.cpf),
                phone: removeMask(newCustomer.phone),
                birthDate: newCustomer.birthDate.split('/').reverse().join('-'),
            }
            : {
                companyName: newCustomer.companyName,
                tradeName: newCustomer.tradeName,
                cnpj: removeMask(newCustomer.cnpj),
                phone: removeMask(newCustomer.phone),
            };

    const response = await fetch(url, {
        method,
        headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
    });
    if (!response.ok) throw new Error(editingCustomer ? 'Erro ao atualizar cliente' : 'Erro ao criar cliente');
};

export const deleteCustomer = async (customerId, customers) => {
    const token = localStorage.getItem('token');
    const response = await fetch(`${API_URL}/customers/${customerId}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` },
    });
    if (!response.ok) throw new Error('Erro ao excluir cliente');
};
