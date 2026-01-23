/** Chunk was on web.js **/
/** chunk id: 720492, original params: e,t,n (module,exports,require) **/
var r = n(775078),
    i = n(69204),
    a = n(42344),
    s = n(322345),
    o = n(745196),
    l = "[object Boolean]",
    c = "[object Date]",
    u = "[object Map]",
    d = "[object Number]",
    f = "[object RegExp]",
    p = "[object Set]",
    _ = "[object String]",
    h = "[object Symbol]",
    m = "[object ArrayBuffer]",
    g = "[object DataView]",
    E = "[object Float32Array]",
    y = "[object Float64Array]",
    b = "[object Int8Array]",
    O = "[object Int16Array]",
    v = "[object Int32Array]",
    A = "[object Uint8Array]",
    I = "[object Uint8ClampedArray]",
    S = "[object Uint16Array]",
    T = "[object Uint32Array]";
e.exports = function(e, t, n) {
    var C = e.constructor;
    switch (t) {
        case m:
            return r(e);
        case l:
        case c:
            return new C(+e);
        case g:
            return i(e, n);
        case E:
        case y:
        case b:
        case O:
        case v:
        case A:
        case I:
        case S:
        case T:
            return o(e, n);
        case u:
            return new C;
        case d:
        case _:
            return new C(e);
        case f:
            return a(e);
        case p:
            return new C;
        case h:
            return s(e)
    }
}