/** chunk id: 530804 params = (module,exports,require) **/
n.d(e, {
    $n: () => f,
    uy: () => T,
    vp: () => E
}), n(321073);
var i = n(64700),
    l = n(735438),
    r = n(311907),
    s = n(568598),
    a = n(313961),
    o = n(288737),
    u = n(961350),
    d = n(734057),
    c = n(696451),
    h = n(584569),
    A = n(383501),
    m = n(287809),
    p = n(977997),
    g = n(403362);

function f(t, e) {
    let n = (0, r.bG)([h.A, A.A], () => t === A.A.getChannelId() ? h.A.getDesyncedVoiceStates() : null),
        s = (0, r.yK)([a.A], () => null == t ? [] : [...a.A.getGuildRingingUsers(t)]),
        u = (0, r.yK)([m.default], () => s.map(t => m.default.getUser(t)).filter(g.Vq)),
        p = (0, r.bG)([d.A], () => d.A.getBasicChannel(t)),
        f = i.useMemo(() => u.map(t => ({
            voiceState: new o.A(t.id),
            user: t,
            member: p?.guild_id != null ? c.Ay.getMember(p?.guild_id, t.id) : null,
            nick: t.globalName,
            comparator: t.globalName,
            _isPlaceholder: !1
        })), [u, p?.guild_id]);
    return i.useMemo(() => (function(t, e, n) {
        if ((null == t || 0 === t.length) && 0 === n.length) return e;
        let i = [],
            r = new Set;
        for (let t of e) i.push(t), r.add(t.user.id);
        return t?.forEach(t => {
            i.splice((0, l.sortedIndexBy)(i, t, t => {
                let {
                    comparator: e
                } = t;
                return e
            }), 0, t)
        }), n.length > 0 && n.forEach(t => {
            r.has(t.user.id) || i.splice((0, l.sortedIndexBy)(i, t, t => {
                let {
                    comparator: e
                } = t;
                return e
            }), 0, t)
        }), i
    })(n, e, f), [n, e, f])
}

function E(t, e) {
    let n = (0, r.bG)([h.A, A.A], () => t === A.A.getChannelId() ? h.A.getDesyncedParticipants() : null);
    return i.useMemo(() => (function(t, e) {
        if (null == t || 0 === t.length) return e;
        let n = [...e];
        return t.forEach(t => {
            n.splice((0, l.sortedIndexBy)(n, t, t => (0, s.KU)(t)), 0, t)
        }), n
    })(n, e), [n, e])
}

function T(t, e) {
    let n = (0, r.bG)([u.default], () => u.default.getId() === e),
        l = (0, r.bG)([A.A], () => A.A.getChannelId()),
        s = i.useRef(null),
        [a, o] = i.useState(!1),
        [d, c] = i.useState(!1),
        h = (0, r.bG)([A.A, p.A], () => null != e && null != t && A.A.getChannelId() === t && null != p.A.isInChannel(t, e) && A.A.isUserConnected(e)),
        m = (0, r.bG)([A.A, p.A], () => null != e && null != t && A.A.getChannelId() === t && null != p.A.isInChannel(t, e) && !A.A.isUserConnected(e));
    return i.useEffect(() => {
        h && c(!0)
    }, [h]), i.useEffect(() => {
        l !== t && c(!1)
    }, [t, l]), i.useEffect(() => (m && null == s.current ? s.current = setTimeout(() => {
        s.current = null, o(!0)
    }, 250) : (clearTimeout(s.current), s.current = null, o(!1)), () => {
        clearTimeout(s.current), s.current = null
    }), [m]), !n && d && a
}