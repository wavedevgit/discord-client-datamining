/** chunk id: 296227 params = (module,exports,require) **/
n.d(t, {
    A: () => g
});
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(397927),
    o = n(442433),
    d = n(928658),
    c = n(985018),
    u = n(988829);

function g(e) {
    let {
        widget: t,
        userId: n,
        className: a,
        menuItems: g
    } = e, m = l.useRef(null), x = () => {
        (0, d.GJ)(n, t)
    };
    return (0, i.jsx)(r.YNO, {
        targetElementRef: m,
        align: "top",
        position: "right",
        disablePointerEvents: !1,
        renderPopout: e => {
            let {
                closePopout: t
            } = e;
            return (0, i.jsx)(r.W1t, {
                "data-menu-migrated": !0,
                navId: "user-profile-widget-context-menu",
                onClose: () => {
                    (0, o.Z_)(), t()
                },
                onSelect: () => {},
                "aria-label": c.intl.string(c.t.xpSHSk),
                children: (0, i.jsxs)(r.rXV, {
                    children: [g, (0, i.jsx)(r.Drp, {
                        id: "flag-widget",
                        label: c.intl.string(c.t.D4GvHE),
                        action: x,
                        color: "danger",
                        icon: r.iFK,
                        leadingAccessory: {
                            type: "icon",
                            icon: r.iFK
                        }
                    }, "flag-widget")]
                })
            })
        },
        children: e => (0, i.jsx)(r.DUT, {
            ...e,
            innerRef: m,
            "aria-label": c.intl.string(c.t.xpSHSk),
            className: s()(u.x, a),
            children: (0, i.jsx)(r.jNK, {
                size: "sm",
                color: "currentColor"
            })
        })
    })
}