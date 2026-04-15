/** chunk id: 665691 params = (module,exports,require) **/
n.d(t, {
    DY: () => u,
    UF: () => d,
    bG: () => p
});
var a = n(311907),
    i = n(652896),
    l = n(961350),
    s = n(383501),
    r = n(707890),
    c = n(83942),
    o = n(259374);

function d(e) {
    let {
        userId: t,
        channelId: n
    } = e, i = (0, o.k)({
        channelId: n
    });
    return (0, a.bG)([r.A, l.default, s.A], () => null != t && i && s.A.isUserConnected(t) && l.default.getId() !== t && r.A.isUserVerified(t), [i, t])
}

function u(e) {
    let {
        streamKey: t,
        channelId: n
    } = e, s = (0, o.k)({
        channelId: n
    }), d = (0, c.w)(t);
    return (0, a.bG)([r.A, l.default], () => {
        if (!s || d || null == t) return !1;
        let e = l.default.getId(),
            {
                ownerId: n
            } = (0, i.Iy)(t);
        return n !== e && r.A.isStreamVerified(t)
    }, [d, s, t])
}

function p(e) {
    let {
        channelId: t
    } = e, n = (0, o.k)({
        channelId: t
    }), i = (0, c.c)();
    return (0, a.bG)([r.A], () => !!n && !i && r.A.isCallVerified(), [i, n])
}