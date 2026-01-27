/** Chunk was on 87916 **/
/** chunk id: 515598, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => g
});
var a = n(627968);
n(64700);
var i = n(311907),
    l = n(397927),
    r = n(688810),
    s = n(503566),
    o = n(631305),
    c = n(71393),
    d = n(967198),
    u = n(652215),
    _ = n(874864),
    A = n(985018),
    f = n(234518);

function g(e) {
    let {
        analyticsSection: t,
        analyticsPage: n,
        isGIF: g,
        banner: m
    } = e, p = (0, i.bG)([d.A], () => d.A.getGuildId()), x = (0, i.bG)([c.A], () => c.A.getGuild(p)), {
        analyticsLocations: N
    } = (0, r.Ay)();
    return null == x || x.features.has(u.GuildFeatures.ANIMATED_BANNER) || !g && x.features.has(u.GuildFeatures.BANNER) ? null : (0, a.jsxs)("div", {
        className: f.kL,
        children: [(0, a.jsx)(l._Jp, {
            color: l.LU0.unsafe_rawColors.GUILD_BOOSTING_PINK,
            className: f.qC
        }), (0, a.jsx)(l.Text, {
            color: "text-strong",
            variant: "text-sm/semibold",
            children: A.intl.string(A.t["56M7xe"])
        }), (0, a.jsx)("div", {
            className: f.xF,
            children: (0, a.jsx)(l.QWc, {
                text: A.intl.string(A.t.WUHdZV),
                onClick: () => {
                    if (null == x) return;
                    let e = {
                        section: t,
                        page: n,
                        object: u.ZSU.UPSELL_HEADER
                    };
                    null != m ? (0, s._)({
                        analyticsLocations: N,
                        analyticsLocation: e,
                        guild: x,
                        isGIF: g,
                        banner: m
                    }) : (0, o.A)({
                        analyticsLocations: N,
                        analyticsSourceLocation: e,
                        guild: x,
                        perks: g ? (0, _.Pf)() : (0, _.QR)()
                    })
                },
                textVariant: "text-sm/semibold"
            })
        })]
    })
}