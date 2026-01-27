/** Chunk was on web.js **/
/** chunk id: 533207, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => d
});
var r = n(627968);
n(64700);
var i = n(397927),
    a = n(729937),
    o = n(981616),
    s = n(285933),
    l = n(227005);

function c(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function u(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            c(e, t, n[t])
        })
    }
    return e
}
async function d(e, t, c) {
    let {
        hasSpotifyAccount: d,
        activity: f,
        user: p
    } = e;
    (0, l.A)(d) && null != f && null != f.sync_id && (await (0, o.dM)(), await (0, o.G8)().catch(e => ((0, i.mMO)(async () => {
        let {
            default: e
        } = await n.e("3371").then(n.bind(n, 990726));
        return t => (0, r.jsx)(e, u({}, t))
    }), Promise.reject(e))), a.OH(f, p.id), (0, s.A)(t, p, f, c))
}