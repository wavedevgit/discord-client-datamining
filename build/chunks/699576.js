/** chunk id: 699576 params = (module,exports,require) **/
a.d(e, {
    A: () => m
});
var n = a(627968),
    i = a(64700),
    r = a(503698),
    s = a.n(r),
    l = a(311907),
    o = a(287809),
    c = a(927578),
    d = a(202639),
    u = a(688796),
    _ = a(652215),
    h = a(339984),
    g = a(985018),
    A = a(186311);

function m(t) {
    let {
        uploadType: e,
        className: a,
        ...r
    } = t, m = i.useCallback(() => {
        (0, u.G)({
            uploadType: e
        })
    }, [e]), x = (0, l.bG)([o.default], () => o.default.getCurrentUser()), f = c.Ay.canUseAnimatedAvatar(x), b = i.useMemo(() => {
        switch (e) {
            case h.HL.AVATAR:
                return g.intl.format(g.t["pvw/HH"], {
                    onClick: m
                });
            case h.HL.BANNER:
                return g.intl.format(g.t.aCrz1e, {
                    onClick: m
                });
            default:
                return ""
        }
    }, [e, m]);
    return e !== h.HL.AVATAR && e !== h.HL.BANNER || e === h.HL.AVATAR && f ? null : (0, n.jsx)(d.d, {
        text: b,
        button: g.intl.string(g.t.BmJkbd),
        buttonAnalyticsObject: {
            section: _.JJy.USER_PROFILE
        },
        className: s()(A.k, a),
        ...r
    })
}