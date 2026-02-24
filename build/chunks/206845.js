/** chunk id: 206845, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => b
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
    p = n(985018);
let f = u.A.Millis.SECOND,
    g = 2 * f,
    h = u.A.Millis.HALF_SECOND,
    v = [() => p.intl.string(p.t.MSaeTe), () => p.intl.string(p.t.UmrCw7), () => p.intl.string(p.t.gKE0Jq), () => p.intl.string(p.t["4DSKbi"]), () => p.intl.string(p.t["+8ENdT"]), () => p.intl.string(p.t.GlWHv8), () => p.intl.string(p.t.hIzxU9), () => p.intl.string(p.t["26uMPL"]), () => p.intl.string(p.t.uFs7R2), () => p.intl.string(p.t.bLXdcY), () => p.intl.string(p.t.gPg9fS)];

function b(e) {
    let {
        text: t,
        copyValue: n,
        children: u,
        onCopy: p,
        "aria-label": b,
        delay: m = h,
        dataMeticulousIgnore: A
    } = e, [E, y] = l.useState(0), [x, S] = l.useState(!1), [k, C] = l.useState(!1), [I] = l.useState(() => new a.Ep), [N] = l.useState(() => new a.Ep);
    if (l.useEffect(() => () => {
            I.stop(), N.stop()
        }, [I, N]), !c.p5) return (0, r.jsx)(r.Fragment, {
        children: u({})
    });
    let D = E >= v.length - 1,
        M = D ? o.oMw.RED : o.oMw.GREEN,
        w = x ? M : o.oMw.PRIMARY;
    return (0, r.jsx)(o.STz, {
        text: (() => {
            if (!x) return t;
            let e = (0, i.clamp)(E - 1, 0, v.length - 1),
                n = v[e] ?? v[0];
            return (0, r.jsx)(o.bfh, {
                isShaking: D,
                children: n()
            })
        })(),
        delay: m,
        "aria-label": b,
        dataMeticulousIgnore: A,
        color: w,
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
                    t?.(), p?.(), (0, c.C)(n), s.default.track(d.HAw.TEXT_COPIED), k || y(E + 1), C(!0), S(!0), I.start(f, () => C(!1)), N.start(g, () => y(0))
                },
                onMouseEnter: () => {
                    x ? (I.stop(), C(!1)) : r?.()
                }
            })
        }
    })
}