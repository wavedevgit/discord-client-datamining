/** chunk id: 515598 params = (module,exports,require) **/
i.d(e, {
    A: () => m
});
var a = i(627968);
i(64700);
var n = i(311907),
    r = i(397927),
    s = i(688810),
    l = i(503566),
    o = i(631305),
    d = i(71393),
    c = i(967198),
    u = i(652215),
    _ = i(874864),
    h = i(985018),
    g = i(724709);

function m(t) {
    let {
        analyticsSection: e,
        analyticsPage: i,
        isGIF: m,
        banner: x
    } = t, A = (0, n.bG)([c.A], () => c.A.getGuildId()), f = (0, n.bG)([d.A], () => d.A.getGuild(A)), {
        analyticsLocations: b
    } = (0, s.Ay)();
    return null == f || f.features.has(u.GuildFeatures.ANIMATED_BANNER) || !m && f.features.has(u.GuildFeatures.BANNER) ? null : (0, a.jsxs)("div", {
        className: g.kL,
        children: [(0, a.jsx)(r._Jp, {
            color: r.LU0.unsafe_rawColors.GUILD_BOOSTING_PINK,
            className: g.qC
        }), (0, a.jsx)(r.Text, {
            color: "text-strong",
            variant: "text-sm/semibold",
            children: h.intl.string(h.t["56M7xe"])
        }), (0, a.jsx)("div", {
            className: g.xF,
            children: (0, a.jsx)(r.QWc, {
                text: h.intl.string(h.t.WUHdZV),
                onClick: () => {
                    if (null == f) return;
                    let t = {
                        section: e,
                        page: i,
                        object: u.ZSU.UPSELL_HEADER
                    };
                    null != x ? (0, l._)({
                        analyticsLocations: b,
                        analyticsLocation: t,
                        guild: f,
                        isGIF: m,
                        banner: x
                    }) : (0, o.A)({
                        analyticsLocations: b,
                        analyticsSourceLocation: t,
                        guild: f,
                        perks: m ? (0, _.Pf)() : (0, _.QR)()
                    })
                },
                textVariant: "text-sm/semibold"
            })
        })]
    })
}