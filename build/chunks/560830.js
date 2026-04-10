/** chunk id: 560830 params = (module,exports,require) **/
n.d(t, {
    t: () => o
});
var i = n(311907),
    s = n(926919),
    l = n(419954),
    r = n(111162),
    a = n(780964);
let o = (0, l.zD)(a.X.DISABLE_APP_COLLECTIONS_CACHE, {
    useTitle: () => "Disable Application Collections Cache",
    useSubtitle: () => "Forces application collection updates to be shown immediately.",
    useDisabled: () => (0, i.bG)([r.default], () => r.default.onlyShowPreviewAppCollections),
    useValue: () => (0, i.bG)([r.default], () => r.default.disableAppCollectionsCache || r.default.onlyShowPreviewAppCollections),
    setValue: e => (0, s.x)({
        disableAppCollectionsCache: e
    })
})