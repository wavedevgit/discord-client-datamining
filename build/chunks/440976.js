/** chunk id: 440976, original params: e,t,r (module,exports,require) **/
r.d(t, {
    A: () => i
}), r(393431), r(532706), r(42231), r(232424), r(949626), r(767709), r(65162);
var n = r(311907),
    l = r(73153);
let u = new Map;
class s extends n.Ay.Store {
    static displayName = "TransientKeyStore";
    getUsers() {
        return u
    }
    isKeyVerified(e, t) {
        let r = u.get(e);
        if (null == t || null == r || r.length !== t.length) return !1;
        for (let e = 0; e < t.length; e++)
            if (t[e] !== r[e]) return !1;
        return !0
    }
}
let i = new s(l.h, {
    CONNECTION_OPEN: function() {
        u.clear()
    },
    SECURE_FRAMES_TRANSIENT_KEY_CREATE: function(e) {
        let {
            userId: t,
            key: r
        } = e, n = new Uint8Array(r);
        u.set(t, n)
    },
    SECURE_FRAMES_TRANSIENT_KEY_DELETE: function(e) {
        let {
            userId: t
        } = e;
        return u.delete(t)
    }
})