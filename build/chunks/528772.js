/** chunk id: 528772 params = (module,exports,require) **/
n.d(t, {
    A: () => o
});
var l = n(311907),
    s = n(73153);
let i = !1,
    r = !1;
class a extends l.Ay.Store {
    static displayName = "SoundboardOverlayStore";
    get keepOpen() {
        return r
    }
    get enabled() {
        return i
    }
}
let o = new a(s.h, {
    SOUNDBOARD_SET_OVERLAY_ENABLED: function(e) {
        i = e.enabled, e.enabled && (r = e.keepOpen ?? !1)
    }
})