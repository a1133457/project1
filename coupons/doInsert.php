<?php
require_once "./connect.php";
require_once "./utilities.php";


// if(!isset($_POST["category"])){
//   alertAndBack("請填寫分類");
//   exit;
// }

$name = htmlspecialchars($_POST["name"]);
$code = htmlspecialchars($_POST["code"]);
$discountType = intval($_POST["discount-type"]);
$discount = floatval($_POST["discount"]);
$minDiscount = intval($_POST["min-discount"]);
$maxAmount = $_POST["max-amount"] === "" ? null : intval($_POST["max-amount"]);
$meberLevels = $_POST["member-levels"]; // 還沒處理
$categories = $_POST["categories"]; // 還沒處理
$expireType= $_POST["expire-type"];
$startAt = $_POST["start-at"];
$endAt = $_POST["end-at"];
$validDays = intval($_POST["valid-days"]);

if ($expireType == "fixed") {
    $validDays = null;
} else{
    $startAt = null;
    $endAt = null;
}


// $count = count($names);
// $countCategory = count($categorys);

// if($count != $countCategory){
//   alertAndBack("請填寫分類");
//   exit;
// }

// $emptyCheck = false;
// for($i = 0;$i < $count;$i++){
//   $name = $names[$i];
//   $content = $contents[$i];
//   if($name == "" || $content == ""){
//     $emptyCheck = true;
//   }
// }

// if($emptyCheck == true){
//   echo "請填寫全部欄位";
//   goBack();
//   exit;
// }



$sql = "INSERT INTO `coupons` (`name`, `code`, `discount_type`, `discount`, `min_discount`, `max_amount`, `start_at`, `end_at`, `valid_days`) VALUES (:name, :code, :discount_type, :discount, :min_discount, :max_amount, :start_at, :end_at, :valid_days);";


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