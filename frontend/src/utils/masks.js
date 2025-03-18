export const applyCpfMask = (value) =>
    value.replace(/\D/g, '').replace(/(\d{3})(\d)/, '$1.$2').replace(/(\d{3})(\d)/, '$1.$2').replace(/(\d{3})(\d{1,2})/, '$1-$2').slice(0, 14);

export const applyCnpjMask = (value) =>
    value.replace(/\D/g, '').replace(/(\d{2})(\d)/, '$1.$2').replace(/(\d{3})(\d)/, '$1.$2').replace(/(\d{3})(\d)/, '$1/$2').replace(/(\d{4})(\d)/, '$1-$2').slice(0, 18);

export const applyCpfCnpjMask = (value) => (value.replace(/\D/g, '').length <= 11 ? applyCpfMask(value) : applyCnpjMask(value));

export const applyPhoneMask = (value) =>
    value.replace(/\D/g, '').replace(/(\d{2})(\d)/, '($1) $2').replace(/(\d{5})(\d)/, '$1-$2').slice(0, 15);

export const applyDateMask = (value) =>
    value.replace(/\D/g, '').replace(/(\d{2})(\d)/, '$1/$2').replace(/(\d{2})(\d)/, '$1/$2').slice(0, 10);

export const removeMask = (value) => value.replace(/\D/g, '');

export const formatDateForDisplay = (isoDate) =>
    isoDate ? `${isoDate.split('T')[0].split('-').reverse().join('/')}` : '-';
