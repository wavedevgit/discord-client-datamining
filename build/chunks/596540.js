/** Chunk was on 97492 **/
/** chunk id: 596540, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => b
});
var r = n(627968),
    l = n(64700),
    i = n(503698),
    s = n.n(i),
    a = n(397927),
    o = n(73153),
    c = n(964486),
    u = n(203982),
    d = n(851109),
    p = n(355741),
    h = n(480680),
    f = n(652215),
    g = n(985018),
    m = n(782462);

function b(e) {
    let {
        children: t,
        popoutPosition: n,
        popoutAlign: i,
        targetElementRef: h,
        spacing: b = 0
    } = e, {
        isOpen: y,
        setIsOpen: _
    } = (0, p.A)(), O = l.useCallback(() => {
        _(!1)
    }, [_]), j = l.useCallback(() => {
        _(!y)
    }, [y, _]);
    (0, c.Ay)(() => {
        let e = () => {
            _(!1)
        };
        return o.h.subscribe("USER_SETTINGS_MODAL_OPEN", e), () => o.h.unsubscribe("USER_SETTINGS_MODAL_OPEN", e)
    }), l.useEffect(() => (u._.subscribe(f.jej.TOGGLE_INBOX, j), () => void u._.unsubscribe(f.jej.TOGGLE_INBOX, j)), [j]);
    let {
        entrypoint: v
    } = (0, d.X8)({
        location: "NotificationsInboxPopout"
    });
    return (0, r.jsx)(a.YNO, {
        targetElementRef: h,
        shouldShow: y,
        align: i,
        animation: v === d.RK.TITLE_BAR_LEFT ? a.YNO.Animation.TRANSLATE : a.YNO.Animation.FADE,
        animationPosition: v === d.RK.TITLE_BAR_LEFT ? "bottom" : "left",
        position: n,
        onRequestClose: O,
        spacing: b,
        renderPopout: () => (0, r.jsx)(a.lGe, {
            "aria-label": g.intl.string(g.t.GSmTKJ),
            className: s()({
                [m.Um]: v === d.RK.TITLE_BAR_LEFT,
                [m.vf]: v === d.RK.SERVER_RAIL_TOP
            }),
            children: (0, r.jsx)(A, {})
        }),
        children: (e, n) => {
            let {
                isShown: r
            } = n;
            return t(j, r, e)
        }
    })
}

function A() {
    return (0, r.jsxs)("div", {
        className: m.kL,
        children: [(0, r.jsx)("div", {
            className: m._Q,
            children: (0, r.jsx)("span", {
                className: m.Tp
            })
        }), (0, r.jsx)(h.A, {})]
    })
}