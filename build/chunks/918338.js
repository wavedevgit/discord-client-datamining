/** Chunk was on 92917 **/
/** chunk id: 918338, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => p
});
var r = n(627968),
    i = n(64700),
    l = n(503698),
    a = n.n(l),
    s = n(579473),
    o = n(415441),
    c = n(516226),
    u = n(985018),
    d = n(347564);

function p(e) {
    let {
        quest: t,
        isInteracting: n,
        hideAssets: l,
        imageSize: p,
        containerClassName: m,
        imageClassName: f,
        assetRef: g
    } = e, h = i.useMemo(() => (0, s.tW)(t, s.fY.HERO_IMAGE), [t]), _ = i.useMemo(() => (0, s.tW)(t, s.fY.HERO_VIDEO), [t]), {
        onAssetLoadComplete: b
    } = i.useContext(c.M);
    return (0, r.jsx)("div", {
        className: a()(d.l1, m),
        children: !l && (0, r.jsx)(o.N, {
            imageAsset: null != h ? {
                asset: h,
                assetId: "QuestTileBanner",
                alt: u.intl.string(u.t.jnijWz),
                className: a()(d.LO, f)
            } : void 0,
            videoAsset: null != _ ? {
                asset: _,
                assetId: "QuestTileBanner_heroAnimated",
                className: d.G9
            } : void 0,
            showVideo: n,
            imageSize: p,
            onLoadComplete: b,
            assetRef: g
        })
    })
}