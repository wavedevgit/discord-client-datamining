/** chunk id: 42756, original params: t,e,r (module,exports,require) **/
var n = r(210140),
    o = r(339626),
    i = r(250594),
    a = r(583178),
    u = r(77958),
    c = a("IE_PROTO"),
    s = Object,
    f = s.prototype;
t.exports = u ? s.getPrototypeOf : function(t) {
    var e = i(t);
    if (n(e, c)) return e[c];
    var r = e.constructor;
    return o(r) && e instanceof r ? r.prototype : e instanceof s ? f : null
}