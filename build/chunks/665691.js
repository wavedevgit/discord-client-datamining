/** chunk id: 665691 params = (module,exports,require) **/
n.d(t, {
    DY: () => u,
    UF: () => d,
    bG: () => p
});
var i = n(311907),
    a = n(652896),
    l = n(961350),
    s = n(383501),
    r = n(707890),
    c = n(83942),
    o = n(259374);

function d(e) {
    let {
        userId: t,
        channelId: n
    } = e, a = (0, o.k)({
        channelId: n
    });
    return (0, i.bG)([r.A, l.default, s.A], () => null != t && a && s.A.isUserConnected(t) && l.default.getId() !== t && r.A.isUserVerified(t), [a, t])
}

function u(e) {
    let {
        streamKey: t,
        channelId: n
    } = e, s = (0, o.k)({
        channelId: n
    }), d = (0, c.w)(t);
    return (0, i.bG)([r.A, l.default], () => {
        if (!s || d || null == t) return !1;
        let e = l.default.getId(),
            {
                ownerId: n
            } = (0, a.Iy)(t);
        return n !== e && r.A.isStreamVerified(t)
    }, [d, s, t])
}

function p(e) {
    let {
        channelId: t
    } = e, n = (0, o.k)({
        channelId: t
    }), a = (0, c.c)();
    return (0, i.bG)([r.A], () => !!n && !a && r.A.isCallVerified(), [a, n])
}