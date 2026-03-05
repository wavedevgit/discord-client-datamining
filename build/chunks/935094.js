/** chunk id: 935094 params = (module,exports,require) **/
a.d(n, {
    f: () => l
});
var t = a(64700),
    i = a(575593);
let l = e => {
    let [n, a] = (0, t.useState)(null);
    return {
        previewingVariantIndex: n,
        handleEntering: (0, t.useCallback)(n => {
            e?.type !== i.R.VARIANTS_GROUP || a(n)
        }, [e?.type]),
        handleLeaving: (0, t.useCallback)(() => {
            e?.type !== i.R.VARIANTS_GROUP || a(null)
        }, [e?.type])
    }
}