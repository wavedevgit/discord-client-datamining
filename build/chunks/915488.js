/** chunk id: 915488, original params: e,t,n (module,exports,require) **/
n.d(t, {
    a: () => s
});
var r = n(850992),
    i = n(203982),
    l = n(652215),
    a = n(698279);

function s(e) {
    let {
        stickerPack: t,
        stickerPickerCategories: n
    } = e;
    i._.dispatchToLastSubscribed(l.jej.OPEN_EXPRESSION_PICKER, {
        activeView: a.kx.STICKER
    });
    let s = n.findIndex(e => e.id === t.id); - 1 !== s && r.bM.setActiveCategoryIndex(s)
}