-- phpMyAdmin SQL Dump
-- version 3.1.3.1
-- http://www.phpmyadmin.net
--
-- Serveur: localhost
-- Généré le : Mar 03 Novembre 2009 à 12:20
-- Version du serveur: 5.1.33
-- Version de PHP: 5.2.9-2

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de données: `tchat`
--

-- --------------------------------------------------------

--
-- Structure de la table `connected`
--

CREATE TABLE IF NOT EXISTS `connected` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `pseudo` varchar(60) NOT NULL,
  `ip` varchar(15) NOT NULL,
  `date` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=6 ;

--
-- Contenu de la table `connected`
--

INSERT INTO `connected` (`id`, `pseudo`, `ip`, `date`) VALUES
(1, 'Le Raton Laveur', '', 1256953984),
(2, 'test', '127.0.0.1', 1257247228),
(3, 'lolilol', '127.0.0.1', 1256932061),
(4, 'chien', '127.0.0.1', 1256932521),
(5, 'Plop', '127.0.0.1', 1256932818);

-- --------------------------------------------------------

--
-- Structure de la table `messages`
--

CREATE TABLE IF NOT EXISTS `messages` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `pseudo` varchar(60) NOT NULL,
  `message` varchar(255) NOT NULL,
  `date` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=33 ;

--
-- Contenu de la table `messages`
--

INSERT INTO `messages` (`id`, `pseudo`, `message`, `date`) VALUES
(1, 'Le Raton Laveur', 'Super sympa ce tchat', 6050),
(2, 'Chien', 'J''aime pas les chats', 2),
(3, 'Le Raton Laveur', 'Salut le tchat marche ?', 1256926870),
(4, 'Lolilol', 'Salut ça marche ?', 1256927592),
(5, 'Lolilol', 'Salut ça marche ?', 1256927913),
(6, 'Lolilol', 'Texte pour essayer', 1256927961),
(7, 'Lolilol', 'Texte pour essayer encore une fois', 1256928012),
(8, 'Le Raton Laveur', 'Salut moi c''est le raton laveur\n', 1256928058),
(9, 'Lolilol', 'Salut comment ça va', 1256928068),
(10, 'Lolilol', 'Poster une nouvelle valeur', 1256928221),
(11, 'Le Raton Laveur', 'Salut moi c''est le raton laveur\nPoster une nouvelle valeur', 1256928232),
(12, 'Le Raton Laveur', 'Resalut\n', 1256928327),
(13, 'Lolilol', 'azeeaz', 1256928345),
(14, 'Le Raton Laveur', 'Raton\n\n', 1256928403),
(15, 'Lolilol', 'salut', 1256928409),
(16, 'Le Raton Laveur', 'lol\n', 1256928421),
(17, 'Lolilol', 'ça marche ?', 1256928424),
(18, 'Le Raton Laveur', 'azzeazea', 1256928426),
(19, 'Lolilol', 'azeaze', 1256928426),
(20, 'Le Raton Laveur', 'azeea', 1256928428),
(21, 'Lolilol', 'azeaze', 1256928429),
(22, 'Lolilol', 'rrr', 1256928441),
(23, 'Le Raton Laveur', 'tttt', 1256928443),
(24, 'Lolilol', 'yyyyy', 1256928444),
(25, 'Le Raton Laveur', 'uuuu', 1256928446),
(26, 'Lolilol', 'iiii', 1256928448),
(27, 'Le Raton Laveur', 'azazezea', 1256928526),
(28, 'Le Raton Laveur', 'azeaze', 1256930220),
(29, 'Plop', 'Salut comment ça va\n', 1256932637),
(30, 'Le Raton Laveur', 'Cool et toi ?', 1256932652),
(31, 'Plop', 'Je vais bien le tchat marche !!', 1256932662),
(32, 'test', 'encore un essai pour vérifier', 1257247224);
