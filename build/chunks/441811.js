/** Chunk was on 36054 **/
/** chunk id: 441811, original params: e,t,n (module,exports,require) **/
n.d(t, {
    l: () => v
});
var a = n(627968),
    l = n(64700),
    r = n(311907),
    i = n(43105),
    s = n(688810),
    o = n(626584),
    c = n(780964),
    d = n(840065),
    u = n(531685),
    m = n(259065),
    p = n(652215),
    h = n(49999),
    x = n(927961),
    g = n(985018),
    f = n(439315);
let b = new o.A("DisplayNameStylesCoachmark");

function v(e) {
    let {
        markAsDismissed: t,
        targetElementRef: n,
        children: o
    } = e, {
        analyticsLocations: v
    } = (0, s.Ay)(), j = (0, l.useRef)(null), _ = (0, r.bG)([u.A], () => u.A.isFocused()), y = (0, l.useCallback)(() => {
        t(h.i.TAKE_ACTION), (0, d.openUserSettings)(c.X.PROFILE_PANEL, {
            section: p.nc_.PROFILE_CUSTOMIZATION,
            analyticsLocations: v
        }, () => {
            (0, m.L)({
                analyticsLocations: v
            })
        })
    }, [t, v]), A = (0, l.useCallback)(() => {
        t(h.i.USER_DISMISS)
    }, [t]);
    return (0, l.useEffect)(() => {
        var e, t, n;
        _ && (null == (e = j.current) ? void 0 : e.paused) ? null == (t = j.current) || t.play().catch(b.error) : _ || null == (n = j.current) || n.pause()
    }, [_]), (0, a.jsxs)(a.Fragment, {
        children: [o, (0, a.jsx)(i.A, {
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
                ref: j,
                src: f.A,
                aspectRatio: "21/9",
                loop: !0
            },
            size: "lg",
            title: g.intl.string(x.default["1AE464"]),
            body: [g.intl.string(x.default.cNc1g9), g.intl.string(g.t["4JNXHG"])],
            actions: [{
                text: g.intl.string(g.t.uw9zI7),
                variant: "primary",
                onClick: y
            }]
        })]
    })
}