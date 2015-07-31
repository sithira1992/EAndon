<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 7/4/2015
 * Time: 9:33 PM
 */

switch($_GET['action'])  {
    case 'add_Cost' :
        add_Cost();
        break;

    case 'get_Cost' :
        get_Cost();
        break;

    case 'edit_staff' :
        edit_staff();
        break;

    case 'delete_Cost' :
        delete_Cost();
        break;

    case 'update_Cost' :
        update_Cost();
        break;

    case 'get_staff' :
        get_staff();
        break;

}



function add_Cost()
{
    $data = json_decode(file_get_contents("php://input"));
    $Cost_Name = mysql_real_escape_string($data->Cost_Name);
    $Amount = mysql_real_escape_string($data->Amount);

    $status=1;

    $con = mysql_connect('localhost', 'root', '');
    mysql_select_db('ranweli', $con);

    $qry_em = 'select count(*) as cnt from cost where Cost_Name ="' . $Cost_Name . '"';
    $qry_res = mysql_query($qry_em);
    $res = mysql_fetch_assoc($qry_res);

    if ($res['cnt'] == 0) {
        $qry = 'INSERT INTO cost(Cost_Name,Amount,status) values ("' . $Cost_Name . '","' . $Amount .'","'.$status.'")';
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
function get_Cost()
{

    $con = mysql_connect('localhost', 'root', '');
    mysql_select_db('ranweli', $con);

    $qry = mysql_query('SELECT * from cost where status=1 order by id desc');

    $data = array();
    while($rows = mysql_fetch_array($qry))
    {
        $data[] = array(
            "Cost_Name"            => $rows['Cost_Name'],
            "Amount"               => $rows['Amount'],

        );
    }
    print_r(json_encode($data));
    return json_encode($data);


}


function  update_Cost()
{

    $data = json_decode(file_get_contents("php://input"));
    $id=mysql_real_escape_string($data->id);
    $Cost_Name = mysql_real_escape_string($data->Cost_Name);
    $Amount = mysql_real_escape_string($data->Amount);

    $con = mysql_connect('localhost', 'root', '');
    mysql_select_db('ranweli', $con);




    $qry = 'UPDATE cost SET Cost_Name="'.$Cost_Name.'"  , Amount="'.$Amount.'"

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

function delete_supplier()
{

    $data = json_decode(file_get_contents("php://input"));
    $id=mysql_real_escape_string($data->id);

    $statues='0';

    $con = mysql_connect('localhost', 'root', '');
    mysql_select_db('ranweli', $con);




    $qry = 'UPDATE cost SET statues="'.$statues.'"

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



