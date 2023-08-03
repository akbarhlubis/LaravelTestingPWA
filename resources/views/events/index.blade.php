<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Events</title>
    @vite('resources/css/app.css')
</head>

<body>
    <h1>All Events</h1>
    @foreach ($events as $event)
        <h2>{{ $event->title ?? 'belum ada data'}}</h2>
        <p>{{ $event->description ?? 'belum ada data'}}</p>
    @endforeach

    <h1 class="font-bold text-center">Create new Events</h1>
    <form class="flex justify-center" action="{{url('/events')}}" method="post">
        @csrf
        <div class="wrapper flex flex-col w-80 p-2 items-center bg-slate-200 shadow-md rounded-md">
            {{-- create form for insert new events --}}
            <label for="title">Title</label>
            <input type="text" name="title" id="title">
            <label for="description">Description</label>
            <input type="text" name="description" id="description">
            <button type="submit">Create</button>
        </div>
    </form>
</body>

</html>
