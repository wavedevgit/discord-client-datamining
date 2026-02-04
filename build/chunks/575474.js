/** chunk id: 575474, original params: e,t,n (module,exports,require) **/
n.d(t, {
    g: () => _
}), n(896048);
var r = n(627968),
    i = n(64700),
    l = n(554146),
    a = n(379848),
    s = n(866945),
    o = n(780964),
    c = n(358776),
    u = n(840065),
    d = n(652215),
    p = n(49999),
    h = n(835002),
    f = n(355097),
    g = n(531525),
    m = n(985018),
    A = n(91492);

function _() {
    let [e, t] = (0, a.kn)([l.M.RESTRICTED_ACCOUNTS_SETTING_NOTICE]);
    return i.useMemo(() => e === l.M.RESTRICTED_ACCOUNTS_SETTING_NOTICE, [e]) ? (0, r.jsx)(s.e, {
        label: m.t.zqv4nV,
        labelHook: () => {
            let e = (0, c.WJ)("RestrictedAccountsSettingNotice");
            (0, u.openUserSettings)(e ? o.X.CONTENT_AND_SOCIAL_RESTRICTED_USERS_CATEGORY : o.X.CONTENT_AND_SOCIAL_PANEL, {
                section: d.nc_.CONTENT_AND_SOCIAL,
                subsection: g.H.RESTRICTED_USERS,
                scrollPosition: e ? void 0 : f.d1.RESTRICTED_ACCOUNTS
            })
        },
        dismissNotice: () => t(p.i.USER_DISMISS),
        className: A._,
        noticeType: h.YA.RESTRICTED_ACCOUNTS_SETTING_NOTICE
    }) : null
}