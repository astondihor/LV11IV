<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::resource('users', \App\Http\Controllers\Admin\UsersController::class);

Route::get('/examples', function () {
    return Inertia::render('Examples/Index');
})->middleware(['auth', 'verified'])->name('examples.index');
Route::get('/examples/forms', function () {
    return Inertia::render('Examples/Forms');
})->middleware(['auth', 'verified'])->name('examples.forms');