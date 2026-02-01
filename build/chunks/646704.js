/** chunk id: 646704, original params: t,e,i (module,exports,require) **/
i.d(e, {
    i: () => I
});
var n = i(627968),
    l = i(934551),
    s = i(158954),
    r = i(827734),
    u = i(155984),
    a = i(682829),
    o = i(419954),
    d = i(933297),
    T = i(780964),
    A = i(358776),
    S = i(616415),
    c = i(531525),
    E = i(985018);
let g = (0, o.t_)(T.X.SUBSCRIPTIONS_PANEL, {
        useTitle: () => E.intl.string(E.t.trSpHX),
        StronglyDiscouragedCustomComponent: a.A,
        buildLayout: () => []
    }),
    _ = (0, o.t_)(T.X.SUBSCRIPTIONS_PANEL, {
        useTitle: () => E.intl.string(E.t.trSpHX),
        buildLayout: () => [S.J]
    }),
    I = (0, o.i4)(T.X.SUBSCRIPTIONS_SIDEBAR_ITEM, {
        useTitle: () => E.intl.string(E.t.trSpHX),
        getLegacySearchKey: () => (0, A.WJ)("SubscriptionsPanel") ? void 0 : c.H.SUBSCRIPTIONS,
        icon: l.SubscriptionIcon,
        trailing: {
            type: d.S.STRONGLY_DISCOURAGED_CUSTOM,
            useCustomDecoration: () => (0, u.l)() ? (0, n.jsx)(s.EpV, {
                size: "xs",
                color: r.A.unsafe_rawColors.YELLOW_300
            }) : null
        },
        buildLayout: () => (0, A.WJ)("SubscriptionsPanel") ? [_] : [g]
    })