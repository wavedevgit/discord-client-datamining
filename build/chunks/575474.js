/** chunk id: 575474 params = (module,exports,require) **/
n.d(t, {
    g: () => m
});
var i = n(627968),
    a = n(64700),
    r = n(554146),
    l = n(932001),
    s = n(866945),
    o = n(780964),
    d = n(840065),
    c = n(652215),
    u = n(49999),
    A = n(835002),
    h = n(985018),
    _ = n(91492);

function m() {
    let [e, t] = (0, l.kn)([r.M.RESTRICTED_ACCOUNTS_SETTING_NOTICE]);
    return a.useMemo(() => e === r.M.RESTRICTED_ACCOUNTS_SETTING_NOTICE, [e]) ? (0, i.jsx)(s.e, {
        label: h.t.zqv4nV,
        labelHook: () => {
            (0, d.openUserSettings)(o.X.CONTENT_AND_SOCIAL_RESTRICTED_USERS_CATEGORY, {
                section: c.nc_.CONTENT_AND_SOCIAL
            })
        },
        dismissNotice: () => t(u.i.USER_DISMISS),
        className: _._,
        noticeType: A.YA.RESTRICTED_ACCOUNTS_SETTING_NOTICE
    }) : null
}