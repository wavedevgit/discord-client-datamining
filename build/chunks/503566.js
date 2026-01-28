/** Chunk was on 87916 **/
/** chunk id: 503566, original params: e,t,n (module,exports,require) **/
n.d(t, {
    _: () => A
});
var a = n(627968);
n(64700);
var i = n(397927),
    s = n(551262),
    r = n(986268),
    l = n(473145),
    o = n(631305),
    c = n(874864),
    d = n(652215),
    u = n(985018),
    p = n(227800);

function _(e) {
    let {
        guild: t,
        banner: n
    } = e;
    return (0, a.jsx)("div", {
        className: p.C1,
        style: {
            backgroundImage: "url(".concat(n)
        },
        children: (0, a.jsxs)("div", {
            className: p.F,
            children: [(0, a.jsx)(r.A, {
                guild: t,
                isBannerVisible: !0
            }), (0, a.jsx)(i.Heading, {
                className: p.J5,
                variant: "heading-md/semibold",
                children: t.name
            }), (0, a.jsx)(s.A, {
                className: p.Wm,
                open: !1
            })]
        })
    })
}

function A(e) {
    let {
        analyticsLocations: t,
        analyticsLocation: n,
        guild: i,
        isGIF: s,
        banner: r
    } = e, p = s ? (0, l.Ys)(d.GuildFeatures.ANIMATED_BANNER) : (0, l.Ys)(d.GuildFeatures.BANNER);
    if (null != p) {
        let e;
        (0, o.A)({
            analyticsLocations: t,
            analyticsSourceLocation: n,
            guild: i,
            headerProps: {
                title: u.intl.string(u.t["rv2H+1"]),
                subtitle: (e = (0, l.gb)(p), s ? u.intl.formatToPlainString(u.t["TR/Uyt"], {
                    targetLevelOrPlan: e
                }) : u.intl.formatToPlainString(u.t.B253V6, {
                    targetLevelOrPlan: e
                })),
                image: (0, a.jsx)(_, {
                    guild: i,
                    banner: r
                })
            },
            perkIntro: u.intl.string(u.t.ZuItcI),
            perks: s ? (0, c.Pf)() : (0, c.QR)()
        })
    }
}