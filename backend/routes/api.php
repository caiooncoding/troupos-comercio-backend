<?php

use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\API\ProductController;
use App\Http\Controllers\CategoryController;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::post('register', [AuthController::class, 'register']);
Route::post('login', [AuthController::class, 'login']);
Route::get('/view-product', [ProductController::class, 'index']);
Route::get('/view-product/byCategory/{id}', [ProductController::class, 'byCategory']);
Route::get('/category/show', [CategoryController::class, 'index']);
Route::get('/category/{id}', [CategoryController::class, 'getCategory']);


Route::middleware(['auth:api', 'userRules'])->group(function () {
    Route::post('/category/register', [CategoryController::class, 'register']);
    Route::get('/edit-category/{id}', [CategoryController::class, 'edit']);
    Route::put('/update-category/{id}', [CategoryController::class, 'update']);
    Route::delete('/delete-category/{id}', [CategoryController::class, 'delete']);
    
    Route::post('/product', [ProductController::class, 'store']);
    Route::get('/edit-product/{id}', [ProductController::class, 'edit']);
    Route::post('/update-product/{id}', [ProductController::class, 'update']);
    Route::delete('/delete-product/{id}', [ProductController::class, 'delete']);
    
    Route::get('index', [AuthController::class, 'index']);
    Route::post('logout', [AuthController::class, 'logout']);
    Route::delete('/delete-user/{id}', [AuthController::class, 'delete']);
    Route::post('/update-user/{id}', [AuthController::class, 'update']);
    Route::get('/users/me', [AuthController::class, 'me']);
});

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
