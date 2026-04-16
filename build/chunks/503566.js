/** chunk id: 503566 params = (module,exports,require) **/
i.d(e, {
    _: () => g
});
var a = i(627968);
i(64700);
var n = i(397927),
    r = i(551262),
    s = i(986268),
    l = i(473145),
    o = i(631305),
    d = i(874864),
    c = i(652215),
    u = i(985018),
    _ = i(660929);

function h(t) {
    let {
        guild: e,
        banner: i
    } = t;
    return (0, a.jsx)("div", {
        className: _.C1,
        style: {
            backgroundImage: `url(${i}`
        },
        children: (0, a.jsxs)("div", {
            className: _.F,
            children: [(0, a.jsx)(s.A, {
                guild: e,
                isBannerVisible: !0
            }), (0, a.jsx)(n.Heading, {
                className: _.J5,
                variant: "heading-md/semibold",
                children: e.name
            }), (0, a.jsx)(r.A, {
                className: _.Wm,
                open: !1
            })]
        })
    })
}

function g(t) {
    let {
        analyticsLocations: e,
        analyticsLocation: i,
        guild: n,
        isGIF: r,
        banner: s
    } = t, _ = r ? (0, l.Ys)(c.GuildFeatures.ANIMATED_BANNER) : (0, l.Ys)(c.GuildFeatures.BANNER);
    if (null != _) {
        let t;
        (0, o.A)({
            analyticsLocations: e,
            analyticsSourceLocation: i,
            guild: n,
            headerProps: {
                title: u.intl.string(u.t["rv2H+1"]),
                subtitle: (t = (0, l.gb)(_), r ? u.intl.formatToPlainString(u.t["TR/Uyt"], {
                    targetLevelOrPlan: t
                }) : u.intl.formatToPlainString(u.t.B253V6, {
                    targetLevelOrPlan: t
                })),
                image: (0, a.jsx)(h, {
                    guild: n,
                    banner: s
                })
            },
            perkIntro: u.intl.string(u.t.ZuItcI),
            perks: r ? (0, d.Pf)() : (0, d.QR)()
        })
    }
}