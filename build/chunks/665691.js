/** chunk id: 665691 params = (module,exports,require) **/
i.d(t, {
    DY: () => u,
    UF: () => d,
    bG: () => p
});
var n = i(311907),
    a = i(652896),
    l = i(961350),
    s = i(383501),
    r = i(707890),
    c = i(83942),
    o = i(259374);

function d(e) {
    let {
        userId: t,
        channelId: i
    } = e, a = (0, o.k)({
        channelId: i
    });
    return (0, n.bG)([r.A, l.default, s.A], () => null != t && a && s.A.isUserConnected(t) && l.default.getId() !== t && r.A.isUserVerified(t), [a, t])
}

function u(e) {
    let {
        streamKey: t,
        channelId: i
    } = e, s = (0, o.k)({
        channelId: i
    }), d = (0, c.w)(t);
    return (0, n.bG)([r.A, l.default], () => {
        if (!s || d || null == t) return !1;
        let e = l.default.getId(),
            {
                ownerId: i
            } = (0, a.Iy)(t);
        return i !== e && r.A.isStreamVerified(t)
    }, [d, s, t])
}

function p(e) {
    let {
        channelId: t
    } = e, i = (0, o.k)({
        channelId: t
    }), a = (0, c.c)();
    return (0, n.bG)([r.A], () => !!i && !a && r.A.isCallVerified(), [a, i])
}