/** chunk id: 530804 params = (module,exports,require) **/
n.d(t, {
    $n: () => m,
    uy: () => p,
    vp: () => E
}), n(321073);
var i = n(64700),
    a = n(735438),
    r = n(311907),
    l = n(568598),
    s = n(313961),
    o = n(288737),
    c = n(961350),
    d = n(734057),
    u = n(696451),
    _ = n(584569),
    h = n(383501),
    C = n(287809),
    g = n(977997),
    A = n(403362);

function m(e, t) {
    let n = (0, r.bG)([_.A, h.A], () => e === h.A.getChannelId() ? _.A.getDesyncedVoiceStates() : null),
        l = (0, r.yK)([s.A], () => null == e ? [] : [...s.A.getGuildRingingUsers(e)]),
        c = (0, r.yK)([C.default], () => l.map(e => C.default.getUser(e)).filter(A.Vq)),
        g = (0, r.bG)([d.A], () => d.A.getBasicChannel(e)),
        m = i.useMemo(() => c.map(e => ({
            voiceState: new o.A(e.id),
            user: e,
            member: g?.guild_id != null ? u.Ay.getMember(g?.guild_id, e.id) : null,
            nick: e.globalName,
            comparator: e.globalName,
            _isPlaceholder: !1
        })), [c, g?.guild_id]);
    return i.useMemo(() => (function(e, t, n) {
        if ((null == e || 0 === e.length) && 0 === n.length) return t;
        let i = [],
            r = new Set;
        for (let e of t) i.push(e), r.add(e.user.id);
        return e?.forEach(e => {
            i.splice((0, a.sortedIndexBy)(i, e, e => {
                let {
                    comparator: t
                } = e;
                return t
            }), 0, e)
        }), n.length > 0 && n.forEach(e => {
            r.has(e.user.id) || i.splice((0, a.sortedIndexBy)(i, e, e => {
                let {
                    comparator: t
                } = e;
                return t
            }), 0, e)
        }), i
    })(n, t, m), [n, t, m])
}

function E(e, t) {
    let n = (0, r.bG)([_.A, h.A], () => e === h.A.getChannelId() ? _.A.getDesyncedParticipants() : null);
    return i.useMemo(() => (function(e, t) {
        if (null == e || 0 === e.length) return t;
        let n = [...t];
        return e.forEach(e => {
            n.splice((0, a.sortedIndexBy)(n, e, e => (0, l.KU)(e)), 0, e)
        }), n
    })(n, t), [n, t])
}

function p(e, t) {
    let n = (0, r.bG)([c.default], () => c.default.getId() === t),
        a = (0, r.bG)([h.A], () => h.A.getChannelId()),
        l = i.useRef(null),
        [s, o] = i.useState(!1),
        [d, u] = i.useState(!1),
        _ = (0, r.bG)([h.A, g.A], () => null != t && null != e && h.A.getChannelId() === e && null != g.A.isInChannel(e, t) && h.A.isUserConnected(t)),
        C = (0, r.bG)([h.A, g.A], () => null != t && null != e && h.A.getChannelId() === e && null != g.A.isInChannel(e, t) && !h.A.isUserConnected(t));
    return i.useEffect(() => {
        _ && u(!0)
    }, [_]), i.useEffect(() => {
        a !== e && u(!1)
    }, [e, a]), i.useEffect(() => (C && null == l.current ? l.current = setTimeout(() => {
        l.current = null, o(!0)
    }, 250) : (clearTimeout(l.current), l.current = null, o(!1)), () => {
        clearTimeout(l.current), l.current = null
    }), [C]), !n && d && s
}