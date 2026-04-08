/** chunk id: 890942 params = (module,exports,require) **/
n.d(t, {
    $L: () => f,
    Ft: () => b,
    NI: () => h,
    P5: () => v,
    TG: () => x,
    Yq: () => g,
    kd: () => j
});
var a = n(627968),
    l = n(64700),
    s = n(503698),
    i = n.n(s),
    r = n(397927),
    d = n(915624),
    o = n(162362),
    c = n(136708),
    u = n(985018),
    m = n(242030);

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

function f(e) {
    let {
        cost: t,
        costDecorator: n,
        status: l,
        className: s
    } = e, d = void 0 !== t ? m._A : m.$3;
    return (0, a.jsxs)("div", {
        className: i()(d, s),
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
        }), l?.type === "expiring" && (0, a.jsx)(v, {
            dateString: l.expiringAt
        }), l?.type === "removing" && (0, a.jsx)(g, {
            removingAt: l.removingAt
        }), l?.type === "active" && (0, a.jsx)(x, {
            text: l.statusText
        })]
    })
}

function j(e) {
    let {
        children: t
    } = e;
    return (0, a.jsx)("div", {
        className: m.UD,
        children: t
    })
}

function b(e) {
    let {
        title: t,
        textColor: n,
        children: l,
        footer: s
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
            }), l]
        }), s]
    })
}
let h = l.forwardRef(function(e, t) {
    let {
        className: n,
        label: l,
        isActive: s,
        isWarning: d,
        badge: o,
        canRollback: c,
        onClick: x,
        onMouseOver: v,
        onMouseLeave: g,
        children: f
    } = e;
    return (0, a.jsx)("div", {
        className: i()(m.gp, {
            [m.Wq]: c && !s
        }),
        ref: t,
        children: (0, a.jsxs)(r.sqX, {
            "aria-label": l,
            onClick: x,
            onMouseOver: v,
            onMouseLeave: g,
            className: i()(m.kL, {
                [m.vu]: s,
                [m.$e]: d || c && s
            }, n),
            children: [f, "new" === o && (0, a.jsx)(r.LpS, {
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