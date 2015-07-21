<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 7/4/2015
 * Time: 9:33 PM
 */

switch($_GET['action'])  {
    case 'add_item' :
        add_item();
        break;

    case 'get_product' :
        get_product();
        break;

    case 'edit_product' :
        edit_product();
        break;

    case 'delete_product' :
        delete_product();
        break;

    case 'update_product' :
        update_product();
        break;
}



function add_item()
{
    $data = json_decode(file_get_contents("php://input"));
    $suppId = mysql_real_escape_string($data->suppId);
    $item = mysql_real_escape_string($data->item);
    $itemunite = mysql_real_escape_string($data->itemunite);
    $itemunitprice = mysql_real_escape_string($data->itemunitprice);
    $itemquantity = mysql_real_escape_string($data->itemquantity);
    $itemdescription = mysql_real_escape_string($data->itemdescription);
    $itemdate = mysql_real_escape_string($data->itemdate);
  //$upswd = mysql_real_escape_string($data->pswd);
//$uemail = mysql_real_escape_string($data->email);

    $con = mysql_connect('localhost', 'root', '');
    mysql_select_db('ranweli', $con);

    $qry_em = 'select count(*) as itm from itemregistration where item_name ="' . item . '"';
    $qry_res = mysql_query($qry_em);
    $res = mysql_fetch_assoc($qry_res);

    if ($res['cnt'] == 0) {
        $qry = 'INSERT INTO itemregistration (FK_Supp_ID,item_name,unit_price,unit,quantity,discripton,datea) values ("' . $suppId . '","' . $item . '","' . $itemunite . '","' . $itemunitprice . '","' . $itemquantity . '","' . $itemdescription .'","'.$itemdate.'")';
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
?>