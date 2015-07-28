<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 7/4/2015
 * Time: 9:33 PM
 */

switch($_GET['action'])  {
    case 'add_site' :
        add_site();
        break;

    case 'get_location' :
        get_location();
        break;


    case 'get_site' :
        get_site();
        break;

    case 'delete_site' :
        delete_site();
        break;

    case ' get_sites_details' :
        get_sites_details();
        break;

    case 'update_site' :
        update_site();
        break;
}



function add_site()
{
    $data = json_decode(file_get_contents("php://input"));
    $rgAddress = mysql_real_escape_string($data->rgAddress);
    $rgmanagername = mysql_real_escape_string($data->rgmanagername);
    $rgstartdate = mysql_real_escape_string($data->rgstartdate);
    $rgplandate = mysql_real_escape_string($data->rgplandate);
    $rgpactualdate = mysql_real_escape_string($data->rgpactualdate);
    $rgstatues = mysql_real_escape_string($data->rgstatues);
    $s=1;
//$upswd = mysql_real_escape_string($data->pswd);
//$uemail = mysql_real_escape_string($data->email);

    $con = mysql_connect('localhost', 'root', '');
    mysql_select_db('ranweli', $con);

    $qry_em = 'select count(*) as snt from siteregistration where SiteManagerName ="' . $rgmanagername . '"';
    $qry_res = mysql_query($qry_em);
    $res = mysql_fetch_assoc($qry_res);

    if ($res['cnt'] == 0) {
        $qry = 'INSERT INTO siteregistration (SiteAddress,SiteManagerName,StartDate,PlanDate,ActualDate,Status,StatusOf) values ("' . $rgAddress . '","' . $rgmanagername . '","' . $rgstartdate . '","' . $rgplandate . '","' . $rgpactualdate . '","' . $rgstatues .'","'.$s.'")';
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

function get_location()
{

    $con = mysql_connect('localhost', 'root', '');
    mysql_select_db('ranweli', $con);

    $qry = mysql_query('SELECT * from siteregistration');

    $data = array();
    while($rows = mysql_fetch_array($qry))
    {
        $data[] = array(
            "id"            => $rows['SiteID'],
            "address"     => $rows['SiteAddress'],

        );
    }
    print_r(json_encode($data));
    return json_encode($data);
}
function get_site()
{

    $con = mysql_connect('localhost', 'root', '');
    mysql_select_db('ranweli', $con);

    $qry = mysql_query('SELECT * from siteregistration where StatusOf=1 order by SiteId desc');

    $data = array();
    while($rows = mysql_fetch_array($qry))
    {
        $data[] = array(
            "id"            => $rows['SiteID'],
            "address"     => $rows['SiteAddress'],
            "SiteManagerName"=> $rows['SiteManagerName'],
            "StartDate"      => $rows['StartDate'],
            "PlanDate"      => $rows['PlanDate'],
            "ActualDate"    => $rows['ActualDate'],
            "Status"        => $rows['Status']

        );
    }
    print_r(json_encode($data));
    return json_encode($data);
}


function get_sites_details()
{

    $con = mysql_connect('localhost', 'root', '');
    mysql_select_db('ranweli', $con);

    $qry = mysql_query('SELECT * from siteregistration where StatusOf=1 order by id desc');

    $data = array();
    while($rows = mysql_fetch_array($qry))
    {
        $data[] = array(
            "SiteID" =>$rows['SiteID'],
            "SiteAddress"     => $rows['SiteAddress'],
            "SiteManagerName"=> $rows['SiteManagerName'],
            "StartDate"      => $rows['StartDate'],
            "PlanDate"      => $rows['PlanDate'],
            "ActualDate"    => $rows['ActualDate'],
            "Status"        => $rows['Status']

        );
    }
    print_r(json_encode($data));
    return json_encode($data);
}



//Update Funtion


function  update_site()
{

    $data = json_decode(file_get_contents("php://input"));
    $id=mysql_real_escape_string($data->SiteID);
    $address = mysql_real_escape_string($data->address);
    $SiteManagerName = mysql_real_escape_string($data->SiteManagerName);
    $StartDate = mysql_real_escape_string($data->StartDate);
    $PlanDate = mysql_real_escape_string($data->PlanDate);
    $ActualDate = mysql_real_escape_string($data->ActualDate );
    $Status = mysql_real_escape_string($data->Status);




    $con = mysql_connect('localhost', 'root', '');
    mysql_select_db('ranweli', $con);




    $qry = 'UPDATE siteregistration SET SiteAddress="'.$address.'", SiteManagerName="'.$SiteManagerName.'",
                StartDate="'.$StartDate.'",PlanDate="'.$PlanDate.'",ActualDate="'.$ActualDate.'",Status="'.$Status.'"

        WHERE SiteID="'.$id.'"';
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


function delete_site()
{

    $data = json_decode(file_get_contents("php://input"));
    $id=mysql_real_escape_string($data->id);

    $s='0';

    $con = mysql_connect('localhost', 'root', '');
    mysql_select_db('ranweli', $con);




    $qry = 'UPDATE siteregistration SET StatusOf="'.$s.'"

        WHERE SiteID="'.$id.'"';
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