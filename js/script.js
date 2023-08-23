//jQueryで「クリックイベント」を設定する


$('#tab-contents .tab[id != "tab1"]').hide();
//$()関数では、特定の属性を持つ要素や属性値を絞り込むことができます
//$('要素[属性]')
//属性値が特定の値に等しい要素だけを取得したいときは、以下のように記述します。
//$('要素[属性 = "値"]')
//属性値が特定の値に等しい要素だけを取得したいときは、以下のように記述します。
//$('要素[属性 = "値"]')
//今回は、初期設定で表示されるのはTAB1のコンテンツだけにして、それ以外の内容は非表示します。
//属性値が特定の値に等しくない要素だけを取得したいときは、以下のように記述します。
//$('要素[属性 != "値"]')
//.hide();は、特定のHTML要素を非表示にするメソッドです。
//$('#tab-contents .tab[id != "tab1"]').hide();と記述することで、
//id="tab-contents"の要素のうち、 class="tab"であり、id="tab1"ではない要素が非表示になります。

$('#tab-menu a').on('click', function(event) {
  $("#tab-contents .tab").hide();
  $("#tab-menu .active").removeClass("active");
  $(this).addClass("active");
  $($(this).attr("href")).show();
  event.preventDefault();
});