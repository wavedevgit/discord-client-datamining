/** chunk id: 935094 params = (module,exports,require) **/
r.d(t, {
    f: () => i
});
var n = r(64700),
    l = r(575593);
let i = e => {
    let [t, r] = (0, n.useState)(null);
    return {
        previewingVariantIndex: t,
        handleEntering: (0, n.useCallback)(t => {
            e?.type !== l.R.VARIANTS_GROUP || r(t)
        }, [e?.type]),
        handleLeaving: (0, n.useCallback)(() => {
            e?.type !== l.R.VARIANTS_GROUP || r(null)
        }, [e?.type])
    }
}