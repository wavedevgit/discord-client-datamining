/** chunk id: 515598, original params: e,t,a (module,exports,require) **/
a.d(t, {
    A: () => m
});
var n = a(627968);
a(64700);
var i = a(311907),
    s = a(397927),
    l = a(688810),
    r = a(503566),
    o = a(631305),
    c = a(71393),
    d = a(967198),
    u = a(652215),
    p = a(874864),
    _ = a(985018),
    A = a(117952);

function m(e) {
    let {
        analyticsSection: t,
        analyticsPage: a,
        isGIF: m,
        banner: h
    } = e, g = (0, i.bG)([d.A], () => d.A.getGuildId()), f = (0, i.bG)([c.A], () => c.A.getGuild(g)), {
        analyticsLocations: x
    } = (0, l.Ay)();
    return null == f || f.features.has(u.GuildFeatures.ANIMATED_BANNER) || !m && f.features.has(u.GuildFeatures.BANNER) ? null : (0, n.jsxs)("div", {
        className: A.kL,
        children: [(0, n.jsx)(s._Jp, {
            color: s.LU0.unsafe_rawColors.GUILD_BOOSTING_PINK,
            className: A.qC
        }), (0, n.jsx)(s.Text, {
            color: "text-strong",
            variant: "text-sm/semibold",
            children: _.intl.string(_.t["56M7xe"])
        }), (0, n.jsx)("div", {
            className: A.xF,
            children: (0, n.jsx)(s.QWc, {
                text: _.intl.string(_.t.WUHdZV),
                onClick: () => {
                    if (null == f) return;
                    let e = {
                        section: t,
                        page: a,
                        object: u.ZSU.UPSELL_HEADER
                    };
                    null != h ? (0, r._)({
                        analyticsLocations: x,
                        analyticsLocation: e,
                        guild: f,
                        isGIF: m,
                        banner: h
                    }) : (0, o.A)({
                        analyticsLocations: x,
                        analyticsSourceLocation: e,
                        guild: f,
                        perks: m ? (0, p.Pf)() : (0, p.QR)()
                    })
                },
                textVariant: "text-sm/semibold"
            })
        })]
    })
}