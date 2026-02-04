/** chunk id: 324988, original params: t,e,r (module,exports,require) **/
var n = r(344815),
    o = r(339626),
    i = r(647055),
    a = r(380744)("toStringTag"),
    u = Object,
    c = "Arguments" === i(function() {
        return arguments
    }()),
    s = function(t, e) {
        try {
            return t[e]
        } catch (t) {}
    };
t.exports = n ? i : function(t) {
    var e, r, n;
    return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof(r = s(e = u(t), a)) ? r : c ? i(e) : "Object" === (n = i(e)) && o(e.callee) ? "Arguments" : n
}