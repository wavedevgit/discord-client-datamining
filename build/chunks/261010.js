/** chunk id: 261010, original params: e,t,n (module,exports,require) **/
var r = n(739595),
    i = n(585022),
    a = n(546809),
    o = n(34524),
    s = n(538826),
    l = n(514119),
    c = n(731214),
    u = "[object Map]",
    d = "[object Object]",
    f = "[object Promise]",
    p = "[object Set]",
    _ = "[object WeakMap]",
    h = "[object DataView]",
    m = c(r),
    g = c(i),
    E = c(a),
    y = c(o),
    b = c(s),
    O = l;
(r && O(new r(new ArrayBuffer(1))) != h || i && O(new i) != u || a && O(a.resolve()) != f || o && O(new o) != p || s && O(new s) != _) && (O = function(e) {
    var t = l(e),
        n = t == d ? e.constructor : void 0,
        r = n ? c(n) : "";
    if (r) switch (r) {
        case m:
            return h;
        case g:
            return u;
        case E:
            return f;
        case y:
            return p;
        case b:
            return _
    }
    return t
}), e.exports = O