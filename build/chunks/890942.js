/** chunk id: 890942, original params: e,t,n (module,exports,require) **/
n.d(t, {
    $L: () => f,
    Ft: () => p,
    NI: () => b,
    P5: () => g,
    TG: () => x,
    Yq: () => v,
    kd: () => j
});
var a = n(627968),
    s = n(64700),
    i = n(503698),
    l = n.n(i),
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

function g(e) {
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

function v(e) {
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
        status: s,
        className: i
    } = e, d = void 0 !== t ? m._A : m.$3;
    return (0, a.jsxs)("div", {
        className: l()(d, i),
        children: [void 0 !== t && (0, a.jsxs)("div", {
            className: l()(m.mG, m.pT),
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
        }), s?.type === "expiring" && (0, a.jsx)(g, {
            dateString: s.expiringAt
        }), s?.type === "removing" && (0, a.jsx)(v, {
            removingAt: s.removingAt
        }), s?.type === "active" && (0, a.jsx)(x, {
            text: s.statusText
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

function p(e) {
    let {
        title: t,
        textColor: n,
        children: s,
        footer: i
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
        }), i]
    })
}
let b = s.forwardRef(function(e, t) {
    let {
        className: n,
        label: s,
        isActive: i,
        isWarning: d,
        badge: o,
        canRollback: c,
        onClick: x,
        onMouseOver: g,
        onMouseLeave: v,
        children: f
    } = e;
    return (0, a.jsx)("div", {
        className: l()(m.gp, {
            [m.Wq]: c && !i
        }),
        ref: t,
        children: (0, a.jsxs)(r.sqX, {
            "aria-label": s,
            onClick: x,
            onMouseOver: g,
            onMouseLeave: v,
            className: l()(m.kL, {
                [m.vu]: i,
                [m.$e]: d || c && i
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