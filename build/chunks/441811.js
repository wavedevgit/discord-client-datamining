/** chunk id: 441811 params = (module,exports,require) **/
n.d(t, {
    l: () => f
});
var a = n(627968),
    i = n(64700),
    l = n(311907),
    s = n(265486),
    r = n(688810),
    o = n(626584),
    d = n(780964),
    c = n(840065),
    u = n(531685),
    m = n(259065),
    h = n(49999),
    x = n(927961),
    p = n(985018),
    g = n(439315);
let _ = new o.A("DisplayNameStylesCoachmark");

function f(e) {
    let {
        markAsDismissed: t,
        targetElementRef: n,
        children: o
    } = e, {
        analyticsLocations: f
    } = (0, r.Ay)(), v = (0, i.useRef)(null), b = (0, l.bG)([u.A], () => u.A.isFocused()), j = (0, i.useCallback)(() => {
        t(h.i.TAKE_ACTION), (0, c.openUserSettings)(d.X.PROFILE_PANEL, {
            analyticsLocations: f
        }, () => {
            (0, m.L)({
                analyticsLocations: f
            })
        })
    }, [t, f]), A = (0, i.useCallback)(() => {
        t(h.i.USER_DISMISS)
    }, [t]);
    return (0, i.useEffect)(() => {
        b && v.current?.paused ? v.current?.play().catch(_.error) : b || v.current?.pause()
    }, [b]), (0, a.jsxs)(a.Fragment, {
        children: [o, (0, a.jsx)(s.A, {
            targetElementRef: n,
            shouldShow: !0,
            onRequestClose: A,
            align: "right",
            position: "top",
            caretConfig: {
                align: "center"
            },
            gradientColor: "nitro-pink",
            graphic: {
                type: "video",
                ref: v,
                src: g.A,
                aspectRatio: "21/9",
                loop: !0
            },
            size: "lg",
            title: p.intl.string(x.default["1AE464"]),
            body: [p.intl.string(x.default.cNc1g9), p.intl.string(p.t["4JNXHG"])],
            actions: [{
                text: p.intl.string(p.t.uw9zI7),
                variant: "primary",
                onClick: j
            }]
        })]
    })
}