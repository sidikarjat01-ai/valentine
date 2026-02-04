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
        // kalau sudah login, langsung ke welcome
        if ($this->session->userdata('login') == TRUE) {
            redirect('login/welcome');
        }

        $this->load->view('auth/v_login');
    }

    public function proses()
    {
        $password_benar = "07102025";

        $input = $this->input->post('nama', TRUE); // XSS filter
        $input_fix = trim($input);

        if ($input_fix === $password_benar) {
            $this->session->set_userdata([
                'login' => TRUE,
                'nama' => 'Putri Nayla Azzahra'
            ]);
            redirect('login/welcome');
        } else {
            $this->session->set_flashdata('error', 'Lohh kok lupaaa 😢');
            redirect('login');
        }
    }

    public function welcome()
    {
        // proteksi halaman
        if ($this->session->userdata('login') != TRUE) {
            redirect('login');
        }

        $data['nama'] = $this->session->userdata('nama');
        $this->load->view('welcome/index', $data);
    }

    public function logout()
    {
        $this->session->sess_destroy();
        redirect('login');
    }
    public function menu($page)
    {
        // proteksi session
        if ($this->session->userdata('login') != TRUE) {
            redirect('login');
        }

        echo "<h2>Menu $page</h2>";
        echo "<p>Halo, " . $this->session->userdata('nama') . "</p>";
        echo "<a href='" . site_url('login/welcome') . "'>Kembali</a>";
    }
    public function menu1()
    {
        if ($this->session->userdata('login') != TRUE) {
            redirect('login');
        }

        $data['nama'] = $this->session->userdata('nama');
        $this->load->view('menu/untuk_kamu', $data);
    }
    public function menu3()
    {
        if ($this->session->userdata('login') != TRUE) {
            redirect('login');
        }

        $data['nama'] = $this->session->userdata('nama');
        $this->load->view('menu/gallery', $data);
    }
}
