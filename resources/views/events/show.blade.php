<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>{{$event->title}}</title>
</head>
<body>
    <h1>{{$event->title}}</h1>
    <h1>{{$event->description}}</h1>
    {{-- Ignore null data --}}
    <h1>{{$event->date ?? 'belum ada data'}}</h1>

    <h1>RSVP Event</h1>
    <form action="{{url('/events/'.$event->id.'/rsvp')}}" method="post">
        @csrf
        <input type="text" name="name" id="name">
        <input type="email" name="email" id="email">
        <button type="submit">RSVP</button>
    </form>
</body>
</html>