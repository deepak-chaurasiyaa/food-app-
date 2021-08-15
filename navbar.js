function navbar() {
  return `<div id="navbar">
        <h3><a href="/">Home</a></h3>

        <div class="options">
            <h3><a href="./searchbyname.html">Search Receipe</a></h3>
            <h3><a href="./receipeoftheday.html">Recipie of th Day</a></h3>
            <h3><a href="./latestreceipee.html">Latest Receipe</a></h3>
            <h3><a href="#">Register</a></h3>
            <h3><a href="#">Login</a></h3>
        </div>
    </div>
    <input type="text" id="input1" oninput="oninput()"placeholder="Enter Meal name">
    <button type="submit" onclick="show()">Submit</button>
    <div id = "data"></div>
    `;
}

export default navbar;
