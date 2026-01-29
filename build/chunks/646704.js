/** Chunk was on 4670 **/
/** chunk id: 646704, original params: e,t,i (module,exports,require) **/
i.d(t, {
    i: () => I
});
var n = i(627968),
    l = i(934551),
    s = i(158954),
    r = i(827734),
    a = i(155984),
    u = i(682829),
    o = i(419954),
    d = i(933297),
    T = i(780964),
    c = i(358776),
    A = i(616415),
    S = i(531525),
    _ = i(985018);
let E = (0, o.t_)(T.X.SUBSCRIPTIONS_PANEL, {
        useTitle: () => _.intl.string(_.t.trSpHX),
        StronglyDiscouragedCustomComponent: u.A,
        buildLayout: () => []
    }),
    g = (0, o.t_)(T.X.SUBSCRIPTIONS_PANEL, {
        useTitle: () => _.intl.string(_.t.trSpHX),
        buildLayout: () => [A.J]
    }),
    I = (0, o.i4)(T.X.SUBSCRIPTIONS_SIDEBAR_ITEM, {
        useTitle: () => _.intl.string(_.t.trSpHX),
        getLegacySearchKey: () => (0, c.WJ)("SubscriptionsPanel") ? void 0 : S.H.SUBSCRIPTIONS,
        icon: l.SubscriptionIcon,
        trailing: {
            type: d.S.STRONGLY_DISCOURAGED_CUSTOM,
            useCustomDecoration: () => (0, a.l)() ? (0, n.jsx)(s.EpV, {
                size: "xs",
                color: r.A.unsafe_rawColors.YELLOW_300
            }) : null
        },
        buildLayout: () => (0, c.WJ)("SubscriptionsPanel") ? [g] : [E]
    })