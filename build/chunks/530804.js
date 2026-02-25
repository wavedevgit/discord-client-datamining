/** chunk id: 530804, original params: e,t,i (module,exports,require) **/
i.d(t, {
    $n: () => _,
    uy: () => m,
    vp: () => p
}), i(321073);
var n = i(64700),
    r = i(735438),
    l = i(311907),
    a = i(568598),
    s = i(313961),
    o = i(288737),
    c = i(961350),
    d = i(734057),
    u = i(696451),
    h = i(584569),
    C = i(383501),
    E = i(287809),
    g = i(977997),
    A = i(403362);

function _(e, t) {
    let i = (0, l.bG)([h.A, C.A], () => e === C.A.getChannelId() ? h.A.getDesyncedVoiceStates() : null),
        a = (0, l.yK)([s.A], () => null == e ? [] : [...s.A.getGuildRingingUsers(e)]),
        c = (0, l.yK)([E.default], () => a.map(e => E.default.getUser(e)).filter(A.Vq)),
        g = (0, l.bG)([d.A], () => d.A.getBasicChannel(e)),
        _ = n.useMemo(() => c.map(e => ({
            voiceState: new o.A(e.id),
            user: e,
            member: g?.guild_id != null ? u.Ay.getMember(g?.guild_id, e.id) : null,
            nick: e.globalName,
            comparator: e.globalName,
            _isPlaceholder: !1
        })), [c, g?.guild_id]);
    return n.useMemo(() => (function(e, t, i) {
        if ((null == e || 0 === e.length) && 0 === i.length) return t;
        let n = [],
            l = new Set;
        for (let e of t) n.push(e), l.add(e.user.id);
        return e?.forEach(e => {
            n.splice((0, r.sortedIndexBy)(n, e, e => {
                let {
                    comparator: t
                } = e;
                return t
            }), 0, e)
        }), i.length > 0 && i.forEach(e => {
            l.has(e.user.id) || n.splice((0, r.sortedIndexBy)(n, e, e => {
                let {
                    comparator: t
                } = e;
                return t
            }), 0, e)
        }), n
    })(i, t, _), [i, t, _])
}

function p(e, t) {
    let i = (0, l.bG)([h.A, C.A], () => e === C.A.getChannelId() ? h.A.getDesyncedParticipants() : null);
    return n.useMemo(() => (function(e, t) {
        if (null == e || 0 === e.length) return t;
        let i = [...t];
        return e.forEach(e => {
            i.splice((0, r.sortedIndexBy)(i, e, e => (0, a.KU)(e)), 0, e)
        }), i
    })(i, t), [i, t])
}

function m(e, t) {
    let i = (0, l.bG)([c.default], () => c.default.getId() === t),
        r = (0, l.bG)([C.A], () => C.A.getChannelId()),
        a = n.useRef(null),
        [s, o] = n.useState(!1),
        [d, u] = n.useState(!1),
        h = (0, l.bG)([C.A, g.A], () => null != t && null != e && C.A.getChannelId() === e && null != g.A.isInChannel(e, t) && C.A.isUserConnected(t)),
        E = (0, l.bG)([C.A, g.A], () => null != t && null != e && C.A.getChannelId() === e && null != g.A.isInChannel(e, t) && !C.A.isUserConnected(t));
    return n.useEffect(() => {
        h && u(!0)
    }, [h]), n.useEffect(() => {
        r !== e && u(!1)
    }, [e, r]), n.useEffect(() => (E && null == a.current ? a.current = setTimeout(() => {
        a.current = null, o(!0)
    }, 250) : (clearTimeout(a.current), a.current = null, o(!1)), () => {
        clearTimeout(a.current), a.current = null
    }), [E]), !i && d && s
}