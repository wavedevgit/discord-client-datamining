/** chunk id: 296227 params = (module,exports,require) **/
n.d(t, {
    A: () => m
});
var r = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(397927),
    o = n(442433),
    d = n(928658),
    c = n(985018),
    u = n(832493);

function m(e) {
    let {
        widget: t,
        userId: n,
        className: i,
        menuItems: m
    } = e, h = l.useRef(null), x = () => {
        (0, d.GJ)(n, t)
    };
    return (0, r.jsx)(s.YNO, {
        targetElementRef: h,
        align: "top",
        position: "right",
        disablePointerEvents: !1,
        renderPopout: e => {
            let {
                closePopout: t
            } = e;
            return (0, r.jsx)(s.W1t, {
                "data-menu-migrated": !0,
                navId: "user-profile-widget-context-menu",
                onClose: () => {
                    (0, o.Z_)(), t()
                },
                onSelect: () => {},
                "aria-label": c.intl.string(c.t.xpSHSk),
                children: (0, r.jsxs)(s.rXV, {
                    children: [m, (0, r.jsx)(s.Drp, {
                        id: "flag-widget",
                        label: c.intl.string(c.t.D4GvHE),
                        action: x,
                        color: "danger",
                        icon: s.iFK,
                        leadingAccessory: {
                            type: "icon",
                            icon: s.iFK
                        }
                    }, "flag-widget")]
                })
            })
        },
        children: e => (0, r.jsx)(s.DUT, {
            ...e,
            innerRef: h,
            "aria-label": c.intl.string(c.t.xpSHSk),
            className: a()(u.x, i),
            children: (0, r.jsx)(s.jNK, {
                size: "sm",
                color: "currentColor"
            })
        })
    })
}