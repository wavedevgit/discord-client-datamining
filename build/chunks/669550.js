/** chunk id: 669550 params = (module,exports,require) **/
n.d(t, {
    Ay: () => m,
    KA: () => u,
    jL: () => c
});
var i = n(64700),
    s = n(839214),
    l = n(419954),
    r = n(236077),
    a = n(478686),
    o = n(124059);
let d = (0, s.D)(() => ({
    enabled: !1
}));

function c(e) {
    d.setState({
        enabled: e
    })
}

function u() {
    return d.useField("enabled")
}

function m(e, t) {
    let n = i.useMemo(() => (0, l.hl)(e), [e]),
        s = g(n, t ?? ""),
        o = g(n, "");
    return i.useMemo(() => {
        let e = new r.A,
            t = new r.A;
        return (0, a.A)(n, o, t), {
            node: (0, a.A)(n, s, e) ?? {
                ...n,
                layout: []
            },
            visibleDirectory: e,
            accessibleDirectory: t
        }
    }, [s, o, n])
}

function g(e, t) {
    let n = u(),
        s = (0, o.A)(e, t, n),
        [l, r] = i.useState(s),
        a = function(e, t) {
            if (e.size !== t.size) return !0;
            for (let n of e)
                if (!t.has(n)) return !0;
            return !1
        }(l, s);
    return i.useEffect(() => {
        a && r(s)
    }, [a, s]), l
}