webpackJsonp([5],{0:function(t,a,l){t.exports=l(55)},55:function(t,a,l){(function(t){function a(){var a=t("#catalogID").val();console.log("selectDefaultCatalog._catalogID="+a),t("#catalogSelect").val(a)}l(15),l(56),a(),t("#catalogSelect").change(function(l){var o=t(this).find("option:selected").attr("pid");t(this).find("option:selected").val();if(console.log("_pid="+o),!o||0!=o)return alert("不能选择子类!"),a(),!1}),t("#submitCateAdd").click(function(a){var l=t("#catalogSelect").find("option:selected").val();""==l&&(l=0),t("#catalogID").val(l),t("#form").submit()})}).call(a,l(2))}});