/** chunk id: 344904 params = (module,exports,require) **/
n.d(t, {
    Ay: () => h,
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
    m = n(251360),
    _ = n(468052),
    g = n(769411),
    A = n(242142),
    x = ((i = {})[i.NITRO_GEM = 0] = "NITRO_GEM", i[i.NITRO_LOGO = 1] = "NITRO_LOGO", i[i.AVATAR_DECO = 2] = "AVATAR_DECO", i);
let p = e => {
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
    h = e => {
        let {
            showAnimations: t = !0,
            iconClassName: n,
            staticPercentage: i,
            innerCircleClassName: l,
            progressCircleStrokeSize: a,
            backgroundCircleSize: d,
            percentage: u,
            initialPercentage: x,
            progressCircleVariation: h = 0,
            avatarDecorationLegacyAssetId: T,
            avatarDecorationSkuId: E,
            avatarDecoAssetDescription: f,
            ellipseOpacity: S,
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
                progressCircleVariation: h,
                children: (() => {
                    switch (h) {
                        case 0:
                            return (0, s.jsx)(m.A, {
                                className: v ? A.Ow : void 0,
                                backgroundColor: r()(A.vH, l),
                                backgroundCircleSize: d
                            });
                        case 1:
                            return (0, s.jsx)(_.A, {
                                circleColor: b,
                                ellipseOpacity: S
                            });
                        case 2:
                            if (null != E) return (0, s.jsx)(p, {
                                avatarDecorationLegacyAssetId: T,
                                avatarDecorationSkuId: E,
                                avatarDecoAssetDescription: f
                            });
                            return null;
                        default:
                            return null
                    }
                })()
            })
        })
    }