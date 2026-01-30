/** chunk id: 612258, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => u
});
var r = n(627968),
    l = n(64700),
    i = n(620141),
    a = n(966598),
    o = n(224964),
    s = n(31408);

function c(e) {
    let {
        callTileRef: t,
        isFiring: n
    } = e, r = (0, o.A)(), i = (0, a.A)(t);
    return l.useEffect(() => {
        n && null != i && null != t && r.fire(i.x + t.clientWidth / 2, i.y + t.clientHeight / 2, {
            countMultiplier: 4
        })
    }, [t, r, n, i]), null
}

function u(e) {
    return (0, r.jsx)(i.A, {
        confettiLocation: s.k.CALL_TILE,
        children: (0, r.jsx)(c, function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    r = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                }))), r.forEach(function(t) {
                    var r;
                    r = n[t], t in e ? Object.defineProperty(e, t, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = r
                })
            }
            return e
        }({}, e))
    })
}