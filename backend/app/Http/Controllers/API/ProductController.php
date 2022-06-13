<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ProductController extends Controller
{
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'category_id' => 'required|max:191',
            'name' => 'required|max:191',
            'brand' => 'required|max:191',
            'selling_price' => 'required|max:191',
            'original_price' => 'max:191',
            'image' => 'required|image|mimes:jpeg,png,jpg|max:2048',
        ], [
            'category_id.required' => 'Categoria é obrigatória',
            'name.required' => 'Nome é obrigatório',
            'brand.required' => 'Marca é obrigatória',
            'selling_price.required' => 'Preço de Venda obrigatório',
            'image.required' => 'Imagem obrigatória',
            'image.image' => 'Este campo deve ser uma imagem',
            'image.mimes' => 'A imagem deve ser nos formatos jpeg, png, jpg'

        ]);

        if($validator->fails())
        {
            return response()->json([
                'status' => 422,
                'errors' => $validator->messages()
            ]);
        }
        else
        {
            $product = new Product;

            $product->category_id = $request->input('category_id');
            $product->name = $request->input('name');
            $product->description = $request->input('description');
            $product->brand = $request->input('brand');
            $product->selling_price = $request->input('selling_price');
            $product->original_price = $request->input('original_price');

            if($request->hasFile('image'))
            {
                $file = $request->file('image');
                $extension = $file->getClientOriginalExtension();
                $filename = time() .' . '.$extension;
                $file->move('uploads/product/', $filename);
                $product->image = 'uploads/product/'.$filename;
            }

            $product->save();

            return response()->json([
                'status' => 200,
                'message' => 'Produto Adicionado com Sucesso!'
            ]);
        }


    }
}
