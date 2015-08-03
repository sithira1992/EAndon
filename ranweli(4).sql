-- phpMyAdmin SQL Dump
-- version 4.1.12
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Aug 03, 2015 at 12:53 PM
-- Server version: 5.6.16
-- PHP Version: 5.5.11

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
-- Table structure for table `cost`
--

CREATE TABLE IF NOT EXISTS `cost` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `Cost_Name` varchar(45) DEFAULT NULL,
  `Amount` varchar(45) DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=4 ;

--
-- Dumping data for table `cost`
--

INSERT INTO `cost` (`id`, `Cost_Name`, `Amount`, `status`) VALUES
(3, 'aa', '1000', 1);

-- --------------------------------------------------------

--
-- Table structure for table `itemdetails`
--

CREATE TABLE IF NOT EXISTS `itemdetails` (
  `idnew_table` int(11) NOT NULL AUTO_INCREMENT,
  `fk_SupplierId` int(11) DEFAULT NULL,
  PRIMARY KEY (`idnew_table`),
  KEY `fk_supp_idx` (`fk_SupplierId`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=4 ;

--
-- Dumping data for table `itemdetails`
--

INSERT INTO `itemdetails` (`idnew_table`, `fk_SupplierId`) VALUES
(2, 7),
(3, 18);

-- --------------------------------------------------------

--
-- Table structure for table `itemregistration`
--

CREATE TABLE IF NOT EXISTS `itemregistration` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `FK_Supp_ID` int(11) NOT NULL,
  `item_name` varchar(45) DEFAULT NULL,
  `unit_price` varchar(45) DEFAULT NULL,
  `unit` varchar(45) DEFAULT NULL,
  `quantity` varchar(45) DEFAULT NULL,
  `discripton` varchar(45) DEFAULT NULL,
  `datea` varchar(45) DEFAULT NULL,
  `status` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_Supp_ID_idx` (`FK_Supp_ID`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=6 ;

--
-- Dumping data for table `itemregistration`
--

INSERT INTO `itemregistration` (`id`, `FK_Supp_ID`, `item_name`, `unit_price`, `unit`, `quantity`, `discripton`, `datea`, `status`) VALUES
(1, 2, 'Sand', '1000', '100asd', NULL, '1dasda', NULL, '1'),
(2, 3, 'Stone', '2', '2', '2', 'a', NULL, '1'),
(3, 4, 'Chip', '22', '11', '11', '1', '', '1'),
(4, 1, 'a', '22', '11', '11', '1', '', '1'),
(5, 1, 'we', '11', '11', '1', 'ss', '', '1');

-- --------------------------------------------------------

--
-- Table structure for table `loginuser`
--

CREATE TABLE IF NOT EXISTS `loginuser` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `staff_fk` int(11) DEFAULT NULL,
  `userName` varchar(45) DEFAULT NULL,
  `password` varchar(500) DEFAULT NULL,
  `status` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

--
-- Dumping data for table `loginuser`
--

INSERT INTO `loginuser` (`id`, `staff_fk`, `userName`, `password`, `status`) VALUES
(1, 1, 'sithira', 'sithira', '1');

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
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=9 ;

--
-- Dumping data for table `registersupplier`
--

INSERT INTO `registersupplier` (`id`, `fullname`, `address`, `phone`, `email`, `supitem`, `unitprice`, `statues`) VALUES
(1, 'rewtw', 'wt', '0716362464', 'mah@gmail.com', 'fhafa', 'fdsahf', 'fhsadf'),
(2, 'faf', 'afaf', '0715645879', 'fasfa@gmail.com', 'ad', 'asd', 'das'),
(3, 'ada', 'dasd', '0756895896', 'aaa@gmail.com', 'asfdas', '1', '0'),
(4, 'maheshudara', '222', '0716362465', 'mu@gmail.com', 'makaa', '1000', '1'),
(6, 'aa', 'a', '0716279549', 'a@gmail.com', 'aa', '123', '1'),
(7, 'sithira', 'aaaa', '0716479545', 'a@gmail.com', 'sand', '10000', '1'),
(8, 'sithira Pramudith', '', '', '', '', '', '0');

-- --------------------------------------------------------

--
-- Table structure for table `requestform`
--

CREATE TABLE IF NOT EXISTS `requestform` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `FK_Location` int(11) DEFAULT NULL,
  `FK_Manager` int(11) DEFAULT NULL,
  `Order_Status` varchar(45) DEFAULT NULL,
  `status` varchar(45) DEFAULT NULL,
  `Item` varchar(45) DEFAULT NULL,
  `Unit` varchar(45) DEFAULT NULL,
  `Quantity` varchar(45) DEFAULT NULL,
  `Date` varchar(45) DEFAULT NULL,
  `FK_Qs` int(11) DEFAULT NULL,
  `Qs_Status` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_Location_idx` (`FK_Location`),
  KEY `FK_ManagerName_idx` (`FK_Manager`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=32 ;

--
-- Dumping data for table `requestform`
--

INSERT INTO `requestform` (`id`, `FK_Location`, `FK_Manager`, `Order_Status`, `status`, `Item`, `Unit`, `Quantity`, `Date`, `FK_Qs`, `Qs_Status`) VALUES
(1, 5, 15, '1', '0', 'Bricks', 'Kg', '45', '2015-10-06', NULL, NULL),
(2, 5, 16, '2', '0', 'Sand', 'cube', '5', '2015-10-06', NULL, NULL),
(3, 5, 0, '1', '0', 'Cement', 'Bags', '11', '2015-10-04', NULL, NULL),
(4, 0, 16, '1', '0', 'Cement', 'cube', '45', '2015-10-04', NULL, NULL),
(5, 5, 16, '1', '0', 'Cement', 'cube', '45', '2015-10-04', NULL, NULL),
(6, 5, 14, '1', '0', 'Sand', 'cube', '2', '2015-10-04', NULL, NULL),
(7, 5, 15, '1', '0', 'Stone', 'cube', '3', '2015-10-04', NULL, NULL),
(8, 5, 16, '2', '0', 'Stone', 'cube', '5', '2015-10-04', NULL, NULL),
(12, 5, 22, '2', '0', '', 'cube', '5', '2015-07-26', NULL, NULL),
(13, 5, 22, '2', '0', '', 'cube', '5', '2015-07-26', NULL, NULL),
(14, 5, 22, '2', '0', 'Sand', 'cube', '5', '2015-07-26', 17, '1'),
(15, 5, 22, '2', NULL, 'Sand', 'cube', '10', '2015-07-26', 16, '1'),
(16, 5, 22, '2', '1', 'Sand', 'cube', '45', '2015-07-26', 17, NULL),
(17, 5, 22, '2', '1', 'Sand', 'cube', '15', '2015-07-26', 17, NULL),
(18, 5, 22, '2', '1', 'Stone', 'cube', '10', '2015-07-26', 22, NULL),
(19, 5, 22, '2', '1', 'Stone', 'cube', '12', '2015-07-26', 22, NULL),
(20, 5, 22, '2', '1', 'Stone', 'cube', '12', '2015-07-26', 22, NULL),
(21, 5, 22, '1', '1', 'Sand', 'cube', '55', '2015-05-30', 22, NULL),
(22, 5, 22, '1', '1', 'Sand', 'cube', '55', '2015-05-30', 22, NULL),
(23, 5, 22, '0', '1', 'Sand', 'cube', '55', '2015-05-30', 22, NULL),
(24, 5, 22, '1', '1', 'Sand', 'cube', '10', '2015-05-30', 17, '2'),
(25, 5, 22, '2', '1', 'Chip', 'cube', '2', '2015-05-30', 20, '1'),
(26, 5, 17, '1', '1', 'Sand', 'cube', '2', '2015-07-27', 22, '1'),
(27, 5, 22, '1', '1', 'Chip', 'cube', '5', '2015-07-27', 17, '1'),
(28, 5, 22, '2', '1', 'Stone', 'cube', '4', '2015-07-28', 16, '1'),
(29, 5, 22, '3', '1', 'Chip', 'cube', '5', '2015-05-30', 17, '1'),
(30, 5, 22, '3', '1', 'Chip', 'cube', '3', '2015-05-30', 16, '1'),
(31, 5, 22, '2', '1', 'Sand', 'cube', '6', '2015-05-30', 16, '1');

-- --------------------------------------------------------

--
-- Table structure for table `siteregistration`
--

CREATE TABLE IF NOT EXISTS `siteregistration` (
  `SiteID` int(11) NOT NULL AUTO_INCREMENT,
  `SiteAddress` varchar(45) DEFAULT NULL,
  `SiteManagerName` varchar(45) DEFAULT NULL,
  `StartDate` varchar(45) DEFAULT NULL,
  `PlanDate` varchar(45) DEFAULT NULL,
  `ActualDate` varchar(45) DEFAULT NULL,
  `Status` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`SiteID`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=6 ;

--
-- Dumping data for table `siteregistration`
--

INSERT INTO `siteregistration` (`SiteID`, `SiteAddress`, `SiteManagerName`, `StartDate`, `PlanDate`, `ActualDate`, `Status`) VALUES
(1, 'dsf', 'fdsfaaa', 'sdf', 'fds', 'fds', 'fsd'),
(2, 'sfs', 'fsdf', 'fdsf', 'fds', 'fsd', 'dsfs'),
(3, 'fsdf', 'dfs', 'sdfsd', 'sfs', 'sfds', 'sfs'),
(4, 'dsg', 'gsd', 'sdg', 'sdg', 'sdg', 'sgd'),
(5, 'Galle', 'malan', '2015/06/01', '2015/06/15', '2015/85/96', 'dsfdfsfsdfdsfsf');

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
(16, 'sithira', 'Galle', 'male', '920915210v', '0716279549', 'QS', 'sit@gmail.com', NULL, '1', 's'),
(17, 'sithira', 'aa', 'male', '920915211v', '0716279549', 'Site Manager', 'a@gmail.com', NULL, '1', NULL),
(18, 'aa', 'a', 'male', '92091', '0716279549', 'volvo', 'a', NULL, '1', NULL),
(19, 'a', 'a', 'male', '920915218v', '0716279549', 'audi', 'a@gmail.com', '0000-00-00 00:00:00', '1', NULL),
(20, 'a', 'a', 'male', '920915213v', '0716279549', 'saab', 'a@gmail.com', NULL, '1', NULL),
(21, 'sithira', 'Galle', 'male', '900910528v', '0716279549', 'Admin', 'a@gmail.com', NULL, '1', 'a'),
(22, 'sithira Pramudith', 'Galle\nImaduwa', 'male', '92091528v', '0716279549', 'Admin', 'sith@gmail.com', '2015-07-25 00:00:00', '1', 'aaa');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
