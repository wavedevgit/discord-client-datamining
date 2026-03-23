/** chunk id: 530804 params = (module,exports,require) **/
n.d(e, {
    $n: () => E,
    uy: () => I,
    vp: () => T
}), n(321073);
var i = n(64700),
    r = n(735438),
    l = n(311907),
    s = n(568598),
    a = n(313961),
    o = n(288737),
    c = n(961350),
    d = n(734057),
    u = n(696451),
    h = n(584569),
    A = n(383501),
    _ = n(287809),
    C = n(977997),
    g = n(403362);

function E(t, e) {
    let n = (0, l.bG)([h.A, A.A], () => t === A.A.getChannelId() ? h.A.getDesyncedVoiceStates() : null),
        s = (0, l.yK)([a.A], () => null == t ? [] : [...a.A.getGuildRingingUsers(t)]),
        c = (0, l.yK)([_.default], () => s.map(t => _.default.getUser(t)).filter(g.Vq)),
        C = (0, l.bG)([d.A], () => d.A.getBasicChannel(t)),
        E = i.useMemo(() => c.map(t => ({
            voiceState: new o.A(t.id),
            user: t,
            member: C?.guild_id != null ? u.Ay.getMember(C?.guild_id, t.id) : null,
            nick: t.globalName,
            comparator: t.globalName,
            _isPlaceholder: !1
        })), [c, C?.guild_id]);
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
    })(n, e, E), [n, e, E])
}

function T(t, e) {
    let n = (0, l.bG)([h.A, A.A], () => t === A.A.getChannelId() ? h.A.getDesyncedParticipants() : null);
    return i.useMemo(() => (function(t, e) {
        if (null == t || 0 === t.length) return e;
        let n = [...e];
        return t.forEach(t => {
            n.splice((0, r.sortedIndexBy)(n, t, t => (0, s.KU)(t)), 0, t)
        }), n
    })(n, e), [n, e])
}

function I(t, e) {
    let n = (0, l.bG)([c.default], () => c.default.getId() === e),
        r = (0, l.bG)([A.A], () => A.A.getChannelId()),
        s = i.useRef(null),
        [a, o] = i.useState(!1),
        [d, u] = i.useState(!1),
        h = (0, l.bG)([A.A, C.A], () => null != e && null != t && A.A.getChannelId() === t && null != C.A.isInChannel(t, e) && A.A.isUserConnected(e)),
        _ = (0, l.bG)([A.A, C.A], () => null != e && null != t && A.A.getChannelId() === t && null != C.A.isInChannel(t, e) && !A.A.isUserConnected(e));
    return i.useEffect(() => {
        h && u(!0)
    }, [h]), i.useEffect(() => {
        r !== t && u(!1)
    }, [t, r]), i.useEffect(() => (_ && null == s.current ? s.current = setTimeout(() => {
        s.current = null, o(!0)
    }, 250) : (clearTimeout(s.current), s.current = null, o(!1)), () => {
        clearTimeout(s.current), s.current = null
    }), [_]), !n && d && a
}