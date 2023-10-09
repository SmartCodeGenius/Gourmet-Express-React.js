CREATE DATABASE gourmetexpress;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- CREATE TABLE clientes(
--     id INTEGER PRIMARY KEY
--     ehMaiorDeIdade BOOLEAN NOT NULL
-- );

-- CREATE TABLE funcionarios(
--     id INTEGER PRIMARY KEY,
--     cnpj VARCHAR(14),
--     cargo VARCHAR(50) NOT NULL
    -- podeAdicionarERemoverPedidos BOOLEAN NOT NULL,
    -- podeAlterarEstoque BOOLEAN NOT NULL
-- );

CREATE TABLE usuarios(
    id_usuario uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    nome_usuario VARCHAR(100) NOT NULL,
    email_usuario VARCHAR(150) NOT NULL,
    senha_usuario VARCHAR(100) NOT NULL
    -- dataNasc DATE,
    -- cpf VARCHAR(11),
    -- id_cliente INTEGER,
    -- id_funcionario INTEGER,
    -- FOREIGN KEY(id_cliente) REFERENCES clientes(id),
    -- FOREIGN KEY(id_funcionario) REFERENCES funcionarios(id)
);

CREATE TABLE estabelecimentos(
    id_estabelecimento SERIAL PRIMARY KEY,
    nome_estabelecimento VARCHAR(100) NOT NULL,
    descricao_estabelecimento VARCHAR(255),
    endereco_estabelecimento VARCHAR(255) NOT NULL
);

CREATE TABLE produtos(
    id_produto SERIAL PRIMARY KEY,
    nome_produto VARCHAR(100) NOT NULL,
    preco_produto FLOAT NOT NULL,
    descricao_produto VARCHAR(255) NOT NULL,
    ingredientes_produto VARCHAR(255) NOT NULL
);

-- CREATE TABLE pedidos(
    -- id_pedido SERIAL PRIMARY KEY,
    -- id_cliente INTEGER,
    -- id_produto INTEGER,
    -- data_pedido TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, -- adicionando um campo de data e hora para o pedido
    -- FOREIGN KEY(id_cliente) REFERENCES clientes(id),
    -- FOREIGN KEY(id_produto) REFERENCES produtos(id)
-- );