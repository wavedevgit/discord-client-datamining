/** chunk id: 787392 params = (module,exports,require) **/
n.d(e, {
    A: () => u
}), n(393431), n(532706), n(42231), n(232424), n(949626), n(767709), n(65162);
var i = n(311907),
    l = n(149597),
    r = n(73153),
    s = n(661191);
let a = {};
class o extends i.Ay.PersistedStore {
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
        let n = (0, l.uo)(e);
        return a[t]?.[n]
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
let u = new o(r.h, {
    SECURE_FRAMES_VERIFIED_KEY_CREATE: function(t) {
        let e, {
                userId: n,
                key: i
            } = t,
            r = (e = a[n] ?? {}, a[n] = e, e),
            s = new Uint8Array(i);
        r[(0, l.uo)(s)] = Date.now()
    },
    SECURE_FRAMES_VERIFIED_KEY_DELETE: function(t) {
        let {
            userId: e,
            serializedKey: n
        } = t, i = a[e];
        if (null == i) return !1;
        let l = delete i[n],
            r = !1;
        return 0 === Object.keys(i).length && (delete a[e], r = !0), l || r
    },
    SECURE_FRAMES_USER_VERIFIED_KEYS_DELETE: function(t) {
        let {
            userId: e
        } = t;
        return null != a[e] && delete a[e]
    }
})