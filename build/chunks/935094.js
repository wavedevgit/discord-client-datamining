/** chunk id: 935094 params = (module,exports,require) **/
a.d(t, {
    f: () => i
});
var n = a(64700),
    r = a(575593);
let i = e => {
    let [t, a] = (0, n.useState)(null);
    return {
        previewingVariantIndex: t,
        handleEntering: (0, n.useCallback)(t => {
            e?.type !== r.R.VARIANTS_GROUP || a(t)
        }, [e?.type]),
        handleLeaving: (0, n.useCallback)(() => {
            e?.type !== r.R.VARIANTS_GROUP || a(null)
        }, [e?.type])
    }
}