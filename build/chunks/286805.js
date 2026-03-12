/** chunk id: 286805 params = (module,exports,require) **/
n.d(t, {
    A: () => s
});
var i = n(311907),
    r = n(73153);
let a = {
    matureAgree: !1
};
class l extends i.Ay.Store {
    static displayName = "ApplicationStoreSettingsStore";
    get didMatureAgree() {
        return a.matureAgree
    }
}
let s = new l(r.h, {
    APPLICATION_STORE_MATURE_AGREE: function() {
        a.matureAgree = !0
    }
})