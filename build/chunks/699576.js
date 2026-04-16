/** chunk id: 699576 params = (module,exports,require) **/
n.d(e, {
    A: () => f
});
var a = n(627968),
    i = n(64700),
    r = n(503698),
    o = n.n(r),
    s = n(311907),
    l = n(287809),
    _ = n(927578),
    c = n(202639),
    d = n(688796),
    u = n(652215),
    A = n(339984),
    m = n(985018),
    x = n(967831);

function f(t) {
    let {
        uploadType: e,
        className: n,
        ...r
    } = t, f = i.useCallback(() => {
        (0, d.G)({
            uploadType: e
        })
    }, [e]), b = (0, s.bG)([l.default], () => l.default.getCurrentUser()), L = _.Ay.canUseAnimatedAvatar(b), g = i.useMemo(() => {
        switch (e) {
            case A.HL.AVATAR:
                return m.intl.format(m.t["pvw/HH"], {
                    onClick: f
                });
            case A.HL.BANNER:
                return m.intl.format(m.t.aCrz1e, {
                    onClick: f
                });
            default:
                return ""
        }
    }, [e, f]);
    return e !== A.HL.AVATAR && e !== A.HL.BANNER || e === A.HL.AVATAR && L ? null : (0, a.jsx)(c.d, {
        text: g,
        button: m.intl.string(m.t.BmJkbd),
        buttonAnalyticsObject: {
            section: u.JJy.USER_PROFILE
        },
        className: o()(x.k, n),
        ...r
    })
}