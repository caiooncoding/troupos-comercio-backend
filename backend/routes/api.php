<?php

use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\API\ProductController;
use App\Http\Controllers\CategoryController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::post('register', [AuthController::class, 'register']);
Route::post('login', [AuthController::class, 'login']);
Route::get('index', [AuthController::class, 'index']);

Route::post('/category/register', [CategoryController::class, 'register']);
Route::get('/category/show', [CategoryController::class, 'index']);

Route::post('/product', [ProductController::class, 'store']);
Route::get('/view-product', [ProductController::class, 'index']);

Route::middleware(['auth:sanctum'])->group(function () {
    Route::post('logout', [AuthController::class, 'logout']);
});

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
