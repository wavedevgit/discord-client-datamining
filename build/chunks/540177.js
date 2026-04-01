/** chunk id: 540177 params = (module,exports,require) **/
n.d(t, {
    R: () => A
});
var i = n(627968),
    a = n(64700),
    l = n(397927),
    r = n(189252),
    s = n(538064),
    o = n(786574),
    d = n(641616),
    c = n(616621);

function u(e) {
    let {
        onClose: t
    } = e, n = (0, d.x)(), a = (0, o.N)(n, s.Ft), r = (0, c.A)();
    return (0, i.jsxs)(l.W1t, {
        "data-menu-migrated": !0,
        onSelect: () => {},
        navId: "devtools-popout",
        variant: "fixed",
        onClose: t,
        "aria-label": "DevTools Actions",
        children: [a, (0, i.jsx)(l.rXV, {
            "aria-label": "Playgrounds",
            children: r
        })]
    })
}

function A(e) {
    let {
        focusSectionProps: t
    } = e, [n, o] = a.useState(!1), [d, c] = a.useState(0), A = a.useRef(null), h = e => {
        clearTimeout(d), c(setTimeout(() => {
            o(e)
        }, 100))
    };
    return (0, i.jsx)("div", {
        onMouseEnter: () => h(!0),
        onMouseLeave: () => h(!1),
        children: (0, i.jsx)(l.YNO, {
            targetElementRef: A,
            shouldShow: n,
            animation: l.YNO.Animation.NONE,
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
                    isShown: a
                } = n;
                return (0, i.jsx)(r.A, {
                    ref: A,
                    onClick: () => (0, s.Ft)(),
                    icon: l.VaJ,
                    "aria-label": "DevTools",
                    selected: a,
                    ...t
                })
            }
        })
    })
}