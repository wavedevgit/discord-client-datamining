/** chunk id: 787392 params = (module,exports,require) **/
i.d(t, {
    A: () => c
}), i(393431), i(532706), i(42231), i(232424), i(949626), i(767709), i(65162);
var n = i(311907),
    a = i(149597),
    l = i(73153),
    s = i(661191);
let r = {};
class o extends n.Ay.PersistedStore {
    static displayName = "VerifiedKeyStore";
    static persistKey = "VerifiedKeyStore";
    initialize(e) {
        r = e?.users ?? {}
    }
    getState() {
        return {
            users: r
        }
    }
    getKeyTrustedAt(e, t) {
        let i = (0, a.uo)(t);
        return r[e]?.[i]
    }
    isKeyVerified(e, t) {
        return null != this.getKeyTrustedAt(e, t)
    }
    getUserIds() {
        return s.default.keys(r)
    }
    getUserVerifiedKeys(e) {
        return r[e]
    }
}
let c = new o(l.h, {
    SECURE_FRAMES_VERIFIED_KEY_CREATE: function(e) {
        let t, {
                userId: i,
                key: n
            } = e,
            l = (t = r[i] ?? {}, r[i] = t, t),
            s = new Uint8Array(n);
        l[(0, a.uo)(s)] = Date.now()
    },
    SECURE_FRAMES_VERIFIED_KEY_DELETE: function(e) {
        let {
            userId: t,
            serializedKey: i
        } = e, n = r[t];
        if (null == n) return !1;
        let a = delete n[i],
            l = !1;
        return 0 === Object.keys(n).length && (delete r[t], l = !0), a || l
    },
    SECURE_FRAMES_USER_VERIFIED_KEYS_DELETE: function(e) {
        let {
            userId: t
        } = e;
        return null != r[t] && delete r[t]
    }
})