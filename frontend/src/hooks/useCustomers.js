import { useState, useEffect } from 'react';
import { fetchCustomers, createOrUpdateCustomer, deleteCustomer } from '@/services/api';
import { applyCpfMask, applyCnpjMask, applyPhoneMask, applyCpfCnpjMask, applyDateMask, removeMask, formatDateForDisplay } from '@/utils/masks'; // Adicione applyCpfMask, applyCnpjMask, applyPhoneMask
import { validateCpf, validateCnpj } from '@/utils/validators';

export function useCustomers(router) {
    const [customers, setCustomers] = useState([]);
    const [filteredCustomers, setFilteredCustomers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [filters, setFilters] = useState({ createdAt: '', name: '', cpf: '' });
    const [personTypeFilter, setPersonTypeFilter] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingCustomer, setEditingCustomer] = useState(null);
    const [newCustomer, setNewCustomer] = useState({
        name: '',
        cpf: '',
        cnpj: '',
        phone: '',
        birthDate: '',
        companyName: '',
        tradeName: '',
    });
    const [modalPersonType, setModalPersonType] = useState('PF');
    const [currentPage, setCurrentPage] = useState(1);
    const [popup, setPopup] = useState(null);
    const itemsPerPage = 5;

    const fetchCustomerData = async () => {
        const token = localStorage.getItem('token');
        if (!token) return router.push('/login');
        try {
            const data = await fetchCustomers(token);
            setCustomers(data);
            setFilteredCustomers(data);
        } catch (err) {
            router.push('/500');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCustomerData();
    }, []);

    const applyFilters = () => {
        let filtered = [...customers];
        if (personTypeFilter === 'PF') filtered = filtered.filter((customer) => customer.name && customer.name.trim() !== '');
        else if (personTypeFilter === 'PJ') filtered = filtered.filter((customer) => !customer.name || customer.name.trim() === '');
        if (filters.createdAt) filtered = filtered.filter((customer) => formatDateForDisplay(customer.createdAt).includes(filters.createdAt));
        if (filters?.name) filtered = filtered.filter((customer) => (customer.name || customer.companyName || '').toLowerCase().includes(filters.name.toLowerCase()));
        if (filters?.cpf) filtered = filtered.filter((customer) => (customer.cpf || customer.cnpj || '').includes(removeMask(filters.cpf)));
        setFilteredCustomers(filtered);
    };

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        const maskedValue = name === 'cpf' ? applyCpfCnpjMask(value) : name === 'createdAt' ? applyDateMask(value) : value;
        setFilters((prev) => ({ ...prev, [name]: maskedValue }));
        setCurrentPage(1);
    };

    const handlePersonTypeClick = (value) => {
        setPersonTypeFilter((prev) => (prev === value ? null : value));
        setCurrentPage(1);
    };

    useEffect(() => {
        applyFilters();
    }, [filters, personTypeFilter, customers]);

    const handleCreateOrUpdateCustomer = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        const endpoint = modalPersonType === 'PF' ? 'individual' : 'business';
        const requiredFields = modalPersonType === 'PF' ? ['name', 'cpf', 'phone', 'birthDate'] : ['companyName', 'tradeName', 'cnpj', 'phone'];
        const missingField = requiredFields.find((field) => !newCustomer[field]);
        if (missingField) {
            setPopup(
                `O campo ${
                    missingField === 'name'
                        ? 'Nome'
                        : missingField === 'cpf'
                            ? 'CPF'
                            : missingField === 'phone'
                                ? 'Telefone'
                                : missingField === 'birthDate'
                                    ? 'Data de Nascimento'
                                    : missingField === 'companyName'
                                        ? 'Nome da Empresa'
                                        : missingField === 'tradeName'
                                            ? 'Razão Social'
                                            : 'CNPJ'
                } é obrigatório`
            );
            setTimeout(() => setPopup(null), 2000);
            return;
        }

        if (modalPersonType === 'PF' && !validateCpf(newCustomer.cpf)) {
            setPopup('CPF inválido');
            setTimeout(() => setPopup(null), 2000);
            return;
        }
        if (modalPersonType === 'PJ' && !validateCnpj(newCustomer.cnpj)) {
            setPopup('CNPJ inválido');
            setTimeout(() => setPopup(null), 2000);
            return;
        }

        try {
            await createOrUpdateCustomer(token, endpoint, newCustomer, editingCustomer, modalPersonType);
            setIsModalOpen(false);
            setNewCustomer({ name: '', cpf: '', cnpj: '', phone: '', birthDate: '', companyName: '', tradeName: '' });
            setEditingCustomer(null);
            await fetchCustomerData();
        } catch (err) {
            router.push('/500');
        }
    };

    const handleEditCustomer = (customer) => {
        setEditingCustomer(customer);
        setModalPersonType(customer.name ? 'PF' : 'PJ');
        setNewCustomer({
            name: customer.name || '',
            cpf: customer.cpf ? applyCpfMask(customer.cpf) : '',
            cnpj: customer.cnpj ? applyCnpjMask(customer.cnpj) : '',
            phone: customer.phone ? applyPhoneMask(customer.phone) : '',
            birthDate: customer.birthDate ? formatDateForDisplay(customer.birthDate) : '',
            companyName: customer.companyName || '',
            tradeName: customer.tradeName || '',
        });
        setIsModalOpen(true);
    };

    const handleDeleteCustomer = async (customerId) => {
        if (!confirm('Tem certeza que deseja excluir este cliente?')) return;
        try {
            await deleteCustomer(customerId, customers);
            await fetchCustomerData();
        } catch (err) {
            router.push('/500');
        }
    };

    const totalPages = Math.max(1, Math.ceil(filteredCustomers.length / itemsPerPage));
    const paginatedCustomers = filteredCustomers.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    return {
        customers,
        filteredCustomers,
        loading,
        error,
        filters,
        setFilters,
        personTypeFilter,
        setPersonTypeFilter,
        isModalOpen,
        setIsModalOpen,
        editingCustomer,
        setEditingCustomer,
        newCustomer,
        setNewCustomer,
        modalPersonType,
        setModalPersonType,
        currentPage,
        setCurrentPage,
        popup,
        setPopup,
        handleFilterChange,
        handlePersonTypeClick,
        handleCreateOrUpdateCustomer,
        handleEditCustomer,
        handleDeleteCustomer,
        totalPages,
        paginatedCustomers,
    };
}
