/** chunk id: 699576 params = (module,exports,require) **/
n.d(t, {
    A: () => m
});
var a = n(627968),
    i = n(64700),
    r = n(503698),
    o = n.n(r),
    s = n(311907),
    c = n(287809),
    l = n(927578),
    _ = n(202639),
    d = n(688796),
    u = n(652215),
    h = n(339984),
    A = n(985018),
    g = n(326060);

function m(e) {
    let {
        uploadType: t,
        className: n,
        ...r
    } = e, m = i.useCallback(() => {
        (0, d.G)({
            uploadType: t
        })
    }, [t]), x = (0, s.bG)([c.default], () => c.default.getCurrentUser()), b = l.Ay.canUseAnimatedAvatar(x), f = i.useMemo(() => {
        switch (t) {
            case h.HL.AVATAR:
                return A.intl.format(A.t["pvw/HH"], {
                    onClick: m
                });
            case h.HL.BANNER:
                return A.intl.format(A.t.aCrz1e, {
                    onClick: m
                });
            default:
                return ""
        }
    }, [t, m]);
    return t !== h.HL.AVATAR && t !== h.HL.BANNER || t === h.HL.AVATAR && b ? null : (0, a.jsx)(_.d, {
        text: f,
        button: A.intl.string(A.t.BmJkbd),
        buttonAnalyticsObject: {
            section: u.JJy.USER_PROFILE
        },
        className: o()(g.k, n),
        ...r
    })
}