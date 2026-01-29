/** Chunk was on 4670 **/
/** chunk id: 728699, original params: e,t,i (module,exports,require) **/
i.d(t, {
    T: () => O
});
var n = i(627968),
    l = i(934551),
    s = i(554146),
    r = i(397927),
    a = i(834981),
    u = i(793998),
    o = i(419954),
    d = i(933297),
    T = i(780964),
    c = i(358776),
    A = i(264474),
    S = i(531525),
    _ = i(985018),
    E = i(842130);
let g = (0, o.t_)(T.X.FAMILY_CENTER_PANEL, {
        usePredicate: () => !(0, c.dk)("LegacyFamilyCenterPanel"),
        useTitle: () => _.intl.string(E.default.RZqaJn),
        StronglyDiscouragedCustomComponent: u.p,
        buildLayout: () => []
    }),
    I = (0, o.t_)(T.X.FAMILY_CENTER_PANEL, {
        usePredicate: () => (0, c.dk)("FamilyCenterPanel"),
        useTitle: () => _.intl.string(E.default.RZqaJn),
        buildLayout: () => [A.g]
    }),
    O = (0, o.i4)(T.X.FAMILY_CENTER_SIDEBAR_ITEM, {
        useTitle: () => _.intl.string(E.default.RZqaJn),
        getLegacySearchKey: () => (0, c.WJ)("FamilyCenterPanel") ? void 0 : S.H.PRIVACY_FAMILY_CENTER,
        icon: l.GroupIcon,
        trailing: {
            type: d.S.STRONGLY_DISCOURAGED_CUSTOM,
            getDismissibleContentTypes: () => [s.M.FAMILY_CENTER_NEW_BADGE],
            useCustomDecoration: function(e) {
                let t = (0, a.VT)();
                return e === s.M.FAMILY_CENTER_NEW_BADGE ? (0, n.jsx)(r.LpS, {
                    text: _.intl.string(_.t.y2b7CA)
                }) : t > 0 ? (0, n.jsx)(r.hVq, {
                    count: t
                }) : null
            }
        },
        buildLayout: () => (0, c.WJ)("FamilyCenterPanel") ? [I] : [g]
    })