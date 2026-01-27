/** Chunk was on web.js **/
/** chunk id: 314144, original params: e,t,n (module,exports,require) **/
"use strict";
var r, i, a, o, s = n(860511),
    l = n(985848),
    c = n(221015),
    u = n(339626),
    d = n(210140),
    f = n(503628),
    p = n(469520),
    _ = n(192819),
    h = n(447280),
    m = n(627),
    g = n(705333),
    E = n(13570),
    y = s.setImmediate,
    b = s.clearImmediate,
    O = s.process,
    v = s.Dispatch,
    A = s.Function,
    I = s.MessageChannel,
    S = s.String,
    T = 0,
    C = {},
    N = "onreadystatechange";
f(function() {
    r = s.location
});
var w = function(e) {
        if (d(C, e)) {
            var t = C[e];
            delete C[e], t()
        }
    },
    R = function(e) {
        return function() {
            w(e)
        }
    },
    P = function(e) {
        w(e.data)
    },
    D = function(e) {
        s.postMessage(S(e), r.protocol + "//" + r.host)
    };
y && b || (y = function(e) {
    m(arguments.length, 1);
    var t = u(e) ? e : A(e),
        n = _(arguments, 1);
    return C[++T] = function() {
        l(t, void 0, n)
    }, i(T), T
}, b = function(e) {
    delete C[e]
}, E ? i = function(e) {
    O.nextTick(R(e))
} : v && v.now ? i = function(e) {
    v.now(R(e))
} : I && !g ? (o = (a = new I).port2, a.port1.onmessage = P, i = c(o.postMessage, o)) : s.addEventListener && u(s.postMessage) && !s.importScripts && r && "file:" !== r.protocol && !f(D) ? (i = D, s.addEventListener("message", P, !1)) : i = N in h("script") ? function(e) {
    p.appendChild(h("script"))[N] = function() {
        p.removeChild(this), w(e)
    }
} : function(e) {
    setTimeout(R(e), 0)
}), e.exports = {
    set: y,
    clear: b
}