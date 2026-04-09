/** chunk id: 707890 params = (module,exports,require) **/
r.d(t, {
    A: () => N
}), r(393431), r(532706), r(42231), r(232424), r(949626), r(767709), r(65162);
var n = r(311907),
    l = r(205693),
    u = r(73153),
    s = r(652896),
    i = r(961350),
    a = r(383501),
    c = r(162605),
    o = r(814278),
    d = r(440976),
    E = r(787392),
    f = r(652215);
let A = new Map,
    _ = new Map,
    S = !1,
    g = null;

function T() {
    return c.A.getAllActiveStreamKeys().reduce((e, t) => {
        let {
            ownerId: r
        } = (0, s.Iy)(t), n = !0 === A.get(r), l = _.get(t) !== n;
        return _.set(t, n), !!l || e
    }, !1)
}

function C() {
    let e = a.A.getUserIds() ?? new Set,
        t = i.default.getId(),
        r = !0;
    for (let n of e)
        if (t !== n && !0 !== A.get(n)) {
            r = !1;
            break
        } let n = r !== S;
    return S = r, n
}

function R(e) {
    let {
        userId: t
    } = e;
    if (i.default.getId() === t) return !1;
    let r = function(e) {
            let t = a.A.getSecureFramesRosterMapEntry(e);
            if (null == t) return !1;
            let r = new Uint8Array(t),
                n = E.A.isKeyVerified(e, r) || d.A.isKeyVerified(e, r),
                l = (0, o.m8)(e, [a.A, c.A]),
                u = n && !l,
                s = u !== A.get(e);
            return A.set(e, u), s
        }(t),
        n = T(),
        l = C();
    return r || n || l
}

function m() {
    A.clear(), _.clear(), S = !1
}
class y extends n.Ay.Store {
    static displayName = "SecureFramesVerifiedStore";
    initialize() {
        this.waitFor(i.default, a.A, c.A, d.A, E.A)
    }
    isCallVerified() {
        return S
    }
    isStreamVerified(e) {
        return _.get(e)
    }
    isUserVerified(e) {
        return A.get(e)
    }
}
let N = new y(u.h, {
    CONNECTION_OPEN: m,
    VOICE_CHANNEL_SELECT: function(e) {
        let {
            channelId: t
        } = e;
        if (t === g) return !1;
        g = t, m()
    },
    RTC_CONNECTION_STATE: function(e) {
        let {
            streamKey: t,
            state: r,
            context: n
        } = e;
        if (r !== f.S7L.DISCONNECTED) return !1;
        switch (n) {
            case l.x.STREAM:
                if (null == t) return !1;
                return _.delete(t), C();
            case l.x.DEFAULT:
                m()
        }
    },
    RTC_CONNECTION_ROSTER_MAP_UPDATE: function(e) {
        let {
            userIds: t
        } = e, r = i.default.getId(), n = t.reduce((e, t) => r === t ? e : !!R({
            userId: t
        }) || e, !1), l = T(), u = C();
        return n || l || u
    },
    SECURE_FRAMES_TRANSIENT_KEY_CREATE: R,
    SECURE_FRAMES_TRANSIENT_KEY_DELETE: R,
    SECURE_FRAMES_VERIFIED_KEY_CREATE: R,
    SECURE_FRAMES_VERIFIED_KEY_DELETE: R,
    SECURE_FRAMES_USER_VERIFIED_KEYS_DELETE: R
})