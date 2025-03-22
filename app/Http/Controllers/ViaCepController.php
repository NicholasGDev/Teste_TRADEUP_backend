<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class ViaCepController extends Controller
{
    public function cepValidation($cep)
    {
        // Validação de formato do CEP
        if (!preg_match('/^[0-9]{8}$/', $cep)) {
            return response()->json(['error' => 'CEP inválido'], 400);
        }

        // Retorne o resultado da busca do CEP
        return $this->returnValidCepByNumber($cep);
    }

    public function returnValidCepByNumber($cep)
    {
        $response = Http::get("viacep.com.br/ws/{$cep}/json/");

        if ($response->failed() || isset($response['erro'])) {
            return response()->json(['error' => 'CEP inválido, tente novamente.'], 404);
        }

        return response()->json($response->json(), 200);
    }
}