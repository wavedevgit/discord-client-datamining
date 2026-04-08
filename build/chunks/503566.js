/** chunk id: 503566 params = (module,exports,require) **/
n.d(t, {
    _: () => g
});
var a = n(627968);
n(64700);
var i = n(397927),
    r = n(551262),
    o = n(986268),
    s = n(473145),
    l = n(631305),
    c = n(874864),
    _ = n(652215),
    d = n(985018),
    A = n(454097);

function u(e) {
    let {
        guild: t,
        banner: n
    } = e;
    return (0, a.jsx)("div", {
        className: A.C1,
        style: {
            backgroundImage: `url(${n}`
        },
        children: (0, a.jsxs)("div", {
            className: A.F,
            children: [(0, a.jsx)(o.A, {
                guild: t,
                isBannerVisible: !0
            }), (0, a.jsx)(i.Heading, {
                className: A.J5,
                variant: "heading-md/semibold",
                children: t.name
            }), (0, a.jsx)(r.A, {
                className: A.Wm,
                open: !1
            })]
        })
    })
}

function g(e) {
    let {
        analyticsLocations: t,
        analyticsLocation: n,
        guild: i,
        isGIF: r,
        banner: o
    } = e, A = r ? (0, s.Ys)(_.GuildFeatures.ANIMATED_BANNER) : (0, s.Ys)(_.GuildFeatures.BANNER);
    if (null != A) {
        let e;
        (0, l.A)({
            analyticsLocations: t,
            analyticsSourceLocation: n,
            guild: i,
            headerProps: {
                title: d.intl.string(d.t["rv2H+1"]),
                subtitle: (e = (0, s.gb)(A), r ? d.intl.formatToPlainString(d.t["TR/Uyt"], {
                    targetLevelOrPlan: e
                }) : d.intl.formatToPlainString(d.t.B253V6, {
                    targetLevelOrPlan: e
                })),
                image: (0, a.jsx)(u, {
                    guild: i,
                    banner: o
                })
            },
            perkIntro: d.intl.string(d.t.ZuItcI),
            perks: r ? (0, c.Pf)() : (0, c.QR)()
        })
    }
}