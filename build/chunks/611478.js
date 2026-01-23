/** Chunk was on 28979 **/
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
    T = i(780964),
    A = i(433410),
    d = i(998252),
    S = i(980172),
    E = i(985018);
let _ = (0, u.E2)(T.X.ACCOUNT_PROFILE_SETTING, {
        useSearchTerms: function() {
            let t = [E.intl.string(E.t.LYju5J), E.intl.string(E.t["9AjdkD"]), E.intl.string(E.t["+JkHPw"]), E.intl.string(E.t.oP5zGA), E.intl.string(E.t.Ulqq6K)],
                e = (0, r.fk)(),
                i = (0, o.j)("AccountProfileSetting");
            return (e || i) && (t.push(E.intl.string(E.t["/52UYy"])), t.push(E.intl.string(E.t.sK0dmH)), t.push(E.intl.string(E.t.XxRj7f)), t.push(E.intl.string(E.t.yNGjyK)), t.push(E.intl.string(E.t.KPGVWl))), t
        },
        Component: function() {
            let t = (0, s.g)(),
                e = (0, l.bG)([a.default], () => a.default.getCurrentUser());
            return (0, n.jsxs)(n.Fragment, {
                children: [t && (0, n.jsx)(A.A, {}), null != e && (0, n.jsx)(d.A, {
                    currentUser: e
                }), (0, n.jsx)(S.A, {})]
            })
        }
    }),
    g = (0, u.zZ)(T.X.ACCOUNT_PROFILE_CATEGORY, {
        buildLayout: () => [_]
    })