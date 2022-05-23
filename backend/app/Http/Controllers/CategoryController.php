<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;


class CategoryController extends Controller
{
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required',
        ], [
            'name.required' => 'Nome é obrigatório',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'validation_errors' => $validator->messages()
            ]);
        } else {
            Category::create([
                'name' => $request->name,
            ]);


            return response()->json([
                'status' => 200,
                'message' => 'Categoria registrada com sucesso'
            ]);
        }
    }

    public function index()
    {
        $categories = Category::all();

        return response()->json($categories);
    }
}
