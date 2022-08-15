<?php

namespace Database\Seeders;

use App\Models\Movie;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class MovieTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $movies =
        [
            [
                        'name' => "The Batman In Love",
                        'slug' => "the-batman-in-love",
                        'category' => "Action",
                        'video_url' => "https://www.youtube.com/watch?v=U6cM_o-Rbqg",
                        'thumbnail' => "https://random.imagecdn.app/500/150",
                        'rating' => 9.3,
                        'is_featured' => true,
            ],
                 [
                        'name' => "The Batman In Love",
                        'slug' => "the-batman-in-love",
                        'category' => "Action",
                        'video_url' => "https://www.youtube.com/watch?v=U6cM_o-Rbqg",
                        'thumbnail' => "https://random.imagecdn.app/500/150",
                        'rating' => 9.3,
                        'is_featured' => true,
                 ],
                    [
                        'name' => "The Batman In Love",
                        'slug' => "the-batman-in-love",
                        'category' => "Action",
                        'video_url' => "https://www.youtube.com/watch?v=U6cM_o-Rbqg",
                        'thumbnail' => "https://random.imagecdn.app/500/150",
                        'rating' => 9.3,
                        'is_featured' => true,
                    ]
        ];
        Movie::insert($movies);
    }
}
