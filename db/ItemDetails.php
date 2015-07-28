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

    case 'get_items' :
        get_items();
        break;

    case 'edit_product' :
        edit_product();
        break;

    case 'delete_item' :
        delete_item();
        break;

    case 'update_item' :
        update_item();
        break;
}



function add_item()
{
    $data = json_decode(file_get_contents("php://input"));
    $suppId = mysql_real_escape_string($data->locId);
    $item = mysql_real_escape_string($data->item);
    $itemunite = mysql_real_escape_string($data->itemunite);
    $itemunitprice = mysql_real_escape_string($data->itemunitprice);
    $itemquantity = mysql_real_escape_string($data->itemquantity);
    $itemdescription = mysql_real_escape_string($data->itemdescription);
    $status=1;
  //$upswd = mysql_real_escape_string($data->pswd);
//$uemail = mysql_real_escape_string($data->email);

    $con = mysql_connect('localhost', 'root', '');
    mysql_select_db('ranweli', $con);

    $qry_em = 'select count(*) as itm from itemregistration where item_name ="' . item . '"';
    $qry_res = mysql_query($qry_em);
    $res = mysql_fetch_assoc($qry_res);

    if ($res['cnt'] == 0) {
        $qry = 'INSERT INTO itemregistration (FK_Supp_ID,item_name,unit_price,unit,quantity,discripton,registerDate,status) values ("' . $suppId . '","' . $item . '","' . $itemunite . '","' . $itemunitprice . '","' . $itemquantity . '","' . $itemdescription .'","'.date("Y-m-d").'","'.$status.'")';
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



function get_items()
{
    {

        $con = mysql_connect('localhost', 'root', '');
        mysql_select_db('ranweli', $con);

        $qry = mysql_query('SELECT * from itemregistration where status=1 order by id desc');

        $data = array();
        while($rows = mysql_fetch_array($qry))
        {
            $data[] = array(
                "item_name"        => $rows['item_name'],
                "unit_price"         => $rows['unit_price'],
                "unit"          => $rows['unit'],
                "quantity"             => $rows['quantity'],
                "discripton"     => $rows['discripton'],



            );
        }
        print_r(json_encode($data));
        return json_encode($data);

    }
}


function update_item()
{

    $data = json_decode(file_get_contents("php://input"));
    $id=mysql_real_escape_string($data->locId);
    $item_name = mysql_real_escape_string($data->item_name);
    $unit_price = mysql_real_escape_string($data->unit_price);
    $unit = mysql_real_escape_string($data->unit);
    $quantity= mysql_real_escape_string($data->quantity);
    $discripton = mysql_real_escape_string($data->discripton);



    $con = mysql_connect('localhost', 'root', '');
    mysql_select_db('ranweli', $con);




    $qry = 'UPDATE itemregistration SET item_name="'.$item_name.'"  , unit_price="'.$unit_price.'", unit="'.$unit.'",
                quantity="'.$quantity.'",discripton="'.$discripton.'"

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

function delete_item()
{

    $data = json_decode(file_get_contents("php://input"));
    $locId=mysql_real_escape_string($data->locId);

    $status='0';

    $con = mysql_connect('localhost', 'root', '');
    mysql_select_db('ranweli', $con);




    $qry = 'UPDATE itemregistration SET status="'.$status.'"

        WHERE id="'.$locId.'"';
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