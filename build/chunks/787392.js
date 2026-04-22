/** chunk id: 787392 params = (module,exports,require) **/
n.d(t, {
    A: () => c
}), n(393431), n(532706), n(42231), n(232424), n(949626), n(767709), n(65162);
var i = n(311907),
    l = n(149597),
    s = n(73153),
    a = n(661191);
let r = {};
class o extends i.Ay.PersistedStore {
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
        let n = (0, l.uo)(t);
        return r[e]?.[n]
    }
    isKeyVerified(e, t) {
        return null != this.getKeyTrustedAt(e, t)
    }
    getUserIds() {
        return a.default.keys(r)
    }
    getUserVerifiedKeys(e) {
        return r[e]
    }
}
let c = new o(s.h, {
    SECURE_FRAMES_VERIFIED_KEY_CREATE: function(e) {
        let t, {
                userId: n,
                key: i
            } = e,
            s = (t = r[n] ?? {}, r[n] = t, t),
            a = new Uint8Array(i);
        s[(0, l.uo)(a)] = Date.now()
    },
    SECURE_FRAMES_VERIFIED_KEY_DELETE: function(e) {
        let {
            userId: t,
            serializedKey: n
        } = e, i = r[t];
        if (null == i) return !1;
        let l = delete i[n],
            s = !1;
        return 0 === Object.keys(i).length && (delete r[t], s = !0), l || s
    },
    SECURE_FRAMES_USER_VERIFIED_KEYS_DELETE: function(e) {
        let {
            userId: t
        } = e;
        return null != r[t] && delete r[t]
    }
})