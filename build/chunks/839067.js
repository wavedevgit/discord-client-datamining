/** chunk id: 839067 params = (module,exports,require) **/
n.d(t, {
    A: () => s
});
var i = n(311907),
    r = n(73153);
let a = null;
class l extends i.Ay.Store {
    static displayName = "ApplicationStoreLocationStore";
    getCurrentPath() {
        return null != a ? a.pathname : null
    }
    getCurrentRoute() {
        var e;
        let t;
        return t = null != (e = a) && null != e.search ? e.search : "", null != e ? `${e.pathname}${t}` : null
    }
    reset() {
        throw Error("Should not reset the store this way outside of a test environment")
    }
}
let s = new l(r.h, {
    APPLICATION_STORE_LOCATION_CHANGE: function(e) {
        let {
            location: t
        } = e;
        a = {
            ...t
        }
    },
    APPLICATION_STORE_RESET_NAVIGATION: function() {
        a = null
    }
})