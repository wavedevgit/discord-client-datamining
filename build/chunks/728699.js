/** chunk id: 728699, original params: t,e,i (module,exports,require) **/
i.d(e, {
    T: () => O
});
var n = i(627968),
    l = i(934551),
    s = i(554146),
    r = i(397927),
    u = i(834981),
    a = i(793998),
    o = i(419954),
    d = i(933297),
    T = i(780964),
    A = i(358776),
    S = i(264474),
    c = i(531525),
    E = i(985018),
    g = i(842130);
let _ = (0, o.t_)(T.X.FAMILY_CENTER_PANEL, {
        usePredicate: () => !(0, A.dk)("LegacyFamilyCenterPanel"),
        useTitle: () => E.intl.string(g.default.RZqaJn),
        StronglyDiscouragedCustomComponent: a.p,
        buildLayout: () => []
    }),
    I = (0, o.t_)(T.X.FAMILY_CENTER_PANEL, {
        usePredicate: () => (0, A.dk)("FamilyCenterPanel"),
        useTitle: () => E.intl.string(g.default.RZqaJn),
        buildLayout: () => [S.g]
    }),
    O = (0, o.i4)(T.X.FAMILY_CENTER_SIDEBAR_ITEM, {
        useTitle: () => E.intl.string(g.default.RZqaJn),
        getLegacySearchKey: () => (0, A.WJ)("FamilyCenterPanel") ? void 0 : c.H.PRIVACY_FAMILY_CENTER,
        icon: l.GroupIcon,
        trailing: {
            type: d.S.STRONGLY_DISCOURAGED_CUSTOM,
            getDismissibleContentTypes: () => [s.M.FAMILY_CENTER_NEW_BADGE],
            useCustomDecoration: function(t) {
                let e = (0, u.VT)();
                return t === s.M.FAMILY_CENTER_NEW_BADGE ? (0, n.jsx)(r.LpS, {
                    text: E.intl.string(E.t.y2b7CA)
                }) : e > 0 ? (0, n.jsx)(r.hVq, {
                    count: e
                }) : null
            }
        },
        buildLayout: () => (0, A.WJ)("FamilyCenterPanel") ? [I] : [_]
    })