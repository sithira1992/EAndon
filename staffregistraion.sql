-- phpMyAdmin SQL Dump
-- version 4.0.9
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Jul 24, 2015 at 06:28 PM
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
  `regsterDate` datetime DEFAULT NULL,
  `status` varchar(45) DEFAULT NULL,
  `rr` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=24 ;

--
-- Dumping data for table `staffregistraion`
--

INSERT INTO `staffregistraion` (`id`, `fullName`, `address`, `gender`, `nic`, `phone`, `jobPosition`, `email`, `regsterDate`, `status`, `rr`) VALUES
(1, 'Mahesh Udara', 'Galle', 'male', '920456896V', '0758596954', NULL, NULL, NULL, NULL, NULL),
(7, 'Sithira Pramudith', 'Galle', 'male', '920547856V', '0715896568', NULL, NULL, NULL, NULL, NULL),
(8, 'Kanchana Silva', 'Galle', 'male', '458758956V', '0715478582', NULL, NULL, NULL, NULL, NULL),
(9, 'Duminda Rathnayaka', 'Yakkalamulla', 'male', '58578488dV', '0715478582', NULL, NULL, NULL, NULL, NULL),
(10, 'Presanna baddewithana', 'Wakwella', 'male', '45854858V', '078547852', NULL, NULL, NULL, NULL, NULL),
(11, 'Mahasen Bandara', 'Dewata', 'male', '920915210v', '0716279549', 'saab', NULL, NULL, NULL, NULL),
(12, 'Gayashan Alwis', 'Ginthota', 'male', '920915210v', '0716279549', 'saab', NULL, NULL, NULL, NULL),
(13, 'Mawan Senanayaka', 'Hikkaduwa', 'male', '920915210v', '0716279549', 'saab', NULL, NULL, NULL, NULL),
(14, 'Malan jagath', 'Ambalangoda', 'male', '920915210v', '0716279549', 'saab', NULL, NULL, NULL, NULL),
(15, 'Saman Kumara', 'Akuressa', 'male', '920915210v', '0716279549', 'saab', 'a@gmail.com', NULL, NULL, NULL),
(16, 'Nadun Samarasinha', 'Imaduwa', 'male', '920915210v', '0716279549', 'saab', 'a@gmail.com', NULL, NULL, NULL),
(17, 'MSamantha Gunawardna', 'Pilana', 'male', '920915211v', '0716279549', 'opel', 'a@gmail.com', NULL, NULL, NULL),
(18, 'Kasun gayanga', 'Opatha', 'male', '920460348v', '0716362464', 'saab', 'mucreationz@gmail.com', NULL, NULL, NULL),
(19, 'Kasun Gunathilaka', 'Udugama', '', '', '', '', '', NULL, NULL, NULL),
(20, 'Kasun Sandeep', 'Wanchawala', 'male', '920460258V', '0716362464', 'volvo', 'mj@gmail.com', NULL, NULL, NULL),
(21, 'Naween Disanayaka', 'Bogahagoda', 'male', '920560458V', '0715263654', 'opel', 'muy@gmail.com', NULL, NULL, NULL),
(22, 'Mewan Jayasinha', 'Imaduwa', 'male', '920460345V', '0913920254', 'saab', 'mk@gmail.com', NULL, NULL, NULL),
(23, 'Dinelka Randunu', 'Imaduwa', 'male', '920460345V', '0913920254', 'Site Manager', 'mk@gmail.com', NULL, NULL, NULL);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
