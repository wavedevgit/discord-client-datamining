/** chunk id: 611478 params = (module,exports,require) **/
n.d(t, {
    P: () => h
}), n(321073);
var i = n(627968),
    s = n(311907),
    l = n(397927),
    r = n(36149),
    a = n(207560),
    o = n(419954),
    d = n(287809),
    c = n(780964),
    u = n(998252),
    _ = n(980172),
    m = n(985018),
    g = n(949268);
let A = (0, o.E2)(c.X.ACCOUNT_PROFILE_SETTING, {
        useSearchTerms: function() {
            let e = [m.intl.string(m.t.LYju5J), m.intl.string(m.t["9AjdkD"]), m.intl.string(m.t["+JkHPw"]), m.intl.string(m.t.oP5zGA), m.intl.string(m.t.Ulqq6K)],
                t = (0, a.fk)(),
                n = (0, r.Y2)();
            return t && (e.push(m.intl.string(m.t["/52UYy"])), e.push(m.intl.string(m.t.sK0dmH)), e.push(m.intl.string(m.t.XxRj7f)), e.push(m.intl.string(m.t.DVywUB)), e.push(m.intl.string(m.t["9KiIz6"])), n && (e.push(m.intl.string(g.default.FTawSP)), e.push(m.intl.string(g.default["bD//cU"])), e.push(m.intl.string(g.default.SH6Tcv)))), e
        },
        Component: function() {
            let e = (0, s.bG)([d.default], () => d.default.getCurrentUser());
            return (0, i.jsxs)(l.BJc, {
                gap: "md",
                children: [null != e && (0, i.jsx)(u.A, {
                    currentUser: e
                }), null != e && (0, i.jsx)(_.A, {
                    currentUser: e
                })]
            })
        }
    }),
    h = (0, o.zZ)(c.X.ACCOUNT_PROFILE_CATEGORY, {
        buildLayout: () => [A]
    })