/** chunk id: 707890, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => S
}), n(896048), n(927092), n(212978), n(201528), n(393431), n(752391), n(532706), n(42231), n(232424), n(757074), n(949626), n(767709), n(65162);
var l, r, i = n(311907),
    a = n(205693),
    s = n(73153),
    o = n(652896),
    c = n(961350),
    u = n(383501),
    d = n(162605),
    h = n(814278),
    p = n(440976),
    f = n(787392),
    m = n(652215);
let g = new Map,
    A = new Map,
    b = !1,
    _ = null;

function y() {
    return d.A.getAllActiveStreamKeys().reduce((e, t) => {
        let {
            ownerId: n
        } = (0, o.Iy)(t), l = !0 === g.get(n), r = A.get(t) !== l;
        return A.set(t, l), !!r || e
    }, !1)
}

function v() {
    var e;
    let t = null != (e = u.A.getUserIds()) ? e : new Set,
        n = c.default.getId(),
        l = !0;
    for (let e of t)
        if (n !== e && !0 !== g.get(e)) {
            l = !1;
            break
        } let r = l !== b;
    return b = l, r
}

function E(e) {
    let {
        userId: t
    } = e;
    if (c.default.getId() === t) return !1;
    let n = function(e) {
            let t = u.A.getSecureFramesRosterMapEntry(e);
            if (null == t) return !1;
            let n = new Uint8Array(t),
                l = f.A.isKeyVerified(e, n) || p.A.isKeyVerified(e, n),
                r = (0, h.m8)(e, [u.A, d.A]),
                i = l && !r,
                a = i !== g.get(e);
            return g.set(e, i), a
        }(t),
        l = y(),
        r = v();
    return n || l || r
}

function O() {
    g.clear(), A.clear(), b = !1
}
class C extends(l = i.Ay.Store) {
    initialize() {
        this.waitFor(c.default, u.A, d.A, p.A, f.A)
    }
    isCallVerified() {
        return b
    }
    isStreamVerified(e) {
        return A.get(e)
    }
    isUserVerified(e) {
        return g.get(e)
    }
}(r = "displayName") in C ? Object.defineProperty(C, r, {
    value: "SecureFramesVerifiedStore",
    enumerable: !0,
    configurable: !0,
    writable: !0
}) : C[r] = "SecureFramesVerifiedStore";
let S = new C(s.h, {
    CONNECTION_OPEN: O,
    VOICE_CHANNEL_SELECT: function(e) {
        let {
            channelId: t
        } = e;
        if (t === _) return !1;
        _ = t, O()
    },
    RTC_CONNECTION_STATE: function(e) {
        let {
            streamKey: t,
            state: n,
            context: l
        } = e;
        if (n !== m.S7L.DISCONNECTED) return !1;
        switch (l) {
            case a.x.STREAM:
                if (null == t) return !1;
                return A.delete(t), v();
            case a.x.DEFAULT:
                O()
        }
    },
    RTC_CONNECTION_ROSTER_MAP_UPDATE: function(e) {
        let {
            userIds: t
        } = e, n = c.default.getId(), l = t.reduce((e, t) => n === t ? e : !!E({
            userId: t
        }) || e, !1), r = y(), i = v();
        return l || r || i
    },
    SECURE_FRAMES_TRANSIENT_KEY_CREATE: E,
    SECURE_FRAMES_TRANSIENT_KEY_DELETE: E,
    SECURE_FRAMES_VERIFIED_KEY_CREATE: E,
    SECURE_FRAMES_VERIFIED_KEY_DELETE: E,
    SECURE_FRAMES_USER_VERIFIED_KEYS_DELETE: E
})