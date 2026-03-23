/** chunk id: 339763 params = (module,exports,require) **/
l.d(t, {
    Ay: () => h
});
var a = l(627968),
    n = l(64700),
    r = l(475922),
    i = l(534149),
    o = l(582754),
    s = l(736653),
    c = l(796688);
let u = {
        width: 60,
        height: 60
    },
    d = e => {
        let {
            currentAnimationType: t,
            animationTypeRef: l,
            onSetAnimationDurationMS: a,
            play: r,
            getDuration: i
        } = e, o = i(), s = null != o ? 1e3 * o : 3e3;
        (0, n.useEffect)(() => {
            null !== t && t !== l.current && (l.current = t, r())
        }, [t, r, l]), (0, n.useEffect)(() => {
            a(s)
        }, [a, s])
    },
    p = e => {
        let {
            currentAnimationType: t,
            ...l
        } = e, {
            Component: n,
            ...r
        } = (0, i.N)(t ?? "earn");
        return d({
            currentAnimationType: t,
            ...l,
            ...r
        }), (0, a.jsx)(n, {
            ...u,
            size: "custom",
            className: c.E$,
            useLottieDefaultColors: !0
        })
    },
    m = e => {
        let {
            currentAnimationType: t,
            ...l
        } = e, {
            Component: n,
            ...i
        } = (0, r.q)(t ?? "earn");
        return d({
            currentAnimationType: t,
            ...l,
            ...i
        }), (0, a.jsx)(n, {
            ...u,
            size: "custom",
            className: c.E$,
            useLottieDefaultColors: !0
        })
    },
    h = e => {
        let t = (0, s.Ay)();
        return (0, o.qB)(t) ? (0, a.jsx)(m, {
            ...e
        }) : (0, a.jsx)(p, {
            ...e
        })
    }