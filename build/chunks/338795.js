/** chunk id: 338795, original params: t,e,i (module,exports,require) **/
i.d(e, {
    J: () => L
});
var n = i(934551),
    l = i(98207),
    s = i(631670),
    a = i(419954),
    r = i(576622),
    u = i(287809),
    o = i(954571),
    d = i(780964),
    A = i(358776),
    T = i(782844),
    S = i(828797),
    E = i(611478),
    g = i(402089),
    c = i(281225),
    _ = i(531525),
    I = i(652215),
    C = i(985018);
let N = (0, a.dT)(d.X.ACCOUNT_STANDING_TAB, {
        getTitle: () => C.intl.string(C.t["Vov/9o"]),
        onItemSelect: () => {
            o.default.track(I.HAw.MY_ACCOUNT_PAGE_TAB_NAVIGATE, {
                target_tab_name: T.D.STANDING
            })
        },
        buildLayout: () => [c.Q]
    }),
    O = (0, a.dT)(d.X.ACCOUNT_SECURITY_TAB, {
        getTitle: () => C.intl.string(C.t.Am9YHi),
        onItemSelect: () => {
            o.default.track(I.HAw.MY_ACCOUNT_PAGE_TAB_NAVIGATE, {
                target_tab_name: T.D.SECURITY
            })
        },
        buildLayout: () => [E.P, S.o, g.s]
    }),
    b = (0, a.t_)(d.X.ACCOUNT_PANEL, {
        useTitle: () => C.intl.string(C.t["JAIM/m"]),
        initialize: function() {
            let t = u.default.getCurrentUser();
            return null != t && (0, r.A)(t.id, t.getAvatarURL(void 0, 80)), () => {
                l.A.clearBackupCodes(), (0, s.Uo)()
            }
        },
        hideInStreamerMode: !0,
        buildLayout: () => [O, N]
    }),
    D = (0, a.t_)(d.X.ACCOUNT_PANEL, {
        useTitle: () => C.intl.string(C.t["JAIM/m"]),
        StronglyDiscouragedCustomComponent: T.A,
        buildLayout: () => []
    }),
    L = (0, a.i4)(d.X.ACCOUNT_SIDEBAR_ITEM, {
        useTitle: () => C.intl.string(C.t["JAIM/m"]),
        getLegacySearchKey: () => (0, A.WJ)("AccountPanel") ? void 0 : _.H.ACCOUNT,
        icon: n.UserIcon,
        buildLayout: () => (0, A.WJ)("AccountPanel") ? [b] : [D]
    })