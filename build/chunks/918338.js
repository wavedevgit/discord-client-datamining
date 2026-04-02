/** chunk id: 918338 params = (module,exports,require) **/
n.d(e, {
    A: () => m
});
var i = n(627968),
    s = n(64700),
    a = n(503698),
    r = n.n(a),
    l = n(579473),
    d = n(415441),
    o = n(516226),
    c = n(985018),
    u = n(425594);

function m(t) {
    let {
        quest: e,
        isInteracting: n,
        hideAssets: a,
        imageSize: m,
        containerClassName: h,
        imageClassName: x,
        assetRef: f
    } = t, g = s.useMemo(() => (0, l.tW)(e, l.fY.HERO_IMAGE), [e]), C = s.useMemo(() => (0, l.tW)(e, l.fY.HERO_VIDEO), [e]), {
        onAssetLoadComplete: N
    } = s.useContext(o.M);
    return (0, i.jsx)("div", {
        className: r()(u.l1, h),
        children: !a && (0, i.jsx)(d.N, {
            imageAsset: null != g ? {
                asset: g,
                assetId: "QuestTileBanner",
                alt: c.intl.string(c.t.jnijWz),
                className: r()(u.LO, x)
            } : void 0,
            videoAsset: null != C ? {
                asset: C,
                assetId: "QuestTileBanner_heroAnimated",
                className: u.G9
            } : void 0,
            showVideo: n,
            imageSize: m,
            onLoadComplete: N,
            assetRef: f
        })
    })
}