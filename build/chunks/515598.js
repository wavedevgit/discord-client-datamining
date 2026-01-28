/** Chunk was on 87916 **/
/** chunk id: 515598, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => m
});
var a = n(627968);
n(64700);
var i = n(311907),
    s = n(397927),
    r = n(688810),
    l = n(503566),
    o = n(631305),
    c = n(71393),
    d = n(967198),
    u = n(652215),
    p = n(874864),
    _ = n(985018),
    A = n(234518);

function m(e) {
    let {
        analyticsSection: t,
        analyticsPage: n,
        isGIF: m,
        banner: f
    } = e, g = (0, i.bG)([d.A], () => d.A.getGuildId()), h = (0, i.bG)([c.A], () => c.A.getGuild(g)), {
        analyticsLocations: x
    } = (0, r.Ay)();
    return null == h || h.features.has(u.GuildFeatures.ANIMATED_BANNER) || !m && h.features.has(u.GuildFeatures.BANNER) ? null : (0, a.jsxs)("div", {
        className: A.kL,
        children: [(0, a.jsx)(s._Jp, {
            color: s.LU0.unsafe_rawColors.GUILD_BOOSTING_PINK,
            className: A.qC
        }), (0, a.jsx)(s.Text, {
            color: "text-strong",
            variant: "text-sm/semibold",
            children: _.intl.string(_.t["56M7xe"])
        }), (0, a.jsx)("div", {
            className: A.xF,
            children: (0, a.jsx)(s.QWc, {
                text: _.intl.string(_.t.WUHdZV),
                onClick: () => {
                    if (null == h) return;
                    let e = {
                        section: t,
                        page: n,
                        object: u.ZSU.UPSELL_HEADER
                    };
                    null != f ? (0, l._)({
                        analyticsLocations: x,
                        analyticsLocation: e,
                        guild: h,
                        isGIF: m,
                        banner: f
                    }) : (0, o.A)({
                        analyticsLocations: x,
                        analyticsSourceLocation: e,
                        guild: h,
                        perks: m ? (0, p.Pf)() : (0, p.QR)()
                    })
                },
                textVariant: "text-sm/semibold"
            })
        })]
    })
}