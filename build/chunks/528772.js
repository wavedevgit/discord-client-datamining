/** chunk id: 528772 params = (module,exports,require) **/
n.d(t, {
    A: () => u
});
var r = n(311907),
    a = n(73153);
let l = !1,
    i = !1;
class s extends r.Ay.Store {
    static displayName = "SoundboardOverlayStore";
    get keepOpen() {
        return i
    }
    get enabled() {
        return l
    }
}
let u = new s(a.h, {
    SOUNDBOARD_SET_OVERLAY_ENABLED: function(e) {
        l = e.enabled, e.enabled && (i = e.keepOpen ?? !1)
    }
})