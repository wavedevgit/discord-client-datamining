/** chunk id: 935094 params = (module,exports,require) **/
n.d(t, {
    f: () => l
});
var a = n(64700),
    i = n(575593);
let l = e => {
    let [t, n] = (0, a.useState)(null);
    return {
        previewingVariantIndex: t,
        handleEntering: (0, a.useCallback)(t => {
            e?.type !== i.R.VARIANTS_GROUP || n(t)
        }, [e?.type]),
        handleLeaving: (0, a.useCallback)(() => {
            e?.type !== i.R.VARIANTS_GROUP || n(null)
        }, [e?.type])
    }
}