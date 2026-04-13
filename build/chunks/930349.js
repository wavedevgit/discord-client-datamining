/** chunk id: 930349 params = (module,exports,require) **/
t.d(n, {
    NW: () => h,
    Yt: () => p,
    kL: () => g
});
var i = t(627968);
t(64700);
var a = t(503698),
    r = t.n(a),
    l = t(158954),
    o = t(990078),
    d = t(985018),
    s = t(967024);

function c() {
    return (0, i.jsx)("div", {
        className: s.overlay
    })
}

function _(e) {
    let {
        icon: n,
        iconAlignment: t
    } = e;
    return (0, i.jsx)("div", {
        className: r()(s.iconContainer, {
            [s.iconAlignCenter]: "center" === t,
            [s.iconAlignRight]: "right" === t
        }),
        children: (0, i.jsx)(n, {
            size: "md",
            color: "white",
            "aria-hidden": !0,
            className: s.overlayIcon
        })
    })
}

function u(e) {
    let {
        onClick: n,
        type: t,
        accessibleLabel: a
    } = e, r = "remove" === t ? d.intl.string(d.t.N86XcP) : d.intl.string(d.t.wgIPss);
    return (0, i.jsx)(o.m, {
        text: r,
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

function p(e) {
    let {
        variant: n,
        children: t
    } = e;
    return (0, i.jsx)("div", {
        className: r()(s.tile, s[n]),
        children: t
    })
}

function A(e) {
    let {
        variant: n,
        onClick: t,
        accessibleLabel: a,
        children: r,
        showOverlay: o = !1,
        overlayIcon: d,
        overlayControls: u
    } = e;
    return (0, i.jsxs)(p, {
        variant: n,
        children: [(0, i.jsxs)(l.DUT, {
            className: s.tileButton,
            "aria-label": a,
            onClick: t,
            children: [(0, i.jsx)("div", {
                className: s.content,
                children: r
            }), o && (0, i.jsx)(c, {}), null != d && (0, i.jsx)(_, {
                icon: d,
                iconAlignment: "bar" === n ? "right" : "center"
            })]
        }), u]
    })
}

function g(e) {
    return (0, i.jsx)(A, {
        ...e,
        overlayIcon: l.TIR,
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
            className: s.deleteButtonWrapper,
            children: (0, i.jsx)(u, {
                ...n
            })
        })
    })
}