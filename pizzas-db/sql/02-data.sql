SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';
SET NAMES utf8mb4;
INSERT INTO `pizzas` (`id`, `name`, `price`, `base`, `ingredients`)
VALUES (
        1,
        'Margherita',
        7,
        'Tomate',
        'Basilic, Mozzarella'
    ),
    (2, 'Marinara', 6, 'Tomate', 'Ail, Origan');