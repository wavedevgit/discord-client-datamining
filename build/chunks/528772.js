/** chunk id: 528772 params = (module,exports,require) **/
a.d(t, {
    A: () => s
});
var n = a(311907),
    r = a(73153);
let i = !1,
    l = !1;
class o extends n.Ay.Store {
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