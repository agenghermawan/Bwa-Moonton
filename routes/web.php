<?php

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

Route::redirect('/','/prototype/login');

Route::prefix('prototype')->group(function() {
    Route::get('/login', function(){
        return Inertia::render('Prototype/Login');
    });
      Route::get('/register', function(){
        return Inertia::render('Prototype/Register');
    })->name('prototype.register');

    Route::get('/dashboard', function(){
        return Inertia::render('Prototype/Dashboard');
    })->name('prototype.dashboard');

    Route::get('/SubscriptionPlan', function(){
        return Inertia::render('Prototype/SubscriptionPlan');
    })->name('prototype.SubscriptionPlan');

      Route::get('/movie/{slug}', function(){
        return Inertia::render('Prototype/Movie/Show');
    })->name('movie.show');
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

require __DIR__.'/auth.php';










// Route::middleware('role:admin')->group(function (){
//     Route::get('admin',function() {
//         return 'hi admin';
//     });
// });

// Route::middleware('role:user')->group(function (){
//     Route::get('user',function() {
//         return 'hi user';
//     });
// });
