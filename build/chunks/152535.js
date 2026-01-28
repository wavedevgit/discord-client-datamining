/** Chunk was on 78528 **/
/** chunk id: 152535, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => f
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

function f(e) {
    let {
        channel: t,
        themeable: n,
        whichPopoutIsOpen: f,
        setWhichPopoutIsOpen: g
    } = e, {
        parentAnalyticsLocation: m
    } = (0, a.Ay)(), b = l.useRef(null), {
        isHovered: A,
        setIsHovered: y,
        onMouseEnter: _,
        onMouseLeave: O
    } = (0, c.A)(200, 300), {
        Component: j,
        play: v,
        events: {
            onMouseEnter: x,
            onMouseLeave: E
        }
    } = (0, i.T)(), C = l.useCallback(e => {
        "focus" !== e.type && (_(), x())
    }, [_, x]), S = l.useCallback(() => {
        null == f && (O(), E())
    }, [O, E, f]), I = l.useCallback(() => {
        (0, o.X)(m, o.O.GIFTING), f === p.P.GIFTING ? (null == g || g(void 0), O()) : (null != f ? (v(), _()) : v(), null == g || g(p.P.GIFTING))
    }, [_, O, m, v, g, f]);
    return (0, r.jsx)(s.Y, {
        targetElementRef: b,
        shouldShow: A && (f === p.P.GIFTING || null == f) || f === p.P.GIFTING,
        animation: s.Y.Animation.FADE,
        animationPosition: "top",
        position: "top",
        align: "center",
        spacing: 16,
        onRequestClose: () => {
            y(!1), null == g || g(void 0)
        },
        renderPopout: e => {
            let {
                closePopout: n
            } = e;
            return (0, r.jsx)(u.A, {
                channel: t,
                closePopout: n,
                isHovered: A,
                onMouseEnter: _,
                onMouseLeave: O
            })
        },
        children: () => (0, r.jsx)(d.l, {
            ref: b,
            isTrayButton: !0,
            themeable: n,
            "aria-label": h.intl.string(h.t.PEjaCx),
            iconComponent: j,
            onClick: I,
            onMouseEnter: C,
            onMouseLeave: S,
            isActive: A || f === p.P.GIFTING,
            color: A || f === p.P.GIFTING ? "primaryDark" : void 0
        })
    })
}