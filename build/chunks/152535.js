/** Chunk was on 1113 **/
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
    h = n(376086),
    p = n(985018);

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
        onMouseLeave: _
    } = (0, c.A)(200, 300), {
        Component: j,
        play: x,
        events: {
            onMouseEnter: v,
            onMouseLeave: E
        }
    } = (0, i.T)(), C = l.useCallback(e => {
        "focus" !== e.type && (O(), v())
    }, [O, v]), S = l.useCallback(() => {
        null == g && (_(), E())
    }, [_, E, g]), I = l.useCallback(() => {
        (0, o.X)(m, o.O.GIFTING), g === h.P.GIFTING ? (null == f || f(void 0), _()) : (null != g ? (x(), O()) : x(), null == f || f(h.P.GIFTING))
    }, [O, _, m, x, f, g]);
    return (0, r.jsx)(s.Y, {
        targetElementRef: b,
        shouldShow: A && (g === h.P.GIFTING || null == g) || g === h.P.GIFTING,
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
                onMouseLeave: _
            })
        },
        children: () => (0, r.jsx)(d.l, {
            ref: b,
            isTrayButton: !0,
            themeable: n,
            "aria-label": p.intl.string(p.t.PEjaCx),
            iconComponent: j,
            onClick: I,
            onMouseEnter: C,
            onMouseLeave: S,
            isActive: A || g === h.P.GIFTING,
            color: A || g === h.P.GIFTING ? "primaryDark" : void 0
        })
    })
}