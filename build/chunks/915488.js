/** chunk id: 915488 params = (module,exports,require) **/
n.d(t, {
    a: () => r
});
var i = n(850992),
    l = n(203982),
    s = n(652215),
    a = n(698279);

function r(e) {
    let {
        stickerPack: t,
        stickerPickerCategories: n
    } = e;
    l._.dispatchToLastSubscribed(s.jej.OPEN_EXPRESSION_PICKER, {
        activeView: a.kx.STICKER
    });
    let r = n.findIndex(e => e.id === t.id); - 1 !== r && i.bM.setActiveCategoryIndex(r)
}