/** Chunk was on 28979 **/
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
    T = i(933297),
    d = i(780964),
    A = i(358776),
    S = i(264474),
    E = i(531525),
    g = i(985018),
    _ = i(842130);
let c = (0, o.t_)(d.X.FAMILY_CENTER_PANEL, {
        usePredicate: () => !(0, A.dk)("LegacyFamilyCenterPanel"),
        useTitle: () => g.intl.string(_.default.RZqaJn),
        StronglyDiscouragedCustomComponent: a.p,
        buildLayout: () => []
    }),
    I = (0, o.t_)(d.X.FAMILY_CENTER_PANEL, {
        usePredicate: () => (0, A.dk)("FamilyCenterPanel"),
        useTitle: () => g.intl.string(_.default.RZqaJn),
        buildLayout: () => [S.g]
    }),
    O = (0, o.i4)(d.X.FAMILY_CENTER_SIDEBAR_ITEM, {
        useTitle: () => g.intl.string(_.default.RZqaJn),
        getLegacySearchKey: () => (0, A.WJ)("FamilyCenterPanel") ? void 0 : E.H.PRIVACY_FAMILY_CENTER,
        icon: l.GroupIcon,
        trailing: {
            type: T.S.STRONGLY_DISCOURAGED_CUSTOM,
            getDismissibleContentTypes: () => [s.M.FAMILY_CENTER_NEW_BADGE],
            useCustomDecoration: function(t) {
                let e = (0, u.VT)();
                return t === s.M.FAMILY_CENTER_NEW_BADGE ? (0, n.jsx)(r.LpS, {
                    text: g.intl.string(g.t.y2b7CA)
                }) : e > 0 ? (0, n.jsx)(r.hVq, {
                    count: e
                }) : null
            }
        },
        buildLayout: () => (0, A.WJ)("FamilyCenterPanel") ? [I] : [c]
    })