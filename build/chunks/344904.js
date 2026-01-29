/** Chunk was on 2827 **/
/** chunk id: 344904, original params: e,t,n (module,exports,require) **/
n.d(t, {
    Ay: () => b,
    BN: () => A
});
var r, i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(311907),
    c = n(397927),
    d = n(775602),
    u = n(920064),
    _ = n(251360),
    p = n(468052),
    m = n(769411),
    g = n(242142),
    A = ((r = {})[r.NITRO_GEM = 0] = "NITRO_GEM", r[r.NITRO_LOGO = 1] = "NITRO_LOGO", r[r.AVATAR_DECO = 2] = "AVATAR_DECO", r);
let f = e => {
        let {
            avatarDecoAssetId: t,
            avatarDecoAssetDescription: n
        } = e, r = l.useMemo(() => (0, u.A)(t, c._3J.SIZE_120, !1), [t]);
        return (0, i.jsx)("div", {
            className: g.Q7,
            children: (0, i.jsx)("div", {
                className: g.Nk,
                children: (0, i.jsx)("img", {
                    className: g.CH,
                    alt: n,
                    src: r
                })
            })
        })
    },
    b = e => {
        let {
            showAnimations: t = !0,
            iconClassName: n,
            staticPercentage: r,
            innerCircleClassName: l,
            progressCircleStrokeSize: s,
            backgroundCircleSize: c,
            percentage: u,
            initialPercentage: A,
            progressCircleVariation: b = 0,
            avatarDecoAssetId: h,
            avatarDecoAssetDescription: E,
            ellipseOpacity: O,
            customAnimationClassName: C,
            circleColor: x,
            circleStroke: S
        } = e, T = (0, o.bG)([d.A], () => d.A.useReducedMotion), I = t && !T;
        return (0, i.jsx)("div", {
            className: a()(g.G3, n),
            children: (0, i.jsx)(m.A, {
                animationClassName: a()(g._0, {
                    [g.uJ]: I,
                    [null != C ? C : ""]: I
                }),
                progressCircleStroke: S,
                progressCircleStrokeSize: s,
                percentage: null != r ? r : u,
                initialPercentage: null != r ? r : A,
                progressCircleVariation: b,
                children: (() => {
                    switch (b) {
                        case 0:
                            return (0, i.jsx)(_.A, {
                                className: I ? g.Ow : void 0,
                                backgroundColor: a()(g.vH, l),
                                backgroundCircleSize: c
                            });
                        case 1:
                            return (0, i.jsx)(p.A, {
                                circleColor: x,
                                ellipseOpacity: O
                            });
                        case 2:
                            if (null != h) return (0, i.jsx)(f, {
                                avatarDecoAssetId: h,
                                avatarDecoAssetDescription: E
                            });
                            return null;
                        default:
                            return null
                    }
                })()
            })
        })
    }