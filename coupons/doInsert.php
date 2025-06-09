<?php
require_once "./connect.php";
require_once "./utilities.php";


if(!isset($_POST["category"])){
  alertAndBack("請選擇適用商品類別");
  exit;
}

if(!isset($_POST["member-levels"])){
  alertAndBack("請選擇會員限制");
  exit;
}

$name = htmlspecialchars($_POST["name"]);
$code = htmlspecialchars($_POST["code"]);
$discountType = intval($_POST["discount-type"]);
$discount = floatval($_POST["discount"]);
$minDiscount = intval($_POST["min-discount"]);
$maxAmount = $_POST["max-amount"] === "" ? null : intval($_POST["max-amount"]);
$meberLevels = $_POST["member-levels"];
$categories = $_POST["category"]; 
$expireType= $_POST["expire-type"];
$startAt = $_POST["start-at"];
$endAt = $_POST["end-at"];
$validDays = intval($_POST["valid-days"]);

// 有效日期
if ($expireType == "fixed") {
    $validDays = null;
} else{
    $startAt = null;
    $endAt = null;
}

// $categories = $_POST["category"]; 
// $imgs = [];
// $countFile = count($_FILES["myFile"]["name"]);
// $timestamp = time();

for($i = 0 ; $i < $countFile ; $i++){

    if($_FILES["myFile"]["error"][$i] == 0){
        $ext = pathinfo($_FILES["myFile"]["name"][$i], PATHINFO_EXTENSION);
        $newFile = ($timestamp +  $i).".{$ext}";
        $file = "./uploads/$newFile";
        if(move_uploaded_file($_FILES["myFile"]["tmp_name"][$i], $file)){
          array_push($imgs, $newFile);
        }else{
          array_push($imgs, null);
        }
    }else{
      array_push($imgs, null);
    }
}


// $sql = "INSERT INTO `msgs` (`name`, `content`,`img` ,`category_id`) VALUES (?, ?, ?, ?);";

// try {
//   $stmt = $pdo->prepare($sql);
//   for($i = 0;$i < $count;$i++){
//     $name = htmlspecialchars($names[$i]);
//     $content = htmlspecialchars($contents[$i]);
//     $category = intval($categorys[$i]);
//     $img = $imgs[$i];
//     $stmt->execute([$name, $content, $img, $category]);
//   }
// } catch (PDOException $e) {
//   echo "錯誤: {{$e->getMessage()}}";
//   exit;
// }


$sql = "INSERT INTO `coupons` (`name`, `code`, `discount_type`, `discount`, `min_discount`, `max_amount`, `start_at`, `end_at`, `valid_days`) VALUES (:name, :code, :discount_type, :discount, :min_discount, :max_amount, :start_at, :end_at, :valid_days);";
$sqlCategory = "INSERT INTO `coupon_categories` (`coupon_id`, `category_id`) VALUES (?, ?)";

try {
    $stmt = $pdo->prepare($sql);
    $stmt->execute([
        ":name" => $name,
        ":code" => $code,
        ":discount_type" => $discountType,
        ":discount" => $discount,
        ":min_discount" => $minDiscount,
        ":max_amount" => $maxAmount,
        ":start_at" => $startAt,
        ":end_at" => $endAt,
        ":valid_days" => $validDays
    ]);



    // for ($i = 0; $i < $count; $i++) {
    //     $name = htmlspecialchars($names[$i]);
    //     $content = htmlspecialchars($contents[$i]);
    //     $category = intval($categorys[$i]);
    //     $img = $imgs[$i];
    //     $stmt->execute([$name, $content, $img, $category]);
    // }
} catch (PDOException $e) {
    echo "錯誤: {{$e->getMessage()}}";
    exit;
}

alertGoBack("新增優惠券成功");