/** Chunk was on 94073 **/
/** chunk id: 515598, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => b
});
var r = n(627968);
n(64700);
var a = n(311907),
    o = n(397927),
    i = n(688810),
    l = n(503566),
    s = n(631305),
    c = n(71393),
    u = n(967198),
    _ = n(652215),
    d = n(874864),
    f = n(985018),
    A = n(234518);

function b(e) {
    let {
        analyticsSection: t,
        analyticsPage: n,
        isGIF: b,
        banner: m
    } = e, p = (0, a.bG)([u.A], () => u.A.getGuildId()), y = (0, a.bG)([c.A], () => c.A.getGuild(p)), {
        analyticsLocations: g
    } = (0, i.Ay)();
    return null == y || y.features.has(_.GuildFeatures.ANIMATED_BANNER) || !b && y.features.has(_.GuildFeatures.BANNER) ? null : (0, r.jsxs)("div", {
        className: A.kL,
        children: [(0, r.jsx)(o._Jp, {
            color: o.LU0.unsafe_rawColors.GUILD_BOOSTING_PINK,
            className: A.qC
        }), (0, r.jsx)(o.Text, {
            color: "text-strong",
            variant: "text-sm/semibold",
            children: f.intl.string(f.t["56M7xe"])
        }), (0, r.jsx)("div", {
            className: A.xF,
            children: (0, r.jsx)(o.QWc, {
                text: f.intl.string(f.t.WUHdZV),
                onClick: () => {
                    if (null == y) return;
                    let e = {
                        section: t,
                        page: n,
                        object: _.ZSU.UPSELL_HEADER
                    };
                    null != m ? (0, l._)({
                        analyticsLocations: g,
                        analyticsLocation: e,
                        guild: y,
                        isGIF: b,
                        banner: m
                    }) : (0, s.A)({
                        analyticsLocations: g,
                        analyticsSourceLocation: e,
                        guild: y,
                        perks: b ? (0, d.Pf)() : (0, d.QR)()
                    })
                },
                textVariant: "text-sm/semibold"
            })
        })]
    })
}