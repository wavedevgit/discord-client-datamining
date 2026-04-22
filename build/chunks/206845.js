/** chunk id: 206845 params = (module,exports,require) **/
l.d(t, {
    A: () => g
});
var a = l(627968),
    r = l(64700),
    n = l(735438),
    s = l(451988),
    o = l(397927),
    i = l(954571),
    d = l(957565),
    c = l(927813),
    u = l(652215),
    x = l(985018);
let h = c.A.Millis.SECOND,
    m = 2 * h,
    b = c.A.Millis.HALF_SECOND,
    p = [() => x.intl.string(x.t.MSaeTe), () => x.intl.string(x.t.UmrCw7), () => x.intl.string(x.t.gKE0Jq), () => x.intl.string(x.t["4DSKbi"]), () => x.intl.string(x.t["+8ENdT"]), () => x.intl.string(x.t.GlWHv8), () => x.intl.string(x.t.hIzxU9), () => x.intl.string(x.t["26uMPL"]), () => x.intl.string(x.t.uFs7R2), () => x.intl.string(x.t.bLXdcY), () => x.intl.string(x.t.gPg9fS)];

function g(e) {
    let {
        text: t,
        copyValue: l,
        children: c,
        onCopy: x,
        "aria-label": g,
        delay: f = b,
        dataMeticulousIgnore: j
    } = e, [v, y] = r.useState(0), [k, _] = r.useState(!1), [A, C] = r.useState(!1), [S] = r.useState(() => new s.Ep), [I] = r.useState(() => new s.Ep);
    if (r.useEffect(() => () => {
            S.stop(), I.stop()
        }, [S, I]), !d.p5) return (0, a.jsx)(a.Fragment, {
        children: c({})
    });
    let T = v >= p.length - 1,
        w = k ? o.oMw.GREEN : o.oMw.PRIMARY;
    return (0, a.jsx)(o.STz, {
        text: (() => {
            if (!k) return t;
            let e = (0, n.clamp)(v - 1, 0, p.length - 1),
                l = p[e] ?? p[0];
            return (0, a.jsx)(o.bfh, {
                isShaking: T,
                children: l()
            })
        })(),
        delay: f,
        "aria-label": g,
        dataMeticulousIgnore: j,
        color: w,
        forceOpen: A,
        onAnimationRest: (e, t) => {
            !A && k && t.phase === u.lLE.LEAVE && _(!1)
        },
        children: e => {
            let {
                onClick: t,
                onMouseEnter: a,
                ...r
            } = e;
            return c({
                ...r,
                onClick: () => {
                    t?.(), x?.(), (0, d.C)(l), i.default.track(u.HAw.TEXT_COPIED), A || y(v + 1), C(!0), _(!0), S.start(h, () => C(!1)), I.start(m, () => y(0))
                },
                onMouseEnter: () => {
                    k ? (S.stop(), C(!1)) : a?.()
                }
            })
        }
    })
}