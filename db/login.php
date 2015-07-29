<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 7/4/2015
 * Time: 9:33 PM
 */

switch($_GET['action'])  {
    case 'check_Credential' :
        check_Credential();
        break;

    case 'GetByUsername' :
        GetByUsername();
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



function check_Credential()
{
    $data = json_decode(file_get_contents("php://input"));
    $email = mysql_real_escape_string($data->username);
    $password = mysql_real_escape_string($data->password);

    $status=1;

    $con = mysql_connect('localhost', 'root', '');
    mysql_select_db('ranweli', $con);


    $qry_em = 'select count(*) as cnt from staffregistraion where status=1 and email="'.$email.'" and password="'.$password.'"';
    $qry_res = mysql_query($qry_em);
    $res = mysql_fetch_assoc($qry_res);

    if($res['cnt'] == 1) {
        $qry = mysql_query('SELECT * from staffregistraion where status=1 and email="' . $email . '" and password="' . $password . '"');

        $data = array();
        while ($rows = mysql_fetch_array($qry)) {
            $data[] = array(
                "fullName" => $rows['fullName'],
                "jobPosition" => $rows['jobPosition'],
                "id" => $rows['id']

            );
        }
        print_r(json_encode($data));
        return json_encode($data);
    }else{
        return 0;
    }

}


function GetByUsername()
{
    $data = json_decode(file_get_contents("php://input"));
    $email = mysql_real_escape_string($data->username);


    $status=1;

    $con = mysql_connect('localhost', 'root', '');
    mysql_select_db('ranweli', $con);



    $qry = mysql_query('SELECT * from staffregistraion where status=1 and email="'.$email.'" ');

    $data = array();
    while($rows = mysql_fetch_array($qry))
    {
        $data[] = array(
            "fullName"            => $rows['fullName'],
            "jobPosition"               => $rows['jobPosition'],
            "id" =>$rows['id']

        );
    }
    print_r(json_encode($data));
    return json_encode($data);
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
