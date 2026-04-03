/** chunk id: 930349 params = (module,exports,require) **/
t.d(n, {
    N: () => x,
    k: () => p
});
var i = t(627968);
t(64700);
var a = t(503698),
    l = t.n(a),
    s = t(158954),
    r = t(990078),
    d = t(397927),
    o = t(985018),
    c = t(967024);

function u() {
    return (0, i.jsx)("div", {
        className: c.overlay
    })
}

function A(e) {
    let {
        icon: n,
        iconAlignment: t
    } = e;
    return (0, i.jsx)("div", {
        className: l()(c.iconContainer, {
            [c.iconAlignCenter]: "center" === t,
            [c.iconAlignRight]: "right" === t
        }),
        children: (0, i.jsx)(n, {
            size: "sm",
            color: "white",
            "aria-hidden": !0,
            className: c.overlayIcon
        })
    })
}

function _(e) {
    let {
        onClick: n,
        type: t,
        accessibleLabel: a
    } = e, l = "remove" === t ? o.intl.string(o.t["2A+piL"]) : o.intl.string(o.t.GaEG4t);
    return (0, i.jsx)(r.m, {
        text: l,
        ariaHidden: !0,
        children: (0, i.jsx)(s.K0, {
            "aria-label": a,
            icon: "remove" === t ? s.ucK : s.mqY,
            size: "sm",
            variant: "overlay-secondary",
            onClick: n
        })
    })
}

function p(e) {
    let {
        variant: n,
        onClick: t,
        accessibleLabel: a,
        children: r
    } = e;
    return (0, i.jsx)("div", {
        className: c.tileWrapper,
        children: (0, i.jsxs)(s.DUT, {
            "aria-label": a,
            className: l()(c.base, c[n]),
            onClick: t,
            children: [(0, i.jsx)("div", {
                className: c.content,
                children: r
            }), (0, i.jsx)(u, {}), (0, i.jsx)(A, {
                icon: d.j96,
                iconAlignment: "bar" === n ? "right" : "center"
            })]
        })
    })
}

function x(e) {
    let {
        variant: n,
        onClick: t,
        accessibleLabel: a,
        children: r,
        showOverlay: d,
        deleteButtonConfig: o
    } = e;
    return (0, i.jsxs)("div", {
        className: c.tileWrapper,
        children: [(0, i.jsxs)(s.DUT, {
            "aria-label": a,
            className: l()(c.base, c[n]),
            onClick: t,
            children: [(0, i.jsx)("div", {
                className: c.content,
                children: r
            }), d && (0, i.jsx)(u, {})]
        }), null != o && (0, i.jsx)("div", {
            className: c.deleteButtonWrapper,
            children: (0, i.jsx)(_, {
                ...o
            })
        })]
    })
}