/** chunk id: 699576, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => C
});
var a = n(627968),
    l = n(64700),
    s = n(503698),
    i = n.n(s),
    r = n(311907),
    c = n(287809),
    o = n(927578),
    u = n(202639),
    d = n(688796),
    A = n(652215),
    g = n(339984),
    h = n(985018),
    f = n(946556);

function C(e) {
    let {
        uploadType: t,
        analyticsSource: n,
        className: s,
        ...C
    } = e, m = l.useCallback(() => {
        (0, d.G)({
            uploadType: t,
            analyticsSource: n
        })
    }, [t, n]), E = (0, r.bG)([c.default], () => c.default.getCurrentUser()), x = o.Ay.canUseAnimatedAvatar(E), p = l.useMemo(() => {
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
    return t !== g.HL.AVATAR && t !== g.HL.BANNER || t === g.HL.AVATAR && x ? null : (0, a.jsx)(u.d, {
        text: p,
        button: h.intl.string(h.t.BmJkbd),
        buttonAnalyticsObject: {
            section: A.JJy.USER_PROFILE
        },
        className: i()(f.k, s),
        ...C
    })
}