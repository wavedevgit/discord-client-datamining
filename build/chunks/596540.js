/** chunk id: 596540, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => f
});
var r = n(627968),
    l = n(64700),
    i = n(397927),
    s = n(73153),
    a = n(964486),
    o = n(203982),
    c = n(851109),
    u = n(355741),
    d = n(480680),
    h = n(652215),
    p = n(985018),
    g = n(782462);

function f(e) {
    let {
        children: t,
        popoutPosition: n,
        popoutAlign: d,
        targetElementRef: g,
        spacing: f = 0
    } = e, {
        isOpen: b,
        setIsOpen: A
    } = (0, u.A)(), y = l.useCallback(() => {
        A(!1)
    }, [A]), O = l.useCallback(() => {
        A(!b)
    }, [b, A]);
    (0, a.Ay)(() => {
        let e = () => {
            A(!1)
        };
        return s.h.subscribe("USER_SETTINGS_MODAL_OPEN", e), () => s.h.unsubscribe("USER_SETTINGS_MODAL_OPEN", e)
    }), l.useEffect(() => (o._.subscribe(h.jej.TOGGLE_INBOX, O), () => void o._.unsubscribe(h.jej.TOGGLE_INBOX, O)), [O]);
    let {
        entrypoint: _
    } = (0, c.X8)({
        location: "NotificationsInboxPopout"
    });
    return (0, r.jsx)(i.YNO, {
        targetElementRef: g,
        shouldShow: b,
        align: d,
        animation: _ === c.RK.TITLE_BAR_LEFT ? i.YNO.Animation.TRANSLATE : i.YNO.Animation.FADE,
        animationPosition: _ === c.RK.TITLE_BAR_LEFT ? "bottom" : "left",
        position: n,
        onRequestClose: y,
        spacing: f,
        renderPopout: () => (0, r.jsx)(i.lGe, {
            "aria-label": p.intl.string(p.t.GSmTKJ),
            children: (0, r.jsx)(m, {})
        }),
        children: (e, n) => {
            let {
                isShown: r
            } = n;
            return t(O, r, e)
        }
    })
}

function m() {
    return (0, r.jsxs)("div", {
        className: g.kL,
        children: [(0, r.jsx)("div", {
            className: g._Q,
            children: (0, r.jsx)("span", {
                className: g.Tp
            })
        }), (0, r.jsx)(d.A, {})]
    })
}