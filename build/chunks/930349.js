/** chunk id: 930349 params = (module,exports,require) **/
t.d(n, {
    NW: () => f,
    Yt: () => p,
    kL: () => g
});
var i = t(627968);
t(64700);
var a = t(503698),
    l = t.n(a),
    r = t(158954),
    d = t(990078),
    s = t(985018),
    o = t(889536);

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
    } = e, l = "remove" === t ? s.intl.string(s.t.N86XcP) : s.intl.string(s.t.wgIPss);
    return (0, i.jsx)(d.m, {
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
        disabled: t = !1,
        children: a
    } = e;
    return (0, i.jsx)("div", {
        className: l()(o.tile, o[n], {
            [o.disabled]: t
        }),
        children: a
    })
}

function A(e) {
    let {
        variant: n,
        onClick: t,
        accessibleLabel: a,
        children: l,
        showOverlay: d = !1,
        overlayIcon: s,
        overlayControls: _,
        disabled: A = !1
    } = e;
    return (0, i.jsxs)(p, {
        variant: n,
        disabled: A,
        children: [(0, i.jsxs)(r.DUT, {
            className: o.tileButton,
            "aria-label": a,
            onClick: A ? void 0 : t,
            "aria-disabled": A,
            tabIndex: A ? -1 : 0,
            children: [(0, i.jsx)("div", {
                className: o.content,
                children: l
            }), d && !A && (0, i.jsx)(c, {}), null != s && (0, i.jsx)(u, {
                icon: s,
                iconAlignment: "bar" === n ? "right" : "center"
            })]
        }), !A && _]
    })
}

function g(e) {
    return (0, i.jsx)(A, {
        ...e,
        overlayIcon: r.TIR,
        showOverlay: !0
    })
}

function f(e) {
    let {
        deleteButtonConfig: n,
        ...t
    } = e;
    return (0, i.jsx)(A, {
        ...t,
        overlayControls: null != n && (0, i.jsx)("div", {
            className: o.deleteButtonWrapper,
            children: (0, i.jsx)(_, {
                ...n
            })
        })
    })
}