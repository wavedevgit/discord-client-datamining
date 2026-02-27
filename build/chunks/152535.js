/** chunk id: 152535, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => p
});
var i = n(627968),
    s = n(64700),
    l = n(533781),
    a = n(265872),
    r = n(688810),
    o = n(384059),
    c = n(421773),
    d = n(729081),
    u = n(709562),
    h = n(376086),
    A = n(985018);

function p(e) {
    let {
        channel: t,
        themeable: n,
        whichPopoutIsOpen: p,
        setWhichPopoutIsOpen: m
    } = e, {
        parentAnalyticsLocation: g
    } = (0, r.Ay)(), _ = s.useRef(null), {
        isHovered: f,
        setIsHovered: x,
        onMouseEnter: C,
        onMouseLeave: E
    } = (0, c.A)(200, 300), {
        Component: I,
        play: N,
        events: {
            onMouseEnter: b,
            onMouseLeave: S
        }
    } = (0, l.T)(), T = s.useCallback(e => {
        "focus" !== e.type && (C(), b())
    }, [C, b]), y = s.useCallback(() => {
        null == p && (E(), S())
    }, [E, S, p]), v = s.useCallback(() => {
        (0, o.X)(g, o.O.GIFTING), p === h.P.GIFTING ? (m?.(void 0), E()) : (null != p ? (N(), C()) : N(), m?.(h.P.GIFTING))
    }, [C, E, g, N, m, p]);
    return (0, i.jsx)(a.Y, {
        targetElementRef: _,
        shouldShow: f && (p === h.P.GIFTING || null == p) || p === h.P.GIFTING,
        animation: a.Y.Animation.FADE,
        animationPosition: "top",
        position: "top",
        align: "center",
        spacing: 16,
        onRequestClose: () => {
            x(!1), m?.(void 0)
        },
        renderPopout: e => {
            let {
                closePopout: n
            } = e;
            return (0, i.jsx)(d.A, {
                channel: t,
                closePopout: n,
                isHovered: f,
                onMouseEnter: C,
                onMouseLeave: E
            })
        },
        children: () => (0, i.jsx)(u.l, {
            ref: _,
            isTrayButton: !0,
            themeable: n,
            "aria-label": A.intl.string(A.t.PEjaCx),
            iconComponent: I,
            onClick: v,
            onMouseEnter: T,
            onMouseLeave: y,
            isActive: f || p === h.P.GIFTING,
            color: f || p === h.P.GIFTING ? "primaryDark" : void 0
        })
    })
}