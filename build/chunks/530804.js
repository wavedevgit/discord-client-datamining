/** chunk id: 530804 params = (module,exports,require) **/
i.d(t, {
    $n: () => f,
    uy: () => m,
    vp: () => p
}), i(321073);
var n = i(64700),
    l = i(735438),
    s = i(311907),
    a = i(568598),
    r = i(313961),
    u = i(288737),
    d = i(961350),
    o = i(734057),
    A = i(696451),
    c = i(584569),
    _ = i(383501),
    E = i(287809),
    I = i(977997),
    h = i(403362);

function f(e, t) {
    let i = (0, s.bG)([c.A, _.A], () => e === _.A.getChannelId() ? c.A.getDesyncedVoiceStates() : null),
        a = (0, s.yK)([r.A], () => null == e ? [] : [...r.A.getGuildRingingUsers(e)]),
        d = (0, s.yK)([E.default], () => a.map(e => E.default.getUser(e)).filter(h.Vq)),
        I = (0, s.bG)([o.A], () => o.A.getBasicChannel(e)),
        f = n.useMemo(() => d.map(e => ({
            voiceState: new u.A(e.id),
            user: e,
            member: I?.guild_id != null ? A.Ay.getMember(I?.guild_id, e.id) : null,
            nick: e.globalName,
            comparator: e.globalName,
            _isPlaceholder: !1
        })), [d, I?.guild_id]);
    return n.useMemo(() => (function(e, t, i) {
        if ((null == e || 0 === e.length) && 0 === i.length) return t;
        let n = [],
            s = new Set;
        for (let e of t) n.push(e), s.add(e.user.id);
        return e?.forEach(e => {
            n.splice((0, l.sortedIndexBy)(n, e, e => {
                let {
                    comparator: t
                } = e;
                return t
            }), 0, e)
        }), i.length > 0 && i.forEach(e => {
            s.has(e.user.id) || n.splice((0, l.sortedIndexBy)(n, e, e => {
                let {
                    comparator: t
                } = e;
                return t
            }), 0, e)
        }), n
    })(i, t, f), [i, t, f])
}

function p(e, t) {
    let i = (0, s.bG)([c.A, _.A], () => e === _.A.getChannelId() ? c.A.getDesyncedParticipants() : null);
    return n.useMemo(() => (function(e, t) {
        if (null == e || 0 === e.length) return t;
        let i = [...t];
        return e.forEach(e => {
            i.splice((0, l.sortedIndexBy)(i, e, e => (0, a.KU)(e)), 0, e)
        }), i
    })(i, t), [i, t])
}

function m(e, t) {
    let i = (0, s.bG)([d.default], () => d.default.getId() === t),
        l = (0, s.bG)([_.A], () => _.A.getChannelId()),
        a = n.useRef(null),
        [r, u] = n.useState(!1),
        [o, A] = n.useState(!1),
        c = (0, s.bG)([_.A, I.A], () => null != t && null != e && _.A.getChannelId() === e && null != I.A.isInChannel(e, t) && _.A.isUserConnected(t)),
        E = (0, s.bG)([_.A, I.A], () => null != t && null != e && _.A.getChannelId() === e && null != I.A.isInChannel(e, t) && !_.A.isUserConnected(t));
    return n.useEffect(() => {
        c && A(!0)
    }, [c]), n.useEffect(() => {
        l !== e && A(!1)
    }, [e, l]), n.useEffect(() => (E && null == a.current ? a.current = setTimeout(() => {
        a.current = null, u(!0)
    }, 250) : (clearTimeout(a.current), a.current = null, u(!1)), () => {
        clearTimeout(a.current), a.current = null
    }), [E]), !i && o && r
}