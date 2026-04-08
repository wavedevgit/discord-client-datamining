/** chunk id: 528772 params = (module,exports,require) **/
n.d(t, {
    A: () => s
});
var a = n(311907),
    r = n(73153);
let i = !1,
    l = !1;
class o extends a.Ay.Store {
    static displayName = "SoundboardOverlayStore";
    get keepOpen() {
        return l
    }
    get enabled() {
        return i
    }
}
let s = new o(r.h, {
    SOUNDBOARD_SET_OVERLAY_ENABLED: function(e) {
        i = e.enabled, e.enabled && (l = e.keepOpen ?? !1)
    }
})