/** chunk id: 530804 params = (module,exports,require) **/
i.d(e, {
    $n: () => _,
    uy: () => p,
    vp: () => m
}), i(321073);
var n = i(64700),
    r = i(735438),
    l = i(311907),
    s = i(568598),
    a = i(313961),
    o = i(288737),
    c = i(961350),
    d = i(734057),
    u = i(696451),
    h = i(584569),
    C = i(383501),
    g = i(287809),
    A = i(977997),
    E = i(403362);

function _(t, e) {
    let i = (0, l.bG)([h.A, C.A], () => t === C.A.getChannelId() ? h.A.getDesyncedVoiceStates() : null),
        s = (0, l.yK)([a.A], () => null == t ? [] : [...a.A.getGuildRingingUsers(t)]),
        c = (0, l.yK)([g.default], () => s.map(t => g.default.getUser(t)).filter(E.Vq)),
        A = (0, l.bG)([d.A], () => d.A.getBasicChannel(t)),
        _ = n.useMemo(() => c.map(t => ({
            voiceState: new o.A(t.id),
            user: t,
            member: A?.guild_id != null ? u.Ay.getMember(A?.guild_id, t.id) : null,
            nick: t.globalName,
            comparator: t.globalName,
            _isPlaceholder: !1
        })), [c, A?.guild_id]);
    return n.useMemo(() => (function(t, e, i) {
        if ((null == t || 0 === t.length) && 0 === i.length) return e;
        let n = [],
            l = new Set;
        for (let t of e) n.push(t), l.add(t.user.id);
        return t?.forEach(t => {
            n.splice((0, r.sortedIndexBy)(n, t, t => {
                let {
                    comparator: e
                } = t;
                return e
            }), 0, t)
        }), i.length > 0 && i.forEach(t => {
            l.has(t.user.id) || n.splice((0, r.sortedIndexBy)(n, t, t => {
                let {
                    comparator: e
                } = t;
                return e
            }), 0, t)
        }), n
    })(i, e, _), [i, e, _])
}

function m(t, e) {
    let i = (0, l.bG)([h.A, C.A], () => t === C.A.getChannelId() ? h.A.getDesyncedParticipants() : null);
    return n.useMemo(() => (function(t, e) {
        if (null == t || 0 === t.length) return e;
        let i = [...e];
        return t.forEach(t => {
            i.splice((0, r.sortedIndexBy)(i, t, t => (0, s.KU)(t)), 0, t)
        }), i
    })(i, e), [i, e])
}

function p(t, e) {
    let i = (0, l.bG)([c.default], () => c.default.getId() === e),
        r = (0, l.bG)([C.A], () => C.A.getChannelId()),
        s = n.useRef(null),
        [a, o] = n.useState(!1),
        [d, u] = n.useState(!1),
        h = (0, l.bG)([C.A, A.A], () => null != e && null != t && C.A.getChannelId() === t && null != A.A.isInChannel(t, e) && C.A.isUserConnected(e)),
        g = (0, l.bG)([C.A, A.A], () => null != e && null != t && C.A.getChannelId() === t && null != A.A.isInChannel(t, e) && !C.A.isUserConnected(e));
    return n.useEffect(() => {
        h && u(!0)
    }, [h]), n.useEffect(() => {
        r !== t && u(!1)
    }, [t, r]), n.useEffect(() => (g && null == s.current ? s.current = setTimeout(() => {
        s.current = null, o(!0)
    }, 250) : (clearTimeout(s.current), s.current = null, o(!1)), () => {
        clearTimeout(s.current), s.current = null
    }), [g]), !i && d && a
}