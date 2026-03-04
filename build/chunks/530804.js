/** chunk id: 530804, original params: e,t,n (module,exports,require) **/
n.d(t, {
    $n: () => g,
    uy: () => m,
    vp: () => p
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
    E = n(287809),
    A = n(977997),
    _ = n(403362);

function g(e, t) {
    let n = (0, l.bG)([h.A, C.A], () => e === C.A.getChannelId() ? h.A.getDesyncedVoiceStates() : null),
        a = (0, l.yK)([s.A], () => null == e ? [] : [...s.A.getGuildRingingUsers(e)]),
        c = (0, l.yK)([E.default], () => a.map(e => E.default.getUser(e)).filter(_.Vq)),
        A = (0, l.bG)([d.A], () => d.A.getBasicChannel(e)),
        g = i.useMemo(() => c.map(e => ({
            voiceState: new o.A(e.id),
            user: e,
            member: A?.guild_id != null ? u.Ay.getMember(A?.guild_id, e.id) : null,
            nick: e.globalName,
            comparator: e.globalName,
            _isPlaceholder: !1
        })), [c, A?.guild_id]);
    return i.useMemo(() => (function(e, t, n) {
        if ((null == e || 0 === e.length) && 0 === n.length) return t;
        let i = [],
            l = new Set;
        for (let e of t) i.push(e), l.add(e.user.id);
        return e?.forEach(e => {
            i.splice((0, r.sortedIndexBy)(i, e, e => {
                let {
                    comparator: t
                } = e;
                return t
            }), 0, e)
        }), n.length > 0 && n.forEach(e => {
            l.has(e.user.id) || i.splice((0, r.sortedIndexBy)(i, e, e => {
                let {
                    comparator: t
                } = e;
                return t
            }), 0, e)
        }), i
    })(n, t, g), [n, t, g])
}

function p(e, t) {
    let n = (0, l.bG)([h.A, C.A], () => e === C.A.getChannelId() ? h.A.getDesyncedParticipants() : null);
    return i.useMemo(() => (function(e, t) {
        if (null == e || 0 === e.length) return t;
        let n = [...t];
        return e.forEach(e => {
            n.splice((0, r.sortedIndexBy)(n, e, e => (0, a.KU)(e)), 0, e)
        }), n
    })(n, t), [n, t])
}

function m(e, t) {
    let n = (0, l.bG)([c.default], () => c.default.getId() === t),
        r = (0, l.bG)([C.A], () => C.A.getChannelId()),
        a = i.useRef(null),
        [s, o] = i.useState(!1),
        [d, u] = i.useState(!1),
        h = (0, l.bG)([C.A, A.A], () => null != t && null != e && C.A.getChannelId() === e && null != A.A.isInChannel(e, t) && C.A.isUserConnected(t)),
        E = (0, l.bG)([C.A, A.A], () => null != t && null != e && C.A.getChannelId() === e && null != A.A.isInChannel(e, t) && !C.A.isUserConnected(t));
    return i.useEffect(() => {
        h && u(!0)
    }, [h]), i.useEffect(() => {
        r !== e && u(!1)
    }, [e, r]), i.useEffect(() => (E && null == a.current ? a.current = setTimeout(() => {
        a.current = null, o(!0)
    }, 250) : (clearTimeout(a.current), a.current = null, o(!1)), () => {
        clearTimeout(a.current), a.current = null
    }), [E]), !n && d && s
}