BSpline
=======

A simple and fast uniform-knot BSpline curve implementation by javascript.
Usually, BSpline's basis function is defined recursively by De Boor's algorithm. But this library includes pre-calculated uniform-knot BSpline basis. Thus, the library works very fast. 

Usage:

    var spline = new BSpline(points,degree,copy [optional]);
    spline.calcAt(t);

* *points* : The array of points. Array of any dimensional vector is OK.  
* *degree* : The degree of BSpline curve. *degree* should be 2,3,4 or 5.   
* *copy* : This is optional. If this is omitted, BSpline uses the *points* itself. If true, BSpline copies *points* so that changes of *points* don't affect the curve.  
* *t* : The parametor of BSpline. t is in [0,1]. If t = 0 then returns first point of *points*. If t = 1 then returns last point of *points*.

Example:

    var points = [[1,2],[2,3],[3,4]];
    var spline = new BSpline(points,3); //making BSpline
    for(var t = 0;t<=1;t+=0.01){
        var p = spline.calcAt(t); 
        draw(p);
    }
    
Demo is available [here](http://tagussan.rdy.jp/singleProjects/BSpline/ "Demo")
