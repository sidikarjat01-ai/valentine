<!DOCTYPE html>
<html lang="id">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>For You My Lovee</title>
    <link rel="stylesheet" href="<?= base_url('assets/login/style.css'); ?>">
</head>

<body>

    <div class="heart-bg"></div>

    <div class="login-container">
        <div class="card">
            <div class="heart-icon">❤️</div>
            <h2>Masukin Tanggal Jadian Kita</h2>

            <form action="<?php echo site_url('login/proses'); ?>" method="post">
                <div class="input-group">
                    <input
                        type="password"
                        name="nama"
                        placeholder="DD/MM/YYYY"
                        required>
                </div>

                <form id="loginForm" action="<?php echo site_url('login/proses'); ?>" method="post">
                    <button type="submit" class="btn-love">Masuk ke Hatiku</button>
                </form>
            </form>

            <?php if ($this->session->flashdata('error')): ?>
                <p class="error-msg">
                    <?= $this->session->flashdata('error'); ?>
                </p>
            <?php endif; ?>
        </div>
    </div>

    <script src="<?= base_url('assets/login/script.js'); ?>"></script>
</body>

</html>