/** chunk id: 930349 params = (module,exports,require) **/
t.d(n, {
    NW: () => h,
    Yt: () => p,
    kL: () => g
});
var i = t(627968);
t(64700);
var a = t(503698),
    l = t.n(a),
    r = t(158954),
    o = t(990078),
    s = t(985018),
    d = t(967024);

function c() {
    return (0, i.jsx)("div", {
        className: d.overlay
    })
}

function _(e) {
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

function u(e) {
    let {
        onClick: n,
        type: t,
        accessibleLabel: a
    } = e, l = "remove" === t ? s.intl.string(s.t.N86XcP) : s.intl.string(s.t.wgIPss);
    return (0, i.jsx)(o.m, {
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
        showOverlay: o = !1,
        overlayIcon: s,
        overlayControls: u
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
            }), o && (0, i.jsx)(c, {}), null != s && (0, i.jsx)(_, {
                icon: s,
                iconAlignment: "bar" === n ? "right" : "center"
            })]
        }), u]
    })
}

function g(e) {
    return (0, i.jsx)(A, {
        ...e,
        overlayIcon: r.TIR,
        showOverlay: !0
    })
}

function h(e) {
    let {
        deleteButtonConfig: n,
        ...t
    } = e;
    return (0, i.jsx)(A, {
        ...t,
        overlayControls: null != n && (0, i.jsx)("div", {
            className: d.deleteButtonWrapper,
            children: (0, i.jsx)(u, {
                ...n
            })
        })
    })
}