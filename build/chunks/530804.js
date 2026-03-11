/** chunk id: 530804 params = (module,exports,require) **/
n.d(e, {
    $n: () => _,
    uy: () => p,
    vp: () => m
}), n(321073);
var i = n(64700),
    r = n(735438),
    l = n(311907),
    a = n(568598),
    s = n(313961),
    o = n(288737),
    c = n(961350),
    d = n(734057),
    u = n(696451),
    h = n(584569),
    C = n(383501),
    g = n(287809),
    A = n(977997),
    E = n(403362);

function _(t, e) {
    let n = (0, l.bG)([h.A, C.A], () => t === C.A.getChannelId() ? h.A.getDesyncedVoiceStates() : null),
        a = (0, l.yK)([s.A], () => null == t ? [] : [...s.A.getGuildRingingUsers(t)]),
        c = (0, l.yK)([g.default], () => a.map(t => g.default.getUser(t)).filter(E.Vq)),
        A = (0, l.bG)([d.A], () => d.A.getBasicChannel(t)),
        _ = i.useMemo(() => c.map(t => ({
            voiceState: new o.A(t.id),
            user: t,
            member: A?.guild_id != null ? u.Ay.getMember(A?.guild_id, t.id) : null,
            nick: t.globalName,
            comparator: t.globalName,
            _isPlaceholder: !1
        })), [c, A?.guild_id]);
    return i.useMemo(() => (function(t, e, n) {
        if ((null == t || 0 === t.length) && 0 === n.length) return e;
        let i = [],
            l = new Set;
        for (let t of e) i.push(t), l.add(t.user.id);
        return t?.forEach(t => {
            i.splice((0, r.sortedIndexBy)(i, t, t => {
                let {
                    comparator: e
                } = t;
                return e
            }), 0, t)
        }), n.length > 0 && n.forEach(t => {
            l.has(t.user.id) || i.splice((0, r.sortedIndexBy)(i, t, t => {
                let {
                    comparator: e
                } = t;
                return e
            }), 0, t)
        }), i
    })(n, e, _), [n, e, _])
}

function m(t, e) {
    let n = (0, l.bG)([h.A, C.A], () => t === C.A.getChannelId() ? h.A.getDesyncedParticipants() : null);
    return i.useMemo(() => (function(t, e) {
        if (null == t || 0 === t.length) return e;
        let n = [...e];
        return t.forEach(t => {
            n.splice((0, r.sortedIndexBy)(n, t, t => (0, a.KU)(t)), 0, t)
        }), n
    })(n, e), [n, e])
}

function p(t, e) {
    let n = (0, l.bG)([c.default], () => c.default.getId() === e),
        r = (0, l.bG)([C.A], () => C.A.getChannelId()),
        a = i.useRef(null),
        [s, o] = i.useState(!1),
        [d, u] = i.useState(!1),
        h = (0, l.bG)([C.A, A.A], () => null != e && null != t && C.A.getChannelId() === t && null != A.A.isInChannel(t, e) && C.A.isUserConnected(e)),
        g = (0, l.bG)([C.A, A.A], () => null != e && null != t && C.A.getChannelId() === t && null != A.A.isInChannel(t, e) && !C.A.isUserConnected(e));
    return i.useEffect(() => {
        h && u(!0)
    }, [h]), i.useEffect(() => {
        r !== t && u(!1)
    }, [t, r]), i.useEffect(() => (g && null == a.current ? a.current = setTimeout(() => {
        a.current = null, o(!0)
    }, 250) : (clearTimeout(a.current), a.current = null, o(!1)), () => {
        clearTimeout(a.current), a.current = null
    }), [g]), !n && d && s
}