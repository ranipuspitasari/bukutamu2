$(document).ready( function(){
    // mengambil data tamu
    $.getJSON('http://bukutamu.skb-banjarnegara.sch.id/public/Api', function(tamu){
        $("#dataTamu tr").remove();
        //console.log(tamu.tamu);
        $.each( tamu.tamu , function( i , data ){
            $("#dataTamu").append(`
            <tr>
            <td>${data.nomorHP}</td>
            <td>${data.nama}</td>
            <td>${data.alamat}</td>
            </tr>
            `);
        })
    });
    
    $("#bt_simpan").click( function(){
        
        // kirim ke server
        $.post('http://bukutamu.skb-banjarnegara.sch.id/public/Api/actionTambah' , {
            // tampung dan bawa data tamu

            namaTamu: $("#bt_nama").val(),
            alamat  : $("#bt_alamat").val(),
            nomorHP : $("#bt_nomorHP").val()
        } , function(status){
            console.log(status);
            // tampilkan pesan
            alert(status);

            // panggil ulang halaman
            location.reload();
        } );
    })
});