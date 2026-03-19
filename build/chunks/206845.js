/** chunk id: 206845 params = (module,exports,require) **/
a.d(t, {
    A: () => g
});
var l = a(627968),
    r = a(64700),
    n = a(735438),
    s = a(451988),
    o = a(397927),
    d = a(954571),
    i = a(957565),
    c = a(927813),
    u = a(652215),
    x = a(985018);
let h = c.A.Millis.SECOND,
    m = 2 * h,
    b = c.A.Millis.HALF_SECOND,
    p = [() => x.intl.string(x.t.MSaeTe), () => x.intl.string(x.t.UmrCw7), () => x.intl.string(x.t.gKE0Jq), () => x.intl.string(x.t["4DSKbi"]), () => x.intl.string(x.t["+8ENdT"]), () => x.intl.string(x.t.GlWHv8), () => x.intl.string(x.t.hIzxU9), () => x.intl.string(x.t["26uMPL"]), () => x.intl.string(x.t.uFs7R2), () => x.intl.string(x.t.bLXdcY), () => x.intl.string(x.t.gPg9fS)];

function g(e) {
    let {
        text: t,
        copyValue: a,
        children: c,
        onCopy: x,
        "aria-label": g,
        delay: f = b,
        dataMeticulousIgnore: j
    } = e, [v, y] = r.useState(0), [k, _] = r.useState(!1), [A, S] = r.useState(!1), [C] = r.useState(() => new s.Ep), [I] = r.useState(() => new s.Ep);
    if (r.useEffect(() => () => {
            C.stop(), I.stop()
        }, [C, I]), !i.p5) return (0, l.jsx)(l.Fragment, {
        children: c({})
    });
    let T = v >= p.length - 1,
        w = T ? o.oMw.RED : o.oMw.GREEN,
        V = k ? w : o.oMw.PRIMARY;
    return (0, l.jsx)(o.STz, {
        text: (() => {
            if (!k) return t;
            let e = (0, n.clamp)(v - 1, 0, p.length - 1),
                a = p[e] ?? p[0];
            return (0, l.jsx)(o.bfh, {
                isShaking: T,
                children: a()
            })
        })(),
        delay: f,
        "aria-label": g,
        dataMeticulousIgnore: j,
        color: V,
        forceOpen: A,
        onAnimationRest: (e, t) => {
            !A && k && t.phase === u.lLE.LEAVE && _(!1)
        },
        children: e => {
            let {
                onClick: t,
                onMouseEnter: l,
                ...r
            } = e;
            return c({
                ...r,
                onClick: () => {
                    t?.(), x?.(), (0, i.C)(a), d.default.track(u.HAw.TEXT_COPIED), A || y(v + 1), S(!0), _(!0), C.start(h, () => S(!1)), I.start(m, () => y(0))
                },
                onMouseEnter: () => {
                    k ? (C.stop(), S(!1)) : l?.()
                }
            })
        }
    })
}