/** Chunk was on 88615 **/
/** chunk id: 864450, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => x
});
var r = n(627968);
n(64700);
var l = n(158954),
    i = n(311907),
    o = n(421380),
    s = n(397927),
    a = n(721923),
    u = n(71393),
    d = n(975571),
    c = n(864310),
    p = n(931936),
    m = n(289588),
    f = n(568065),
    v = n(652215),
    g = n(333354),
    A = n(985018),
    _ = n(958920);

function x(e) {
    let {
        guildId: t
    } = e, n = (0, i.bG)([u.A], () => u.A.getGuild(t)), {
        available: x,
        spent: h,
        total: b
    } = (0, c.A)(t);
    if (null != n) return (0, r.jsxs)("div", {
        className: _.kL,
        children: [(0, r.jsxs)("div", {
            className: _.N1,
            children: [(0, r.jsx)(l.EYj, {
                variant: "eyebrow",
                color: "text-subtle",
                children: A.intl.string(g.default.hjvcLO)
            }), (0, r.jsx)(l.EYj, {
                className: _.C2,
                variant: "text-xs/semibold",
                children: A.intl.format(g.default.fXE30d, {
                    helpDeskArticle: d.A.getArticleURL(v.MVz.GUILD_BOOSTING_FAQ)
                })
            })]
        }), (0, r.jsxs)("div", {
            className: _.hQ,
            children: [(0, r.jsx)(m.A, {
                count: x,
                type: f.yG.AVAILABLE
            }), (0, r.jsx)(m.A, {
                count: h,
                type: f.yG.SPENT
            }), (0, r.jsx)(m.A, {
                count: b,
                type: f.yG.TOTAL
            })]
        }), (0, r.jsx)(a.A, {
            className: _.S6,
            guild: n,
            analyticsLocation: {
                page: v.liQ.GUILD_POWERUPS_OVERVIEW,
                section: v.JJy.GUILD_POWERUPS_OVERVIEW_SIDEBAR
            },
            color: o.XD.CUSTOM,
            size: o.lO.LARGE,
            icon: (0, r.jsx)(s._Jp, {
                className: _.Ng,
                size: "sm",
                color: s.LU0.unsafe_rawColors.GUILD_BOOSTING_PINK
            })
        }), (0, r.jsx)(p.A, {
            guildId: t
        })]
    })
}