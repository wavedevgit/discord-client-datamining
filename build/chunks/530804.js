/** chunk id: 530804 params = (module,exports,require) **/
i.d(e, {
    $n: () => f,
    uy: () => S,
    vp: () => T
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
    m = i(584569),
    A = i(383501),
    h = i(287809),
    p = i(977997),
    g = i(403362);

function f(t, e) {
    let i = (0, r.bG)([m.A, A.A], () => t === A.A.getChannelId() ? m.A.getDesyncedVoiceStates() : null),
        s = (0, r.yK)([a.A], () => null == t ? [] : [...a.A.getGuildRingingUsers(t)]),
        d = (0, r.yK)([h.default], () => s.map(t => h.default.getUser(t)).filter(g.Vq)),
        p = (0, r.bG)([u.A], () => u.A.getBasicChannel(t)),
        f = n.useMemo(() => d.map(t => ({
            voiceState: new o.A(t.id),
            user: t,
            member: p?.guild_id != null ? c.Ay.getMember(p?.guild_id, t.id) : null,
            nick: t.globalName,
            comparator: t.globalName,
            _isPlaceholder: !1
        })), [d, p?.guild_id]);
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

function T(t, e) {
    let i = (0, r.bG)([m.A, A.A], () => t === A.A.getChannelId() ? m.A.getDesyncedParticipants() : null);
    return n.useMemo(() => (function(t, e) {
        if (null == t || 0 === t.length) return e;
        let i = [...e];
        return t.forEach(t => {
            i.splice((0, l.sortedIndexBy)(i, t, t => (0, s.KU)(t)), 0, t)
        }), i
    })(i, e), [i, e])
}

function S(t, e) {
    let i = (0, r.bG)([d.default], () => d.default.getId() === e),
        l = (0, r.bG)([A.A], () => A.A.getChannelId()),
        s = n.useRef(null),
        [a, o] = n.useState(!1),
        [u, c] = n.useState(!1),
        m = (0, r.bG)([A.A, p.A], () => null != e && null != t && A.A.getChannelId() === t && null != p.A.isInChannel(t, e) && A.A.isUserConnected(e)),
        h = (0, r.bG)([A.A, p.A], () => null != e && null != t && A.A.getChannelId() === t && null != p.A.isInChannel(t, e) && !A.A.isUserConnected(e));
    return n.useEffect(() => {
        m && c(!0)
    }, [m]), n.useEffect(() => {
        l !== t && c(!1)
    }, [t, l]), n.useEffect(() => (h && null == s.current ? s.current = setTimeout(() => {
        s.current = null, o(!0)
    }, 250) : (clearTimeout(s.current), s.current = null, o(!1)), () => {
        clearTimeout(s.current), s.current = null
    }), [h]), !i && u && a
}