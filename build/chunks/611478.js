/** chunk id: 611478, original params: t,e,i (module,exports,require) **/
i.d(e, {
    P: () => g
}), i(321073);
var n = i(627968),
    l = i(311907),
    s = i(772786),
    r = i(207560),
    u = i(419954),
    a = i(287809),
    o = i(64313),
    d = i(780964),
    T = i(433410),
    A = i(998252),
    S = i(980172),
    c = i(985018);
let E = (0, u.E2)(d.X.ACCOUNT_PROFILE_SETTING, {
        useSearchTerms: function() {
            let t = [c.intl.string(c.t.LYju5J), c.intl.string(c.t["9AjdkD"]), c.intl.string(c.t["+JkHPw"]), c.intl.string(c.t.oP5zGA), c.intl.string(c.t.Ulqq6K)],
                e = (0, r.fk)(),
                i = (0, o.j)("AccountProfileSetting");
            return (e || i) && (t.push(c.intl.string(c.t["/52UYy"])), t.push(c.intl.string(c.t.sK0dmH)), t.push(c.intl.string(c.t.XxRj7f)), t.push(c.intl.string(c.t.yNGjyK)), t.push(c.intl.string(c.t.KPGVWl))), t
        },
        Component: function() {
            let t = (0, s.g)(),
                e = (0, l.bG)([a.default], () => a.default.getCurrentUser());
            return (0, n.jsxs)(n.Fragment, {
                children: [t && (0, n.jsx)(T.A, {}), null != e && (0, n.jsx)(A.A, {
                    currentUser: e
                }), (0, n.jsx)(S.A, {})]
            })
        }
    }),
    g = (0, u.zZ)(d.X.ACCOUNT_PROFILE_CATEGORY, {
        buildLayout: () => [E]
    })