/** chunk id: 918338 params = (module,exports,require) **/
n.d(t, {
    A: () => _
});
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(579473),
    o = n(415441),
    d = n(516226),
    c = n(985018),
    u = n(425594);

function _(e) {
    let {
        quest: t,
        isInteracting: n,
        hideAssets: s,
        imageSize: _,
        containerClassName: m,
        imageClassName: h,
        assetRef: p
    } = e, g = l.useMemo(() => (0, a.tW)(t, a.fY.HERO_IMAGE), [t]), A = l.useMemo(() => (0, a.tW)(t, a.fY.HERO_VIDEO), [t]), {
        onAssetLoadComplete: x
    } = l.useContext(d.M);
    return (0, i.jsx)("div", {
        className: r()(u.l1, m),
        children: !s && (0, i.jsx)(o.N, {
            imageAsset: null != g ? {
                asset: g,
                assetId: "QuestTileBanner",
                alt: c.intl.string(c.t.jnijWz),
                className: r()(u.LO, h)
            } : void 0,
            videoAsset: null != A ? {
                asset: A,
                assetId: "QuestTileBanner_heroAnimated",
                className: u.G9
            } : void 0,
            showVideo: n,
            imageSize: _,
            onLoadComplete: x,
            assetRef: p
        })
    })
}