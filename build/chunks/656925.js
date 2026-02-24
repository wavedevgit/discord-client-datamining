/** chunk id: 656925, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => u
});
var a = n(64700),
    l = n(311907),
    s = n(397927),
    i = n(45837),
    r = n(961350),
    c = n(101058),
    o = n(595535);

function u(e) {
    let {
        avatarId: t,
        storageHash: n,
        size: u
    } = e, {
        onMouseEnter: d,
        onMouseLeave: A,
        shouldAnimate: g
    } = (0, i.A)(), h = (0, l.bG)([r.default], () => r.default.getId());
    return {
        avatarSrc: a.useMemo(() => (0, c.Xp)({
            userId: h,
            avatarId: t,
            storageHash: n,
            canAnimate: g,
            size: (0, s.FT9)(u ?? o.q)
        }), [h, t, n, g, u]),
        isAvatarAnimating: g,
        eventHandlers: {
            onMouseEnter: d,
            onMouseLeave: A
        }
    }
}