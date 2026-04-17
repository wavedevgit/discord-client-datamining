/** chunk id: 915488 params = (module,exports,require) **/
n.d(t, {
    a: () => s
});
var i = n(850992),
    a = n(203982),
    l = n(652215),
    r = n(698279);

function s(e) {
    let {
        stickerPack: t,
        stickerPickerCategories: n
    } = e;
    a._.dispatchToLastSubscribed(l.jej.OPEN_EXPRESSION_PICKER, {
        activeView: r.kx.STICKER
    });
    let s = n.findIndex(e => e.id === t.id); - 1 !== s && i.bM.setActiveCategoryIndex(s)
}