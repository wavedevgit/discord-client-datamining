/** chunk id: 918338 params = (module,exports,require) **/
n.d(t, {
    A: () => u
});
var i = n(627968),
    a = n(64700),
    r = n(503698),
    s = n.n(r),
    l = n(579473),
    o = n(415441),
    d = n(516226),
    c = n(985018),
    _ = n(347564);

function u(e) {
    let {
        quest: t,
        isInteracting: n,
        hideAssets: r,
        imageSize: u,
        containerClassName: p,
        imageClassName: E,
        assetRef: m
    } = e, h = a.useMemo(() => (0, l.tW)(t, l.fY.HERO_IMAGE), [t]), g = a.useMemo(() => (0, l.tW)(t, l.fY.HERO_VIDEO), [t]), {
        onAssetLoadComplete: f
    } = a.useContext(d.M);
    return (0, i.jsx)("div", {
        className: s()(_.l1, p),
        children: !r && (0, i.jsx)(o.N, {
            imageAsset: null != h ? {
                asset: h,
                assetId: "QuestTileBanner",
                alt: c.intl.string(c.t.jnijWz),
                className: s()(_.LO, E)
            } : void 0,
            videoAsset: null != g ? {
                asset: g,
                assetId: "QuestTileBanner_heroAnimated",
                className: _.G9
            } : void 0,
            showVideo: n,
            imageSize: u,
            onLoadComplete: f,
            assetRef: m
        })
    })
}