/** chunk id: 558416 params = (module,exports,require) **/
n.d(t, {
    w: () => A
});
var i = n(627968),
    a = n(64700),
    l = n(397927),
    r = n(975807),
    s = n(966871),
    o = n(975571),
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
                action: () => (0, r.A)(o.C)
            })]
        })
    })
}

function A(e) {
    let {
        focusSectionProps: t
    } = e, [n, r] = a.useState(!1), [o, A] = a.useState(0), h = a.useRef(null), _ = e => {
        clearTimeout(o), A(setTimeout(() => {
            r(e)
        }, 100))
    };
    return (0, i.jsx)("div", {
        onMouseEnter: () => _(!0),
        onMouseLeave: () => _(!1),
        children: (0, i.jsx)(l.YNO, {
            targetElementRef: h,
            shouldShow: n,
            animation: l.YNO.Animation.NONE,
            position: "bottom",
            align: "right",
            autoInvert: !1,
            onRequestOpen: () => r(!0),
            onRequestClose: () => r(!1),
            renderPopout: () => (0, i.jsx)(u, {
                onClose: () => r(!1)
            }),
            children: (e, n) => {
                let {
                    isShown: a
                } = n;
                return (0, i.jsx)(s.A, {
                    ref: h,
                    onClick: c,
                    icon: l.Q5O,
                    "aria-label": d.intl.string(d.t["5LqopY"]),
                    selected: a,
                    ...t
                })
            }
        })
    })
}