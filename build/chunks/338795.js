/** Chunk was on 28979 **/
/** chunk id: 338795, original params: t,e,i (module,exports,require) **/
i.d(e, {
    J: () => D
});
var n = i(934551),
    l = i(98207),
    s = i(631670),
    r = i(419954),
    u = i(576622),
    a = i(287809),
    o = i(954571),
    T = i(780964),
    d = i(358776),
    A = i(782844),
    S = i(828797),
    E = i(611478),
    g = i(402089),
    _ = i(281225),
    c = i(531525),
    I = i(652215),
    O = i(985018);
let N = (0, r.dT)(T.X.ACCOUNT_STANDING_TAB, {
        getTitle: () => O.intl.string(O.t["Vov/9o"]),
        onItemSelect: () => {
            o.default.track(I.HAw.MY_ACCOUNT_PAGE_TAB_NAVIGATE, {
                target_tab_name: A.D.STANDING
            })
        },
        buildLayout: () => [_.Q]
    }),
    C = (0, r.dT)(T.X.ACCOUNT_SECURITY_TAB, {
        getTitle: () => O.intl.string(O.t.Am9YHi),
        onItemSelect: () => {
            o.default.track(I.HAw.MY_ACCOUNT_PAGE_TAB_NAVIGATE, {
                target_tab_name: A.D.SECURITY
            })
        },
        buildLayout: () => [E.P, S.o, g.s]
    }),
    b = (0, r.t_)(T.X.ACCOUNT_PANEL, {
        useTitle: () => O.intl.string(O.t["JAIM/m"]),
        initialize: function() {
            let t = a.default.getCurrentUser();
            return null != t && (0, u.A)(t.id, t.getAvatarURL(void 0, 80)), () => {
                l.A.clearBackupCodes(), (0, s.Uo)()
            }
        },
        hideInStreamerMode: !0,
        buildLayout: () => [C, N]
    }),
    L = (0, r.t_)(T.X.ACCOUNT_PANEL, {
        useTitle: () => O.intl.string(O.t["JAIM/m"]),
        StronglyDiscouragedCustomComponent: A.A,
        buildLayout: () => []
    }),
    D = (0, r.i4)(T.X.ACCOUNT_SIDEBAR_ITEM, {
        useTitle: () => O.intl.string(O.t["JAIM/m"]),
        getLegacySearchKey: () => (0, d.WJ)("AccountPanel") ? void 0 : c.H.ACCOUNT,
        icon: n.UserIcon,
        buildLayout: () => (0, d.WJ)("AccountPanel") ? [b] : [L]
    })