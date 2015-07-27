-- phpMyAdmin SQL Dump
-- version 4.0.9
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Jul 27, 2015 at 05:26 PM
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
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=23 ;

--
-- Dumping data for table `staffregistraion`
--

INSERT INTO `staffregistraion` (`id`, `fullName`, `address`, `gender`, `nic`, `phone`, `jobPosition`, `email`, `registerDate`, `status`) VALUES
(1, 'aa', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '0'),
(7, 'q', 'q', NULL, NULL, NULL, NULL, NULL, NULL, '0'),
(8, 'q', 'q', NULL, NULL, NULL, NULL, NULL, NULL, '0'),
(9, 'a', 's', 'male', 'a', NULL, NULL, NULL, NULL, '1'),
(10, 'a', 's', 'male', 'a', NULL, NULL, NULL, NULL, '1'),
(11, 'a', 'a', 'male', '920915210v', '0716279549', 'saab', NULL, NULL, '1'),
(12, 'a', 'a', 'male', '920915210v', '0716279549', 'saab', NULL, NULL, '1'),
(13, 'a', 'a', 'male', '920915210v', '0716279549', 'saab', NULL, NULL, '0'),
(14, 'a', 'a', 'male', '920915210v', '0716279549', 'saab', NULL, NULL, '0'),
(15, 'sithira', 'Galle', 'male', '920915210v', '0716279549', 'saab', 'a@gmail.com', NULL, '1'),
(16, 'sithira', 'Galle', 'male', '920915210v', '0716279549', 'QS', 'a@gmail.com', NULL, '1'),
(17, 'sithira', 'aa', 'male', '920915211v', '0716279549', 'Site Manager', 'a@gmail.com', NULL, '1'),
(18, 'aa', 'a', 'male', '92091', '0716279549', 'volvo', 'a', NULL, '0'),
(19, 'a', 'a', 'male', '920915218v', '0716279549', 'audi', 'a@gmail.com', NULL, '0'),
(20, 'a', 'a', 'male', '920915213v', '0716279549', 'saab', 'a@gmail.com', NULL, '0'),
(21, 'sithira', 'Galle', 'male', '900910528v', '0716279549', 'Admin', 'a@gmail.com', NULL, '0'),
(22, 'sithira Pramudith', 'Galle\nImaduwa\naaa', 'male', '92091528v', '0716279549', 'Admin', 'sit@gmail.com', '2015-07-25 00:00:00', '1');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
