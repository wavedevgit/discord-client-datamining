/** chunk id: 216595 params = (module,exports,require) **/
r.d(t, {
    A: () => p
});
var n = r(627968),
    s = r(503698),
    l = r.n(s),
    a = r(934551),
    i = r(158954),
    o = r(311907),
    c = r(397927),
    u = r(47167),
    d = r(713654),
    h = r(598104),
    _ = r(263063),
    f = r(71393),
    S = r(985018),
    g = r(609632);
let E = {
    top: 8,
    bottom: 8,
    left: -4,
    right: -4
};

function p(e) {
    let {
        channel: t,
        children: r
    } = e;
    return (0, n.jsx)(i.vN3, {
        offset: E,
        children: (0, n.jsxs)("div", {
            className: g.ZO,
            "data-recents-channel": t.id,
            children: [(0, n.jsx)(A, {
                channel: t
            }), t.isPrivate() ? null : (0, n.jsx)(a.ChevronSmallRightIcon, {
                size: "xxs"
            }), (0, n.jsx)(m, {
                channel: t
            }), r]
        })
    })
}

function A(e) {
    let {
        channel: t
    } = e, r = (0, o.bG)([f.A], () => f.A.getGuild(t.guild_id));
    return null != r ? (0, n.jsx)(_.Ay, {
        className: g.Kk,
        guild: r,
        size: _.Ay.Sizes.SMALLER,
        "aria-hidden": !0
    }) : t.isGroupDM() ? (0, n.jsx)(h.A, {
        channel: t,
        size: c._3J.SIZE_24
    }) : (0, n.jsx)("div", {
        className: l()(g.Kk, g.ro),
        children: (0, n.jsx)(a.ChatIcon, {
            size: "xxs"
        })
    })
}

function m(e) {
    let {
        channel: t
    } = e, r = (0, o.bG)([f.A], () => f.A.getGuild(t.guild_id)), s = (0, u.Ay)(t, !1), l = (0, d.gU)(t, r), a = t.isPrivate() || null == l, i = t.isDM() ? S.intl.formatToPlainString(S.t.smD7XV, {
        username: s
    }) : s;
    return (0, n.jsxs)("div", {
        className: g.yP,
        children: [a ? null : (0, n.jsx)(l, {
            className: g.j1,
            size: "xxs"
        }), (0, n.jsx)(c.Heading, {
            variant: "text-md/semibold",
            color: "text-default",
            children: i
        })]
    })
}