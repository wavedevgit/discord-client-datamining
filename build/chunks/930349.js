/** chunk id: 930349 params = (module,exports,require) **/
t.d(n, {
    N: () => A,
    k: () => x
});
var i = t(627968);
t(64700);
var a = t(503698),
    s = t.n(a),
    r = t(158954),
    l = t(990078),
    o = t(397927),
    d = t(985018),
    c = t(730499);

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

function p(e) {
    let {
        onClick: n,
        type: t,
        accessibleLabel: a
    } = e, s = "remove" === t ? d.intl.string(d.t["2A+piL"]) : d.intl.string(d.t.GaEG4t);
    return (0, i.jsx)(l.m, {
        text: s,
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

function x(e) {
    let {
        variant: n,
        onClick: t,
        accessibleLabel: a,
        children: l
    } = e;
    return (0, i.jsx)("div", {
        className: c.tileWrapper,
        children: (0, i.jsxs)(r.DUT, {
            "aria-label": a,
            className: s()(c.base, c[n]),
            onClick: t,
            children: [(0, i.jsx)("div", {
                className: c.content,
                children: l
            }), (0, i.jsx)(u, {}), (0, i.jsx)(_, {
                icon: o.j96,
                iconAlignment: "bar" === n ? "right" : "center"
            })]
        })
    })
}

function A(e) {
    let {
        variant: n,
        onClick: t,
        accessibleLabel: a,
        children: l,
        showOverlay: o,
        deleteButtonConfig: d
    } = e;
    return (0, i.jsxs)("div", {
        className: c.tileWrapper,
        children: [(0, i.jsxs)(r.DUT, {
            "aria-label": a,
            className: s()(c.base, c[n]),
            onClick: t,
            children: [(0, i.jsx)("div", {
                className: c.content,
                children: l
            }), o && (0, i.jsx)(u, {})]
        }), null != d && (0, i.jsx)("div", {
            className: c.deleteButtonWrapper,
            children: (0, i.jsx)(p, {
                ...d
            })
        })]
    })
}