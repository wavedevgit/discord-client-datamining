/** chunk id: 596540 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => _
});
var i = n(627968),
    s = n(64700),
    l = n(397927),
    r = n(73153),
    a = n(964486),
    o = n(203982),
    c = n(851109),
    d = n(355741),
    u = n(480680),
    h = n(652215),
    A = n(985018),
    m = n(310855);

function _(e) {
    let {
        children: t,
        popoutPosition: n,
        popoutAlign: u,
        targetElementRef: m,
        spacing: _ = 0
    } = e, {
        isOpen: g,
        setIsOpen: f
    } = (0, d.A)(), x = s.useCallback(() => {
        f(!1)
    }, [f]), E = s.useCallback(() => {
        f(!g)
    }, [g, f]);
    (0, a.Ay)(() => {
        let e = () => {
            f(!1)
        };
        return r.h.subscribe("USER_SETTINGS_MODAL_OPEN", e), () => r.h.unsubscribe("USER_SETTINGS_MODAL_OPEN", e)
    }), s.useEffect(() => (o._.subscribe(h.jej.TOGGLE_INBOX, E), () => void o._.unsubscribe(h.jej.TOGGLE_INBOX, E)), [E]);
    let {
        entrypoint: C
    } = (0, c.X8)({
        location: "NotificationsInboxPopout"
    });
    return (0, i.jsx)(l.YNO, {
        targetElementRef: m,
        shouldShow: g,
        align: u,
        animation: C === c.RK.TITLE_BAR_LEFT ? l.YNO.Animation.TRANSLATE : l.YNO.Animation.FADE,
        animationPosition: C === c.RK.TITLE_BAR_LEFT ? "bottom" : "left",
        position: n,
        onRequestClose: x,
        spacing: _,
        renderPopout: () => (0, i.jsx)(l.lGe, {
            "aria-label": A.intl.string(A.t.GSmTKJ),
            children: (0, i.jsx)(p, {})
        }),
        children: (e, n) => {
            let {
                isShown: i
            } = n;
            return t(E, i, e)
        }
    })
}

function p() {
    return (0, i.jsxs)("div", {
        className: m.kL,
        children: [(0, i.jsx)("div", {
            className: m._Q,
            children: (0, i.jsx)("span", {
                className: m.Tp
            })
        }), (0, i.jsx)(u.A, {})]
    })
}