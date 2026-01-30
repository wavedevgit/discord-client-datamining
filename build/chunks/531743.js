/** chunk id: 531743, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => o
}), n(896048);
var r = n(626584),
    i = n(723176);
let a = new r.A("ChannelReader");
class o {
    static getSync(e, t) {
        let n = performance.now(),
            r = i.A.channels(e).getManySyncUnsafe(t),
            o = performance.now() - n;
        return a.log("synchronously loaded in ".concat(o, "ms (guild: ").concat(t, ", channels: ").concat(r.length, ")")), [r, o]
    }
    static async getAsync(e, t) {
        let n = performance.now(),
            r = await i.A.channels(e).getMany(t),
            o = performance.now() - n;
        return a.verbose("loaded in ".concat(o, "ms (guild: ").concat(t, ", channels: ").concat(r.length, ")")), r
    }
    static async getGuildIds() {
        try {
            var e;
            let t = i.A.channels();
            if (null == t) return new Set;
            let n = (null != (e = await t.getGuildIds()) ? e : []).filter(e => null !== e && "string" == typeof e);
            return new Set(n)
        } catch (e) {
            return a.warn("couldn't get guild ids", e), new Set
        }
    }
}