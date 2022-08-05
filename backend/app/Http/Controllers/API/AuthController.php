<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    public function me()
    {
        return response()->json(Auth::user());
    }

    public function index ()
    {
       $users = User::all();

       return response()->json($users);
    }

    public function register(Request $request)
    {

        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'email' => 'required|email|max:191|unique:users,email',
            'phone' => 'required|min:11',
            'password' => 'required|min:8'
        ], [
            'name.required' => 'Nome é obrigatório',
            'email.required' => 'Email é obrigatório',
            'email.unique' => 'Email já cadastrado',
            'phone.required' => 'Número de telefone obrigatório',
            'phone.min' => 'Número de telefone deve conter 11 caracteres',
            'password.required' => 'Senha obrigatória',
            'password.min' => 'A senha deve conter no mínimo 8 caracteres'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'validation_errors' => $validator->messages()
            ]);
        } else {
            $user = User::create([
                'name' => $request->name,
                'email' => $request->email,
                'phone' => $request->phone,
                'password' => Hash::make($request->password)
            ]);
 
            return response()->json([
                'status' => 200,
                'username' => $user->name,
                'message' => 'Registrado com Sucesso'
            ]);
        }
    }

    public function login(Request $request)
    {
        $creds = $request->only(['email', 'password']);
        $user = User::where('email', $request->email)->first();

        if(!$token = auth()->attempt($creds)) {
            return response()->json([
                'status' => 401,
                'message' => 'Email ou senha incorretos!'
            ]);
        }

        return response()->json([
            'status' => 200,
            'username' => $user->name,
            'token' => $token,
            'user_type' => $user->type,
            'message' => 'Login realizado com sucesso!'
        ]);
    }

    public function logout()
    { 
        auth()->logout();
      
        return response()->json([
            'status'=>200,
            'message'=>"Deslogado com sucesso!"
        ]);
    }

    public function delete($id)
    {
        $user = User::find($id);

        if($user){
            $user->delete();

            return response()->json([
                'status'=>200,
                'message'=>"Usuário deletado com sucesso!"
            ]);
        } else {
            return response()->json([
                'status' => 404,
                'message' => 'Usuário não encontrado'
            ]);
        }
    }
}
