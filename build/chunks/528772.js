/** chunk id: 528772, original params: e,t,r (module,exports,require) **/
r.d(t, {
    A: () => s
});
var n, o, i = r(311907),
    l = r(73153);
let a = !1,
    u = !1;
class c extends(o = i.Ay.Store) {
    get keepOpen() {
        return u
    }
    get enabled() {
        return a
    }
}(n = "displayName") in c ? Object.defineProperty(c, n, {
    value: "SoundboardOverlayStore",
    enumerable: !0,
    configurable: !0,
    writable: !0
}) : c[n] = "SoundboardOverlayStore";
let s = new c(l.h, {
    SOUNDBOARD_SET_OVERLAY_ENABLED: function(e) {
        if (a = e.enabled, e.enabled) {
            var t;
            u = null != (t = e.keepOpen) && t
        }
    }
})