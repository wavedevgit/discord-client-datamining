/** chunk id: 890942, original params: e,t,n (module,exports,require) **/
n.d(t, {
    $L: () => g,
    Ft: () => _,
    NI: () => x,
    P5: () => f,
    TG: () => m,
    Yq: () => v,
    kd: () => A
});
var r = n(627968),
    l = n(64700),
    i = n(503698),
    o = n.n(i),
    s = n(397927),
    a = n(915624),
    u = n(162362),
    d = n(333354),
    c = n(985018),
    p = n(876380);

function m(e) {
    let {
        text: t
    } = e;
    return (0, r.jsxs)("div", {
        className: p.mG,
        children: [(0, r.jsx)(s.yr3, {
            size: "xs",
            color: s.LU0.colors.STATUS_POSITIVE
        }), (0, r.jsx)(s.Text, {
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
    return (0, r.jsxs)("div", {
        className: p.mG,
        children: [(0, r.jsx)(s.EpV, {
            size: "xs",
            color: s.LU0.colors.STATUS_WARNING
        }), (0, r.jsx)(s.Text, {
            color: "status-warning",
            variant: "text-sm/bold",
            children: c.intl.formatToMarkdownString(d.default["ol/ao/"], {
                dateString: (0, a.A)(t)
            })
        })]
    })
}

function v(e) {
    let {
        removingAt: t
    } = e;
    return (0, r.jsxs)("div", {
        className: p.wL,
        children: [(0, r.jsx)(s.EpV, {
            size: "xs",
            color: s.LU0.colors.STATUS_WARNING
        }), (0, r.jsx)(s.Text, {
            color: "status-warning",
            variant: "text-sm/bold",
            children: c.intl.formatToPlainString(d.default["6e2ry1"], {
                dateString: (0, u.A)(t)
            })
        })]
    })
}

function g(e) {
    let {
        cost: t,
        costDecorator: n,
        status: l,
        className: i
    } = e, a = void 0 !== t ? p._A : p.$3;
    return (0, r.jsxs)("div", {
        className: o()(a, i),
        children: [void 0 !== t && (0, r.jsxs)("div", {
            className: o()(p.mG, p.pT),
            children: [(0, r.jsx)(s._Jp, {
                size: "sm",
                color: s.LU0.unsafe_rawColors.GUILD_BOOSTING_PINK
            }), (0, r.jsx)(s.Text, {
                className: p.q9,
                tag: "div",
                variant: "heading-md/semibold",
                color: "text-subtle",
                children: c.intl.formatToPlainString(c.t.t2Wbo1, {
                    required: t,
                    decorator: null != n ? n : ""
                })
            })]
        }), (null == l ? void 0 : l.type) === "expiring" && (0, r.jsx)(f, {
            dateString: l.expiringAt
        }), (null == l ? void 0 : l.type) === "removing" && (0, r.jsx)(v, {
            removingAt: l.removingAt
        }), (null == l ? void 0 : l.type) === "active" && (0, r.jsx)(m, {
            text: l.statusText
        })]
    })
}

function A(e) {
    let {
        children: t
    } = e;
    return (0, r.jsx)("div", {
        className: p.UD,
        children: t
    })
}

function _(e) {
    let {
        title: t,
        textColor: n,
        children: l,
        footer: i
    } = e;
    return (0, r.jsxs)("div", {
        className: p.hQ,
        children: [(0, r.jsxs)("div", {
            children: [(0, r.jsx)("div", {
                className: p.N1,
                children: (0, r.jsx)(s.Heading, {
                    color: n,
                    variant: "heading-md/bold",
                    children: t
                })
            }), l]
        }), i]
    })
}
let x = l.forwardRef(function(e, t) {
    let {
        className: n,
        label: l,
        isActive: i,
        isWarning: a,
        badge: u,
        canRollback: d,
        onClick: m,
        onMouseOver: f,
        onMouseLeave: v,
        children: g
    } = e;
    return (0, r.jsx)("div", {
        className: o()(p.gp, {
            [p.Wq]: d && !i
        }),
        ref: t,
        children: (0, r.jsxs)(s.sqX, {
            "aria-label": l,
            onClick: m,
            onMouseOver: f,
            onMouseLeave: v,
            className: o()(p.kL, {
                [p.vu]: i,
                [p.$e]: a || d && i
            }, n),
            children: [g, "new" === u && (0, r.jsx)(s.LpS, {
                className: p.Hl,
                text: c.intl.string(c.t.y2b7CA)
            }), "beta" === u && (0, r.jsx)(s.LpS, {
                className: p.Hl,
                text: c.intl.string(c.t.oW0eUd),
                color: s.LU0.colors.BACKGROUND_BRAND.css
            })]
        })
    })
})