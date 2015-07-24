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
-- Table structure for table `registersupplier`
--

CREATE TABLE IF NOT EXISTS `registersupplier` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `fullname` varchar(45) DEFAULT NULL,
  `address` varchar(50) DEFAULT NULL,
  `phone` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `supitem` varchar(45) DEFAULT NULL,
  `unitprice` varchar(45) DEFAULT NULL,
  `statues` varchar(60) DEFAULT NULL,
  `ss` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=9 ;

--
-- Dumping data for table `registersupplier`
--

INSERT INTO `registersupplier` (`id`, `fullname`, `address`, `phone`, `email`, `supitem`, `unitprice`, `statues`, `ss`) VALUES
(1, 'Nuwan Kumara', 'Kottawa', '0716362464', 'nuwan@gmail.com', 'Metal', '200', '2ml Lanwa santha wane', NULL),
(2, 'Kumarasiri', 'Galle', '0715645879', 'kumara@gmail.com', 'Metal', '180', '2mli Imported', NULL),
(3, 'Sirisena', 'Thalagaha', '0756895896', 'siri@gmail.com', 'Block', '300', '', NULL),
(4, 'Jagath', 'Kuruduwathths', '0716362465', 'jagath@gmail.com', 'Block', '270', 'jhhuhui', NULL),
(5, 'Ranji', 'Manampitiya', '0716356456', 'ranji2011@gmail.com', 'Sand', '5400', 'Per Cube Price', NULL),
(6, 'Jewan', 'Mahiyanganaya', '0715485856', 'Jewanthnu@gmail.com', 'Sand', '5200', 'Per Cube', NULL),
(8, 'Sumanadasa Abewanrdana', 'Gampaha', '0715488963', 'sumanadasa2012@gmail.com', 'Sand', '5400', '', NULL);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
