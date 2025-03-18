'use client';

import { useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';
import { useCustomers } from '@/hooks/useCustomers';
import CustomerTable from '@/components/CustomerTable';
import CustomerModal from '@/components/CustomerModal';
import Filters from '@/components/Filters';
import Pagination from '@/components/Pagination';
import Popup from '@/components/Popup';

export default function DashboardPage() {
    const router = useRouter();
    const { isAdmin, handleLogout } = useAuth(router);
    const {
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
    } = useCustomers(router);

    if (loading) return <div className="min-h-screen p-6 bg-gray-100">Carregando...</div>;
    if (error) return <div className="min-h-screen p-6 bg-gray-100 text-red-500">{error}</div>;

    return (
        <div className="min-h-screen p-6 bg-gray-100">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl text-gray-800">Dashboard - Clientes</h1>
                <button
                    onClick={handleLogout}
                    className="bg-red-500 text-white p-2 rounded-lg shadow-md hover:bg-red-600 transition duration-200 font-medium"
                >
                    Sair
                </button>
            </div>

            <Filters
                filters={filters}
                personTypeFilter={personTypeFilter}
                handleFilterChange={handleFilterChange}
                handlePersonTypeClick={handlePersonTypeClick}
                setIsModalOpen={setIsModalOpen}
                setEditingCustomer={setEditingCustomer}
                setNewCustomer={setNewCustomer}
                setModalPersonType={setModalPersonType}
            />

            <CustomerTable
                paginatedCustomers={paginatedCustomers}
                isAdmin={isAdmin}
                handleEditCustomer={handleEditCustomer}
                handleDeleteCustomer={handleDeleteCustomer}
            />

            <Pagination
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                totalPages={totalPages}
            />

            <CustomerModal
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
                editingCustomer={editingCustomer}
                newCustomer={newCustomer}
                setNewCustomer={setNewCustomer}
                modalPersonType={modalPersonType}
                setModalPersonType={setModalPersonType}
                handleCreateOrUpdateCustomer={handleCreateOrUpdateCustomer}
            />

            <Popup popup={popup} />
        </div>
    );
}
