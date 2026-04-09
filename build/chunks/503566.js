/** chunk id: 503566 params = (module,exports,require) **/
n.d(t, {
    _: () => A
});
var a = n(627968);
n(64700);
var i = n(397927),
    r = n(551262),
    o = n(986268),
    s = n(473145),
    c = n(631305),
    l = n(874864),
    _ = n(652215),
    d = n(985018),
    u = n(454097);

function h(e) {
    let {
        guild: t,
        banner: n
    } = e;
    return (0, a.jsx)("div", {
        className: u.C1,
        style: {
            backgroundImage: `url(${n}`
        },
        children: (0, a.jsxs)("div", {
            className: u.F,
            children: [(0, a.jsx)(o.A, {
                guild: t,
                isBannerVisible: !0
            }), (0, a.jsx)(i.Heading, {
                className: u.J5,
                variant: "heading-md/semibold",
                children: t.name
            }), (0, a.jsx)(r.A, {
                className: u.Wm,
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
        isGIF: r,
        banner: o
    } = e, u = r ? (0, s.Ys)(_.GuildFeatures.ANIMATED_BANNER) : (0, s.Ys)(_.GuildFeatures.BANNER);
    if (null != u) {
        let e;
        (0, c.A)({
            analyticsLocations: t,
            analyticsSourceLocation: n,
            guild: i,
            headerProps: {
                title: d.intl.string(d.t["rv2H+1"]),
                subtitle: (e = (0, s.gb)(u), r ? d.intl.formatToPlainString(d.t["TR/Uyt"], {
                    targetLevelOrPlan: e
                }) : d.intl.formatToPlainString(d.t.B253V6, {
                    targetLevelOrPlan: e
                })),
                image: (0, a.jsx)(h, {
                    guild: i,
                    banner: o
                })
            },
            perkIntro: d.intl.string(d.t.ZuItcI),
            perks: r ? (0, l.Pf)() : (0, l.QR)()
        })
    }
}