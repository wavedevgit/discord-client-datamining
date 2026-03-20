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
    _ = n(985018);
let m = c.A.Millis.SECOND,
    g = 2 * m,
    A = c.A.Millis.HALF_SECOND,
    x = [() => _.intl.string(_.t.MSaeTe), () => _.intl.string(_.t.UmrCw7), () => _.intl.string(_.t.gKE0Jq), () => _.intl.string(_.t["4DSKbi"]), () => _.intl.string(_.t["+8ENdT"]), () => _.intl.string(_.t.GlWHv8), () => _.intl.string(_.t.hIzxU9), () => _.intl.string(_.t["26uMPL"]), () => _.intl.string(_.t.uFs7R2), () => _.intl.string(_.t.bLXdcY), () => _.intl.string(_.t.gPg9fS)];

function h(e) {
    let {
        text: t,
        copyValue: n,
        children: c,
        onCopy: _,
        "aria-label": h,
        delay: p = A,
        dataMeticulousIgnore: T
    } = e, [E, S] = s.useState(0), [f, C] = s.useState(!1), [b, N] = s.useState(!1), [I] = s.useState(() => new a.Ep), [v] = s.useState(() => new a.Ep);
    if (s.useEffect(() => () => {
            I.stop(), v.stop()
        }, [I, v]), !d.p5) return (0, i.jsx)(i.Fragment, {
        children: c({})
    });
    let j = E >= x.length - 1,
        y = j ? r.oMw.RED : r.oMw.GREEN,
        R = f ? y : r.oMw.PRIMARY;
    return (0, i.jsx)(r.STz, {
        text: (() => {
            if (!f) return t;
            let e = (0, l.clamp)(E - 1, 0, x.length - 1),
                n = x[e] ?? x[0];
            return (0, i.jsx)(r.bfh, {
                isShaking: j,
                children: n()
            })
        })(),
        delay: p,
        "aria-label": h,
        dataMeticulousIgnore: T,
        color: R,
        forceOpen: b,
        onAnimationRest: (e, t) => {
            !b && f && t.phase === u.lLE.LEAVE && C(!1)
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
                    t?.(), _?.(), (0, d.C)(n), o.default.track(u.HAw.TEXT_COPIED), b || S(E + 1), N(!0), C(!0), I.start(m, () => N(!1)), v.start(g, () => S(0))
                },
                onMouseEnter: () => {
                    f ? (I.stop(), N(!1)) : i?.()
                }
            })
        }
    })
}