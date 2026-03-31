/** chunk id: 530804 params = (module,exports,require) **/
i.d(t, {
    $n: () => g,
    uy: () => v,
    vp: () => f
}), i(321073);
var n = i(64700),
    a = i(735438),
    l = i(311907),
    s = i(568598),
    r = i(313961),
    o = i(288737),
    c = i(961350),
    d = i(734057),
    u = i(696451),
    m = i(584569),
    _ = i(383501),
    p = i(287809),
    h = i(977997),
    A = i(403362);

function g(e, t) {
    let i = (0, l.bG)([m.A, _.A], () => e === _.A.getChannelId() ? m.A.getDesyncedVoiceStates() : null),
        s = (0, l.yK)([r.A], () => null == e ? [] : [...r.A.getGuildRingingUsers(e)]),
        c = (0, l.yK)([p.default], () => s.map(e => p.default.getUser(e)).filter(A.Vq)),
        h = (0, l.bG)([d.A], () => d.A.getBasicChannel(e)),
        g = n.useMemo(() => c.map(e => ({
            voiceState: new o.A(e.id),
            user: e,
            member: h?.guild_id != null ? u.Ay.getMember(h?.guild_id, e.id) : null,
            nick: e.globalName,
            comparator: e.globalName,
            _isPlaceholder: !1
        })), [c, h?.guild_id]);
    return n.useMemo(() => (function(e, t, i) {
        if ((null == e || 0 === e.length) && 0 === i.length) return t;
        let n = [],
            l = new Set;
        for (let e of t) n.push(e), l.add(e.user.id);
        return e?.forEach(e => {
            n.splice((0, a.sortedIndexBy)(n, e, e => {
                let {
                    comparator: t
                } = e;
                return t
            }), 0, e)
        }), i.length > 0 && i.forEach(e => {
            l.has(e.user.id) || n.splice((0, a.sortedIndexBy)(n, e, e => {
                let {
                    comparator: t
                } = e;
                return t
            }), 0, e)
        }), n
    })(i, t, g), [i, t, g])
}

function f(e, t) {
    let i = (0, l.bG)([m.A, _.A], () => e === _.A.getChannelId() ? m.A.getDesyncedParticipants() : null);
    return n.useMemo(() => (function(e, t) {
        if (null == e || 0 === e.length) return t;
        let i = [...t];
        return e.forEach(e => {
            i.splice((0, a.sortedIndexBy)(i, e, e => (0, s.KU)(e)), 0, e)
        }), i
    })(i, t), [i, t])
}

function v(e, t) {
    let i = (0, l.bG)([c.default], () => c.default.getId() === t),
        a = (0, l.bG)([_.A], () => _.A.getChannelId()),
        s = n.useRef(null),
        [r, o] = n.useState(!1),
        [d, u] = n.useState(!1),
        m = (0, l.bG)([_.A, h.A], () => null != t && null != e && _.A.getChannelId() === e && null != h.A.isInChannel(e, t) && _.A.isUserConnected(t)),
        p = (0, l.bG)([_.A, h.A], () => null != t && null != e && _.A.getChannelId() === e && null != h.A.isInChannel(e, t) && !_.A.isUserConnected(t));
    return n.useEffect(() => {
        m && u(!0)
    }, [m]), n.useEffect(() => {
        a !== e && u(!1)
    }, [e, a]), n.useEffect(() => (p && null == s.current ? s.current = setTimeout(() => {
        s.current = null, o(!0)
    }, 250) : (clearTimeout(s.current), s.current = null, o(!1)), () => {
        clearTimeout(s.current), s.current = null
    }), [p]), !i && d && r
}