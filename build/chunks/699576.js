/** chunk id: 699576 params = (module,exports,require) **/
n.d(t, {
    A: () => h
});
var i = n(627968),
    a = n(64700),
    r = n(503698),
    o = n.n(r),
    s = n(311907),
    l = n(287809),
    c = n(927578),
    _ = n(202639),
    d = n(688796),
    A = n(652215),
    u = n(339984),
    g = n(985018),
    m = n(186311);

function h(e) {
    let {
        uploadType: t,
        analyticsSource: n,
        className: r,
        ...h
    } = e, L = a.useCallback(() => {
        (0, d.G)({
            uploadType: t,
            analyticsSource: n
        })
    }, [t, n]), x = (0, s.bG)([l.default], () => l.default.getCurrentUser()), C = c.Ay.canUseAnimatedAvatar(x), N = a.useMemo(() => {
        switch (t) {
            case u.HL.AVATAR:
                return g.intl.format(g.t["pvw/HH"], {
                    onClick: L
                });
            case u.HL.BANNER:
                return g.intl.format(g.t.aCrz1e, {
                    onClick: L
                });
            default:
                return ""
        }
    }, [t, L]);
    return t !== u.HL.AVATAR && t !== u.HL.BANNER || t === u.HL.AVATAR && C ? null : (0, i.jsx)(_.d, {
        text: N,
        button: g.intl.string(g.t.BmJkbd),
        buttonAnalyticsObject: {
            section: A.JJy.USER_PROFILE
        },
        className: o()(m.k, r),
        ...h
    })
}