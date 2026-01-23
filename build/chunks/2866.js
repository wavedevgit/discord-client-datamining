/** Chunk was on 45565 **/
/** chunk id: 2866, original params: e,t,a (module,exports,require) **/
a.d(t, {
    A: () => S
});
var l, r, n = a(311907),
    i = a(73153),
    s = a(723702),
    u = a(837921),
    o = a(857275),
    A = a(214335),
    d = a(625002);
let g = !1,
    c = !0,
    f = !1;
class m extends(r = n.Ay.Store) {
    initialize() {
        !s.isPlatformEmbedded || __OVERLAY__ || u.Ay.getGPUDriverVersions().then(e => {
            g = (0, d.A)(e), c = (0, o.A)(e), f = (0, A.A)(e), this.emitChange()
        })
    }
    get GPUDriversOutdated() {
        return g
    }
    get canUseHardwareAcceleration() {
        return c
    }
    get problematicGPUDriver() {
        return f
    }
    getState() {
        return {
            GPUDriversOutdated: g,
            canUseHardwareAcceleration: c,
            problematicGPUDriver: f
        }
    }
}(l = "displayName") in m ? Object.defineProperty(m, l, {
    value: "StreamingCapabilitiesStore",
    enumerable: !0,
    configurable: !0,
    writable: !0
}) : m[l] = "StreamingCapabilitiesStore";
let S = new m(i.h, {
    OVERLAY_INITIALIZE: function(e) {
        let {
            streamingCapabilitiesStoreState: t
        } = e;
        g = t.GPUDriversOutdated, c = t.canUseHardwareAcceleration
    }
})