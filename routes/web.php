<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ViaCepController;


Route::get('/', function () {
    return view('welcome');
});

Route::get('/search', function () {
    return view('welcome');
});

Route::get('/api/cep/{cep}', [ViaCepController::class, 'cepValidation']);

