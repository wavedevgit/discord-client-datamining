/** chunk id: 344904 params = (module,exports,require) **/
n.d(t, {
    Ay: () => x,
    BN: () => h
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
    g = n(468052),
    m = n(769411),
    A = n(242142),
    h = ((i = {})[i.NITRO_GEM = 0] = "NITRO_GEM", i[i.NITRO_LOGO = 1] = "NITRO_LOGO", i[i.AVATAR_DECO = 2] = "AVATAR_DECO", i);
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
    x = e => {
        let {
            showAnimations: t = !0,
            iconClassName: n,
            staticPercentage: i,
            innerCircleClassName: l,
            progressCircleStrokeSize: a,
            backgroundCircleSize: d,
            percentage: u,
            initialPercentage: h,
            progressCircleVariation: x = 0,
            avatarDecorationLegacyAssetId: E,
            avatarDecorationSkuId: T,
            avatarDecoAssetDescription: S,
            ellipseOpacity: C,
            customAnimationClassName: f,
            circleColor: I,
            circleStroke: b
        } = e, N = (0, o.bG)([c.A], () => c.A.useReducedMotion), v = t && !N;
        return (0, s.jsx)("div", {
            className: r()(A.G3, n),
            children: (0, s.jsx)(m.A, {
                animationClassName: r()(A._0, {
                    [A.uJ]: v,
                    [f ?? ""]: v
                }),
                progressCircleStroke: b,
                progressCircleStrokeSize: a,
                percentage: i ?? u,
                initialPercentage: i ?? h,
                progressCircleVariation: x,
                children: (() => {
                    switch (x) {
                        case 0:
                            return (0, s.jsx)(_.A, {
                                className: v ? A.Ow : void 0,
                                backgroundColor: r()(A.vH, l),
                                backgroundCircleSize: d
                            });
                        case 1:
                            return (0, s.jsx)(g.A, {
                                circleColor: I,
                                ellipseOpacity: C
                            });
                        case 2:
                            if (null != T) return (0, s.jsx)(p, {
                                avatarDecorationLegacyAssetId: E,
                                avatarDecorationSkuId: T,
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