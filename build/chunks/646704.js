/** chunk id: 646704, original params: t,e,i (module,exports,require) **/
i.d(e, {
    i: () => I
});
var n = i(627968),
    l = i(934551),
    s = i(158954),
    a = i(827734),
    r = i(155984),
    u = i(682829),
    o = i(419954),
    d = i(933297),
    A = i(780964),
    T = i(358776),
    S = i(616415),
    E = i(531525),
    g = i(985018);
let c = (0, o.t_)(A.X.SUBSCRIPTIONS_PANEL, {
        useTitle: () => g.intl.string(g.t.trSpHX),
        StronglyDiscouragedCustomComponent: u.A,
        buildLayout: () => []
    }),
    _ = (0, o.t_)(A.X.SUBSCRIPTIONS_PANEL, {
        useTitle: () => g.intl.string(g.t.trSpHX),
        buildLayout: () => [S.J]
    }),
    I = (0, o.i4)(A.X.SUBSCRIPTIONS_SIDEBAR_ITEM, {
        useTitle: () => g.intl.string(g.t.trSpHX),
        getLegacySearchKey: () => (0, T.WJ)("SubscriptionsPanel") ? void 0 : E.H.SUBSCRIPTIONS,
        icon: l.SubscriptionIcon,
        trailing: {
            type: d.Si.STRONGLY_DISCOURAGED_CUSTOM,
            useCustomDecoration: () => (0, r.l)() ? (0, n.jsx)(s.EpV, {
                size: "xs",
                color: a.A.unsafe_rawColors.YELLOW_300
            }) : null
        },
        buildLayout: () => (0, T.WJ)("SubscriptionsPanel") ? [_] : [c]
    })