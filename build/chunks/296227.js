/** chunk id: 296227 params = (module,exports,require) **/
n.d(t, {
    A: () => m
});
var l = n(627968),
    i = n(64700),
    a = n(503698),
    r = n.n(a),
    s = n(397927),
    o = n(442433),
    c = n(928658),
    d = n(985018),
    u = n(832493);

function m(e) {
    let {
        widget: t,
        userId: n,
        className: a,
        menuItems: m
    } = e, h = i.useRef(null), p = () => {
        (0, c.GJ)(n, t)
    };
    return (0, l.jsx)(s.YNO, {
        targetElementRef: h,
        align: "top",
        position: "right",
        disablePointerEvents: !1,
        renderPopout: e => {
            let {
                closePopout: t
            } = e;
            return (0, l.jsx)(s.W1t, {
                "data-menu-migrated": !0,
                navId: "user-profile-widget-context-menu",
                onClose: () => {
                    (0, o.Z_)(), t()
                },
                onSelect: () => {},
                "aria-label": d.intl.string(d.t.xpSHSk),
                children: (0, l.jsxs)(s.rXV, {
                    children: [m, (0, l.jsx)(s.Drp, {
                        id: "flag-widget",
                        label: d.intl.string(d.t.D4GvHE),
                        action: p,
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
        children: e => (0, l.jsx)(s.DUT, {
            ...e,
            innerRef: h,
            "aria-label": d.intl.string(d.t.xpSHSk),
            className: r()(u.x, a),
            children: (0, l.jsx)(s.jNK, {
                size: "sm",
                color: "currentColor"
            })
        })
    })
}