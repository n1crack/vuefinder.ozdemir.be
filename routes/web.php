<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

use Ozdemir\VueFinder\VueFinder;
use League\Flysystem\Local\LocalFilesystemAdapter;
use League\Flysystem\ReadOnly\ReadOnlyFilesystemAdapter;

Route::get('/', function () {
    return Inertia::render('Welcome');
});

Route::any('/vuefinder', function() {

    $vuefinder = new VueFinder([
        'local' => new ReadOnlyFilesystemAdapter(Storage::disk('local')->getAdapter()),
        'media' =>  new ReadOnlyFilesystemAdapter(new  LocalFilesystemAdapter(dirname(__DIR__).'/storage/app/media/')),
    ]);

    $config = [
        'publicLinks' => [
            'local://public' => 'http://example.test',
        ]
    ];

    $vuefinder->init($config);
});
