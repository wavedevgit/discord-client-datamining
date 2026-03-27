/** chunk id: 611478 params = (module,exports,require) **/
n.d(t, {
    P: () => A
}), n(321073);
var i = n(627968),
    s = n(311907),
    l = n(397927),
    a = n(36149),
    r = n(207560),
    o = n(419954),
    d = n(287809),
    c = n(780964),
    u = n(431832),
    m = n(443064),
    _ = n(985018),
    g = n(949268);
let x = (0, o.E2)(c.X.ACCOUNT_PROFILE_SETTING, {
        useSearchTerms: function() {
            let e = [_.intl.string(_.t.LYju5J), _.intl.string(_.t["9AjdkD"]), _.intl.string(_.t["+JkHPw"]), _.intl.string(_.t.oP5zGA), _.intl.string(_.t.Ulqq6K)],
                t = (0, r.fk)(),
                n = (0, a.Y2)();
            return t && (e.push(_.intl.string(_.t["/52UYy"])), e.push(_.intl.string(_.t.sK0dmH)), e.push(_.intl.string(_.t.XxRj7f)), e.push(_.intl.string(_.t.DVywUB)), e.push(_.intl.string(_.t["9KiIz6"])), n && (e.push(_.intl.string(g.default.FTawSP)), e.push(_.intl.string(g.default["bD//cU"])), e.push(_.intl.string(g.default.SH6Tcv)))), e
        },
        Component: function() {
            let e = (0, s.bG)([d.default], () => d.default.getCurrentUser());
            return (0, i.jsxs)(l.BJc, {
                gap: "md",
                children: [null != e && (0, i.jsx)(u.A, {
                    currentUser: e
                }), null != e && (0, i.jsx)(m.A, {
                    currentUser: e
                })]
            })
        }
    }),
    A = (0, o.zZ)(c.X.ACCOUNT_PROFILE_CATEGORY, {
        buildLayout: () => [x]
    })