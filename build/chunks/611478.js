/** chunk id: 611478 params = (module,exports,require) **/
n.d(t, {
    P: () => A
}), n(321073);
var i = n(627968),
    s = n(311907),
    l = n(36149),
    a = n(207560),
    r = n(419954),
    o = n(287809),
    d = n(780964),
    c = n(998252),
    u = n(980172),
    _ = n(985018),
    g = n(949268);
let m = (0, r.E2)(d.X.ACCOUNT_PROFILE_SETTING, {
        useSearchTerms: function() {
            let e = [_.intl.string(_.t.LYju5J), _.intl.string(_.t["9AjdkD"]), _.intl.string(_.t["+JkHPw"]), _.intl.string(_.t.oP5zGA), _.intl.string(_.t.Ulqq6K)],
                t = (0, a.fk)(),
                n = (0, l.Y2)();
            return t && (e.push(_.intl.string(_.t["/52UYy"])), e.push(_.intl.string(_.t.sK0dmH)), e.push(_.intl.string(_.t.XxRj7f)), e.push(_.intl.string(_.t.DVywUB)), e.push(_.intl.string(_.t["9KiIz6"])), n && (e.push(_.intl.string(g.default.FTawSP)), e.push(_.intl.string(g.default["bD//cU"])), e.push(_.intl.string(g.default.SH6Tcv)))), e
        },
        Component: function() {
            let e = (0, s.bG)([o.default], () => o.default.getCurrentUser());
            return (0, i.jsxs)(i.Fragment, {
                children: [null != e && (0, i.jsx)(c.A, {
                    currentUser: e
                }), null != e && (0, i.jsx)(u.A, {
                    currentUser: e
                })]
            })
        }
    }),
    A = (0, r.zZ)(d.X.ACCOUNT_PROFILE_CATEGORY, {
        buildLayout: () => [m]
    })