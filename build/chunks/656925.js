/** chunk id: 656925 params = (module,exports,require) **/
a.d(t, {
    A: () => o
});
var n = a(64700),
    s = a(311907),
    r = a(397927),
    l = a(45837),
    i = a(961350),
    c = a(101058),
    u = a(595535);

function o(e) {
    let {
        avatarId: t,
        storageHash: a,
        size: o
    } = e, {
        onMouseEnter: d,
        onMouseLeave: A,
        shouldAnimate: h
    } = (0, l.A)(), f = (0, s.bG)([i.default], () => i.default.getId());
    return {
        avatarSrc: n.useMemo(() => (0, c.Xp)({
            userId: f,
            avatarId: t,
            storageHash: a,
            canAnimate: h,
            size: (0, r.FT9)(o ?? u.q)
        }), [f, t, a, h, o]),
        isAvatarAnimating: h,
        eventHandlers: {
            onMouseEnter: d,
            onMouseLeave: A
        }
    }
}