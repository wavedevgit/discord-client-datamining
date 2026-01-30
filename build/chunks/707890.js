/** chunk id: 707890, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => S
}), n(896048), n(927092), n(212978), n(201528), n(393431), n(752391), n(532706), n(42231), n(232424), n(757074), n(949626), n(767709), n(65162);
var r, l, i = n(311907),
    a = n(205693),
    o = n(73153),
    s = n(652896),
    c = n(961350),
    u = n(383501),
    d = n(162605),
    f = n(814278),
    p = n(440976),
    g = n(787392),
    m = n(652215);
let _ = new Map,
    h = new Map,
    y = !1,
    A = null;

function b() {
    return d.A.getAllActiveStreamKeys().reduce((e, t) => {
        let {
            ownerId: n
        } = (0, s.Iy)(t), r = !0 === _.get(n), l = h.get(t) !== r;
        return h.set(t, r), !!l || e
    }, !1)
}

function E() {
    var e;
    let t = null != (e = u.A.getUserIds()) ? e : new Set,
        n = c.default.getId(),
        r = !0;
    for (let e of t)
        if (n !== e && !0 !== _.get(e)) {
            r = !1;
            break
        } let l = r !== y;
    return y = r, l
}

function v(e) {
    let {
        userId: t
    } = e;
    if (c.default.getId() === t) return !1;
    let n = function(e) {
            let t = u.A.getSecureFramesRosterMapEntry(e);
            if (null == t) return !1;
            let n = new Uint8Array(t),
                r = g.A.isKeyVerified(e, n) || p.A.isKeyVerified(e, n),
                l = (0, f.m8)(e, [u.A, d.A]),
                i = r && !l,
                a = i !== _.get(e);
            return _.set(e, i), a
        }(t),
        r = b(),
        l = E();
    return n || r || l
}

function O() {
    _.clear(), h.clear(), y = !1
}
class x extends(r = i.Ay.Store) {
    initialize() {
        this.waitFor(c.default, u.A, d.A, p.A, g.A)
    }
    isCallVerified() {
        return y
    }
    isStreamVerified(e) {
        return h.get(e)
    }
    isUserVerified(e) {
        return _.get(e)
    }
}(l = "displayName") in x ? Object.defineProperty(x, l, {
    value: "SecureFramesVerifiedStore",
    enumerable: !0,
    configurable: !0,
    writable: !0
}) : x[l] = "SecureFramesVerifiedStore";
let S = new x(o.h, {
    CONNECTION_OPEN: O,
    VOICE_CHANNEL_SELECT: function(e) {
        let {
            channelId: t
        } = e;
        if (t === A) return !1;
        A = t, O()
    },
    RTC_CONNECTION_STATE: function(e) {
        let {
            streamKey: t,
            state: n,
            context: r
        } = e;
        if (n !== m.S7L.DISCONNECTED) return !1;
        switch (r) {
            case a.x.STREAM:
                if (null == t) return !1;
                return h.delete(t), E();
            case a.x.DEFAULT:
                O()
        }
    },
    RTC_CONNECTION_ROSTER_MAP_UPDATE: function(e) {
        let {
            userIds: t
        } = e, n = c.default.getId(), r = t.reduce((e, t) => n === t ? e : !!v({
            userId: t
        }) || e, !1), l = b(), i = E();
        return r || l || i
    },
    SECURE_FRAMES_TRANSIENT_KEY_CREATE: v,
    SECURE_FRAMES_TRANSIENT_KEY_DELETE: v,
    SECURE_FRAMES_VERIFIED_KEY_CREATE: v,
    SECURE_FRAMES_VERIFIED_KEY_DELETE: v,
    SECURE_FRAMES_USER_VERIFIED_KEYS_DELETE: v
})