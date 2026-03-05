/** chunk id: 665691 params = (module,exports,require) **/
r.d(t, {
    DY: () => d,
    UF: () => o,
    bG: () => E
});
var n = r(311907),
    l = r(652896),
    u = r(961350),
    s = r(383501),
    i = r(707890),
    a = r(83942),
    c = r(259374);

function o(e) {
    let {
        userId: t,
        channelId: r
    } = e, l = (0, c.k)({
        channelId: r
    });
    return (0, n.bG)([i.A, u.default, s.A], () => null != t && l && s.A.isUserConnected(t) && u.default.getId() !== t && i.A.isUserVerified(t), [l, t])
}

function d(e) {
    let {
        streamKey: t,
        channelId: r
    } = e, s = (0, c.k)({
        channelId: r
    }), o = (0, a.w)(t);
    return (0, n.bG)([i.A, u.default], () => {
        if (!s || o || null == t) return !1;
        let e = u.default.getId(),
            {
                ownerId: r
            } = (0, l.Iy)(t);
        return r !== e && i.A.isStreamVerified(t)
    }, [o, s, t])
}

function E(e) {
    let {
        channelId: t
    } = e, r = (0, c.k)({
        channelId: t
    }), l = (0, a.c)();
    return (0, n.bG)([i.A], () => !!r && !l && i.A.isCallVerified(), [l, r])
}