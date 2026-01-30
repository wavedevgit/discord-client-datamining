/** chunk id: 503566, original params: e,t,a (module,exports,require) **/
a.d(t, {
    _: () => m
});
var n = a(627968);
a(64700);
var i = a(397927),
    c = a(551262),
    o = a(986268),
    r = a(473145),
    s = a(631305),
    l = a(874864),
    d = a(652215),
    u = a(985018),
    p = a(227800);

function _(e) {
    let {
        guild: t,
        banner: a
    } = e;
    return (0, n.jsx)("div", {
        className: p.C1,
        style: {
            backgroundImage: "url(".concat(a)
        },
        children: (0, n.jsxs)("div", {
            className: p.F,
            children: [(0, n.jsx)(o.A, {
                guild: t,
                isBannerVisible: !0
            }), (0, n.jsx)(i.Heading, {
                className: p.J5,
                variant: "heading-md/semibold",
                children: t.name
            }), (0, n.jsx)(c.A, {
                className: p.Wm,
                open: !1
            })]
        })
    })
}

function m(e) {
    let {
        analyticsLocations: t,
        analyticsLocation: a,
        guild: i,
        isGIF: c,
        banner: o
    } = e, p = c ? (0, r.Ys)(d.GuildFeatures.ANIMATED_BANNER) : (0, r.Ys)(d.GuildFeatures.BANNER);
    if (null != p) {
        let e;
        (0, s.A)({
            analyticsLocations: t,
            analyticsSourceLocation: a,
            guild: i,
            headerProps: {
                title: u.intl.string(u.t["rv2H+1"]),
                subtitle: (e = (0, r.gb)(p), c ? u.intl.formatToPlainString(u.t["TR/Uyt"], {
                    targetLevelOrPlan: e
                }) : u.intl.formatToPlainString(u.t.B253V6, {
                    targetLevelOrPlan: e
                })),
                image: (0, n.jsx)(_, {
                    guild: i,
                    banner: o
                })
            },
            perkIntro: u.intl.string(u.t.ZuItcI),
            perks: c ? (0, l.Pf)() : (0, l.QR)()
        })
    }
}