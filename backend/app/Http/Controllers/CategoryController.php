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
                'status' => 422,
                'errors' => $validator->messages()
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

    public function edit($id)
    {
        $category = Category::find($id);
        if ($category) {
            return response()->json([
                'status' => 200,
                'category' => $category
            ]);
        } else {
            return response()->json([
                'status' => 404,
                'message' => 'Categoria não encontrada'
            ]);
        }
    }

    public function update(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required',
        ], [
            'name.required' => 'Nome é obrigatório',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 422,
                'errors' => $validator->messages()
            ]);
        } else {

            $category = Category::find($id);

            if($category)
            {
                $category->name = $request->name;
                $category->save();

                return response()->json([
                    'status' => 200,
                    'message' => 'Categoria atualizada com sucesso'
                ]);
            } else {
                return response()->json([
                    'status' => 404,
                    'message' => 'Categoria não encontrada'
                ]);
            }

        }
    }

    public function delete($id)
    {
      $category = Category::find($id);

      if($category)
      {
        $category->delete();
        return response()->json([
            'status' => 200,
            'message' => 'Categoria deletada com sucesso!'
        ]);
      } else {
        return response()->json([
            'status' => 404,
            'message' => 'Categoria não encontrada'
        ]);
      }
    }
}
