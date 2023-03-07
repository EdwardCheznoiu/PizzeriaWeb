<html>
   
    <?php 
    include_once '../header.php';
    ?>

    <body>
        <form id="register-form">
            <label for="user-name" id="register-label">Nume utilizator</label><br>
            <input type="text" id="register-input" name="user-name" placeholder="Nume utilizator..."><br>
            <label for="register-email" id="register-label">Email</label><br>
            <input type="text" id="register-input" name="user-email" placeholder="Email..."><br>
            <label for="user-pwd" id="register-label">Parola</label><br>
            <input type="password" id="register-input" name="user-pwd" placeholder="Parola..."><br>
            <label for="user-pwd2" id="register-label">Repeta parola</label><br>
            <input type="password" id="register-input" name="user-pwd2" placeholder="Repeta parola..."><br>
            <label for="user-address" id="register-label">Adresa</label><br>
            <input type="text" id="register-input" name="user-address" placeholder="Adresa..."><br>
        </form>
    </body>

    <?php
    include_once '../footer.php';
    ?>
</html>




