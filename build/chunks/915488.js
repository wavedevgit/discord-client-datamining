/** chunk id: 915488 params = (module,exports,require) **/
n.d(t, {
    a: () => r
});
var i = n(850992),
    a = n(203982),
    l = n(652215),
    s = n(698279);

function r(e) {
    let {
        stickerPack: t,
        stickerPickerCategories: n
    } = e;
    a._.dispatchToLastSubscribed(l.jej.OPEN_EXPRESSION_PICKER, {
        activeView: s.kx.STICKER
    });
    let r = n.findIndex(e => e.id === t.id); - 1 !== r && i.bM.setActiveCategoryIndex(r)
}