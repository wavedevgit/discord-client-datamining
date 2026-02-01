/** chunk id: 152535, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => g
});
var r = n(627968),
    l = n(64700),
    i = n(533781),
    s = n(265872),
    a = n(688810),
    o = n(384059),
    c = n(421773),
    u = n(729081),
    d = n(709562),
    p = n(376086),
    h = n(985018);

function g(e) {
    let {
        channel: t,
        themeable: n,
        whichPopoutIsOpen: g,
        setWhichPopoutIsOpen: f
    } = e, {
        parentAnalyticsLocation: m
    } = (0, a.Ay)(), b = l.useRef(null), {
        isHovered: A,
        setIsHovered: y,
        onMouseEnter: O,
        onMouseLeave: j
    } = (0, c.A)(200, 300), {
        Component: x,
        play: _,
        events: {
            onMouseEnter: v,
            onMouseLeave: E
        }
    } = (0, i.T)(), C = l.useCallback(e => {
        "focus" !== e.type && (O(), v())
    }, [O, v]), S = l.useCallback(() => {
        null == g && (j(), E())
    }, [j, E, g]), I = l.useCallback(() => {
        (0, o.X)(m, o.O.GIFTING), g === p.P.GIFTING ? (null == f || f(void 0), j()) : (null != g ? (_(), O()) : _(), null == f || f(p.P.GIFTING))
    }, [O, j, m, _, f, g]);
    return (0, r.jsx)(s.Y, {
        targetElementRef: b,
        shouldShow: A && (g === p.P.GIFTING || null == g) || g === p.P.GIFTING,
        animation: s.Y.Animation.FADE,
        animationPosition: "top",
        position: "top",
        align: "center",
        spacing: 16,
        onRequestClose: () => {
            y(!1), null == f || f(void 0)
        },
        renderPopout: e => {
            let {
                closePopout: n
            } = e;
            return (0, r.jsx)(u.A, {
                channel: t,
                closePopout: n,
                isHovered: A,
                onMouseEnter: O,
                onMouseLeave: j
            })
        },
        children: () => (0, r.jsx)(d.l, {
            ref: b,
            isTrayButton: !0,
            themeable: n,
            "aria-label": h.intl.string(h.t.PEjaCx),
            iconComponent: x,
            onClick: I,
            onMouseEnter: C,
            onMouseLeave: S,
            isActive: A || g === p.P.GIFTING,
            color: A || g === p.P.GIFTING ? "primaryDark" : void 0
        })
    })
}