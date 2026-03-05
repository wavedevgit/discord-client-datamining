/** chunk id: 540177 params = (module,exports,require) **/
n.d(t, {
    R: () => A
});
var i = n(627968),
    r = n(64700),
    l = n(397927),
    a = n(538064),
    s = n(786574),
    o = n(641616),
    d = n(616621),
    c = n(58736);

function u(e) {
    let {
        onClose: t
    } = e, n = (0, o.x)(), r = (0, s.N)(n, a.Ft), c = (0, d.A)();
    return (0, i.jsxs)(l.W1t, {
        "data-menu-migrated": !0,
        onSelect: () => {},
        navId: "devtools-popout",
        variant: "fixed",
        onClose: t,
        "aria-label": "DevTools Actions",
        children: [r, (0, i.jsx)(l.rXV, {
            "aria-label": "Playgrounds",
            children: c
        })]
    })
}

function A(e) {
    let {
        className: t,
        focusSectionProps: n
    } = e, [s, o] = r.useState(!1), [d, A] = r.useState(0), h = r.useRef(null), _ = e => {
        clearTimeout(d), A(setTimeout(() => {
            o(e)
        }, 100))
    };
    return (0, i.jsx)("div", {
        onMouseEnter: () => _(!0),
        onMouseLeave: () => _(!1),
        children: (0, i.jsx)(l.YNO, {
            targetElementRef: h,
            shouldShow: s,
            animation: l.YNO.Animation.NONE,
            position: "bottom",
            align: "right",
            autoInvert: !1,
            onRequestOpen: () => o(!0),
            onRequestClose: () => o(!1),
            renderPopout: () => (0, i.jsx)(u, {
                onClose: () => o(!1)
            }),
            children: (e, r) => {
                let {
                    isShown: s
                } = r;
                return (0, i.jsx)(c.In, {
                    ref: h,
                    onClick: () => (0, a.Ft)(),
                    icon: l.VaJ,
                    "aria-label": "DevTools",
                    selected: s,
                    className: t,
                    ...n
                })
            }
        })
    })
}