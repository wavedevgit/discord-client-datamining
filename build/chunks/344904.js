/** chunk id: 344904 params = (module,exports,require) **/
n.d(t, {
    Ay: () => p,
    BN: () => x
});
var i, s = n(627968),
    l = n(64700),
    a = n(503698),
    r = n.n(a),
    o = n(311907),
    d = n(397927),
    c = n(775602),
    u = n(580314),
    _ = n(251360),
    m = n(468052),
    g = n(769411),
    A = n(242142),
    x = ((i = {})[i.NITRO_GEM = 0] = "NITRO_GEM", i[i.NITRO_LOGO = 1] = "NITRO_LOGO", i[i.AVATAR_DECO = 2] = "AVATAR_DECO", i);
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
            className: A.Q7,
            children: (0, s.jsx)("div", {
                className: A.Nk,
                children: null != a && (0, s.jsx)("img", {
                    className: A.CH,
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
            initialPercentage: x,
            progressCircleVariation: p = 0,
            avatarDecorationLegacyAssetId: T,
            avatarDecorationSkuId: E,
            avatarDecoAssetDescription: S,
            ellipseOpacity: f,
            customAnimationClassName: C,
            circleColor: b,
            circleStroke: N
        } = e, I = (0, o.bG)([c.A], () => c.A.useReducedMotion), v = t && !I;
        return (0, s.jsx)("div", {
            className: r()(A.G3, n),
            children: (0, s.jsx)(g.A, {
                animationClassName: r()(A._0, {
                    [A.uJ]: v,
                    [C ?? ""]: v
                }),
                progressCircleStroke: N,
                progressCircleStrokeSize: a,
                percentage: i ?? u,
                initialPercentage: i ?? x,
                progressCircleVariation: p,
                children: (() => {
                    switch (p) {
                        case 0:
                            return (0, s.jsx)(_.A, {
                                className: v ? A.Ow : void 0,
                                backgroundColor: r()(A.vH, l),
                                backgroundCircleSize: d
                            });
                        case 1:
                            return (0, s.jsx)(m.A, {
                                circleColor: b,
                                ellipseOpacity: f
                            });
                        case 2:
                            if (null != E) return (0, s.jsx)(h, {
                                avatarDecorationLegacyAssetId: T,
                                avatarDecorationSkuId: E,
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