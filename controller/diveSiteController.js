export function index(req,res){
    res.send('Lista dei diveSites.')
}

export function show(req,res){
    const id = Number(req.params.id);
    res.send('Dettagli del diveSite con id ' + id +'.');
}

export function store(req,res){
    const body = req.body;
    console.log(body);
    res.send('DiveSite creato.')
}

export function update(req,res){
    const id = Number(req.params.id);
    const body = req.body;
    console.log(body);
    res.send('DiveSite con id ' + id + ' modificato.')
}

export function destroy(req,res){
    const id = Number(req.params.id);
    res.send('DiveSite con id ' + id + ' eliminato.')
}
