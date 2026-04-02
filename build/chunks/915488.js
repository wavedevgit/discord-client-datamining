/** chunk id: 915488 params = (module,exports,require) **/
n.d(t, {
    a: () => a
});
var i = n(850992),
    l = n(203982),
    s = n(652215),
    r = n(698279);

function a(e) {
    let {
        stickerPack: t,
        stickerPickerCategories: n
    } = e;
    l._.dispatchToLastSubscribed(s.jej.OPEN_EXPRESSION_PICKER, {
        activeView: r.kx.STICKER
    });
    let a = n.findIndex(e => e.id === t.id); - 1 !== a && i.bM.setActiveCategoryIndex(a)
}