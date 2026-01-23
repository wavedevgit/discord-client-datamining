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
    A = i(780964),
    d = i(358776),
    S = i(264474),
    E = i(531525),
    _ = i(985018),
    g = i(842130);
let c = (0, o.t_)(A.X.FAMILY_CENTER_PANEL, {
        usePredicate: () => !(0, d.dk)("LegacyFamilyCenterPanel"),
        useTitle: () => _.intl.string(g.default.RZqaJn),
        StronglyDiscouragedCustomComponent: a.p,
        buildLayout: () => []
    }),
    I = (0, o.t_)(A.X.FAMILY_CENTER_PANEL, {
        usePredicate: () => (0, d.dk)("FamilyCenterPanel"),
        useTitle: () => _.intl.string(g.default.RZqaJn),
        buildLayout: () => [S.g]
    }),
    O = (0, o.i4)(A.X.FAMILY_CENTER_SIDEBAR_ITEM, {
        useTitle: () => _.intl.string(g.default.RZqaJn),
        getLegacySearchKey: () => (0, d.WJ)("FamilyCenterPanel") ? void 0 : E.H.PRIVACY_FAMILY_CENTER,
        icon: l.GroupIcon,
        trailing: {
            type: T.S.STRONGLY_DISCOURAGED_CUSTOM,
            getDismissibleContentTypes: () => [s.M.FAMILY_CENTER_NEW_BADGE],
            useCustomDecoration: function(t) {
                let e = (0, u.VT)();
                return t === s.M.FAMILY_CENTER_NEW_BADGE ? (0, n.jsx)(r.LpS, {
                    text: _.intl.string(_.t.y2b7CA)
                }) : e > 0 ? (0, n.jsx)(r.hVq, {
                    count: e
                }) : null
            }
        },
        buildLayout: () => (0, d.WJ)("FamilyCenterPanel") ? [I] : [c]
    })