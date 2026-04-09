/** chunk id: 344904 params = (module,exports,require) **/
n.d(t, {
    Ay: () => p,
    BN: () => A
});
var i, s = n(627968),
    l = n(64700),
    a = n(503698),
    r = n.n(a),
    o = n(311907),
    d = n(397927),
    c = n(775602),
    u = n(912140),
    m = n(251360),
    g = n(468052),
    _ = n(769411),
    x = n(997115),
    A = ((i = {})[i.NITRO_GEM = 0] = "NITRO_GEM", i[i.NITRO_LOGO = 1] = "NITRO_LOGO", i[i.AVATAR_DECO = 2] = "AVATAR_DECO", i);
let h = e => {
        let {
            avatarDecorationLegacyAssetId: t,
            avatarDecorationSkuId: n,
            avatarDecoAssetDescription: i
        } = e, a = l.useMemo(() => (0, u.A)({
            legacyAssetId: t,
            skuId: n,
            size: d._3J.SIZE_120,
            canAnimate: !1
        }), [t, n]);
        return (0, s.jsx)("div", {
            className: x.Q7,
            children: (0, s.jsx)("div", {
                className: x.Nk,
                children: null != a && (0, s.jsx)("img", {
                    className: x.CH,
                    alt: i,
                    src: a
                })
            })
        })
    },
    p = e => {
        let {
            showAnimations: t = !0,
            iconClassName: n,
            staticPercentage: i,
            innerCircleClassName: l,
            progressCircleStrokeSize: a,
            backgroundCircleSize: d,
            percentage: u,
            initialPercentage: A,
            progressCircleVariation: p = 0,
            avatarDecorationLegacyAssetId: T,
            avatarDecorationSkuId: f,
            avatarDecoAssetDescription: S,
            ellipseOpacity: E,
            customAnimationClassName: b,
            circleColor: C,
            circleStroke: v
        } = e, N = (0, o.bG)([c.A], () => c.A.useReducedMotion), I = t && !N;
        return (0, s.jsx)("div", {
            className: r()(x.G3, n),
            children: (0, s.jsx)(_.A, {
                animationClassName: r()(x._0, {
                    [x.uJ]: I,
                    [b ?? ""]: I
                }),
                progressCircleStroke: v,
                progressCircleStrokeSize: a,
                percentage: i ?? u,
                initialPercentage: i ?? A,
                progressCircleVariation: p,
                children: (() => {
                    switch (p) {
                        case 0:
                            return (0, s.jsx)(m.A, {
                                className: I ? x.Ow : void 0,
                                backgroundColor: r()(x.vH, l),
                                backgroundCircleSize: d
                            });
                        case 1:
                            return (0, s.jsx)(g.A, {
                                circleColor: C,
                                ellipseOpacity: E
                            });
                        case 2:
                            if (null != f) return (0, s.jsx)(h, {
                                avatarDecorationLegacyAssetId: T,
                                avatarDecorationSkuId: f,
                                avatarDecoAssetDescription: S
                            });
                            return null;
                        default:
                            return null
                    }
                })()
            })
        })
    }