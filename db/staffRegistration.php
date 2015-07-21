<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 7/4/2015
 * Time: 9:33 PM
 */

switch($_GET['action'])  {
    case 'add_staff' :
        add_staff();
        break;

    case 'get_manager' :
        get_manager();
        break;

    case 'edit_staff' :
        edit_staff();
        break;

    case 'delete_product' :
        delete_product();
        break;

    case 'update_product' :
        update_product();
        break;

    case 'get_staff' :
        get_staff();
        break;

}



function add_staff()
{
    $data = json_decode(file_get_contents("php://input"));
    $fullName = mysql_real_escape_string($data->name);
    $address = mysql_real_escape_string($data->address);
    $gender = mysql_real_escape_string($data->gender);
    $nic = mysql_real_escape_string($data->nic);
    $phone = mysql_real_escape_string($data->phone);
    $position = mysql_real_escape_string($data->position);
    $email = mysql_real_escape_string($data->email);
//$upswd = mysql_real_escape_string($data->pswd);
//$uemail = mysql_real_escape_string($data->email);

    $con = mysql_connect('localhost', 'root', '');
    mysql_select_db('ranweli', $con);

    $qry_em = 'select count(*) as cnt from staffregistraion where nic ="' . $nic . '"';
    $qry_res = mysql_query($qry_em);
    $res = mysql_fetch_assoc($qry_res);

    if ($res['cnt'] == 0) {
        $qry = 'INSERT INTO staffregistraion (fullName,address,gender,nic,phone,jobPosition,email) values ("' . $fullName . '","' . $address . '","' . $gender . '","' . $nic . '","' . $phone . '","' . $position . '","' . $email . '")';
        $qry_res = mysql_query($qry);
        if ($qry_res) {
            $arr = array('msg' => "User Created Successfully!!!", 'error' => '');
            $jsn = json_encode($arr);
            print_r($jsn);
        } else {
            $arr = array('msg' => "", 'error' => 'Error In inserting record');
            $jsn = json_encode($arr);
            print_r($jsn);
        }
    } else {
        $arr = array('msg' => "", 'error' => 'User Already exists with same nic');
        $jsn = json_encode($arr);
        print_r($jsn);
    }
}

function get_manager()
{

    $con = mysql_connect('localhost', 'root', '');
    mysql_select_db('ranweli', $con);

    $qry = mysql_query('SELECT * from staffregistraion ');

    $data = array();
    while($rows = mysql_fetch_array($qry))
    {
        $data[] = array(
            "id"            => $rows['id'],
            "full_name"     => $rows['fullName'],

        );
    }
    print_r(json_encode($data));
    return json_encode($data);


    }

function get_staff()
{
    {

        $con = mysql_connect('localhost', 'root', '');
        mysql_select_db('ranweli', $con);

        $qry = mysql_query('SELECT * from staffregistraion');

        $data = array();
        while($rows = mysql_fetch_array($qry))
        {
            $data[] = array(
                "fullName"        => $rows['fullName'],
                "address"         => $rows['address'],
                "gender"          => $rows['gender'],
                "nic"             => $rows['nic'],
                "jobPosition"     => $rows['jobPosition'],
                "email"           => $rows['email'],
                "phone"           => $rows['phone'],

            );
        }
        print_r(json_encode($data));
        return json_encode($data);

    }
}
?>