/** chunk id: 839067 params = (module,exports,require) **/
n.d(t, {
    A: () => l
});
var i = n(311907),
    r = n(73153);
let s = null;
class a extends i.Ay.Store {
    static displayName = "ApplicationStoreLocationStore";
    getCurrentPath() {
        return null != s ? s.pathname : null
    }
    getCurrentRoute() {
        var e;
        let t;
        return t = null != (e = s) && null != e.search ? e.search : "", null != e ? `${e.pathname}${t}` : null
    }
    reset() {
        throw Error("Should not reset the store this way outside of a test environment")
    }
}
let l = new a(r.h, {
    APPLICATION_STORE_LOCATION_CHANGE: function(e) {
        let {
            location: t
        } = e;
        s = {
            ...t
        }
    },
    APPLICATION_STORE_RESET_NAVIGATION: function() {
        s = null
    }
})