/** Chunk was on 52390 **/
/** chunk id: 603047, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => c
});
var r, l, i = n(311907),
    a = n(73153),
    o = n(868068);
let s = "None";
class u extends(l = i.Ay.Store) {
    getFakeGameToShow() {
        return s
    }
    getFakeGameData() {
        return o.O[s]
    }
}(r = "displayName") in u ? Object.defineProperty(u, r, {
    value: "ContentInventoryDevToolsStore",
    enumerable: !0,
    configurable: !0,
    writable: !0
}) : u[r] = "ContentInventoryDevToolsStore";
let c = new u(a.h, {
    CONTENT_INVENTORY_FORCE_SHOW_GAME_SHARING: function(e) {
        let {
            gameToShow: t
        } = e;
        s = t
    }
})