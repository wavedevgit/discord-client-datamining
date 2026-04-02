/** chunk id: 787392 params = (module,exports,require) **/
r.d(t, {
    A: () => c
}), r(393431), r(532706), r(42231), r(232424), r(949626), r(767709), r(65162);
var n = r(311907),
    l = r(149597),
    u = r(73153),
    s = r(661191);
let i = {};
class a extends n.Ay.PersistedStore {
    static displayName = "VerifiedKeyStore";
    static persistKey = "VerifiedKeyStore";
    initialize(e) {
        i = e?.users ?? {}
    }
    getState() {
        return {
            users: i
        }
    }
    getKeyTrustedAt(e, t) {
        let r = (0, l.uo)(t);
        return i[e]?.[r]
    }
    isKeyVerified(e, t) {
        return null != this.getKeyTrustedAt(e, t)
    }
    getUserIds() {
        return s.default.keys(i)
    }
    getUserVerifiedKeys(e) {
        return i[e]
    }
}
let c = new a(u.h, {
    SECURE_FRAMES_VERIFIED_KEY_CREATE: function(e) {
        let t, {
                userId: r,
                key: n
            } = e,
            u = (t = i[r] ?? {}, i[r] = t, t),
            s = new Uint8Array(n);
        u[(0, l.uo)(s)] = Date.now()
    },
    SECURE_FRAMES_VERIFIED_KEY_DELETE: function(e) {
        let {
            userId: t,
            serializedKey: r
        } = e, n = i[t];
        if (null == n) return !1;
        let l = delete n[r],
            u = !1;
        return 0 === Object.keys(n).length && (delete i[t], u = !0), l || u
    },
    SECURE_FRAMES_USER_VERIFIED_KEYS_DELETE: function(e) {
        let {
            userId: t
        } = e;
        return null != i[t] && delete i[t]
    }
})