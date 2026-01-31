/** chunk id: 603047, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => c
});
var l, r, s = n(311907),
    i = n(73153),
    a = n(868068);
let o = "None";
class u extends(r = s.Ay.Store) {
    getFakeGameToShow() {
        return o
    }
    getFakeGameData() {
        return a.O[o]
    }
}(l = "displayName") in u ? Object.defineProperty(u, l, {
    value: "ContentInventoryDevToolsStore",
    enumerable: !0,
    configurable: !0,
    writable: !0
}) : u[l] = "ContentInventoryDevToolsStore";
let c = new u(i.h, {
    CONTENT_INVENTORY_FORCE_SHOW_GAME_SHARING: function(e) {
        let {
            gameToShow: t
        } = e;
        o = t
    }
})