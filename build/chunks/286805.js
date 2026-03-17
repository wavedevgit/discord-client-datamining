/** chunk id: 286805 params = (module,exports,require) **/
n.d(t, {
    A: () => s
});
var i = n(311907),
    r = n(73153);
let l = {
    matureAgree: !1
};
class a extends i.Ay.Store {
    static displayName = "ApplicationStoreSettingsStore";
    get didMatureAgree() {
        return l.matureAgree
    }
}
let s = new a(r.h, {
    APPLICATION_STORE_MATURE_AGREE: function() {
        l.matureAgree = !0
    }
})