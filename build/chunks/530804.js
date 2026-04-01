/** chunk id: 530804 params = (module,exports,require) **/
i.d(e, {
    $n: () => f,
    uy: () => T,
    vp: () => S
}), i(321073);
var n = i(64700),
    l = i(735438),
    r = i(311907),
    s = i(568598),
    a = i(313961),
    o = i(288737),
    d = i(961350),
    u = i(734057),
    c = i(696451),
    p = i(584569),
    m = i(383501),
    A = i(287809),
    h = i(977997),
    g = i(403362);

function f(t, e) {
    let i = (0, r.bG)([p.A, m.A], () => t === m.A.getChannelId() ? p.A.getDesyncedVoiceStates() : null),
        s = (0, r.yK)([a.A], () => null == t ? [] : [...a.A.getGuildRingingUsers(t)]),
        d = (0, r.yK)([A.default], () => s.map(t => A.default.getUser(t)).filter(g.Vq)),
        h = (0, r.bG)([u.A], () => u.A.getBasicChannel(t)),
        f = n.useMemo(() => d.map(t => ({
            voiceState: new o.A(t.id),
            user: t,
            member: h?.guild_id != null ? c.Ay.getMember(h?.guild_id, t.id) : null,
            nick: t.globalName,
            comparator: t.globalName,
            _isPlaceholder: !1
        })), [d, h?.guild_id]);
    return n.useMemo(() => (function(t, e, i) {
        if ((null == t || 0 === t.length) && 0 === i.length) return e;
        let n = [],
            r = new Set;
        for (let t of e) n.push(t), r.add(t.user.id);
        return t?.forEach(t => {
            n.splice((0, l.sortedIndexBy)(n, t, t => {
                let {
                    comparator: e
                } = t;
                return e
            }), 0, t)
        }), i.length > 0 && i.forEach(t => {
            r.has(t.user.id) || n.splice((0, l.sortedIndexBy)(n, t, t => {
                let {
                    comparator: e
                } = t;
                return e
            }), 0, t)
        }), n
    })(i, e, f), [i, e, f])
}

function S(t, e) {
    let i = (0, r.bG)([p.A, m.A], () => t === m.A.getChannelId() ? p.A.getDesyncedParticipants() : null);
    return n.useMemo(() => (function(t, e) {
        if (null == t || 0 === t.length) return e;
        let i = [...e];
        return t.forEach(t => {
            i.splice((0, l.sortedIndexBy)(i, t, t => (0, s.KU)(t)), 0, t)
        }), i
    })(i, e), [i, e])
}

function T(t, e) {
    let i = (0, r.bG)([d.default], () => d.default.getId() === e),
        l = (0, r.bG)([m.A], () => m.A.getChannelId()),
        s = n.useRef(null),
        [a, o] = n.useState(!1),
        [u, c] = n.useState(!1),
        p = (0, r.bG)([m.A, h.A], () => null != e && null != t && m.A.getChannelId() === t && null != h.A.isInChannel(t, e) && m.A.isUserConnected(e)),
        A = (0, r.bG)([m.A, h.A], () => null != e && null != t && m.A.getChannelId() === t && null != h.A.isInChannel(t, e) && !m.A.isUserConnected(e));
    return n.useEffect(() => {
        p && c(!0)
    }, [p]), n.useEffect(() => {
        l !== t && c(!1)
    }, [t, l]), n.useEffect(() => (A && null == s.current ? s.current = setTimeout(() => {
        s.current = null, o(!0)
    }, 250) : (clearTimeout(s.current), s.current = null, o(!1)), () => {
        clearTimeout(s.current), s.current = null
    }), [A]), !i && u && a
}