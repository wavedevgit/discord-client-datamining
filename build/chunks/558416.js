/** chunk id: 558416 params = (module,exports,require) **/
n.d(t, {
    w: () => A
});
var i = n(627968),
    r = n(64700),
    l = n(397927),
    a = n(975807),
    s = n(975571),
    o = n(58736),
    d = n(985018);
let c = () => (0, l.mMO)(async () => {
    let {
        default: e
    } = await n.e("81008").then(n.bind(n, 572723));
    return t => (0, i.jsx)(e, {
        ...t
    })
});

function u(e) {
    let {
        onClose: t
    } = e;
    return (0, i.jsx)(l.W1t, {
        "data-menu-migrated": !0,
        onSelect: () => {},
        navId: "staff-help-popout",
        variant: "fixed",
        onClose: t,
        "aria-label": d.intl.string(d.t.HpQykc),
        children: (0, i.jsxs)(l.rXV, {
            children: [(0, i.jsx)(l.Drp, {
                id: "staff-help-bug-reporter",
                label: d.intl.string(d.t["5LqopY"]),
                icon: l.Q5O,
                leadingAccessory: {
                    type: "icon",
                    icon: l.Q5O
                },
                action: c
            }), (0, i.jsx)(l.Drp, {
                id: "staff-help-center",
                label: "Go to Help Center",
                icon: l.I9m,
                leadingAccessory: {
                    type: "icon",
                    icon: l.cBN
                },
                trailingIndicator: {
                    type: "icon",
                    icon: l.I9m
                },
                action: () => (0, a.A)(s.C)
            })]
        })
    })
}

function A(e) {
    let {
        className: t,
        focusSectionProps: n
    } = e, [a, s] = r.useState(!1), [A, h] = r.useState(0), _ = r.useRef(null), m = e => {
        clearTimeout(A), h(setTimeout(() => {
            s(e)
        }, 100))
    };
    return (0, i.jsx)("div", {
        onMouseEnter: () => m(!0),
        onMouseLeave: () => m(!1),
        children: (0, i.jsx)(l.YNO, {
            targetElementRef: _,
            shouldShow: a,
            animation: l.YNO.Animation.NONE,
            position: "bottom",
            align: "right",
            autoInvert: !1,
            onRequestOpen: () => s(!0),
            onRequestClose: () => s(!1),
            renderPopout: () => (0, i.jsx)(u, {
                onClose: () => s(!1)
            }),
            children: (e, r) => {
                let {
                    isShown: a
                } = r;
                return (0, i.jsx)(o.In, {
                    ref: _,
                    onClick: c,
                    icon: l.Q5O,
                    "aria-label": d.intl.string(d.t["5LqopY"]),
                    selected: a,
                    className: t,
                    ...n
                })
            }
        })
    })
}