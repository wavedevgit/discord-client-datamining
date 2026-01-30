/** chunk id: 539085, original params: e,t,r (module,exports,require) **/
r.d(t, {
    A: () => v
}), r(896048), r(228524);
var n = r(627968),
    o = r(64700),
    s = r(503698),
    a = r.n(s),
    i = r(397927),
    l = r(470934),
    c = r(998418),
    d = r(813847),
    u = r(890942),
    p = r(490557),
    f = r(439156),
    x = r(220628),
    j = r(867060),
    m = r(985018),
    b = r(235545);

function v(e) {
    let {
        canUseBoosts: t,
        guildId: r,
        powerup: s
    } = e, [v, O] = o.useState(!1), y = (0, c.Ay)(r, s), g = (0, d.e)(s, y, !1), h = (0, c.dy)(y), {
        disabled: w
    } = (0, l.A)(r, s, h), {
        onActivate: _,
        error: I
    } = (0, x.A)(r, s);
    (0, j.A)(I);
    let P = !t || w,
        A = h && !P,
        C = (0, n.jsxs)(n.Fragment, {
            children: [(0, n.jsx)("div", {
                className: a()(b._W, {
                    [b.vu]: h
                }),
                children: (0, n.jsx)(p.l, {
                    powerup: s,
                    isHovering: !P && v
                })
            }), (0, n.jsxs)("div", {
                className: b.xQ,
                children: [(0, n.jsxs)("div", {
                    className: b.U7,
                    children: [(0, n.jsx)("div", {
                        children: (0, n.jsx)(i.Text, {
                            variant: "text-sm/medium",
                            color: (h || v) && !P ? "text-strong" : "text-subtle",
                            children: s.description
                        })
                    }), (0, n.jsxs)("div", {
                        children: [(null == g ? void 0 : g.type) === "expiring" && (0, n.jsx)(u.P5, {
                            dateString: g.expiringAt
                        }), (null == g ? void 0 : g.type) === "removing" && (0, n.jsx)(u.Yq, {
                            removingAt: g.removingAt
                        }), (null == g ? void 0 : g.type) === "active" && (0, n.jsx)(u.TG, {
                            text: g.statusText
                        }), null == g && (0, n.jsxs)("div", {
                            className: b.II,
                            children: [(0, n.jsx)(i._Jp, {
                                size: "sm",
                                color: i.LU0.unsafe_rawColors.GUILD_BOOSTING_PINK
                            }), (0, n.jsx)(i.Text, {
                                variant: "text-sm/medium",
                                color: "text-subtle",
                                children: m.intl.formatToPlainString(m.t.t2Wbo1, {
                                    required: s.cost,
                                    decorator: ""
                                })
                            })]
                        })]
                    })]
                }), A && (0, n.jsx)(f.A, {
                    compact: !0,
                    iconSize: "md",
                    guildId: r,
                    powerup: s,
                    className: b.Rm
                })]
            })]
        });
    return h ? (0, n.jsx)("div", {
        className: a()(b.nK, b.RO, {
            [b.r9]: P
        }),
        onMouseEnter: () => O(!0),
        onMouseLeave: () => O(!1),
        children: C
    }) : (0, n.jsx)(i.DUT, {
        className: a()(b.nK, {
            [b.r9]: P
        }),
        onMouseEnter: () => O(!0),
        onMouseLeave: () => O(!1),
        "aria-disabled": P,
        onClick: e => {
            e.stopPropagation(), P || null == _ || _({
                shouldCloseAllModals: !1
            })
        },
        children: C
    })
}