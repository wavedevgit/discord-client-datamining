/** chunk id: 918338, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => m
});
var i = n(627968),
    a = n(64700),
    r = n(503698),
    s = n.n(r),
    l = n(579473),
    o = n(415441),
    d = n(516226),
    c = n(985018),
    u = n(989194);

function m(e) {
    let {
        quest: t,
        isInteracting: n,
        hideAssets: r,
        imageSize: m,
        containerClassName: g,
        imageClassName: p,
        assetRef: f
    } = e, v = a.useMemo(() => (0, l.tW)(t, l.fY.HERO_IMAGE), [t]), _ = a.useMemo(() => (0, l.tW)(t, l.fY.HERO_VIDEO), [t]), {
        onAssetLoadComplete: x
    } = a.useContext(d.M);
    return (0, i.jsx)("div", {
        className: s()(u.l1, g),
        children: !r && (0, i.jsx)(o.N, {
            imageAsset: null != v ? {
                asset: v,
                assetId: "QuestTileBanner",
                alt: c.intl.string(c.t.jnijWz),
                className: s()(u.LO, p)
            } : void 0,
            videoAsset: null != _ ? {
                asset: _,
                assetId: "QuestTileBanner_heroAnimated",
                className: u.G9
            } : void 0,
            showVideo: n,
            imageSize: m,
            onLoadComplete: x,
            assetRef: f
        })
    })
}