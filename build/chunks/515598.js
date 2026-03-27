/** chunk id: 515598 params = (module,exports,require) **/
n.d(t, {
    A: () => m
});
var i = n(627968);
n(64700);
var a = n(311907),
    r = n(397927),
    o = n(688810),
    s = n(503566),
    l = n(631305),
    c = n(71393),
    _ = n(967198),
    d = n(652215),
    A = n(874864),
    u = n(985018),
    g = n(188213);

function m(e) {
    let {
        analyticsSection: t,
        analyticsPage: n,
        isGIF: m,
        banner: h
    } = e, L = (0, a.bG)([_.A], () => _.A.getGuildId()), x = (0, a.bG)([c.A], () => c.A.getGuild(L)), {
        analyticsLocations: C
    } = (0, o.Ay)();
    return null == x || x.features.has(d.GuildFeatures.ANIMATED_BANNER) || !m && x.features.has(d.GuildFeatures.BANNER) ? null : (0, i.jsxs)("div", {
        className: g.kL,
        children: [(0, i.jsx)(r._Jp, {
            color: r.LU0.unsafe_rawColors.GUILD_BOOSTING_PINK,
            className: g.qC
        }), (0, i.jsx)(r.Text, {
            color: "text-strong",
            variant: "text-sm/semibold",
            children: u.intl.string(u.t["56M7xe"])
        }), (0, i.jsx)("div", {
            className: g.xF,
            children: (0, i.jsx)(r.QWc, {
                text: u.intl.string(u.t.WUHdZV),
                onClick: () => {
                    if (null == x) return;
                    let e = {
                        section: t,
                        page: n,
                        object: d.ZSU.UPSELL_HEADER
                    };
                    null != h ? (0, s._)({
                        analyticsLocations: C,
                        analyticsLocation: e,
                        guild: x,
                        isGIF: m,
                        banner: h
                    }) : (0, l.A)({
                        analyticsLocations: C,
                        analyticsSourceLocation: e,
                        guild: x,
                        perks: m ? (0, A.Pf)() : (0, A.QR)()
                    })
                },
                textVariant: "text-sm/semibold"
            })
        })]
    })
}