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

    case 'delete_staff' :
        delete_staff();
        break;

    case 'update_staff' :
        update_staff();
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
    $status=1;

    $con = mysql_connect('localhost', 'root', '');
    mysql_select_db('ranweli', $con);

    $qry_em = 'select count(*) as cnt from staffregistraion where nic ="' . $nic . '"';
    $qry_res = mysql_query($qry_em);
    $res = mysql_fetch_assoc($qry_res);

    if ($res['cnt'] == 0) {
        $qry = 'INSERT INTO staffregistraion(fullName,address,gender,nic,phone,jobPosition,email,registerDate,status) values ("' . $fullName . '","' . $address . '","' . $gender . '","' . $nic . '","' . $phone . '","' . $position . '","' . $email . '","'.date("Y-m-d").'","'.$status.'")';
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

    $qry = mysql_query('SELECT * from staffregistraion where status=1 order by id desc');

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

        $qry = mysql_query('SELECT * from staffregistraion where status=1 order by id desc');

        $data = array();
        while($rows = mysql_fetch_array($qry))
        {
            $data[] = array(
                "id"            =>$rows['id'],
                "fullName"        => $rows['fullName'],
                "address"         => $rows['address'],
                "gender"          => $rows['gender'],
                "nic"             => $rows['nic'],
                "jobPosition"     => $rows['jobPosition'],
                "email"           => $rows['email'],
                "phone"           => $rows['phone'],
                "registerDate"    =>$rows['registerDate']

            );
        }
        print_r(json_encode($data));
        return json_encode($data);

    }
}



function update_staff()
{

    $data = json_decode(file_get_contents("php://input"));
    $id=mysql_real_escape_string($data->id);
    $fullName = mysql_real_escape_string($data->name);
    $address = mysql_real_escape_string($data->address);
    $gender = mysql_real_escape_string($data->gender);
    $nic = mysql_real_escape_string($data->nic);
    $phone = mysql_real_escape_string($data->phone);
    $jobPosition = mysql_real_escape_string($data->jobPosition );
    $email = mysql_real_escape_string($data->email);


    $con = mysql_connect('localhost', 'root', '');
    mysql_select_db('ranweli', $con);




        $qry = 'UPDATE staffregistraion SET fullName="'.$fullName.'"  , address="'.$address.'", gender="'.$gender.'",
                nic="'.$nic.'",jobPosition="'.$jobPosition.'",email="'.$email.'",phone="'.$phone.'"

        WHERE id="'.$id.'"';
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

}

function delete_staff()
{

    $data = json_decode(file_get_contents("php://input"));
    $id=mysql_real_escape_string($data->id);

    $status='0';

    $con = mysql_connect('localhost', 'root', '');
    mysql_select_db('ranweli', $con);




    $qry = 'UPDATE staffregistraion SET status="'.$status.'"

        WHERE id="'.$id.'"';
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

}
?>