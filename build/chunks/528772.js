/** chunk id: 528772 params = (module,exports,require) **/
n.d(t, {
    A: () => o
});
var i = n(311907),
    l = n(73153);
let s = !1,
    a = !1;
class r extends i.Ay.Store {
    static displayName = "SoundboardOverlayStore";
    get keepOpen() {
        return a
    }
    get enabled() {
        return s
    }
}
let o = new r(l.h, {
    SOUNDBOARD_SET_OVERLAY_ENABLED: function(e) {
        s = e.enabled, e.enabled && (a = e.keepOpen ?? !1)
    }
})