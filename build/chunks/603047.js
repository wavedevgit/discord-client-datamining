/** chunk id: 603047 params = (module,exports,require) **/
n.d(t, {
    A: () => o
});
var s = n(311907),
    l = n(73153),
    a = n(868068);
let i = "None";
class r extends s.Ay.Store {
    static displayName = "ContentInventoryDevToolsStore";
    getFakeGameToShow() {
        return i
    }
    getFakeGameData() {
        return a.O[i]
    }
}
let o = new r(l.h, {
    CONTENT_INVENTORY_FORCE_SHOW_GAME_SHARING: function(e) {
        let {
            gameToShow: t
        } = e;
        i = t
    }
})