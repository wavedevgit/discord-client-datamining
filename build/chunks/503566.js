/** chunk id: 503566 params = (module,exports,require) **/
n.d(t, {
    _: () => g
});
var i = n(627968);
n(64700);
var a = n(397927),
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
    return (0, i.jsx)("div", {
        className: A.C1,
        style: {
            backgroundImage: `url(${n}`
        },
        children: (0, i.jsxs)("div", {
            className: A.F,
            children: [(0, i.jsx)(o.A, {
                guild: t,
                isBannerVisible: !0
            }), (0, i.jsx)(a.Heading, {
                className: A.J5,
                variant: "heading-md/semibold",
                children: t.name
            }), (0, i.jsx)(r.A, {
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
        guild: a,
        isGIF: r,
        banner: o
    } = e, A = r ? (0, s.Ys)(_.GuildFeatures.ANIMATED_BANNER) : (0, s.Ys)(_.GuildFeatures.BANNER);
    if (null != A) {
        let e;
        (0, l.A)({
            analyticsLocations: t,
            analyticsSourceLocation: n,
            guild: a,
            headerProps: {
                title: d.intl.string(d.t["rv2H+1"]),
                subtitle: (e = (0, s.gb)(A), r ? d.intl.formatToPlainString(d.t["TR/Uyt"], {
                    targetLevelOrPlan: e
                }) : d.intl.formatToPlainString(d.t.B253V6, {
                    targetLevelOrPlan: e
                })),
                image: (0, i.jsx)(u, {
                    guild: a,
                    banner: o
                })
            },
            perkIntro: d.intl.string(d.t.ZuItcI),
            perks: r ? (0, c.Pf)() : (0, c.QR)()
        })
    }
}