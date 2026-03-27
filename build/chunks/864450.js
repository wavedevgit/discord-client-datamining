/** chunk id: 864450 params = (module,exports,require) **/
n.d(t, {
    A: () => h
});
var r = n(627968);
n(64700);
var i = n(158954),
    s = n(311907),
    l = n(421380),
    o = n(397927),
    a = n(721923),
    d = n(71393),
    u = n(975571),
    c = n(953382),
    m = n(864310),
    p = n(931936),
    _ = n(289588),
    f = n(568065),
    g = n(652215),
    x = n(136708),
    A = n(985018),
    v = n(602426);

function h(e) {
    let {
        guildId: t,
        showVideoCard: n
    } = e, h = (0, s.bG)([d.A], () => d.A.getGuild(t)), {
        available: E,
        spent: j,
        total: b
    } = (0, m.A)(t), I = (0, c.q)("GuildPowerupsBoostInfoContainerAdmin");
    if (null != h) return (0, r.jsxs)("div", {
        className: v.kL,
        children: [(0, r.jsxs)("div", {
            className: v.N1,
            children: [(0, r.jsx)(i.EYj, {
                variant: "eyebrow",
                color: "text-subtle",
                children: A.intl.string(x.default.hjvcLO)
            }), (0, r.jsx)(i.EYj, {
                className: v.C2,
                variant: "text-xs/semibold",
                children: A.intl.format(x.default.fXE30d, {
                    helpDeskArticle: u.A.getArticleURL(g.MVz.GUILD_BOOSTING_FAQ)
                })
            })]
        }), (0, r.jsxs)("div", {
            className: v.hQ,
            children: [(0, r.jsx)(_.A, {
                count: E,
                type: f.yG.AVAILABLE
            }), (0, r.jsx)(_.A, {
                count: j,
                type: f.yG.SPENT
            }), (0, r.jsx)(_.A, {
                count: b,
                type: f.yG.TOTAL
            })]
        }), (0, r.jsx)(a.A, {
            className: I ? void 0 : v.S6,
            guild: h,
            analyticsLocation: {
                page: g.liQ.GUILD_POWERUPS_OVERVIEW,
                section: g.JJy.GUILD_POWERUPS_OVERVIEW_SIDEBAR
            },
            color: l.XD.CUSTOM,
            size: l.lO.LARGE,
            fullWidth: I,
            useExpressiveButton: I,
            icon: (0, r.jsx)(o._Jp, {
                className: v.Ng,
                size: "sm",
                color: o.LU0.unsafe_rawColors.GUILD_BOOSTING_PINK
            })
        }), (0, r.jsx)(p.A, {
            guildId: t,
            showVideoCard: n
        })]
    })
}