/** chunk id: 787392, original params: t,e,i (module,exports,require) **/
i.d(e, {
    A: () => d
}), i(393431), i(532706), i(42231), i(232424), i(949626), i(767709), i(65162);
var n = i(311907),
    l = i(149597),
    r = i(73153),
    s = i(661191);
let a = {};
class o extends n.Ay.PersistedStore {
    static displayName = "VerifiedKeyStore";
    static persistKey = "VerifiedKeyStore";
    initialize(t) {
        a = t?.users ?? {}
    }
    getState() {
        return {
            users: a
        }
    }
    getKeyTrustedAt(t, e) {
        let i = (0, l.uo)(e);
        return a[t]?.[i]
    }
    isKeyVerified(t, e) {
        return null != this.getKeyTrustedAt(t, e)
    }
    getUserIds() {
        return s.default.keys(a)
    }
    getUserVerifiedKeys(t) {
        return a[t]
    }
}
let d = new o(r.h, {
    SECURE_FRAMES_VERIFIED_KEY_CREATE: function(t) {
        let e, {
                userId: i,
                key: n
            } = t,
            r = (e = a[i] ?? {}, a[i] = e, e),
            s = new Uint8Array(n);
        r[(0, l.uo)(s)] = Date.now()
    },
    SECURE_FRAMES_VERIFIED_KEY_DELETE: function(t) {
        let {
            userId: e,
            serializedKey: i
        } = t, n = a[e];
        if (null == n) return !1;
        let l = delete n[i],
            r = !1;
        return 0 === Object.keys(n).length && (delete a[e], r = !0), l || r
    },
    SECURE_FRAMES_USER_VERIFIED_KEYS_DELETE: function(t) {
        let {
            userId: e
        } = t;
        return null != a[e] && delete a[e]
    }
})