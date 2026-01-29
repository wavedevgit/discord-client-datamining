/** Chunk was on 16674 **/
/** chunk id: 665691, original params: e,t,r (module,exports,require) **/
r.d(t, {
    DY: () => f,
    UF: () => o,
    bG: () => d
});
var n = r(311907),
    l = r(652896),
    u = r(961350),
    i = r(383501),
    s = r(707890),
    a = r(83942),
    c = r(259374);

function o(e) {
    let {
        userId: t,
        channelId: r
    } = e, l = (0, c.k)({
        channelId: r
    });
    return (0, n.bG)([s.A, u.default, i.A], () => null != t && l && i.A.isUserConnected(t) && u.default.getId() !== t && s.A.isUserVerified(t), [l, t])
}

function f(e) {
    let {
        streamKey: t,
        channelId: r
    } = e, i = (0, c.k)({
        channelId: r
    }), o = (0, a.w)(t);
    return (0, n.bG)([s.A, u.default], () => {
        if (!i || o || null == t) return !1;
        let e = u.default.getId(),
            {
                ownerId: r
            } = (0, l.Iy)(t);
        return r !== e && s.A.isStreamVerified(t)
    }, [o, i, t])
}

function d(e) {
    let {
        channelId: t
    } = e, r = (0, c.k)({
        channelId: t
    }), l = (0, a.c)();
    return (0, n.bG)([s.A], () => !!r && !l && s.A.isCallVerified(), [l, r])
}