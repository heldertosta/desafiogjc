-- Inserção de roles (mantido como no original)
INSERT INTO tb_roles(role_id, name) VALUES (1, 'ADMIN');
INSERT INTO tb_roles(role_id, name) VALUES (2, 'BASIC');

-- Inserção do usuário (mantido como no original)
INSERT INTO tb_users(user_id, username, password) VALUES ('a06eb5fd-772f-4986-b96f-a483546ae1bf', 'basic', '$2a$10$CcoRvjxwIJXzwDj/1WNV4OI7f9/BKieJUjThbFwmMdAKb9mLrvl5a');

-- Vinculação do usuário a role ADMIN (mantido como no original)
INSERT INTO tb_users_roles(user_id, role_id) VALUES ('a06eb5fd-772f-4986-b96f-a483546ae1bf', 2);

-- Inserção de clientes na tb_customer (mantido, apenas UUIDs e telefones)
INSERT INTO tb_customer(customer_id, created_at, phone, updated_at, user_id) VALUES ('2fa82c59-0b0b-4e01-a6fa-85cfe1f718c6', now(), '11999999999', now(), 'a06eb5fd-772f-4986-b96f-a483546ae1bf');
INSERT INTO tb_customer(customer_id, created_at, phone, updated_at, user_id) VALUES ('cfc77dc8-42a4-4073-89ee-a8dc29de8603', now(), '11888888888', now(), 'a06eb5fd-772f-4986-b96f-a483546ae1bf');
INSERT INTO tb_customer(customer_id, created_at, phone, updated_at, user_id) VALUES ('4ffccccf-1852-4cf8-b2e9-d31748297755', now(), '11777777777', now(), 'a06eb5fd-772f-4986-b96f-a483546ae1bf');
INSERT INTO tb_customer(customer_id, created_at, phone, updated_at, user_id) VALUES ('5a1b2c3d-4e5f-6a7b-8c9d-0e1f2a3b4c5d', now(), '11666666666', now(), 'a06eb5fd-772f-4986-b96f-a483546ae1bf');
INSERT INTO tb_customer(customer_id, created_at, phone, updated_at, user_id) VALUES ('6b2c3d4e-5f6a-7b8c-9d0e-1f2a3b4c5d6e', now(), '11555555555', now(), 'a06eb5fd-772f-4986-b96f-a483546ae1bf');
INSERT INTO tb_customer(customer_id, created_at, phone, updated_at, user_id) VALUES ('7c3d4e5f-6a7b-8c9d-0e1f-2a3b4c5d6e7f', now(), '11444444444', now(), 'a06eb5fd-772f-4986-b96f-a483546ae1bf');
INSERT INTO tb_customer(customer_id, created_at, phone, updated_at, user_id) VALUES ('8d4e5f6a-7b8c-9d0e-1f2a-3b4c5d6e7f8a', now(), '11333333333', now(), 'a06eb5fd-772f-4986-b96f-a483546ae1bf');
INSERT INTO tb_customer(customer_id, created_at, phone, updated_at, user_id) VALUES ('9e5f6a7b-8c9d-0e1f-2a3b-4c5d6e7f8a9b', now(), '11222222222', now(), 'a06eb5fd-772f-4986-b96f-a483546ae1bf');
INSERT INTO tb_customer(customer_id, created_at, phone, updated_at, user_id) VALUES ('0f6a7b8c-9d0e-1f2a-3b4c-5d6e7f8a9b0c', now(), '11111111111', now(), 'a06eb5fd-772f-4986-b96f-a483546ae1bf');
INSERT INTO tb_customer(customer_id, created_at, phone, updated_at, user_id) VALUES ('1a7b8c9d-0e1f-2a3b-4c5d-6e7f8a9b0c1d', now(), '11987654321', now(), 'a06eb5fd-772f-4986-b96f-a483546ae1bf');
INSERT INTO tb_customer(customer_id, created_at, phone, updated_at, user_id) VALUES ('2b8c9d0e-1f2a-3b4c-5d6e-7f8a9b0c1d2e', now(), '11876543210', now(), 'a06eb5fd-772f-4986-b96f-a483546ae1bf');
INSERT INTO tb_customer(customer_id, created_at, phone, updated_at, user_id) VALUES ('3c9d0e1f-2a3b-4c5d-6e7f-8a9b0c1d2e3f', now(), '11765432109', now(), 'a06eb5fd-772f-4986-b96f-a483546ae1bf');
INSERT INTO tb_customer(customer_id, created_at, phone, updated_at, user_id) VALUES ('4d0e1f2a-3b4c-5d6e-7f8a-9b0c1d2e3f4a', now(), '11654321098', now(), 'a06eb5fd-772f-4986-b96f-a483546ae1bf');
INSERT INTO tb_customer(customer_id, created_at, phone, updated_at, user_id) VALUES ('5e1f2a3b-4c5d-6e7f-8a9b-0c1d2e3f4a5b', now(), '11543210987', now(), 'a06eb5fd-772f-4986-b96f-a483546ae1bf');
INSERT INTO tb_customer(customer_id, created_at, phone, updated_at, user_id) VALUES ('6f2a3b4c-5d6e-7f8a-9b0c-1d2e3f4a5b6c', now(), '11432109876', now(), 'a06eb5fd-772f-4986-b96f-a483546ae1bf');
INSERT INTO tb_customer(customer_id, created_at, phone, updated_at, user_id) VALUES ('7a3b4c5d-6e7f-8a9b-0c1d-2e3f4a5b6c7d', now(), '11321098765', now(), 'a06eb5fd-772f-4986-b96f-a483546ae1bf');
INSERT INTO tb_customer(customer_id, created_at, phone, updated_at, user_id) VALUES ('8b4c5d6e-7f8a-9b0c-1d2e-3f4a5b6c7d8e', now(), '11210987654', now(), 'a06eb5fd-772f-4986-b96f-a483546ae1bf');
INSERT INTO tb_customer(customer_id, created_at, phone, updated_at, user_id) VALUES ('9c5d6e7f-8a9b-0c1d-2e3f-4a5b6c7d8e9f', now(), '11109876543', now(), 'a06eb5fd-772f-4986-b96f-a483546ae1bf');
INSERT INTO tb_customer(customer_id, created_at, phone, updated_at, user_id) VALUES ('0d6e7f8a-9b0c-1d2e-3f4a-5b6c7d8e9f0a', now(), '11912345678', now(), 'a06eb5fd-772f-4986-b96f-a483546ae1bf');
INSERT INTO tb_customer(customer_id, created_at, phone, updated_at, user_id) VALUES ('1e7f8a9b-0c1d-2e3f-4a5b-6c7d8e9f0a1b', now(), '11823456789', now(), 'a06eb5fd-772f-4986-b96f-a483546ae1bf');
INSERT INTO tb_customer(customer_id, created_at, phone, updated_at, user_id) VALUES ('2f8a9b0c-1d2e-3f4a-5b6c-7d8e9f0a1b2c', now(), '11734567890', now(), 'a06eb5fd-772f-4986-b96f-a483546ae1bf');
INSERT INTO tb_customer(customer_id, created_at, phone, updated_at, user_id) VALUES ('3a9b0c1d-2e3f-4a5b-6c7d-8e9f0a1b2c3d', now(), '11645678901', now(), 'a06eb5fd-772f-4986-b96f-a483546ae1bf');
INSERT INTO tb_customer(customer_id, created_at, phone, updated_at, user_id) VALUES ('4b0c1d2e-3f4a-5b6c-7d8e-9f0a1b2c3d4e', now(), '11556789012', now(), 'a06eb5fd-772f-4986-b96f-a483546ae1bf');
INSERT INTO tb_customer(customer_id, created_at, phone, updated_at, user_id) VALUES ('5c1d2e3f-4a5b-6c7d-8e9f-0a1b2c3d4e5f', now(), '11467890123', now(), 'a06eb5fd-772f-4986-b96f-a483546ae1bf');
INSERT INTO tb_customer(customer_id, created_at, phone, updated_at, user_id) VALUES ('6d2e3f4a-5b6c-7d8e-9f0a-1b2c3d4e5f6a', now(), '11378901234', now(), 'a06eb5fd-772f-4986-b96f-a483546ae1bf');
INSERT INTO tb_customer(customer_id, created_at, phone, updated_at, user_id) VALUES ('7e3f4a5b-6c7d-8e9f-0a1b-2c3d4e5f6a7b', now(), '11289012345', now(), 'a06eb5fd-772f-4986-b96f-a483546ae1bf');
INSERT INTO tb_customer(customer_id, created_at, phone, updated_at, user_id) VALUES ('8f4a5b6c-7d8e-9f0a-1b2c-3d4e5f6a7b8c', now(), '11190123456', now(), 'a06eb5fd-772f-4986-b96f-a483546ae1bf');
INSERT INTO tb_customer(customer_id, created_at, phone, updated_at, user_id) VALUES ('9a5b6c7d-8e9f-0a1b-2c3d-4e5f6a7b8c9d', now(), '11901234567', now(), 'a06eb5fd-772f-4986-b96f-a483546ae1bf');
INSERT INTO tb_customer(customer_id, created_at, phone, updated_at, user_id) VALUES ('0b6c7d8e-9f0a-1b2c-3d4e-5f6a7b8c9d0e', now(), '11812345678', now(), 'a06eb5fd-772f-4986-b96f-a483546ae1bf');
INSERT INTO tb_customer(customer_id, created_at, phone, updated_at, user_id) VALUES ('1c7d8e9f-0a1b-2c3d-4e5f-6a7b8c9d0e1f', now(), '11723456789', now(), 'a06eb5fd-772f-4986-b96f-a483546ae1bf');

