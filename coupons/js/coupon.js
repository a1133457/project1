const btnDels = document.querySelectorAll(".btn-del");
const btnSearch = document.querySelector(".btn-search");
const inputDate1 = document.querySelector("input[name=date1]");
const inputDate2 = document.querySelector("input[name=date2]");
const searchTypeAll = document.querySelectorAll("input[name=searchType]");
const inputText = document.querySelector("input[name=search]");
const inputDate = document.querySelectorAll(".input-date");



// 這邊的都要記得用事件監聽!!! 因為表格會重劃


// couponsList 表格

//data table初始化
document.addEventListener('DOMContentLoaded', function () {
    $('#dataTable').DataTable({
        paging: false,        // 不要分頁
        searching: false,     // 不要搜尋
        info: false,          // 不要 "顯示第 X 至 X 筆 共 X 筆"
        ordering: false,      // 不要排序
        autoWidth: false,     // 不自動加寬
        language: {
            url: '//cdn.datatables.net/plug-ins/1.11.3/i18n/zh-HANT.json'
        },
        // columnDefs: [
        //     { width: '82px', targets: 0 },
        //     { width: '250px', targets: 1 },
        //     { width: '120px', targets: 2 },
        //     { width: '140px', targets: 3 },
        //     { width: '120px', targets: 4 },
        //     { width: '120px', targets: 5 },
        //     { width: '100px', targets: 6 },
        //     { width: '250px', targets: 7 },
        //     { width: '100px', targets: 8 }
        // ]
    });
});

// 刪除
document.addEventListener('click', function (event) {
    if (event.target.closest('.btn-del')) {
        const btn = event.target.closest('.btn-del');
        console.log('要刪除 ID:', btn.dataset.id);
        window.location.href = `doDelete.php?id=${btn.dataset.id}`;
    }
});

// 搜尋

btnSearch.addEventListener("click", function () {
    const query = inputText.value;
    window.location.href = `./couponsList.php?search=${query}`;
});



// 點月曆文字 也會跑出月曆來
inputDate.forEach(input => {
    input.addEventListener("click", (e) => {
        e.target.showPicker?.();
    });
});











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






