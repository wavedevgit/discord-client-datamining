/** chunk id: 206845 params = (module,exports,require) **/
n.d(t, {
    A: () => h
});
var i = n(627968),
    s = n(64700),
    l = n(735438),
    a = n(451988),
    r = n(397927),
    o = n(954571),
    d = n(957565),
    c = n(927813),
    u = n(652215),
    m = n(985018);
let _ = c.A.Millis.SECOND,
    g = 2 * _,
    x = c.A.Millis.HALF_SECOND,
    A = [() => m.intl.string(m.t.MSaeTe), () => m.intl.string(m.t.UmrCw7), () => m.intl.string(m.t.gKE0Jq), () => m.intl.string(m.t["4DSKbi"]), () => m.intl.string(m.t["+8ENdT"]), () => m.intl.string(m.t.GlWHv8), () => m.intl.string(m.t.hIzxU9), () => m.intl.string(m.t["26uMPL"]), () => m.intl.string(m.t.uFs7R2), () => m.intl.string(m.t.bLXdcY), () => m.intl.string(m.t.gPg9fS)];

function h(e) {
    let {
        text: t,
        copyValue: n,
        children: c,
        onCopy: m,
        "aria-label": h,
        delay: p = x,
        dataMeticulousIgnore: T
    } = e, [f, S] = s.useState(0), [E, b] = s.useState(!1), [C, v] = s.useState(!1), [N] = s.useState(() => new a.Ep), [I] = s.useState(() => new a.Ep);
    if (s.useEffect(() => () => {
            N.stop(), I.stop()
        }, [N, I]), !d.p5) return (0, i.jsx)(i.Fragment, {
        children: c({})
    });
    let j = f >= A.length - 1,
        y = j ? r.oMw.RED : r.oMw.GREEN,
        O = E ? y : r.oMw.PRIMARY;
    return (0, i.jsx)(r.STz, {
        text: (() => {
            if (!E) return t;
            let e = (0, l.clamp)(f - 1, 0, A.length - 1),
                n = A[e] ?? A[0];
            return (0, i.jsx)(r.bfh, {
                isShaking: j,
                children: n()
            })
        })(),
        delay: p,
        "aria-label": h,
        dataMeticulousIgnore: T,
        color: O,
        forceOpen: C,
        onAnimationRest: (e, t) => {
            !C && E && t.phase === u.lLE.LEAVE && b(!1)
        },
        children: e => {
            let {
                onClick: t,
                onMouseEnter: i,
                ...s
            } = e;
            return c({
                ...s,
                onClick: () => {
                    t?.(), m?.(), (0, d.C)(n), o.default.track(u.HAw.TEXT_COPIED), C || S(f + 1), v(!0), b(!0), N.start(_, () => v(!1)), I.start(g, () => S(0))
                },
                onMouseEnter: () => {
                    E ? (N.stop(), v(!1)) : i?.()
                }
            })
        }
    })
}