/** chunk id: 603047, original params: e,t,l (module,exports,require) **/
l.d(t, {
    A: () => u
});
var s = l(311907),
    n = l(73153),
    a = l(868068);
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
let u = new r(n.h, {
    CONTENT_INVENTORY_FORCE_SHOW_GAME_SHARING: function(e) {
        let {
            gameToShow: t
        } = e;
        i = t
    }
})