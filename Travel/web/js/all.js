function doLike(obj) {
    var old = obj.children[1].innerHTML
    if (old == '') {
        old = 0;
    }
    old = Number(old);
    obj.children[1].innerHTML = old + 1
}

function copyAndOpenWx(obj) {
    var wx = obj.dataset.wx;
    console.log(wx)
    var Url2 = wx;
    var oInput = document.createElement('input');
    oInput.value = Url2;
    document.body.appendChild(oInput);
    oInput.select(); // 选择对象
    document.execCommand("Copy"); // 执行浏览器复制命令
    oInput.className = 'oInput';
    oInput.style.display = 'none';
    window.location.href = 'weixin://';
}

function getUrlToken(tokenname) {
    var reg = new RegExp("(^|&)" + tokenname + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return 1;
}


function showWxBox() {
    var name = document.getElementById("name").innerHTML;
    var wx_num = document.getElementById("wx_num").innerHTML;
    var tel = wx_num;
    var qr =  document.getElementById("wx_qrcode").src;
    var avatar = "img/wechat.jpg";
    var data = {name: name, wx: wx_num, tel: tel, qr: qr, avatar: avatar};

    var tipsBox = '<div class="global_warp cssAlert"><div class="public_global_tips"><h3>微信号复制成功!</h3>' +
        '<div class="public_global_tips_body"><div class="line">' +
        '<span class="userName">' +data.name + '<i class="icon icon-rz"></i></span>的微信号' +
        '<span class="wechatNum">' + data.wx + '</span>复制成功</div>立即打开微信添加好友！' +
        '<div class="wechatQr"><div>或扫描下方二维码添加好友</div><img src="' + data.qr + '" /></div>' +
        '<div class="wechatAvatar"><div>打开微信添加<font>' + data.name + '</font>好友</div>' +
        '<img src="' + data.qr + '" /></div></div>' +
        '<div class="public_global_tips_ft"><a href="weixin://" onclick="globalTipsHid()">' +
        '<span><i class="icon icon-wechat"></i>打开微信</span></a>' +
        '<a href="javascript:;" onclick="globalTipsHid()">取消</a></div></div></div>';
    $('body').append(tipsBox);
    $('.cssAlert').fadeIn();
}

function globalTipsHid() {
    $('.global_warp').fadeOut(500, function () {
        $('.global_warp').remove();
    })
}

function showModal() {
    var name = document.getElementById("name").innerHTML;
    var wx_num = document.getElementById("wx_num").innerHTML;
    var tel = wx_num;
    var qr =  document.getElementById("wx_qrcode").src;
    var avatar = "img/wechat.jpg";
    var data = {name: name, wx: wx_num, tel: tel, qr: qr, avatar: avatar};

    var modalHtml = '<div class="modal_warp"><div class="showModal"><div class="modal-title">' + data.name + '<b class="online">( 在线 )</b>,您可以:</div>';
    modalHtml += '<div class="modal-item"><a href="javascript:;" onclick=showWxBox()>复制微信( ' + data.wx + ' )</a></div>';
    modalHtml += '<div class="modal-item"><a href="tel:' + data.tel + '">拨打电话( ' + data.tel + ' )</a></div>';
    modalHtml += '<div class="modal-item"><a   onclick="copyAndOpenWx(this)">打开微信( 如无响应请手动打开 )</a></div>';
    modalHtml += '<div class="modal-item moda-item-cancel"><a href="javascript:;" onclick="hidModal()">取消</a></div>';
    modalHtml += '</div></div>';
    $('body').append(modalHtml);
    $('.modal_warp').fadeIn(300, function () {
        $('.showModal').addClass('active');
    })
    //
}

function hidModal() {
    $('.showModal').removeClass('active');
    setTimeout(function () {
        $('.modal_warp').remove();
    }, 500);
}