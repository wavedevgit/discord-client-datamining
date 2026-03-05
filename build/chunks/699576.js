/** chunk id: 699576 params = (module,exports,require) **/
n.d(t, {
    A: () => C
});
var a = n(627968),
    l = n(64700),
    i = n(503698),
    s = n.n(i),
    r = n(311907),
    c = n(287809),
    o = n(927578),
    u = n(202639),
    A = n(688796),
    d = n(652215),
    g = n(339984),
    h = n(985018),
    f = n(946556);

function C(e) {
    let {
        uploadType: t,
        analyticsSource: n,
        className: i,
        ...C
    } = e, m = l.useCallback(() => {
        (0, A.G)({
            uploadType: t,
            analyticsSource: n
        })
    }, [t, n]), x = (0, r.bG)([c.default], () => c.default.getCurrentUser()), E = o.Ay.canUseAnimatedAvatar(x), p = l.useMemo(() => {
        switch (t) {
            case g.HL.AVATAR:
                return h.intl.format(h.t["pvw/HH"], {
                    onClick: m
                });
            case g.HL.BANNER:
                return h.intl.format(h.t.aCrz1e, {
                    onClick: m
                });
            default:
                return ""
        }
    }, [t, m]);
    return t !== g.HL.AVATAR && t !== g.HL.BANNER || t === g.HL.AVATAR && E ? null : (0, a.jsx)(u.d, {
        text: p,
        button: h.intl.string(h.t.BmJkbd),
        buttonAnalyticsObject: {
            section: d.JJy.USER_PROFILE
        },
        className: s()(f.k, i),
        ...C
    })
}