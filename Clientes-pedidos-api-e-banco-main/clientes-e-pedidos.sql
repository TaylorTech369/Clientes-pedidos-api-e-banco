CREATE TABLE clientes (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL
);


CREATE TABLE pedidos (
  id SERIAL PRIMARY KEY,
  produto VARCHAR(255) NOT NULL,
  valor NUMERIC(10,2) NOT NULL,
  status VARCHAR(50) DEFAULT 'pendente',
  cliente_id INTEGER 
);


INSERT INTO clientes (nome, email) VALUES
('Ana Silva', 'ana.silva@email.com'),
('Bruno Oliveira', 'bruno.o@email.com'),
('Carla Souza', 'carla.souza@email.com'),
('Diego Santos', 'diego.s@email.com'),
('Elena Pereira', 'elena.p@email.com'),
('Fábio Costa', 'fabio.c@email.com'),
('Giovanna Lima', 'giovanna.l@email.com'),
('Henrique Rocha', 'henrique.r@email.com'),
('Isabela Martins', 'isabela.m@email.com'),
('João Vitor', 'joao.v@email.com'),
('Karen Alves', 'karen.a@email.com'),
('Leonardo Dias', 'leo.dias@email.com'),
('Marina Mendes', 'marina.m@email.com'),
('Natan Gomes', 'natan.g@email.com'),
('Olívia Castro', 'olivia.c@email.com'),
('Paulo Freire', 'paulo.f@email.com'),
('Quiteria Melo', 'quiteria.m@email.com'),
('Ricardo Ramos', 'ricardo.r@email.com'),
('Sabrina Paiva', 'sabrina.p@email.com'),
('Tiago Nunes', 'tiago.n@email.com');


INSERT INTO pedidos (produto, valor, status, cliente_id) VALUES
('Placa Mãe B550', 850.00, 'concluido', 21),
('Processador Ryzen 7', 1400.00, 'pendente', 22),
('Gabinete Mid Tower', 350.00, 'processando', 23),
('Memória DDR4 8GB', 190.00, 'concluido', 24),
('SSD NVMe 500GB', 280.00, 'cancelado', 25),
('Monitor Curvo 27"', 1500.00, 'concluido', 26),
('Mouse Sem Fio', 120.00, 'pendente', 27),
('Teclado Bluetooth', 210.00, 'concluido', 28),
('Fone com Microfone', 95.00, 'processando', 29),
('Cadeira Gamer Pro', 1850.00, 'concluido', 30),
('Webcam 4K', 750.00, 'pendente', 31),
('Water Cooler 240mm', 420.00, 'concluido', 32),
('Filtro de Linha', 55.00, 'concluido', 33),
('Pasta Térmica', 35.00, 'pendente', 34),
('Controle Xbox PC', 450.00, 'processando', 35),
('Pendrive 128GB', 90.00, 'concluido', 36),
('Mesa de Som USB', 680.00, 'cancelado', 37),
('Cabo DisplayPort', 70.00, 'concluido', 38),
('Repetidor de Sinal', 130.00, 'pendente', 39),
('Dock Station', 320.00, 'concluido', 40);

select * from pedidos




