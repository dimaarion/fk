<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/',[\App\Http\Controllers\MainController::class,'index']);

Route::get('/dashboard', [\App\Http\Controllers\AdminController::class,'index'])->middleware(['auth', 'verified'])->name('dashboard');
Route::get('/dashboard/menu', [\App\Http\Controllers\AdminController::class,'menu'])->middleware(['auth', 'verified'])->name('menu');

Route::post('/dashboard/menu-update', [\App\Http\Controllers\AdminController::class,'menuUpdate'])->middleware(['auth', 'verified']);

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
