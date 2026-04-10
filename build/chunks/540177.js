/** chunk id: 540177 params = (module,exports,require) **/
n.d(t, {
    R: () => A
});
var i = n(627968),
    l = n(64700),
    r = n(397927),
    a = n(189252),
    s = n(538064),
    o = n(786574),
    d = n(641616),
    c = n(616621);

function u(e) {
    let {
        onClose: t
    } = e, n = (0, d.x)(), l = (0, o.N)(n, s.Ft), a = (0, c.A)();
    return (0, i.jsxs)(r.W1t, {
        "data-menu-migrated": !0,
        onSelect: () => {},
        navId: "devtools-popout",
        variant: "fixed",
        onClose: t,
        "aria-label": "DevTools Actions",
        children: [l, (0, i.jsx)(r.rXV, {
            "aria-label": "Playgrounds",
            children: a
        })]
    })
}

function A(e) {
    let {
        focusSectionProps: t
    } = e, [n, o] = l.useState(!1), [d, c] = l.useState(0), A = l.useRef(null), h = e => {
        clearTimeout(d), c(setTimeout(() => {
            o(e)
        }, 100))
    };
    return (0, i.jsx)("div", {
        onMouseEnter: () => h(!0),
        onMouseLeave: () => h(!1),
        children: (0, i.jsx)(r.YNO, {
            targetElementRef: A,
            shouldShow: n,
            animation: r.YNO.Animation.NONE,
            position: "bottom",
            align: "right",
            autoInvert: !1,
            onRequestOpen: () => o(!0),
            onRequestClose: () => o(!1),
            renderPopout: () => (0, i.jsx)(u, {
                onClose: () => o(!1)
            }),
            children: (e, n) => {
                let {
                    isShown: l
                } = n;
                return (0, i.jsx)(a.A, {
                    ref: A,
                    onClick: () => (0, s.Ft)(),
                    icon: r.VaJ,
                    "aria-label": "DevTools",
                    selected: l,
                    ...t
                })
            }
        })
    })
}