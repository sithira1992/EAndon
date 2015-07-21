<?php




switch($_GET['action'])  {
    case 'add_supplier' :
        add_supplier();
        break;

    case 'get_supplier' :
        get_supplier();
        break;

    case 'edit_product' :
        edit_product();
        break;
    case 'get_suppliers' :
        get_suppliers();
        break;

    case 'delete_product' :
        delete_product();
        break;

    case 'update_product' :
        update_product();
        break;
}


function add_supplier()
{
    $data = json_decode(file_get_contents("php://input"));
    $suppliername = mysql_real_escape_string($data->suppliername);
    $supplieraddress = mysql_real_escape_string($data->supplieraddress);
    $supplierphone = mysql_real_escape_string($data->supplierphone);
    $supplieremail = mysql_real_escape_string($data->supplieremail);
    $supplieritem = mysql_real_escape_string($data->supplieritem);
    $supplierunitprice = mysql_real_escape_string($data->supplierunitprice);
    $supplierstatues = mysql_real_escape_string($data->supplierstatues);

//$upswd = mysql_real_escape_string($data->pswd);
//$uemail = mysql_real_escape_string($data->email);

    $con = mysql_connect('localhost', 'root', '');
    mysql_select_db('ranweli', $con);


    $qry_em = 'select count(*) as ant from registersupplier where phone ="' . $supplierphone . '"';
    $qry_res = mysql_query($qry_em);
    $res = mysql_fetch_assoc($qry_res);

    if ($res['ant'] == 0) {
        $qry = 'INSERT INTO registersupplier (fullname,address,phone,email,supitem,unitprice,statues) values ("' . $suppliername . '","' . $supplieraddress . '","' . $supplierphone . '","' . $supplieremail . '","' . $supplieritem . '","' . $supplierunitprice . '","' . $supplierstatues . '")';
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


function get_supplier()
{

    $con = mysql_connect('localhost', 'root', '');
    mysql_select_db('ranweli', $con);

    $qry = mysql_query('SELECT * from registersupplier');

    $data = array();
    while($rows = mysql_fetch_array($qry))
    {
        $data[] = array(
            "id"            => $rows['id'],
            "full_name"     => $rows['fullname'],

        );
    }
    print_r(json_encode($data));
    return json_encode($data);
}

function get_suppliers()
{
    $con = mysql_connect('localhost', 'root', '');
    mysql_select_db('ranweli', $con);

    $qry = mysql_query('SELECT * from registersupplier');

    $data = array();
    while($rows = mysql_fetch_array($qry))
    {
        $data[] = array(
            "fullname"    => $rows['fullname'],
            "address"     => $rows['address'],
            "phone"       => $rows['phone'],
            "email"       => $rows['email'],
            "supitem"     => $rows['supitem'],
            "unitprice"   => $rows['unitprice'],
            "statues"     => $rows['statues'],



        );
    }
    print_r(json_encode($data));
    return json_encode($data);
}
?>