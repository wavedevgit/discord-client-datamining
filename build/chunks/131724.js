/** chunk id: 131724 params = (module,exports,require) **/
n.d(t, {
    D: () => m,
    M: () => h
});
var i = n(723702),
    r = n(850670),
    l = n(206589),
    a = n(125017),
    s = n(625248),
    o = n(833349),
    d = n(287613),
    c = n(659051),
    u = n(702631),
    _ = n(652215);

function m(e) {
    let {
        presenceActivity: t,
        currentUserPresenceActivity: n,
        currentUserId: o,
        message: m,
        application: h,
        isEmbeddedApplication: p,
        isFrameApplication: g,
        isGameLaunchable: A
    } = e;
    if (m.author.id === o || !(0, c.A)(t, m, h.id)) return {
        canJoin: !1,
        remoteJoinPlatform: null
    };
    let x = (0, a._)(t);
    if (!(0, d.A)(x) || (0, u.U)(x) || (0, l.w)(n, t) || (0, r.v)(m)) return {
        canJoin: !1,
        remoteJoinPlatform: null
    };
    if (p && g) return {
        canJoin: !0,
        remoteJoinPlatform: null
    };
    if (m.activity?.type === _.xL.JOIN && null != t) {
        let e = (0, s.l)(t);
        if (null != e) return {
            canJoin: !0,
            remoteJoinPlatform: e
        }
    }
    return (0, i.platformSupportsActivityJoin)() && A ? {
        canJoin: !0,
        remoteJoinPlatform: null
    } : {
        canJoin: !1,
        remoteJoinPlatform: null
    }
}

function h(e, t, n, r) {
    return !(null == e || !(0, c.A)(e, n, r.id) || !(0, o.A)(e, _.jUm.SYNC) || !i.isPlatformEmbedded || (0, l.w)(t, e))
}