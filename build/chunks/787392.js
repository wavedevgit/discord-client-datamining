/** Chunk was on 16674 **/
/** chunk id: 787392, original params: e,t,r (module,exports,require) **/
r.d(t, {
    A: () => f
}), r(927092), r(212978), r(201528), r(393431), r(752391), r(532706), r(42231), r(232424), r(757074), r(949626), r(767709), r(65162), r(896048);
var n, l = r(311907),
    u = r(149597),
    i = r(73153),
    s = r(661191);

function a(e, t, r) {
    return t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e
}
let c = {};
class o extends(n = l.Ay.PersistedStore) {
    initialize(e) {
        var t;
        c = null != (t = null == e ? void 0 : e.users) ? t : {}
    }
    getState() {
        return {
            users: c
        }
    }
    getKeyTrustedAt(e, t) {
        var r;
        let n = (0, u.uo)(t);
        return null == (r = c[e]) ? void 0 : r[n]
    }
    isKeyVerified(e, t) {
        return null != this.getKeyTrustedAt(e, t)
    }
    getUserIds() {
        return s.default.keys(c)
    }
    getUserVerifiedKeys(e) {
        return c[e]
    }
}
a(o, "displayName", "VerifiedKeyStore"), a(o, "persistKey", "VerifiedKeyStore");
let f = new o(i.h, {
    SECURE_FRAMES_VERIFIED_KEY_CREATE: function(e) {
        var t;
        let r, {
                userId: n,
                key: l
            } = e,
            i = (r = null != (t = c[n]) ? t : {}, c[n] = r, r),
            s = new Uint8Array(l);
        i[(0, u.uo)(s)] = Date.now()
    },
    SECURE_FRAMES_VERIFIED_KEY_DELETE: function(e) {
        let {
            userId: t,
            serializedKey: r
        } = e, n = c[t];
        if (null == n) return !1;
        let l = delete n[r],
            u = !1;
        return 0 === Object.keys(n).length && (delete c[t], u = !0), l || u
    },
    SECURE_FRAMES_USER_VERIFIED_KEYS_DELETE: function(e) {
        let {
            userId: t
        } = e;
        return null != c[t] && delete c[t]
    }
})