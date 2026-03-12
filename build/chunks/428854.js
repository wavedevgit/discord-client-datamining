/** chunk id: 428854 params = (module,exports,require) **/
n.d(t, {
    A: () => g,
    R: () => _
});
var i, s = n(627968),
    l = n(64700),
    r = n(36149),
    a = n(923531),
    o = n(207560),
    d = n(287809),
    c = n(380587),
    u = n(589641),
    _ = ((i = {}).CONTENT_AND_SOCIAL = "CONTENT_AND_SOCIAL", i.DATA_AND_PRIVACY = "DATA_AND_PRIVACY", i);
let m = {
    CONTENT_AND_SOCIAL: [{
        order: 100,
        predicate: a.$h,
        Component: u.A
    }, {
        order: 200,
        predicate: () => (0, o.TR)() && !(0, r.Q9)(),
        Component: c.Ow
    }, {
        order: 300,
        predicate: () => d.default.getCurrentUser()?.nsfwAllowed === !1,
        Component: c.Ev
    }],
    DATA_AND_PRIVACY: [{
        order: 100,
        predicate: a.$h,
        Component: u.A
    }]
};

function g(e) {
    let {
        page: t
    } = e, n = l.useMemo(() => {
        let e = m[t].filter(e => e.predicate()).sort((e, t) => e.order - t.order).map(e => e.Component);
        return 0 === e.length ? null : e[0]
    }, [t]);
    return null == n ? null : (0, s.jsx)(n, {}, screen)
}