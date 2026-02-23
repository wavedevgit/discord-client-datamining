/** chunk id: 603047, original params: e,t,l (module,exports,require) **/
l.d(t, {
    A: () => o
});
var n = l(311907),
    s = l(73153),
    a = l(868068);
let i = "None";
class r extends n.Ay.Store {
    static displayName = "ContentInventoryDevToolsStore";
    getFakeGameToShow() {
        return i
    }
    getFakeGameData() {
        return a.O[i]
    }
}
let o = new r(s.h, {
    CONTENT_INVENTORY_FORCE_SHOW_GAME_SHARING: function(e) {
        let {
            gameToShow: t
        } = e;
        i = t
    }
})