-- phpMyAdmin SQL Dump
-- version 4.0.9
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Aug 02, 2015 at 06:06 PM
-- Server version: 5.5.34
-- PHP Version: 5.4.22

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `ranweli`
--

-- --------------------------------------------------------

--
-- Table structure for table `staffregistraion`
--

CREATE TABLE IF NOT EXISTS `staffregistraion` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `fullName` varchar(200) DEFAULT NULL,
  `address` varchar(200) DEFAULT NULL,
  `gender` varchar(45) DEFAULT NULL,
  `nic` varchar(45) DEFAULT NULL,
  `phone` varchar(45) DEFAULT NULL,
  `jobPosition` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `registerDate` datetime DEFAULT NULL,
  `status` varchar(45) DEFAULT NULL,
  `password` varchar(450) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=23 ;

--
-- Dumping data for table `staffregistraion`
--

INSERT INTO `staffregistraion` (`id`, `fullName`, `address`, `gender`, `nic`, `phone`, `jobPosition`, `email`, `registerDate`, `status`, `password`) VALUES
(1, 'aa', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '0', NULL),
(7, 'q', 'q', NULL, NULL, NULL, NULL, NULL, NULL, '0', NULL),
(8, 'q', 'q', NULL, NULL, NULL, NULL, NULL, NULL, '0', NULL),
(9, 'a', 's', 'male', 'a', NULL, NULL, NULL, NULL, '0', NULL),
(10, 'a', 's', 'male', 'a', NULL, NULL, NULL, NULL, '1', NULL),
(11, 'a', 'a', 'male', '920915210v', '0716279549', 'saab', NULL, NULL, '1', NULL),
(12, 'a', 'a', 'male', '920915210v', '0716279549', 'saab', NULL, NULL, '1', NULL),
(13, 'a', 'a', 'male', '920915210v', '0716279549', 'saab', NULL, NULL, '0', NULL),
(14, 'a', 'a', 'male', '920915210v', '0716279549', 'saab', NULL, NULL, '0', NULL),
(15, 'sithira', 'Galle', 'male', '920915210v', '0716279549', 'saab', 'a@gmail.com', NULL, '1', NULL),
(16, 'sithira', 'Galle', 'male', '920915210v', '0716279549', 'QS', 'a@gmail.com', NULL, '1', NULL),
(17, 'sithira', 'aa', 'male', '920915211v', '0716279549', 'Site Manager', 'a@gmail.com', NULL, '1', NULL),
(18, 'aa', 'a', 'male', '92091', '0716279549', 'volvo', 'a', NULL, '1', NULL),
(19, 'a', 'a', 'male', '920915218v', '0716279549', 'audi', 'a@gmail.com', '0000-00-00 00:00:00', '1', NULL),
(20, 'a', 'a', 'male', '920915213v', '0716279549', 'saab', 'a@gmail.com', NULL, '1', NULL),
(21, 'sithira Pramudith', 'Galle', 'male', '900910528v', '0716279549', 'Admin', 'a@gmail.com', NULL, '1', 'a'),
(22, 'sithira Pramudith', 'Galle\nImaduwa', 'male', '92091528v', '0716279549', 'Admin', 'sith@gmail.com', '2015-07-25 00:00:00', '1', 'aaa');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
