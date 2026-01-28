/** Chunk was on 78528 **/
/** chunk id: 665691, original params: e,t,n (module,exports,require) **/
n.d(t, {
    DY: () => d,
    UF: () => u,
    bG: () => p
});
var r = n(311907),
    l = n(652896),
    i = n(961350),
    s = n(383501),
    a = n(707890),
    o = n(83942),
    c = n(259374);

function u(e) {
    let {
        userId: t,
        channelId: n
    } = e, l = (0, c.k)({
        channelId: n
    });
    return (0, r.bG)([a.A, i.default, s.A], () => null != t && l && s.A.isUserConnected(t) && i.default.getId() !== t && a.A.isUserVerified(t), [l, t])
}

function d(e) {
    let {
        streamKey: t,
        channelId: n
    } = e, s = (0, c.k)({
        channelId: n
    }), u = (0, o.w)(t);
    return (0, r.bG)([a.A, i.default], () => {
        if (!s || u || null == t) return !1;
        let e = i.default.getId(),
            {
                ownerId: n
            } = (0, l.Iy)(t);
        return n !== e && a.A.isStreamVerified(t)
    }, [u, s, t])
}

function p(e) {
    let {
        channelId: t
    } = e, n = (0, c.k)({
        channelId: t
    }), l = (0, o.c)();
    return (0, r.bG)([a.A], () => !!n && !l && a.A.isCallVerified(), [l, n])
}