/** chunk id: 890942 params = (module,exports,require) **/
n.d(t, {
    $L: () => b,
    Ft: () => j,
    NI: () => p,
    P5: () => v,
    TG: () => x,
    Yq: () => g,
    kd: () => f
});
var a = n(627968),
    s = n(64700),
    l = n(503698),
    i = n.n(l),
    r = n(397927),
    d = n(915624),
    o = n(162362),
    c = n(333354),
    u = n(985018),
    m = n(876380);

function x(e) {
    let {
        text: t
    } = e;
    return (0, a.jsxs)("div", {
        className: m.mG,
        children: [(0, a.jsx)(r.yr3, {
            size: "xs",
            color: r.LU0.colors.STATUS_POSITIVE
        }), (0, a.jsx)(r.Text, {
            color: "text-feedback-positive",
            variant: "text-sm/bold",
            children: t
        })]
    })
}

function v(e) {
    let {
        dateString: t
    } = e;
    return (0, a.jsxs)("div", {
        className: m.mG,
        children: [(0, a.jsx)(r.EpV, {
            size: "xs",
            color: r.LU0.colors.STATUS_WARNING
        }), (0, a.jsx)(r.Text, {
            color: "status-warning",
            variant: "text-sm/bold",
            children: u.intl.formatToMarkdownString(c.default["ol/ao/"], {
                dateString: (0, d.A)(t)
            })
        })]
    })
}

function g(e) {
    let {
        removingAt: t
    } = e;
    return (0, a.jsxs)("div", {
        className: m.wL,
        children: [(0, a.jsx)(r.EpV, {
            size: "xs",
            color: r.LU0.colors.STATUS_WARNING
        }), (0, a.jsx)(r.Text, {
            color: "status-warning",
            variant: "text-sm/bold",
            children: u.intl.formatToPlainString(c.default["6e2ry1"], {
                dateString: (0, o.A)(t)
            })
        })]
    })
}

function b(e) {
    let {
        cost: t,
        costDecorator: n,
        status: s,
        className: l
    } = e, d = void 0 !== t ? m._A : m.$3;
    return (0, a.jsxs)("div", {
        className: i()(d, l),
        children: [void 0 !== t && (0, a.jsxs)("div", {
            className: i()(m.mG, m.pT),
            children: [(0, a.jsx)(r._Jp, {
                size: "sm",
                color: r.LU0.unsafe_rawColors.GUILD_BOOSTING_PINK
            }), (0, a.jsx)(r.Text, {
                className: m.q9,
                tag: "div",
                variant: "heading-md/semibold",
                color: "text-subtle",
                children: u.intl.formatToPlainString(u.t.t2Wbo1, {
                    required: t,
                    decorator: n ?? ""
                })
            })]
        }), s?.type === "expiring" && (0, a.jsx)(v, {
            dateString: s.expiringAt
        }), s?.type === "removing" && (0, a.jsx)(g, {
            removingAt: s.removingAt
        }), s?.type === "active" && (0, a.jsx)(x, {
            text: s.statusText
        })]
    })
}

function f(e) {
    let {
        children: t
    } = e;
    return (0, a.jsx)("div", {
        className: m.UD,
        children: t
    })
}

function j(e) {
    let {
        title: t,
        textColor: n,
        children: s,
        footer: l
    } = e;
    return (0, a.jsxs)("div", {
        className: m.hQ,
        children: [(0, a.jsxs)("div", {
            children: [(0, a.jsx)("div", {
                className: m.N1,
                children: (0, a.jsx)(r.Heading, {
                    color: n,
                    variant: "heading-md/bold",
                    children: t
                })
            }), s]
        }), l]
    })
}
let p = s.forwardRef(function(e, t) {
    let {
        className: n,
        label: s,
        isActive: l,
        isWarning: d,
        badge: o,
        canRollback: c,
        onClick: x,
        onMouseOver: v,
        onMouseLeave: g,
        children: b
    } = e;
    return (0, a.jsx)("div", {
        className: i()(m.gp, {
            [m.Wq]: c && !l
        }),
        ref: t,
        children: (0, a.jsxs)(r.sqX, {
            "aria-label": s,
            onClick: x,
            onMouseOver: v,
            onMouseLeave: g,
            className: i()(m.kL, {
                [m.vu]: l,
                [m.$e]: d || c && l
            }, n),
            children: [b, "new" === o && (0, a.jsx)(r.LpS, {
                className: m.Hl,
                text: u.intl.string(u.t.y2b7CA)
            }), "beta" === o && (0, a.jsx)(r.LpS, {
                className: m.Hl,
                text: u.intl.string(u.t.oW0eUd),
                color: r.LU0.colors.BACKGROUND_BRAND.css
            })]
        })
    })
})