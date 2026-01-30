/** chunk id: 611478, original params: e,t,i (module,exports,require) **/
i.d(t, {
    P: () => E
}), i(321073);
var n = i(627968),
    l = i(311907),
    s = i(772786),
    r = i(207560),
    a = i(419954),
    u = i(287809),
    o = i(64313),
    d = i(780964),
    T = i(433410),
    c = i(998252),
    A = i(980172),
    S = i(985018);
let _ = (0, a.E2)(d.X.ACCOUNT_PROFILE_SETTING, {
        useSearchTerms: function() {
            let e = [S.intl.string(S.t.LYju5J), S.intl.string(S.t["9AjdkD"]), S.intl.string(S.t["+JkHPw"]), S.intl.string(S.t.oP5zGA), S.intl.string(S.t.Ulqq6K)],
                t = (0, r.fk)(),
                i = (0, o.j)("AccountProfileSetting");
            return (t || i) && (e.push(S.intl.string(S.t["/52UYy"])), e.push(S.intl.string(S.t.sK0dmH)), e.push(S.intl.string(S.t.XxRj7f)), e.push(S.intl.string(S.t.yNGjyK)), e.push(S.intl.string(S.t.KPGVWl))), e
        },
        Component: function() {
            let e = (0, s.g)(),
                t = (0, l.bG)([u.default], () => u.default.getCurrentUser());
            return (0, n.jsxs)(n.Fragment, {
                children: [e && (0, n.jsx)(T.A, {}), null != t && (0, n.jsx)(c.A, {
                    currentUser: t
                }), (0, n.jsx)(A.A, {})]
            })
        }
    }),
    E = (0, a.zZ)(d.X.ACCOUNT_PROFILE_CATEGORY, {
        buildLayout: () => [_]
    })