-- Inserção de clientes Pessoa Física (15 registros com nomes de cientistas famosos)
INSERT INTO tb_individual_customer(birth_date, cpf, name, customer_id) VALUES ('1643-01-04', '12345678901', 'Isaac Newton', '2fa82c59-0b0b-4e01-a6fa-85cfe1f718c6');
INSERT INTO tb_individual_customer(birth_date, cpf, name, customer_id) VALUES ('1879-03-14', '10987654321', 'Albert Einstein', '4ffccccf-1852-4cf8-b2e9-d31748297755');
INSERT INTO tb_individual_customer(birth_date, cpf, name, customer_id) VALUES ('1564-02-15', '23456789012', 'Galileo Galilei', '5a1b2c3d-4e5f-6a7b-8c9d-0e1f2a3b4c5d');
INSERT INTO tb_individual_customer(birth_date, cpf, name, customer_id) VALUES ('1856-07-10', '34567890123', 'Nikola Tesla', '6b2c3d4e-5f6a-7b8c-9d0e-1f2a3b4c5d6e');
INSERT INTO tb_individual_customer(birth_date, cpf, name, customer_id) VALUES ('1867-11-07', '45678901234', 'Marie Curie', '7c3d4e5f-6a7b-8c9d-0e1f-2a3b4c5d6e7f');
INSERT INTO tb_individual_customer(birth_date, cpf, name, customer_id) VALUES ('1881-10-25', '56789012345', 'Pablo Picasso', '8d4e5f6a-7b8c-9d0e-1f2a-3b4c5d6e7f8a');
INSERT INTO tb_individual_customer(birth_date, cpf, name, customer_id) VALUES ('1452-04-15', '67890123456', 'Leonardo da Vinci', '9e5f6a7b-8c9d-0e1f-2a3b-4c5d6e7f8a9b');
INSERT INTO tb_individual_customer(birth_date, cpf, name, customer_id) VALUES ('1831-02-12', '78901234567', 'Charles Darwin', '0f6a7b8c-9d0e-1f2a-3b4c-5d6e7f8a9b0c');
INSERT INTO tb_individual_customer(birth_date, cpf, name, customer_id) VALUES ('1904-06-26', '89012345678', 'John von Neumann', '1a7b8c9d-0e1f-2a3b-4c5d-6e7f8a9b0c1d');
INSERT INTO tb_individual_customer(birth_date, cpf, name, customer_id) VALUES ('1822-09-27', '90123456789', 'Louis Pasteur', '2b8c9d0e-1f2a-3b4c-5d6e-7f8a9b0c1d2e');
INSERT INTO tb_individual_customer(birth_date, cpf, name, customer_id) VALUES ('1707-01-18', '01234567890', 'Leonhard Euler', '3c9d0e1f-2a3b-4c5d-6e7f-8a9b0c1d2e3f');
INSERT INTO tb_individual_customer(birth_date, cpf, name, customer_id) VALUES ('1885-11-07', '12345098765', 'Niels Bohr', '4d0e1f2a-3b4c-5d6e-7f8a-9b0c1d2e3f4a');
INSERT INTO tb_individual_customer(birth_date, cpf, name, customer_id) VALUES ('1901-02-28', '23456098765', 'Linus Pauling', '5e1f2a3b-4c5d-6e7f-8a9b-0c1d2e3f4a5b');
INSERT INTO tb_individual_customer(birth_date, cpf, name, customer_id) VALUES ('1918-07-18', '34567098765', 'Nelson Mandela', '6f2a3b4c-5d6e-7f8a-9b0c-1d2e3f4a5b6c');
INSERT INTO tb_individual_customer(birth_date, cpf, name, customer_id) VALUES ('1865-05-26', '45678098765', 'Gregor Mendel', '7a3b4c5d-6e7f-8a9b-0c1d-2e3f4a5b6c7d');

