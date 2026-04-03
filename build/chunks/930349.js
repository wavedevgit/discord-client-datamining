/** chunk id: 930349 params = (module,exports,require) **/
t.d(n, {
    N: () => p,
    k: () => _
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

function A(e) {
    let {
        onClick: n,
        type: t,
        accessibleLabel: a
    } = e, l = "remove" === t ? d.intl.string(d.t["2A+piL"]) : d.intl.string(d.t.GaEG4t);
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

function _(e) {
    let {
        variant: n,
        onClick: t,
        accessibleLabel: a,
        children: r
    } = e;
    return (0, i.jsx)("div", {
        className: o.tileWrapper,
        children: (0, i.jsxs)(s.DUT, {
            "aria-label": a,
            className: l()(o.base, o[n]),
            onClick: t,
            children: [(0, i.jsx)("div", {
                className: o.content,
                children: r
            }), (0, i.jsx)(c, {}), (0, i.jsx)(u, {
                icon: s.TIR,
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
        showOverlay: d,
        deleteButtonConfig: u
    } = e;
    return (0, i.jsxs)("div", {
        className: o.tileWrapper,
        children: [(0, i.jsxs)(s.DUT, {
            "aria-label": a,
            className: l()(o.base, o[n]),
            onClick: t,
            children: [(0, i.jsx)("div", {
                className: o.content,
                children: r
            }), d && (0, i.jsx)(c, {})]
        }), null != u && (0, i.jsx)("div", {
            className: o.deleteButtonWrapper,
            children: (0, i.jsx)(A, {
                ...u
            })
        })]
    })
}