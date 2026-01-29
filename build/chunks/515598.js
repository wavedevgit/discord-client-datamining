/** Chunk was on 87916 **/
/** chunk id: 515598, original params: e,t,a (module,exports,require) **/
a.d(t, {
    A: () => A
});
var n = a(627968);
a(64700);
var i = a(311907),
    c = a(397927),
    o = a(688810),
    r = a(503566),
    s = a(631305),
    l = a(71393),
    d = a(967198),
    u = a(652215),
    p = a(874864),
    _ = a(985018),
    m = a(234518);

function A(e) {
    let {
        analyticsSection: t,
        analyticsPage: a,
        isGIF: A,
        banner: f
    } = e, g = (0, i.bG)([d.A], () => d.A.getGuildId()), h = (0, i.bG)([l.A], () => l.A.getGuild(g)), {
        analyticsLocations: x
    } = (0, o.Ay)();
    return null == h || h.features.has(u.GuildFeatures.ANIMATED_BANNER) || !A && h.features.has(u.GuildFeatures.BANNER) ? null : (0, n.jsxs)("div", {
        className: m.kL,
        children: [(0, n.jsx)(c._Jp, {
            color: c.LU0.unsafe_rawColors.GUILD_BOOSTING_PINK,
            className: m.qC
        }), (0, n.jsx)(c.Text, {
            color: "text-strong",
            variant: "text-sm/semibold",
            children: _.intl.string(_.t["56M7xe"])
        }), (0, n.jsx)("div", {
            className: m.xF,
            children: (0, n.jsx)(c.QWc, {
                text: _.intl.string(_.t.WUHdZV),
                onClick: () => {
                    if (null == h) return;
                    let e = {
                        section: t,
                        page: a,
                        object: u.ZSU.UPSELL_HEADER
                    };
                    null != f ? (0, r._)({
                        analyticsLocations: x,
                        analyticsLocation: e,
                        guild: h,
                        isGIF: A,
                        banner: f
                    }) : (0, s.A)({
                        analyticsLocations: x,
                        analyticsSourceLocation: e,
                        guild: h,
                        perks: A ? (0, p.Pf)() : (0, p.QR)()
                    })
                },
                textVariant: "text-sm/semibold"
            })
        })]
    })
}