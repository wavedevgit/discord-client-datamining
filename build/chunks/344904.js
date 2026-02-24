/** chunk id: 344904, original params: e,t,n (module,exports,require) **/
n.d(t, {
    Ay: () => p,
    BN: () => h
});
var i, s = n(627968),
    a = n(64700),
    l = n(503698),
    r = n.n(l),
    o = n(311907),
    c = n(397927),
    d = n(775602),
    u = n(920064),
    _ = n(251360),
    m = n(468052),
    A = n(769411),
    g = n(242142),
    h = ((i = {})[i.NITRO_GEM = 0] = "NITRO_GEM", i[i.NITRO_LOGO = 1] = "NITRO_LOGO", i[i.AVATAR_DECO = 2] = "AVATAR_DECO", i);
let x = e => {
        let {
            avatarDecoAssetId: t,
            avatarDecoAssetDescription: n
        } = e, i = a.useMemo(() => (0, u.A)(t, c._3J.SIZE_120, !1), [t]);
        return (0, s.jsx)("div", {
            className: g.Q7,
            children: (0, s.jsx)("div", {
                className: g.Nk,
                children: (0, s.jsx)("img", {
                    className: g.CH,
                    alt: n,
                    src: i
                })
            })
        })
    },
    p = e => {
        let {
            showAnimations: t = !0,
            iconClassName: n,
            staticPercentage: i,
            innerCircleClassName: a,
            progressCircleStrokeSize: l,
            backgroundCircleSize: c,
            percentage: u,
            initialPercentage: h,
            progressCircleVariation: p = 0,
            avatarDecoAssetId: E,
            avatarDecoAssetDescription: C,
            ellipseOpacity: T,
            customAnimationClassName: S,
            circleColor: I,
            circleStroke: f
        } = e, N = (0, o.bG)([d.A], () => d.A.useReducedMotion), b = t && !N;
        return (0, s.jsx)("div", {
            className: r()(g.G3, n),
            children: (0, s.jsx)(A.A, {
                animationClassName: r()(g._0, {
                    [g.uJ]: b,
                    [S ?? ""]: b
                }),
                progressCircleStroke: f,
                progressCircleStrokeSize: l,
                percentage: i ?? u,
                initialPercentage: i ?? h,
                progressCircleVariation: p,
                children: (() => {
                    switch (p) {
                        case 0:
                            return (0, s.jsx)(_.A, {
                                className: b ? g.Ow : void 0,
                                backgroundColor: r()(g.vH, a),
                                backgroundCircleSize: c
                            });
                        case 1:
                            return (0, s.jsx)(m.A, {
                                circleColor: I,
                                ellipseOpacity: T
                            });
                        case 2:
                            if (null != E) return (0, s.jsx)(x, {
                                avatarDecoAssetId: E,
                                avatarDecoAssetDescription: C
                            });
                            return null;
                        default:
                            return null
                    }
                })()
            })
        })
    }