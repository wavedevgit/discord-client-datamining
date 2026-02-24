/** chunk id: 528772, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => o
});
var i = n(311907),
    r = n(73153);
let l = !1,
    s = !1;
class a extends i.Ay.Store {
    static displayName = "SoundboardOverlayStore";
    get keepOpen() {
        return s
    }
    get enabled() {
        return l
    }
}
let o = new a(r.h, {
    SOUNDBOARD_SET_OVERLAY_ENABLED: function(e) {
        l = e.enabled, e.enabled && (s = e.keepOpen ?? !1)
    }
})