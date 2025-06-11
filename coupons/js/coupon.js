const btnDels = document.querySelectorAll(".btn-del");
const btnSearch = document.querySelector(".btn-search");

const inputDate1 = document.querySelector("input[name=date1]");
const inputDate2 = document.querySelector("input[name=date2]");

const searchTypeAll = document.querySelectorAll("input[name=searchType]");
const inputText = document.querySelector("input[name=search]");
const inputDate = document.querySelectorAll(".input-date");

const btnChang = document.querySelectorAll(".btn-chang");

const memberDropdownItems = document.querySelectorAll("#member-level-dropdown .dropdown-item");

const categoryDropdownItems = document.querySelectorAll("#category-dropdown .dropdown-item");



// 這邊的都要記得用事件監聽!!! 因為表格會重劃


// couponsList 表格

//data table初始化
document.addEventListener('DOMContentLoaded', function () {
    $('#dataTable').DataTable({
        paging: false,        // 不要分頁
        searching: false,     // 不要搜尋
        info: false,          // 不要 筆數
        ordering: false,      // 不要排序
        autoWidth: false,     // 不自動加寬
        language: {
            url: '//cdn.datatables.net/plug-ins/1.11.3/i18n/zh-HANT.json'
        }
    });
});

// 刪除
document.addEventListener('click', function (event) {
    if (event.target.closest('.btn-del')) {
        const btn = event.target.closest('.btn-del');
        window.location.href = `doDelete.php?id=${btn.dataset.id}`;
    }
});


// 會員篩選
memberDropdownItems.forEach(item => {
    item.addEventListener("click", function (e) {
        const value = this.getAttribute("data-value"); // 抓會員等級
        const url = new URL(window.location.href);     // 取得目前網址
        const params = url.searchParams;               // 所有參數

        // 篩選或刪除
        if (value === "") {
            params.delete("member_level");
        } else {
            params.set("member_level", value);

        }
        params.set("page", 1);
        // 重新導向（跳轉含參數的新網址）
        window.location.href = url.toString();
    });
});

// 商品篩選
categoryDropdownItems.forEach(item => {
    item.addEventListener("click", function (e) {
        const value = this.getAttribute("data-value"); 
        const url = new URL(window.location.href);     // 取得目前網址
        const params = url.searchParams;               // 所有參數

        // 篩選或刪除
        if (value === "") {
            params.delete("category"); // All  刪掉 category 篩選
        } else {
            params.set("category", value); // 設定選到的商品類別
        }
        params.set("page", 1);
        // 重新導向（跳轉含參數的新網址）
        window.location.href = url.toString();
    });
});

//搜尋
btnSearch.addEventListener("click", function () {
    const query = inputText.value;
    const url = new URL(window.location.href);
    const params = url.searchParams;

    if (query === "") {
        params.delete("search");
    } else {
        params.set("search", query);
    }

    params.set("page", 1);
    window.location.href = url.toString();
});



// 點月曆文字 也會跑出月曆來
inputDate.forEach(input => {
    input.addEventListener("click", (e) => {
        e.target.showPicker?.();
    });
});

// !日期搜尋

inputDate1.addEventListener("change", autoSearch);
inputDate2.addEventListener("change", autoSearch);

function autoSearch() {
    const date1 = inputDate1.value;
    const date2 = inputDate2.value;
    const url = new URL(window.location.href); // 取得當前網址
    url.searchParams.set("date1", date1);      // 設定 / 更新 date1
    url.searchParams.set("date2", date2);      // 設定 / 更新 date2
    window.location.href = url.toString();     // 跳轉新網址
}



















// function autoSearch() {
//     const date1 = inputDate1.value;
//     const date2 = inputDate2.value;
//     window.location.href = `./couponsList.php?date1=${date1}&date2=${date2}`;
// };


// 按鈕切換升冪降冪
// btnChang.addEventListener("click", () => {
//     window.location.href = `./couponsList.php?order=${order}`;
// });





// btnDels.forEach(function (btn) {
//     btn.addEventListener("click", delConfirm);
// });
// function delConfirm(event) {
//     const btn = event.target;
//     if (window.confirm("確定要刪除嗎?")) {
//         window.location.href = `./doDelete.php?id=${btn.dataset.id}`;
//     }
// }

// btnSearch.addEventListener("click", function () {
//     const queryType = document.querySelector("input[name=searchType]:checked").value;
//     if (queryType == "createTime") {
//         const date1 = inputDate1.value;
//         const date2 = inputDate2.value;
//         window.location.href = `./pageMsgsList.php?date1=${date1}&date2=${date2}&qType=${queryType}`;
//     } else {
//         const query = inputText.value;
//         window.location.href = `./pageMsgsList.php?search=${query}&qType=${queryType}`;
//     }
// });


// const query = document.querySelector("input[name=search]").value; 0000

// inputDate1.addEventListener("focus", function () {
//     searchTypeAll[0].checked = true;
// });

// inputDate2.addEventListener("focus", function () {
//     searchTypeAll[0].checked = true;
// });

// inputText.addEventListener("focus", function () {
//     if (searchTypeAll[0].checked) {
//         searchTypeAll[1].checked = true;
//     }
// });






