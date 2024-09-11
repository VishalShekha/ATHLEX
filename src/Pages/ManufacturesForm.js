import React from 'react'

function ManufacturesForm() {
  return (
    <div>
        <div class="input-group mb-3">
  <span class="input-group-text" id="basic-addon1">Name</span>
  <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
</div>

<div class="input-group mb-3">
  <span class="input-group-text" id="basic-addon1">Brand</span>
  <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
</div>

        <div class="input-group mb-3">

  <span class="input-group-text" id="basic-addon1">Dimension</span>
  <input type="text" class="form-control" aria-label="Text input with dropdown button"/>
  <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</button>
  <ul class="dropdown-menu dropdown-menu-end">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
    <li><hr class="dropdown-divider"/></li>
    <li><a class="dropdown-item" href="#">Separated link</a></li>
  </ul>
</div>

<div class="input-group mb-3">

<span class="input-group-text" id="basic-addon1">Weight</span>
<input type="text" class="form-control" aria-label="Text input with dropdown button"/>
<button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</button>
<ul class="dropdown-menu dropdown-menu-end">
  <li><a class="dropdown-item" href="#">Action</a></li>
  <li><a class="dropdown-item" href="#">Another action</a></li>
  <li><a class="dropdown-item" href="#">Something else here</a></li>
  <li><hr class="dropdown-divider"/></li>
  <li><a class="dropdown-item" href="#">Separated link</a></li>
</ul>
</div>

        <div class="input-group mb-3">
  <span class="input-group-text">$</span>
  <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)"/>
  <span class="input-group-text">.00</span>
</div>

        <div class="input-group">
  <span class="input-group-text">With textarea</span>
  <textarea class="form-control" aria-label="With textarea"></textarea>
</div>
    </div>
  )
}

export default ManufacturesForm