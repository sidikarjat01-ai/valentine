<?php
defined('BASEPATH') or exit('No direct script access allowed');

class Login extends CI_Controller
{
    public function __construct()
    {
        parent::__construct();
        $this->load->library('session');
    }

    public function index()
    {
        if ($this->session->userdata('login') == TRUE) {
            redirect('login/welcome');
        }

        $this->load->view('auth/v_login');
    }

    public function proses()
    {
        $password_benar = "07102025";

        $input = $this->input->post('nama', TRUE);
        $input_fix = trim($input);

        if ($input_fix === $password_benar) {
            $this->session->set_userdata([
                'login' => TRUE,
                'nama'  => 'Putri Nayla Az-zahra Sayanggg ❤️❤️'
            ]);
            redirect('login/welcome');
        } else {
            $this->session->set_flashdata('error', 'Lohh kok lalii yanggg😢');
            redirect('login');
        }
    }

    public function welcome()
    {
        if ($this->session->userdata('login') != TRUE) {
            redirect('login');
        }

        $data['nama'] = $this->session->userdata('nama');
        $this->load->view('welcome/index', $data);
    }

    /* =========================
       MENU-MENU KADO
       ========================= */

    public function menu1()
    {
        $this->_cek_login();
        $data['nama'] = $this->session->userdata('nama');
        $this->load->view('menu/untuk_kamu', $data);
    }

    public function menu3()
    {
        $this->_cek_login();
        $data['nama'] = $this->session->userdata('nama');
        $this->load->view('menu/gallery', $data);
    }

    public function menu4()
    {
        $this->_cek_login();
        $data['nama'] = $this->session->userdata('nama');
        $this->load->view('menu/reasons', $data);
    }

    public function menu5()
    {
        $this->_cek_login();
        $data['nama'] = $this->session->userdata('nama');
        $this->load->view('menu/harapanku', $data);
    }

    /* 🌸 MENU BARU: KADO BUNGA */
    // TAMBAHKAN FUNGSI INI
    public function hadiah()
    {
        // Memanggil file view v_bunga
        $this->load->view('bunga/index');
    }
    public function logout()
    {
        $this->session->sess_destroy();
        redirect('login');
    }

    /* =========================
       PRIVATE HELPER
       ========================= */
    private function _cek_login()
    {
        if ($this->session->userdata('login') != TRUE) {
            redirect('login');
        }
    }
}
