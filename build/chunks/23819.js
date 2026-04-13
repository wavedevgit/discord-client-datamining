/** chunk id: 23819 params = (module,exports,require) **/
n.d(t, {
    J: () => j
});
var i = n(934551),
    s = n(98207),
    l = n(631670),
    r = n(974544),
    a = n(419954),
    o = n(576622),
    d = n(287809),
    c = n(954571),
    u = n(780964),
    m = n(358776),
    g = n(305693),
    _ = n(372745),
    x = n(559516),
    A = n(665526),
    h = n(933257),
    p = n(228201),
    T = n(875532),
    f = n(935185),
    S = n(652215),
    E = n(985018);
let b = (0, a.dT)(u.X.ACCOUNT_STANDING_TAB, {
        getTitle: () => E.intl.string(E.t["Vov/9o"]),
        onItemSelect: () => {
            c.default.track(S.HAw.MY_ACCOUNT_PAGE_TAB_NAVIGATE, {
                target_tab_name: f.D.STANDING
            })
        },
        buildLayout: () => [T.t]
    }),
    C = (0, a.dT)(u.X.ACCOUNT_SECURITY_TAB, {
        getTitle: () => E.intl.string(E.t.Am9YHi),
        onItemSelect: () => {
            c.default.track(S.HAw.MY_ACCOUNT_PAGE_TAB_NAVIGATE, {
                target_tab_name: f.D.SECURITY
            })
        },
        buildLayout: () => [A.P, g.o, h.s]
    });

function v() {
    let e = d.default.getCurrentUser();
    return null == e || (0, m.pC)("Account") || (0, o.A)(e.id, e.getAvatarURL(void 0, 80)), () => {
        s.A.clearBackupCodes(), (0, l.Uo)()
    }
}
let N = (0, a.t_)(u.X.ACCOUNT_PANEL, {
        useTitle: () => E.intl.string(E.t["JAIM/m"]),
        initialize: v,
        useObscuredNotice: r.L,
        buildLayout: () => [C, b]
    }),
    I = (0, a.t_)(u.X.ACCOUNT_PANEL, {
        useTitle: () => E.intl.string(E.t["ldCE/p"]),
        initialize: v,
        useObscuredNotice: r.L,
        buildLayout: () => [_.u, x.v, p.Q, h._]
    }),
    j = (0, a.i4)(u.X.ACCOUNT_SIDEBAR_ITEM, {
        useTitle: () => (0, m.pC)("Account") ? E.intl.string(E.t["ldCE/p"]) : E.intl.string(E.t["JAIM/m"]),
        icon: i.UserIcon,
        buildLayout: () => (0, m.pC)("Account") ? [I] : [N]
    })