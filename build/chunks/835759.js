/** chunk id: 835759, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => p
});
var r = n(627968),
    i = n(64700),
    a = n(311907),
    o = n(531685),
    s = n(620141),
    l = n(966598),
    c = n(224964);

function u(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function d(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            u(e, t, n[t])
        })
    }
    return e
}

function f(e) {
    let {
        confettiSpawnRef: t,
        shouldFire: n
    } = e, r = (0, a.bG)([o.A], () => o.A.isFocused()), s = (0, c.A)(), u = (0, l.A)(t);
    return i.useEffect(() => {
        r && n && null != u && s.fire(u.x, u.y)
    }, [s, r, u, n]), null
}

function p(e) {
    return (0, r.jsx)(s.A, {
        confettiLocation: e.confettiLocation,
        children: (0, r.jsx)(f, d({}, e))
    })
}