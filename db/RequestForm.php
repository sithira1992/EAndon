<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 7/4/2015
 * Time: 9:33 PM
 */

switch($_GET['action'])  {
    case 'add_request' :
        add_request();
        break;

    case 'get_OrderDetails' :
        get_OrderDetails();
        break;

    case 'get_OrderDetails_request' :
        get_OrderDetails_request();
        break;

    case 'delete_product' :
        delete_product();
        break;

    case 'update_request' :
        update_request();
        break;
}



function add_request()
{
    $data = json_decode(file_get_contents("php://input"));
    $locId = mysql_real_escape_string($data->locId);
    $mngId = mysql_real_escape_string($data->mngId);
    $item = mysql_real_escape_string($data->item);
    $measure = mysql_real_escape_string($data->measure);
    $quantity = mysql_real_escape_string($data->quantity);
    $date = mysql_real_escape_string($data->date);
   $to = mysql_real_escape_string($data->to);
    $status=1;
//$uemail = mysql_real_escape_string($data->email);

    $con = mysql_connect('localhost', 'root', '');
    mysql_select_db('ranweli', $con);


{
        $qry = 'INSERT INTO requestform (FK_Location,FK_Manager,Item,Unit,Quantity,Date,FK_Qs,Qs_Status,status,Order_Status) values ("' . $locId . '","' . $mngId . '","' . $item . '","' . $measure . '","' . $quantity . '","' . $date .'","'.$to.'","'.$status.'","'.$status.'","'.$status.'")';
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
}


function get_OrderDetails()
{

    $con = mysql_connect('localhost', 'root', '');
    mysql_select_db('ranweli', $con);

    $qry = mysql_query('SELECT r.id,st.fullname,s.SiteAddress,r.Item,r.Unit,r.Quantity,r.Date,r.Order_Status FROM ranweli.requestform r, ranweli.siteregistration s,ranweli.staffregistraion st
where r.FK_Location=s.SiteID and r.FK_Manager=st.id and r.status=1 order by r.id desc ');

    $data = array();
    while($rows = mysql_fetch_array($qry))
    {
        $data[] = array(
            "id"            => $rows['id'],
            "fullname"     => $rows['fullname'],
            "SiteAddress"     => $rows['SiteAddress'],
            "Item"     => $rows['Item'],
            "Unit"     => $rows['Unit'],
            "Quantity"     => $rows['Quantity'],
            "Date"     => $rows['Date'],
            "Status"    =>$rows['Order_Status']
        );
    }
    print_r(json_encode($data));
    return json_encode($data);

}



function update_request()
{
    $data = json_decode(file_get_contents("php://input"));
    $quantity = mysql_real_escape_string($data->quantity);
    $id = mysql_real_escape_string($data->id);
    $status= mysql_real_escape_string($data->status);
    $position=mysql_real_escape_string($data->position);

    if($position=='QS'){
        $FK_Qs='Qs_Status';
        $Stat='2';
        echo $FK_Qs;

    }
    $con = mysql_connect('localhost', 'root', '');
    mysql_select_db('ranweli', $con);




    $qry = 'UPDATE requestform SET Quantity="'.$quantity.'",Order_Status="'.$status.'",'.$FK_Qs.'="'.$Stat.'"

        WHERE id="'.$id.'"';

    echo $qry;

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


function get_OrderDetails_request()
{
    $data = json_decode(file_get_contents("php://input"));
    $id = mysql_real_escape_string($data->id);




 // echo 'lol'.$id;
  //  echo 'lol'.$id;
    $con = mysql_connect('localhost', 'root', '');
    mysql_select_db('ranweli', $con);

    $qry = mysql_query('Select
  r.id,
  r.FK_Manager,
  st.fullName as Manager_Name,
  r.FK_Location,
  s.SiteAddress,
  r.Item,
  r.Unit,
  r.Quantity,
  r.Date,
  r.Qs_Status,
  r.FK_Qs,
  ranweli.staffregistraion.fullName As Qs_Name


From
  ranweli.requestform r Inner Join
  ranweli.staffregistraion On r.FK_Qs = ranweli.staffregistraion.id,
  ranweli.staffregistraion st,
  ranweli.siteregistration s
Where
  r.FK_Location = s.SiteID And
  r.FK_Manager = st.id And
  r.status = 1 and r.Qs_Status=1 And
  r.Fk_Qs="'.$id.'"');

    $data = array();

    if ($qry) {

        while($rows = mysql_fetch_array($qry))
        {
            $data[] = array(
                "id"            => $rows['id'],
                "fullname"     => $rows['Manager_Name'],
                "to"     => $rows['Qs_Name'],
                "SiteAddress"     => $rows['SiteAddress'],
                "Item"     => $rows['Item'],
                "Unit"     => $rows['Unit'],
                "Quantity"     => $rows['Quantity'],
                "Date"     => $rows['Date'],
            );
        }

    } else {
        $arr = array('msg' => "", 'error' => 'Error In inserting record');
        $jsn = json_encode($arr);
        print_r($jsn);
    }

    print_r(json_encode($data));
    return json_encode($data);

}


?>