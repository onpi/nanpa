 <!doctype html>
 <html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
 <head>
   <meta charset="utf-8">
   <meta name="viewport" content="width=device-width, initial-scale=1">
   <!-- CSRF Token -->
   <meta name="csrf-token" content="{{ csrf_token() }}">
   <title>Nanpa Today</title>
   <!-- Styles -->
   <link href="{{ asset('/css/reset.css') }}" rel="stylesheet">
   <!-- 共通パーツ -->
   <link href="{{ asset('/css/style.css') }}" rel="stylesheet">
   <!-- <link href="{{ mix('/css/app.css') }}" rel="stylesheet"> -->
   <!-- Font -->
   <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&display=swap" rel="stylesheet">
   <!-- カレンダー -->
   <!-- <link rel='stylesheet' href='https://unpkg.com/v-calendar/lib/v-calendar.min.css'> -->
   <!-- <script src='https://unpkg.com/v-calendar'></script> -->
   <script src="https://unpkg.com/vuejs-datepicker"></script>
 </head>
 <body>
 <div id="app">
   <header-component></header-component>
   <router-view></router-view>
 </div>
 <!-- Scripts -->
 <script src="{{ mix('/js/app.js') }}" defer></script>
 </body>
 <style lang="scss" scoped>
   #app {
     color: #242424;
     font-family: 'Noto Sans JP', sans-serif;
     max-width: 480px;
     margin: 0 auto;
     width: 100%;
   }
 </style>
 </html>
