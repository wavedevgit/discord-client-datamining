/** chunk id: 915488 params = (module,exports,require) **/
n.d(t, {
    a: () => s
});
var i = n(850992),
    r = n(203982),
    l = n(652215),
    a = n(698279);

function s(e) {
    let {
        stickerPack: t,
        stickerPickerCategories: n
    } = e;
    r._.dispatchToLastSubscribed(l.jej.OPEN_EXPRESSION_PICKER, {
        activeView: a.kx.STICKER
    });
    let s = n.findIndex(e => e.id === t.id); - 1 !== s && i.bM.setActiveCategoryIndex(s)
}