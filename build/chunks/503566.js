/** Chunk was on 87916 **/
/** chunk id: 503566, original params: e,t,n (module,exports,require) **/
n.d(t, {
    _: () => f
});
var a = n(627968);
n(64700);
var i = n(397927),
    l = n(551262),
    r = n(986268),
    s = n(473145),
    o = n(631305),
    c = n(874864),
    d = n(652215),
    u = n(985018),
    _ = n(227800);

function A(e) {
    let {
        guild: t,
        banner: n
    } = e;
    return (0, a.jsx)("div", {
        className: _.C1,
        style: {
            backgroundImage: "url(".concat(n)
        },
        children: (0, a.jsxs)("div", {
            className: _.F,
            children: [(0, a.jsx)(r.A, {
                guild: t,
                isBannerVisible: !0
            }), (0, a.jsx)(i.Heading, {
                className: _.J5,
                variant: "heading-md/semibold",
                children: t.name
            }), (0, a.jsx)(l.A, {
                className: _.Wm,
                open: !1
            })]
        })
    })
}

function f(e) {
    let {
        analyticsLocations: t,
        analyticsLocation: n,
        guild: i,
        isGIF: l,
        banner: r
    } = e, _ = l ? (0, s.Ys)(d.GuildFeatures.ANIMATED_BANNER) : (0, s.Ys)(d.GuildFeatures.BANNER);
    if (null != _) {
        let e;
        (0, o.A)({
            analyticsLocations: t,
            analyticsSourceLocation: n,
            guild: i,
            headerProps: {
                title: u.intl.string(u.t["rv2H+1"]),
                subtitle: (e = (0, s.gb)(_), l ? u.intl.formatToPlainString(u.t["TR/Uyt"], {
                    targetLevelOrPlan: e
                }) : u.intl.formatToPlainString(u.t.B253V6, {
                    targetLevelOrPlan: e
                })),
                image: (0, a.jsx)(A, {
                    guild: i,
                    banner: r
                })
            },
            perkIntro: u.intl.string(u.t.ZuItcI),
            perks: l ? (0, c.Pf)() : (0, c.QR)()
        })
    }
}