/** chunk id: 95551 params = (module,exports,require) **/
n.d(t, {
    Gs: () => m,
    N3: () => u,
    eE: () => c
});
var a = n(627968),
    i = n(64700),
    l = n(934551),
    s = n(397927),
    r = n(993401),
    o = n(985018),
    d = n(229598);

function c(e) {
    return (0, a.jsx)("div", {
        className: d.wE,
        children: (0, a.jsx)(s.W1t, {
            "data-menu-migrated": !0,
            variant: "fixed",
            hideScroller: !0,
            onSelect: void 0,
            ...e
        })
    })
}

function u(e) {
    let {
        action: t,
        onClick: n,
        icon: c,
        label: u,
        sublabel: m,
        trailing: h,
        renderSubmenu: x,
        ref: p
    } = e, g = null != n, _ = (0, r.rE)({
        action: t,
        onClick: n
    }), [f, v] = i.useState(!1), b = i.useRef(null), j = p ?? b, A = null != x, C = A && g, y = {
        offset: {
            top: -8,
            left: -8,
            right: -8,
            bottom: -8
        }
    }, S = i.useCallback(() => {
        v(!0)
    }, []), T = i.useCallback(() => {
        v(!1)
    }, []), E = () => (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)("div", {
            className: d.iA,
            children: (0, a.jsx)(c, {
                size: "xs",
                color: "currentColor"
            })
        }), (0, a.jsxs)("div", {
            className: d.$H,
            children: [(0, a.jsxs)("div", {
                children: [(0, a.jsx)(s.Text, {
                    color: "currentColor",
                    variant: "text-sm/medium",
                    className: d.W1,
                    children: u
                }), (0, a.jsx)(s.Text, {
                    color: "currentColor",
                    variant: "text-xs/medium",
                    children: m
                })]
            }), h]
        })]
    }), N = e => {
        let t;
        return t = C ? (0, a.jsxs)(a.Fragment, {
            children: [(0, a.jsx)(s.DUT, {
                className: d.ef,
                onClick: _,
                focusProps: {
                    offset: {
                        ...y.offset,
                        right: 0
                    }
                },
                children: E()
            }), (0, a.jsx)(s.DUT, {
                className: d.ap,
                "aria-label": o.intl.string(o.t.PdRCRg),
                ...e,
                onClick: S,
                focusProps: y,
                children: (0, a.jsx)(l.ChevronSmallRightIcon, {
                    size: "xs",
                    color: "currentColor"
                })
            })]
        }) : A ? (0, a.jsxs)(s.DUT, {
            className: d.ef,
            ...e,
            onClick: S,
            focusProps: y,
            children: [E(), (0, a.jsx)("div", {
                className: d.ap,
                children: (0, a.jsx)(l.ChevronSmallRightIcon, {
                    size: "xs",
                    color: "currentColor"
                })
            })]
        }) : (0, a.jsx)(s.DUT, {
            className: d.ef,
            onClick: _,
            focusProps: y,
            children: E()
        }), (0, a.jsx)("div", {
            ref: j,
            className: d.jG,
            children: t
        })
    };
    return A ? (0, a.jsx)("li", {
        className: d.j$,
        onMouseEnter: S,
        onMouseLeave: T,
        children: (0, a.jsx)(s.YNO, {
            targetElementRef: j,
            spacing: 0,
            renderPopout: x,
            shouldShow: f,
            onRequestClose: T,
            children: N
        })
    }) : (0, a.jsx)("li", {
        className: d.j$,
        children: N()
    })
}

function m(e) {
    let {
        children: t,
        "aria-label": n
    } = e;
    return (0, a.jsx)("ul", {
        "aria-label": n,
        children: t
    })
}