/** Chunk was on 28979 **/
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
    T = i(933297),
    d = i(780964),
    A = i(358776),
    S = i(616415),
    E = i(531525),
    g = i(985018);
let _ = (0, o.t_)(d.X.SUBSCRIPTIONS_PANEL, {
        useTitle: () => g.intl.string(g.t.trSpHX),
        StronglyDiscouragedCustomComponent: a.A,
        buildLayout: () => []
    }),
    c = (0, o.t_)(d.X.SUBSCRIPTIONS_PANEL, {
        useTitle: () => g.intl.string(g.t.trSpHX),
        buildLayout: () => [S.J]
    }),
    I = (0, o.i4)(d.X.SUBSCRIPTIONS_SIDEBAR_ITEM, {
        useTitle: () => g.intl.string(g.t.trSpHX),
        getLegacySearchKey: () => (0, A.WJ)("SubscriptionsPanel") ? void 0 : E.H.SUBSCRIPTIONS,
        icon: l.SubscriptionIcon,
        trailing: {
            type: T.S.STRONGLY_DISCOURAGED_CUSTOM,
            useCustomDecoration: () => (0, u.l)() ? (0, n.jsx)(s.EpV, {
                size: "xs",
                color: r.A.unsafe_rawColors.YELLOW_300
            }) : null
        },
        buildLayout: () => (0, A.WJ)("SubscriptionsPanel") ? [c] : [_]
    })