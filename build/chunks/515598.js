/** chunk id: 515598 params = (module,exports,require) **/
n.d(t, {
    A: () => g
});
var a = n(627968);
n(64700);
var i = n(311907),
    r = n(397927),
    o = n(688810),
    s = n(503566),
    c = n(631305),
    l = n(71393),
    _ = n(967198),
    d = n(652215),
    u = n(874864),
    h = n(985018),
    A = n(188213);

function g(e) {
    let {
        analyticsSection: t,
        analyticsPage: n,
        isGIF: g,
        banner: m
    } = e, x = (0, i.bG)([_.A], () => _.A.getGuildId()), b = (0, i.bG)([l.A], () => l.A.getGuild(x)), {
        analyticsLocations: f
    } = (0, o.Ay)();
    return null == b || b.features.has(d.GuildFeatures.ANIMATED_BANNER) || !g && b.features.has(d.GuildFeatures.BANNER) ? null : (0, a.jsxs)("div", {
        className: A.kL,
        children: [(0, a.jsx)(r._Jp, {
            color: r.LU0.unsafe_rawColors.GUILD_BOOSTING_PINK,
            className: A.qC
        }), (0, a.jsx)(r.Text, {
            color: "text-strong",
            variant: "text-sm/semibold",
            children: h.intl.string(h.t["56M7xe"])
        }), (0, a.jsx)("div", {
            className: A.xF,
            children: (0, a.jsx)(r.QWc, {
                text: h.intl.string(h.t.WUHdZV),
                onClick: () => {
                    if (null == b) return;
                    let e = {
                        section: t,
                        page: n,
                        object: d.ZSU.UPSELL_HEADER
                    };
                    null != m ? (0, s._)({
                        analyticsLocations: f,
                        analyticsLocation: e,
                        guild: b,
                        isGIF: g,
                        banner: m
                    }) : (0, c.A)({
                        analyticsLocations: f,
                        analyticsSourceLocation: e,
                        guild: b,
                        perks: g ? (0, u.Pf)() : (0, u.QR)()
                    })
                },
                textVariant: "text-sm/semibold"
            })
        })]
    })
}