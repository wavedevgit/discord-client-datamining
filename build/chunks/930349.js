/** chunk id: 930349 params = (module,exports,require) **/
t.d(n, {
    N: () => p,
    k: () => x
});
var i = t(627968);
t(64700);
var a = t(503698),
    s = t.n(a),
    l = t(158954),
    r = t(990078),
    o = t(397927),
    d = t(985018),
    c = t(967024);

function u() {
    return (0, i.jsx)("div", {
        className: c.overlay
    })
}

function _(e) {
    let {
        icon: n,
        iconAlignment: t
    } = e;
    return (0, i.jsx)("div", {
        className: s()(c.iconContainer, {
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

function A(e) {
    let {
        onClick: n,
        type: t,
        accessibleLabel: a
    } = e, s = "remove" === t ? d.intl.string(d.t["2A+piL"]) : d.intl.string(d.t.GaEG4t);
    return (0, i.jsx)(r.m, {
        text: s,
        ariaHidden: !0,
        children: (0, i.jsx)(l.K0, {
            "aria-label": a,
            icon: "remove" === t ? l.ucK : l.mqY,
            size: "sm",
            variant: "overlay-secondary",
            onClick: n
        })
    })
}

function x(e) {
    let {
        variant: n,
        onClick: t,
        accessibleLabel: a,
        children: r
    } = e;
    return (0, i.jsx)("div", {
        className: c.tileWrapper,
        children: (0, i.jsxs)(l.DUT, {
            "aria-label": a,
            className: s()(c.base, c[n]),
            onClick: t,
            children: [(0, i.jsx)("div", {
                className: c.content,
                children: r
            }), (0, i.jsx)(u, {}), (0, i.jsx)(_, {
                icon: o.j96,
                iconAlignment: "bar" === n ? "right" : "center"
            })]
        })
    })
}

function p(e) {
    let {
        variant: n,
        onClick: t,
        accessibleLabel: a,
        children: r,
        showOverlay: o,
        deleteButtonConfig: d
    } = e;
    return (0, i.jsxs)("div", {
        className: c.tileWrapper,
        children: [(0, i.jsxs)(l.DUT, {
            "aria-label": a,
            className: s()(c.base, c[n]),
            onClick: t,
            children: [(0, i.jsx)("div", {
                className: c.content,
                children: r
            }), o && (0, i.jsx)(u, {})]
        }), null != d && (0, i.jsx)("div", {
            className: c.deleteButtonWrapper,
            children: (0, i.jsx)(A, {
                ...d
            })
        })]
    })
}