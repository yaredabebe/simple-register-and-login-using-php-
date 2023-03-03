<!DOCTYPE html>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>login</title>
</head>
<body>
    <div class="login in">
        <div class="login-cnn">
         <h2>BMN</h2>
         <h3>Log in to your BMN account</h3>
        <div class="sign">
            I don't have an account?
            <a href="register.html">sign up</a>
        </div>
        </div>
        <form class="login-form" onsubmit="return info();">
            <input type="email" name="email" id="email" placeholder="Email address" required><br>
            <input type="password" name="" id="password" placeholder="Password" required><i class="fa fa-eye" style="color:#fff;"></i>

            <p><a href="forgot.html">forgot password ?</a></p>
            <button class="login-button">
                Log-In
            </button>
        </form>
    </div>
    <script type="text/javascript" src="script2.js"></script>
</body>
</html>
