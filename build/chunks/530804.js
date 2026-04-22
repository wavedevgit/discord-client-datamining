/** chunk id: 530804 params = (module,exports,require) **/
n.d(t, {
    $n: () => _,
    uy: () => E,
    vp: () => f
}), n(321073);
var i = n(64700),
    l = n(735438),
    s = n(311907),
    a = n(568598),
    r = n(313961),
    o = n(288737),
    c = n(961350),
    d = n(734057),
    u = n(696451),
    h = n(584569),
    m = n(383501),
    A = n(287809),
    g = n(977997),
    p = n(403362);

function _(e, t) {
    let n = (0, s.bG)([h.A, m.A], () => e === m.A.getChannelId() ? h.A.getDesyncedVoiceStates() : null),
        a = (0, s.yK)([r.A], () => null == e ? [] : [...r.A.getGuildRingingUsers(e)]),
        c = (0, s.yK)([A.default], () => a.map(e => A.default.getUser(e)).filter(p.Vq)),
        g = (0, s.bG)([d.A], () => d.A.getBasicChannel(e)),
        _ = i.useMemo(() => c.map(e => ({
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
            s = new Set;
        for (let e of t) i.push(e), s.add(e.user.id);
        return e?.forEach(e => {
            i.splice((0, l.sortedIndexBy)(i, e, e => {
                let {
                    comparator: t
                } = e;
                return t
            }), 0, e)
        }), n.length > 0 && n.forEach(e => {
            s.has(e.user.id) || i.splice((0, l.sortedIndexBy)(i, e, e => {
                let {
                    comparator: t
                } = e;
                return t
            }), 0, e)
        }), i
    })(n, t, _), [n, t, _])
}

function f(e, t) {
    let n = (0, s.bG)([h.A, m.A], () => e === m.A.getChannelId() ? h.A.getDesyncedParticipants() : null);
    return i.useMemo(() => (function(e, t) {
        if (null == e || 0 === e.length) return t;
        let n = [...t];
        return e.forEach(e => {
            n.splice((0, l.sortedIndexBy)(n, e, e => (0, a.KU)(e)), 0, e)
        }), n
    })(n, t), [n, t])
}

function E(e, t) {
    let n = (0, s.bG)([c.default], () => c.default.getId() === t),
        l = (0, s.bG)([m.A], () => m.A.getChannelId()),
        a = i.useRef(null),
        [r, o] = i.useState(!1),
        [d, u] = i.useState(!1),
        h = (0, s.bG)([m.A, g.A], () => null != t && null != e && m.A.getChannelId() === e && null != g.A.isInChannel(e, t) && m.A.isUserConnected(t)),
        A = (0, s.bG)([m.A, g.A], () => null != t && null != e && m.A.getChannelId() === e && null != g.A.isInChannel(e, t) && !m.A.isUserConnected(t));
    return i.useEffect(() => {
        h && u(!0)
    }, [h]), i.useEffect(() => {
        l !== e && u(!1)
    }, [e, l]), i.useEffect(() => (A && null == a.current ? a.current = setTimeout(() => {
        a.current = null, o(!0)
    }, 250) : (clearTimeout(a.current), a.current = null, o(!1)), () => {
        clearTimeout(a.current), a.current = null
    }), [A]), !n && d && r
}