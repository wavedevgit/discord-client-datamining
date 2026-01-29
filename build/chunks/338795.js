/** Chunk was on 4670 **/
/** chunk id: 338795, original params: e,t,i (module,exports,require) **/
i.d(t, {
    J: () => m
});
var n = i(934551),
    l = i(98207),
    s = i(631670),
    r = i(419954),
    a = i(576622),
    u = i(287809),
    o = i(954571),
    d = i(780964),
    T = i(358776),
    c = i(782844),
    A = i(828797),
    S = i(611478),
    _ = i(402089),
    E = i(281225),
    g = i(531525),
    I = i(652215),
    O = i(985018);
let C = (0, r.dT)(d.X.ACCOUNT_STANDING_TAB, {
        getTitle: () => O.intl.string(O.t["Vov/9o"]),
        onItemSelect: () => {
            o.default.track(I.HAw.MY_ACCOUNT_PAGE_TAB_NAVIGATE, {
                target_tab_name: c.D.STANDING
            })
        },
        buildLayout: () => [E.Q]
    }),
    N = (0, r.dT)(d.X.ACCOUNT_SECURITY_TAB, {
        getTitle: () => O.intl.string(O.t.Am9YHi),
        onItemSelect: () => {
            o.default.track(I.HAw.MY_ACCOUNT_PAGE_TAB_NAVIGATE, {
                target_tab_name: c.D.SECURITY
            })
        },
        buildLayout: () => [S.P, A.o, _.s]
    }),
    b = (0, r.t_)(d.X.ACCOUNT_PANEL, {
        useTitle: () => O.intl.string(O.t["JAIM/m"]),
        initialize: function() {
            let e = u.default.getCurrentUser();
            return null != e && (0, a.A)(e.id, e.getAvatarURL(void 0, 80)), () => {
                l.A.clearBackupCodes(), (0, s.Uo)()
            }
        },
        hideInStreamerMode: !0,
        buildLayout: () => [N, C]
    }),
    p = (0, r.t_)(d.X.ACCOUNT_PANEL, {
        useTitle: () => O.intl.string(O.t["JAIM/m"]),
        StronglyDiscouragedCustomComponent: c.A,
        buildLayout: () => []
    }),
    m = (0, r.i4)(d.X.ACCOUNT_SIDEBAR_ITEM, {
        useTitle: () => O.intl.string(O.t["JAIM/m"]),
        getLegacySearchKey: () => (0, T.WJ)("AccountPanel") ? void 0 : g.H.ACCOUNT,
        icon: n.UserIcon,
        buildLayout: () => (0, T.WJ)("AccountPanel") ? [b] : [p]
    })