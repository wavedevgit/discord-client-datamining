/** Chunk was on web.js **/
/** chunk id: 187294, original params: e,t,n (module,exports,require) **/
"use strict";
var r = n(221015),
    i = n(446474),
    a = n(721339),
    o = n(250594),
    s = n(503199),
    l = n(327036),
    c = n(331336),
    u = n(151860),
    d = n(464046),
    f = n(739305).aTypedArrayConstructor,
    p = n(900923);
e.exports = function(e) {
    var t, n, _, h, m, g, E, y, b = a(this),
        O = o(e),
        v = arguments.length,
        A = v > 1 ? arguments[1] : void 0,
        I = void 0 !== A,
        S = c(O);
    if (S && !u(S))
        for (y = (E = l(O, S)).next, O = []; !(g = i(y, E)).done;) O.push(g.value);
    for (I && v > 2 && (A = r(A, arguments[2])), n = s(O), h = d(_ = new(f(b))(n)), t = 0; n > t; t++) m = I ? A(O[t], t) : O[t], _[t] = h ? p(m) : +m;
    return _
}