-- Inserção de clientes Pessoa Jurídica (15 registros com empresas de filmes/quadrinhos)
INSERT INTO tb_business_customer(cnpj, company_name, trade_name, customer_id) VALUES ('12345678000195', 'Stark Industries', 'Stark Industries Inc.', 'cfc77dc8-42a4-4073-89ee-a8dc29de8603');
INSERT INTO tb_business_customer(cnpj, company_name, trade_name, customer_id) VALUES ('23456789000123', 'Wayne Enterprises', 'Wayne Enterprises Ltda', '8b4c5d6e-7f8a-9b0c-1d2e-3f4a5b6c7d8e');
INSERT INTO tb_business_customer(cnpj, company_name, trade_name, customer_id) VALUES ('34567890000134', 'Umbrella Corporation', 'Umbrella Corp S/A', '9c5d6e7f-8a9b-0c1d-2e3f-4a5b6c7d8e9f');
INSERT INTO tb_business_customer(cnpj, company_name, trade_name, customer_id) VALUES ('45678901000145', 'Cyberdyne Systems', 'Cyberdyne Systems ME', '0d6e7f8a-9b0c-1d2e-3f4a-5b6c7d8e9f0a');
INSERT INTO tb_business_customer(cnpj, company_name, trade_name, customer_id) VALUES ('56789012000156', 'Oscorp Industries', 'Oscorp Industries S/A', '1e7f8a9b-0c1d-2e3f-4a5b-6c7d8e9f0a1b');
INSERT INTO tb_business_customer(cnpj, company_name, trade_name, customer_id) VALUES ('67890123000167', 'Initech', 'Initech LTDA', '2f8a9b0c-1d2e-3f4a-5b6c-7d8e9f0a1b2c');
INSERT INTO tb_business_customer(cnpj, company_name, trade_name, customer_id) VALUES ('78901234000178', 'Tyrell Corporation', 'Tyrell Corp ME', '3a9b0c1d-2e3f-4a5b-6c7d-8e9f0a1b2c3d');
INSERT INTO tb_business_customer(cnpj, company_name, trade_name, customer_id) VALUES ('89012345000189', 'LexCorp', 'LexCorp S/A', '4b0c1d2e-3f4a-5b6c-7d8e-9f0a1b2c3d4e');
INSERT INTO tb_business_customer(cnpj, company_name, trade_name, customer_id) VALUES ('90123456000190', 'Acme Corporation', 'Acme Corp LTDA', '5c1d2e3f-4a5b-6c7d-8e9f-0a1b2c3d4e5f');
INSERT INTO tb_business_customer(cnpj, company_name, trade_name, customer_id) VALUES ('01234567000101', 'Dunder Mifflin', 'Dunder Mifflin ME', '6d2e3f4a-5b6c-7d8e-9f0a-1b2c3d4e5f6a');
INSERT INTO tb_business_customer(cnpj, company_name, trade_name, customer_id) VALUES ('12345098765002', 'Weyland-Yutani', 'Weyland-Yutani S/A', '7e3f4a5b-6c7d-8e9f-0a1b-2c3d4e5f6a7b');
INSERT INTO tb_business_customer(cnpj, company_name, trade_name, customer_id) VALUES ('23456098765003', 'Roxxon Energy', 'Roxxon Energy LTDA', '8f4a5b6c-7d8e-9f0a-1b2c-3d4e5f6a7b8c');
INSERT INTO tb_business_customer(cnpj, company_name, trade_name, customer_id) VALUES ('34567098765004', 'S.H.I.E.L.D.', 'S.H.I.E.L.D. ME', '9a5b6c7d-8e9f-0a1b-2c3d-4e5f6a7b8c9d');
INSERT INTO tb_business_customer(cnpj, company_name, trade_name, customer_id) VALUES ('45678098765005', 'Gringotts Bank', 'Gringotts Bank S/A', '0b6c7d8e-9f0a-1b2c-3d4e-5f6a7b8c9d0e');
INSERT INTO tb_business_customer(cnpj, company_name, trade_name, customer_id) VALUES ('56789098765006', 'Blue Sun Corporation', 'Blue Sun Corp LTDA', '1c7d8e9f-0a1b-2c3d-4e5f-6a7b8c9d0e1f');
