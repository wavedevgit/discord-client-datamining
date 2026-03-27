/** chunk id: 152535 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => m
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

function m(e) {
    let {
        channel: t,
        themeable: n,
        whichPopoutIsOpen: m,
        setWhichPopoutIsOpen: _
    } = e, {
        parentAnalyticsLocation: g
    } = (0, r.Ay)(), p = s.useRef(null), {
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
    }, [C, b]), v = s.useCallback(() => {
        null == m && (E(), S())
    }, [E, S, m]), y = s.useCallback(() => {
        (0, o.X)(g, o.O.GIFTING), m === h.P.GIFTING ? (_?.(void 0), E()) : (null != m ? (N(), C()) : N(), _?.(h.P.GIFTING))
    }, [C, E, g, N, _, m]);
    return (0, i.jsx)(a.Y, {
        targetElementRef: p,
        shouldShow: f && (m === h.P.GIFTING || null == m) || m === h.P.GIFTING,
        animation: a.Y.Animation.FADE,
        animationPosition: "top",
        position: "top",
        align: "center",
        spacing: 16,
        onRequestClose: () => {
            x(!1), _?.(void 0)
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
            ref: p,
            isTrayButton: !0,
            themeable: n,
            "aria-label": A.intl.string(A.t.PEjaCx),
            iconComponent: I,
            onClick: y,
            onMouseEnter: T,
            onMouseLeave: v,
            isActive: f || m === h.P.GIFTING,
            color: f || m === h.P.GIFTING ? "primaryDark" : void 0
        })
    })
}