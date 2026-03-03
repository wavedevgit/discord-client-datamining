/** chunk id: 206845, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => m
});
var r = n(627968),
    l = n(64700),
    i = n(735438),
    a = n(451988),
    o = n(397927),
    s = n(954571),
    c = n(957565),
    u = n(927813),
    d = n(652215),
    f = n(985018);
let p = u.A.Millis.SECOND,
    h = 2 * p,
    g = u.A.Millis.HALF_SECOND,
    v = [() => f.intl.string(f.t.MSaeTe), () => f.intl.string(f.t.UmrCw7), () => f.intl.string(f.t.gKE0Jq), () => f.intl.string(f.t["4DSKbi"]), () => f.intl.string(f.t["+8ENdT"]), () => f.intl.string(f.t.GlWHv8), () => f.intl.string(f.t.hIzxU9), () => f.intl.string(f.t["26uMPL"]), () => f.intl.string(f.t.uFs7R2), () => f.intl.string(f.t.bLXdcY), () => f.intl.string(f.t.gPg9fS)];

function m(e) {
    let {
        text: t,
        copyValue: n,
        children: u,
        onCopy: f,
        "aria-label": m,
        delay: b = g,
        dataMeticulousIgnore: A
    } = e, [E, y] = l.useState(0), [x, S] = l.useState(!1), [k, C] = l.useState(!1), [I] = l.useState(() => new a.Ep), [D] = l.useState(() => new a.Ep);
    if (l.useEffect(() => () => {
            I.stop(), D.stop()
        }, [I, D]), !c.p5) return (0, r.jsx)(r.Fragment, {
        children: u({})
    });
    let M = E >= v.length - 1,
        N = M ? o.oMw.RED : o.oMw.GREEN,
        L = x ? N : o.oMw.PRIMARY;
    return (0, r.jsx)(o.STz, {
        text: (() => {
            if (!x) return t;
            let e = (0, i.clamp)(E - 1, 0, v.length - 1),
                n = v[e] ?? v[0];
            return (0, r.jsx)(o.bfh, {
                isShaking: M,
                children: n()
            })
        })(),
        delay: b,
        "aria-label": m,
        dataMeticulousIgnore: A,
        color: L,
        forceOpen: k,
        onAnimationRest: (e, t) => {
            !k && x && t.phase === d.lLE.LEAVE && S(!1)
        },
        children: e => {
            let {
                onClick: t,
                onMouseEnter: r,
                ...l
            } = e;
            return u({
                ...l,
                onClick: () => {
                    t?.(), f?.(), (0, c.C)(n), s.default.track(d.HAw.TEXT_COPIED), k || y(E + 1), C(!0), S(!0), I.start(p, () => C(!1)), D.start(h, () => y(0))
                },
                onMouseEnter: () => {
                    x ? (I.stop(), C(!1)) : r?.()
                }
            })
        }
    })
}