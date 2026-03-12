/** chunk id: 338795 params = (module,exports,require) **/
n.d(t, {
    J: () => C
});
var i = n(934551),
    s = n(98207),
    l = n(631670),
    r = n(419954),
    a = n(576622),
    o = n(287809),
    d = n(954571),
    c = n(780964),
    u = n(782844),
    _ = n(828797),
    m = n(611478),
    g = n(402089),
    A = n(281225),
    h = n(652215),
    x = n(985018);
let p = (0, r.dT)(c.X.ACCOUNT_STANDING_TAB, {
        getTitle: () => x.intl.string(x.t["Vov/9o"]),
        onItemSelect: () => {
            d.default.track(h.HAw.MY_ACCOUNT_PAGE_TAB_NAVIGATE, {
                target_tab_name: u.D.STANDING
            })
        },
        buildLayout: () => [A.Q]
    }),
    T = (0, r.dT)(c.X.ACCOUNT_SECURITY_TAB, {
        getTitle: () => x.intl.string(x.t.Am9YHi),
        onItemSelect: () => {
            d.default.track(h.HAw.MY_ACCOUNT_PAGE_TAB_NAVIGATE, {
                target_tab_name: u.D.SECURITY
            })
        },
        buildLayout: () => [m.P, _.o, g.s]
    }),
    E = (0, r.t_)(c.X.ACCOUNT_PANEL, {
        useTitle: () => x.intl.string(x.t["JAIM/m"]),
        initialize: function() {
            let e = o.default.getCurrentUser();
            return null != e && (0, a.A)(e.id, e.getAvatarURL(void 0, 80)), () => {
                s.A.clearBackupCodes(), (0, l.Uo)()
            }
        },
        hideInStreamerMode: !0,
        buildLayout: () => [T, p]
    }),
    C = (0, r.i4)(c.X.ACCOUNT_SIDEBAR_ITEM, {
        useTitle: () => x.intl.string(x.t["JAIM/m"]),
        icon: i.UserIcon,
        buildLayout: () => [E]
    })