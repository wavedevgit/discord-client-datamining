/** chunk id: 528772 params = (module,exports,require) **/
n.d(t, {
    A: () => o
});
var r = n(311907),
    a = n(73153);
let i = !1,
    l = !1;
class s extends r.Ay.Store {
    static displayName = "SoundboardOverlayStore";
    get keepOpen() {
        return l
    }
    get enabled() {
        return i
    }
}
let o = new s(a.h, {
    SOUNDBOARD_SET_OVERLAY_ENABLED: function(e) {
        i = e.enabled, e.enabled && (l = e.keepOpen ?? !1)
    }
})