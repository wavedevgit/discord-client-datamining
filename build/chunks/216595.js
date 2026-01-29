/** Chunk was on 52199 **/
/** chunk id: 216595, original params: e,t,r (module,exports,require) **/
r.d(t, {
    A: () => A
});
var n = r(627968),
    l = r(503698),
    s = r.n(l),
    a = r(934551),
    i = r(158954),
    o = r(311907),
    c = r(397927),
    u = r(47167),
    d = r(713654),
    h = r(598104),
    p = r(263063),
    f = r(71393),
    g = r(985018),
    _ = r(348635);
let E = {
    top: 8,
    bottom: 8,
    left: -4,
    right: -4
};

function A(e) {
    let {
        channel: t,
        children: r
    } = e;
    return (0, n.jsx)(i.vN3, {
        offset: E,
        children: (0, n.jsxs)("div", {
            className: _.ZO,
            "data-recents-channel": t.id,
            children: [(0, n.jsx)(y, {
                channel: t
            }), t.isPrivate() ? null : (0, n.jsx)(a.ChevronSmallRightIcon, {
                size: "xxs"
            }), (0, n.jsx)(S, {
                channel: t
            }), r]
        })
    })
}

function y(e) {
    let {
        channel: t
    } = e, r = (0, o.bG)([f.A], () => f.A.getGuild(t.guild_id));
    return null != r ? (0, n.jsx)(p.A, {
        className: _.Kk,
        guild: r,
        size: p.A.Sizes.SMALLER,
        "aria-hidden": !0
    }) : t.isGroupDM() ? (0, n.jsx)(h.A, {
        channel: t,
        size: c._3J.SIZE_24
    }) : (0, n.jsx)("div", {
        className: s()(_.Kk, _.ro),
        children: (0, n.jsx)(a.ChatIcon, {
            size: "xxs"
        })
    })
}

function S(e) {
    let {
        channel: t
    } = e, r = (0, o.bG)([f.A], () => f.A.getGuild(t.guild_id)), l = (0, u.Ay)(t, !1), s = (0, d.gU)(t, r), a = t.isPrivate() || null == s, i = t.isDM() ? g.intl.formatToPlainString(g.t.smD7XV, {
        username: l
    }) : l;
    return (0, n.jsxs)("div", {
        className: _.yP,
        children: [a ? null : (0, n.jsx)(s, {
            className: _.j1,
            size: "xxs"
        }), (0, n.jsx)(c.Heading, {
            variant: "text-md/semibold",
            color: "text-default",
            children: i
        })]
    })
}