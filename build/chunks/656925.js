/** chunk id: 656925, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => u
});
var a = n(64700),
    l = n(311907),
    i = n(397927),
    s = n(45837),
    r = n(961350),
    c = n(101058),
    o = n(595535);

function u(e) {
    let {
        avatarId: t,
        storageHash: n,
        size: u
    } = e, {
        onMouseEnter: A,
        onMouseLeave: d,
        shouldAnimate: g
    } = (0, s.A)(), h = (0, l.bG)([r.default], () => r.default.getId());
    return {
        avatarSrc: a.useMemo(() => (0, c.Xp)({
            userId: h,
            avatarId: t,
            storageHash: n,
            canAnimate: g,
            size: (0, i.FT9)(u ?? o.q)
        }), [h, t, n, g, u]),
        isAvatarAnimating: g,
        eventHandlers: {
            onMouseEnter: A,
            onMouseLeave: d
        }
    }
}