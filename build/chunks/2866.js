/** chunk id: 2866, original params: e,t,a (module,exports,require) **/
a.d(t, {
    A: () => m
});
var l = a(311907),
    r = a(73153),
    i = a(723702),
    n = a(837921),
    s = a(857275),
    u = a(214335),
    A = a(625002);
let o = !1,
    d = !0,
    g = !1;
class c extends l.Ay.Store {
    static displayName = "StreamingCapabilitiesStore";
    initialize() {
        !i.isPlatformEmbedded || __OVERLAY__ || n.Ay.getGPUDriverVersions().then(e => {
            o = (0, A.A)(e), d = (0, s.A)(e), g = (0, u.A)(e), this.emitChange()
        })
    }
    get GPUDriversOutdated() {
        return o
    }
    get canUseHardwareAcceleration() {
        return d
    }
    get problematicGPUDriver() {
        return g
    }
    getState() {
        return {
            GPUDriversOutdated: o,
            canUseHardwareAcceleration: d,
            problematicGPUDriver: g
        }
    }
}
let m = new c(r.h, {
    OVERLAY_INITIALIZE: function(e) {
        let {
            streamingCapabilitiesStoreState: t
        } = e;
        o = t.GPUDriversOutdated, d = t.canUseHardwareAcceleration
    }
})