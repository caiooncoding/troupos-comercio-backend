<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Validator;

class ProductController extends Controller
{
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'category_id' => 'required|max:191',
            'name' => 'required|max:191',
            'brand' => 'required|max:191',
            'image' => 'required|image|mimes:jpeg,png,jpg|max:2048',
        ], [
            'category_id.required' => 'Categoria é obrigatória',
            'name.required' => 'Nome é obrigatório',
            'brand.required' => 'Marca é obrigatória',
            'image.required' => 'Imagem obrigatória',
            'image.image' => 'Este campo deve ser uma imagem',
            'image.mimes' => 'A imagem deve ser nos formatos jpeg, png, jpg'

        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 422,
                'errors' => $validator->messages()
            ]);
        } else {
            $product = new Product;

            $product->category_id = $request->input('category_id');
            $product->name = $request->input('name');
            $product->description = $request->input('description');
            $product->brand = $request->input('brand');
            $product->selling_price = $request->input('selling_price');
            $product->original_price = $request->input('original_price');

            if ($request->hasFile('image')) {
                $file = $request->file('image');
                $extension = $file->getClientOriginalExtension();
                $filename = time() . '.' . $extension;
                $file->move('uploads/product/', $filename);
                $product->image = 'uploads/product/' . $filename;
            }

            $product->save();

            return response()->json([
                'status' => 200,
                'message' => 'Produto Adicionado com Sucesso!'
            ]);
        }
    }

    public function index()
    {
        $products = Product::all();
        return response()->json([
            'status' => 200,
            'products' => $products
        ]);
    }

    public function edit($id)
    {
        $product = Product::find($id);

        if ($product) {
            return response()->json([
                'status' => 200,
                'product' => $product
            ]);
        } else {
            return response()->json([
                'status' => 404,
                'message' => 'Produto não encontrado'
            ]);
        }
    }

    public function update(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'category_id' => 'required|max:191',
            'name' => 'required|max:191',
            'brand' => 'required|max:191',
            'selling_price' => 'required|max:191',
            'original_price' => 'required|max:191',
        ], [
            'category_id.required' => 'Categoria é obrigatória',
            'name.required' => 'Nome é obrigatório',
            'brand.required' => 'Marca é obrigatória',
            'selling_price.required' => 'Preço de Venda obrigatório',
            'original_price.required' => 'Preço original obrigatório'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 422,
                'errors' => $validator->messages()
            ]);
        } else {
            $product = Product::find($id);

            if ($product) {
                $product->category_id = $request->input('category_id');
                $product->name = $request->input('name');
                $product->description = $request->input('description');
                $product->brand = $request->input('brand');
                $product->selling_price = $request->input('selling_price');
                $product->original_price = $request->input('original_price');

                if ($request->hasFile('image')) {
                    $path = $product->image;
                    if (File::exists($path)) {
                        File::delete($path);
                    }
                    $file = $request->file('image');
                    $extension = $file->getClientOriginalExtension();
                    $filename = time() . '.' . $extension;
                    $file->move('uploads/product/', $filename);
                    $product->image = 'uploads/product/' . $filename;
                }

                $product->update();

                return response()->json([
                    'status' => 200,
                    'message' => 'Produto atualizado com Sucesso!'
                ]);
            } else {
                return response()->json([
                    'status' => 404,
                    'message' => 'Produto não encontrado!'
                ]);
            }
        }
    }

    public function delete($id)

    {
        $product = Product::find($id);

        if ($product) {
            $product->delete();
            return response()->json([
                'status' => 200,
                'message' => 'Produto deletado com sucesso!'
            ]);
        } else {
            return response()->json([
                'status' => 404,
                'message' => 'Produto não encontrado'
            ]);
        }
    }

    public function byCategory($id)
    {
        $product = Product::where('category_id', $id)->get();

        return $product;
    }
}
