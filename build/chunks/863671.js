/** chunk id: 863671, original params: e,t,i (module,exports,require) **/
i.d(t, {
    $: () => O
});
var n = i(64700),
    l = i(934551),
    s = i(554146),
    r = i(200921),
    a = i(419954),
    u = i(933297),
    o = i(780964),
    d = i(358776),
    T = i(119762),
    c = i(119695),
    A = i(766761),
    S = i(531525),
    _ = i(985018);
let E = (0, a.zZ)(o.X.SESSIONS_CATEGORY, {
        buildLayout: () => [c.I, A.A],
        initialize: () => ((0, r.GY)(), () => {
            (0, r.ZQ)()
        }),
        useInlineNotice: function() {
            return n.useMemo(() => ({
                type: u.W.STRONGLY_DISCOURAGED_CUSTOM,
                notice: T.jH
            }), [])
        }
    }),
    g = (0, a.t_)(o.X.SESSIONS_PANEL, {
        usePredicate: () => !(0, d.dk)("LegacySessionsPanel"),
        useTitle: () => _.intl.string(_.t["+1h0k/"]),
        hideInStreamerMode: !0,
        StronglyDiscouragedCustomComponent: T.Ay,
        buildLayout: () => []
    }),
    I = (0, a.t_)(o.X.SESSIONS_PANEL, {
        usePredicate: () => (0, d.dk)("SessionsPanel"),
        useTitle: () => _.intl.string(_.t["+1h0k/"]),
        hideInStreamerMode: !0,
        buildLayout: () => [E]
    }),
    O = (0, a.i4)(o.X.SESSIONS_SIDEBAR_ITEM, {
        useTitle: () => _.intl.string(_.t["+1h0k/"]),
        getLegacySearchKey: () => (0, d.WJ)("SessionsPanel") ? void 0 : S.H.PRIVACY_ENCRYPTION_VERIFIED_DEVICES_V2,
        icon: l.LaptopPhoneIcon,
        trailing: {
            type: u.S.BADGE_NEW,
            getDismissibleContentTypes: () => [s.M.AUTH_SESSIONS_NEW]
        },
        buildLayout: () => (0, d.WJ)("SessionsPanel") ? [I] : [g]
    })