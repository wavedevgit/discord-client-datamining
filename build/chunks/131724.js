/** chunk id: 131724, original params: e,t,n (module,exports,require) **/
n.d(t, {
    D: () => m,
    M: () => f
});
var r = n(723702),
    i = n(850670),
    l = n(206589),
    a = n(125017),
    s = n(625248),
    o = n(833349),
    c = n(287613),
    u = n(659051),
    d = n(702631),
    p = n(652215);

function m(e) {
    var t;
    let {
        presenceActivity: n,
        currentUserPresenceActivity: o,
        currentUserId: m,
        message: f,
        application: g,
        isEmbeddedApplication: _,
        isFrameApplication: h,
        isGameLaunchable: b
    } = e;
    if (f.author.id === m || !(0, u.A)(n, f, g.id)) return {
        canJoin: !1,
        remoteJoinPlatform: null
    };
    let y = (0, a._)(n);
    if (!(0, c.A)(y) || (0, d.U)(y) || (0, l.w)(o, n) || (0, i.v)(f)) return {
        canJoin: !1,
        remoteJoinPlatform: null
    };
    if (_ && h) return {
        canJoin: !0,
        remoteJoinPlatform: null
    };
    if ((null == (t = f.activity) ? void 0 : t.type) === p.xL.JOIN && null != n) {
        let e = (0, s.l)(n);
        if (null != e) return {
            canJoin: !0,
            remoteJoinPlatform: e
        }
    }
    return (0, r.platformSupportsActivityJoin)() && b ? {
        canJoin: !0,
        remoteJoinPlatform: null
    } : {
        canJoin: !1,
        remoteJoinPlatform: null
    }
}

function f(e, t, n, i) {
    return !(null == e || !(0, u.A)(e, n, i.id) || !(0, o.A)(e, p.jUm.SYNC) || !r.isPlatformEmbedded || (0, l.w)(t, e))
}