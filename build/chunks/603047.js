/** chunk id: 603047 params = (module,exports,require) **/
n.d(t, {
    A: () => o
});
var l = n(311907),
    s = n(73153),
    i = n(868068);
let a = "None";
class r extends l.Ay.Store {
    static displayName = "ContentInventoryDevToolsStore";
    getFakeGameToShow() {
        return a
    }
    getFakeGameData() {
        return i.O[a]
    }
}
let o = new r(s.h, {
    CONTENT_INVENTORY_FORCE_SHOW_GAME_SHARING: function(e) {
        let {
            gameToShow: t
        } = e;
        a = t
    }
})