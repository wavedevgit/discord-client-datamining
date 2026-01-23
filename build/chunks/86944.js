/** Chunk was on 97492 **/
/** chunk id: 86944, original params: e,t,n (module,exports,require) **/
n.d(t, {
    K: () => f
}), n(733351), n(591487), n(727858), n(747238);
var r = n(64700),
    l = n(311907),
    i = n(39255),
    s = n(696451),
    a = n(317525),
    o = n(695184),
    c = n(257120),
    u = n(495273),
    d = n(737045);

function p(e) {
    let t = e.trim();
    return "@" === t[0] ? t.slice(1) : t
}

function h(e, t) {
    let n = p(e);
    return RegExp("".concat(c.A.escape(n)), "i").test(t)
}

function f(e, t, n, c) {
    let f = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null != t && t.isGuildStageVoice(),
        g = (0, l.bG)([a.A], () => null != e ? a.A.getSortedRoles(e.id) : []),
        m = (0, l.yK)([s.Ay], () => null != e ? s.Ay.getMemberIds(e.id) : []),
        b = r.useMemo(() => {
            if (null == e || "@" === c[0]) return [];
            if (f) return u.M2(e, g, null != t ? t : null, n, e => h(c, e));
            let r = u.rT(e, g, null != t ? t : null, n, e => h(c, e));
            return 0 === r.length && "" === c.trim() && 1 === g.length && (r = u.Vl()), r
        }, [g, c, e, t, n, f]),
        A = r.useMemo(() => null == e ? [] : u.Lq(m, null != t ? t : null, e, n, e => h(c, e)), [m, c, e, t, n]);
    return r.useEffect(() => {
        null != e && o.A.requestMembers(e.id, p(c), d.$N)
    }, [c, e]), {
        roles: b,
        members: A,
        getRichTag: r.useCallback(e => {
            let t = null;
            return e.rowType === d.T6.ROLE || e.rowType === d.T6.ADMINISTRATOR ? t = {
                type: i._.ROLE,
                label: e.name,
                color: e.colorString
            } : (e.rowType === d.T6.MEMBER || e.rowType === d.T6.OWNER) && (t = {
                type: i._.MEMBER,
                label: e.name,
                avatar: e.avatarURL
            }), t
        }, [])
    }
}