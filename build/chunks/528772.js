/** chunk id: 528772 params = (module,exports,require) **/
n.d(t, {
    A: () => s
});
var a = n(311907),
    r = n(73153);
let l = !1,
    i = !1;
class o extends a.Ay.Store {
    static displayName = "SoundboardOverlayStore";
    get keepOpen() {
        return i
    }
    get enabled() {
        return l
    }
}
let s = new o(r.h, {
    SOUNDBOARD_SET_OVERLAY_ENABLED: function(e) {
        l = e.enabled, e.enabled && (i = e.keepOpen ?? !1)
    }
})