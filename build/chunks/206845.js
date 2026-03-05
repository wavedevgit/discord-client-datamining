/** chunk id: 206845 params = (module,exports,require) **/
r.d(t, {
    A: () => v
});
var n = r(627968),
    l = r(64700),
    i = r(735438),
    u = r(451988),
    c = r(397927),
    s = r(954571),
    a = r(957565),
    o = r(927813),
    d = r(652215),
    f = r(985018);
let h = o.A.Millis.SECOND,
    b = 2 * h,
    m = o.A.Millis.HALF_SECOND,
    E = [() => f.intl.string(f.t.MSaeTe), () => f.intl.string(f.t.UmrCw7), () => f.intl.string(f.t.gKE0Jq), () => f.intl.string(f.t["4DSKbi"]), () => f.intl.string(f.t["+8ENdT"]), () => f.intl.string(f.t.GlWHv8), () => f.intl.string(f.t.hIzxU9), () => f.intl.string(f.t["26uMPL"]), () => f.intl.string(f.t.uFs7R2), () => f.intl.string(f.t.bLXdcY), () => f.intl.string(f.t.gPg9fS)];

function v(e) {
    let {
        text: t,
        copyValue: r,
        children: o,
        onCopy: f,
        "aria-label": v,
        delay: x = m,
        dataMeticulousIgnore: A
    } = e, [g, p] = l.useState(0), [M, L] = l.useState(!1), [k, w] = l.useState(!1), [C] = l.useState(() => new u.Ep), [S] = l.useState(() => new u.Ep);
    if (l.useEffect(() => () => {
            C.stop(), S.stop()
        }, [C, S]), !a.p5) return (0, n.jsx)(n.Fragment, {
        children: o({})
    });
    let y = g >= E.length - 1,
        R = y ? c.oMw.RED : c.oMw.GREEN,
        I = M ? R : c.oMw.PRIMARY;
    return (0, n.jsx)(c.STz, {
        text: (() => {
            if (!M) return t;
            let e = (0, i.clamp)(g - 1, 0, E.length - 1),
                r = E[e] ?? E[0];
            return (0, n.jsx)(c.bfh, {
                isShaking: y,
                children: r()
            })
        })(),
        delay: x,
        "aria-label": v,
        dataMeticulousIgnore: A,
        color: I,
        forceOpen: k,
        onAnimationRest: (e, t) => {
            !k && M && t.phase === d.lLE.LEAVE && L(!1)
        },
        children: e => {
            let {
                onClick: t,
                onMouseEnter: n,
                ...l
            } = e;
            return o({
                ...l,
                onClick: () => {
                    t?.(), f?.(), (0, a.C)(r), s.default.track(d.HAw.TEXT_COPIED), k || p(g + 1), w(!0), L(!0), C.start(h, () => w(!1)), S.start(b, () => p(0))
                },
                onMouseEnter: () => {
                    M ? (C.stop(), w(!1)) : n?.()
                }
            })
        }
    })
}