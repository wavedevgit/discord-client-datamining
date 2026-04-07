/** chunk id: 930349 params = (module,exports,require) **/
t.d(n, {
    NW: () => g,
    kL: () => p
});
var i = t(627968);
t(64700);
var a = t(503698),
    l = t.n(a),
    s = t(158954),
    r = t(990078),
    d = t(985018),
    o = t(967024);

function c() {
    return (0, i.jsx)("div", {
        className: o.overlay
    })
}

function u(e) {
    let {
        icon: n,
        iconAlignment: t
    } = e;
    return (0, i.jsx)("div", {
        className: l()(o.iconContainer, {
            [o.iconAlignCenter]: "center" === t,
            [o.iconAlignRight]: "right" === t
        }),
        children: (0, i.jsx)(n, {
            size: "md",
            color: "white",
            "aria-hidden": !0,
            className: o.overlayIcon
        })
    })
}

function _(e) {
    let {
        onClick: n,
        type: t,
        accessibleLabel: a
    } = e, l = "remove" === t ? d.intl.string(d.t.N86XcP) : d.intl.string(d.t.wgIPss);
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

function A(e) {
    let {
        variant: n,
        children: t
    } = e;
    return (0, i.jsx)("div", {
        className: l()(o.tile, o[n]),
        children: t
    })
}

function x(e) {
    let {
        variant: n,
        onClick: t,
        accessibleLabel: a,
        children: l,
        showOverlay: r = !1,
        overlayIcon: d,
        overlayControls: _
    } = e;
    return (0, i.jsxs)(A, {
        variant: n,
        children: [(0, i.jsxs)(s.DUT, {
            className: o.tileButton,
            "aria-label": a,
            onClick: t,
            children: [(0, i.jsx)("div", {
                className: o.content,
                children: l
            }), r && (0, i.jsx)(c, {}), null != d && (0, i.jsx)(u, {
                icon: d,
                iconAlignment: "bar" === n ? "right" : "center"
            })]
        }), _]
    })
}

function p(e) {
    return (0, i.jsx)(x, {
        ...e,
        overlayIcon: s.TIR,
        showOverlay: !0
    })
}

function g(e) {
    let {
        deleteButtonConfig: n,
        ...t
    } = e;
    return (0, i.jsx)(x, {
        ...t,
        overlayControls: null != n && (0, i.jsx)("div", {
            className: o.deleteButtonWrapper,
            children: (0, i.jsx)(_, {
                ...n
            })
        })
    })
}