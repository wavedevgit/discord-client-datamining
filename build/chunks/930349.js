/** chunk id: 930349 params = (module,exports,require) **/
t.d(n, {
    NW: () => I,
    kL: () => g
});
var i = t(627968);
t(64700);
var a = t(503698),
    l = t.n(a),
    r = t(158954),
    s = t(990078),
    o = t(985018),
    d = t(730499);

function c() {
    return (0, i.jsx)("div", {
        className: d.overlay
    })
}

function u(e) {
    let {
        icon: n,
        iconAlignment: t
    } = e;
    return (0, i.jsx)("div", {
        className: l()(d.iconContainer, {
            [d.iconAlignCenter]: "center" === t,
            [d.iconAlignRight]: "right" === t
        }),
        children: (0, i.jsx)(n, {
            size: "md",
            color: "white",
            "aria-hidden": !0,
            className: d.overlayIcon
        })
    })
}

function _(e) {
    let {
        onClick: n,
        type: t,
        accessibleLabel: a
    } = e, l = "remove" === t ? o.intl.string(o.t.N86XcP) : o.intl.string(o.t.wgIPss);
    return (0, i.jsx)(s.m, {
        text: l,
        ariaHidden: !0,
        children: (0, i.jsx)(r.K0, {
            "aria-label": a,
            icon: "remove" === t ? r.ucK : r.mqY,
            size: "sm",
            variant: "overlay-secondary",
            onClick: n
        })
    })
}

function p(e) {
    let {
        variant: n,
        children: t
    } = e;
    return (0, i.jsx)("div", {
        className: l()(d.tile, d[n]),
        children: t
    })
}

function A(e) {
    let {
        variant: n,
        onClick: t,
        accessibleLabel: a,
        children: l,
        showOverlay: s = !1,
        overlayIcon: o,
        overlayControls: _
    } = e;
    return (0, i.jsxs)(p, {
        variant: n,
        children: [(0, i.jsxs)(r.DUT, {
            className: d.tileButton,
            "aria-label": a,
            onClick: t,
            children: [(0, i.jsx)("div", {
                className: d.content,
                children: l
            }), s && (0, i.jsx)(c, {}), null != o && (0, i.jsx)(u, {
                icon: o,
                iconAlignment: "bar" === n ? "right" : "center"
            })]
        }), _]
    })
}

function g(e) {
    return (0, i.jsx)(A, {
        ...e,
        overlayIcon: r.TIR,
        showOverlay: !0
    })
}

function I(e) {
    let {
        deleteButtonConfig: n,
        ...t
    } = e;
    return (0, i.jsx)(A, {
        ...t,
        overlayControls: null != n && (0, i.jsx)("div", {
            className: d.deleteButtonWrapper,
            children: (0, i.jsx)(_, {
                ...n
            })
        })
    })
}