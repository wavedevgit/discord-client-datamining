/** chunk id: 890942, original params: e,t,n (module,exports,require) **/
n.d(t, {
    $L: () => x,
    Ft: () => p,
    NI: () => j,
    P5: () => f,
    TG: () => g,
    Yq: () => v,
    kd: () => _
});
var a = n(627968),
    i = n(64700),
    s = n(503698),
    l = n.n(s),
    r = n(397927),
    d = n(915624),
    c = n(162362),
    o = n(136708),
    u = n(985018),
    m = n(772574);

function g(e) {
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

function f(e) {
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
            children: u.intl.formatToMarkdownString(o.default["ol/ao/"], {
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
            children: u.intl.formatToPlainString(o.default["6e2ry1"], {
                dateString: (0, c.A)(t)
            })
        })]
    })
}

function x(e) {
    let {
        cost: t,
        costDecorator: n,
        status: i,
        className: s
    } = e, d = void 0 !== t ? m._A : m.$3;
    return (0, a.jsxs)("div", {
        className: l()(d, s),
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
        }), i?.type === "expiring" && (0, a.jsx)(f, {
            dateString: i.expiringAt
        }), i?.type === "removing" && (0, a.jsx)(v, {
            removingAt: i.removingAt
        }), i?.type === "active" && (0, a.jsx)(g, {
            text: i.statusText
        })]
    })
}

function _(e) {
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
        children: i,
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
            }), i]
        }), s]
    })
}
let j = i.forwardRef(function(e, t) {
    let {
        className: n,
        label: i,
        isActive: s,
        isWarning: d,
        badge: c,
        canRollback: o,
        onClick: g,
        onMouseOver: f,
        onMouseLeave: v,
        children: x
    } = e;
    return (0, a.jsx)("div", {
        className: l()(m.gp, {
            [m.Wq]: o && !s
        }),
        ref: t,
        children: (0, a.jsxs)(r.sqX, {
            "aria-label": i,
            onClick: g,
            onMouseOver: f,
            onMouseLeave: v,
            className: l()(m.kL, {
                [m.vu]: s,
                [m.$e]: d || o && s
            }, n),
            children: [x, "new" === c && (0, a.jsx)(r.LpS, {
                className: m.Hl,
                text: u.intl.string(u.t.y2b7CA)
            }), "beta" === c && (0, a.jsx)(r.LpS, {
                className: m.Hl,
                text: u.intl.string(u.t.oW0eUd),
                color: r.LU0.colors.BACKGROUND_BRAND.css
            })]
        })
    })
})