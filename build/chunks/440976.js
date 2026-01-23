/** Chunk was on 31748 **/
/** chunk id: 440976, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => c
}), n(896048), n(927092), n(212978), n(201528), n(393431), n(752391), n(532706), n(42231), n(232424), n(757074), n(949626), n(767709), n(65162);
var r, l, i = n(311907),
    a = n(73153);
let o = new Map;
class s extends(r = i.Ay.Store) {
    getUsers() {
        return o
    }
    isKeyVerified(e, t) {
        let n = o.get(e);
        if (null == t || null == n || n.length !== t.length) return !1;
        for (let e = 0; e < t.length; e++)
            if (t[e] !== n[e]) return !1;
        return !0
    }
}(l = "displayName") in s ? Object.defineProperty(s, l, {
    value: "TransientKeyStore",
    enumerable: !0,
    configurable: !0,
    writable: !0
}) : s[l] = "TransientKeyStore";
let c = new s(a.h, {
    CONNECTION_OPEN: function() {
        o.clear()
    },
    SECURE_FRAMES_TRANSIENT_KEY_CREATE: function(e) {
        let {
            userId: t,
            key: n
        } = e, r = new Uint8Array(n);
        o.set(t, r)
    },
    SECURE_FRAMES_TRANSIENT_KEY_DELETE: function(e) {
        let {
            userId: t
        } = e;
        return o.delete(t)
    }
})