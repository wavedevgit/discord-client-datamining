/** Chunk was on 28979 **/
/** chunk id: 863671, original params: t,e,i (module,exports,require) **/
i.d(e, {
    $: () => O
});
var n = i(64700),
    l = i(934551),
    s = i(554146),
    r = i(200921),
    u = i(419954),
    a = i(933297),
    o = i(780964),
    T = i(358776),
    d = i(119762),
    A = i(119695),
    S = i(766761),
    E = i(531525),
    g = i(985018);
let _ = (0, u.zZ)(o.X.SESSIONS_CATEGORY, {
        buildLayout: () => [A.I, S.A],
        initialize: () => ((0, r.GY)(), () => {
            (0, r.ZQ)()
        }),
        useInlineNotice: function() {
            return n.useMemo(() => ({
                type: a.W.STRONGLY_DISCOURAGED_CUSTOM,
                notice: d.jH
            }), [])
        }
    }),
    c = (0, u.t_)(o.X.SESSIONS_PANEL, {
        usePredicate: () => !(0, T.dk)("LegacySessionsPanel"),
        useTitle: () => g.intl.string(g.t["+1h0k/"]),
        hideInStreamerMode: !0,
        StronglyDiscouragedCustomComponent: d.Ay,
        buildLayout: () => []
    }),
    I = (0, u.t_)(o.X.SESSIONS_PANEL, {
        usePredicate: () => (0, T.dk)("SessionsPanel"),
        useTitle: () => g.intl.string(g.t["+1h0k/"]),
        hideInStreamerMode: !0,
        buildLayout: () => [_]
    }),
    O = (0, u.i4)(o.X.SESSIONS_SIDEBAR_ITEM, {
        useTitle: () => g.intl.string(g.t["+1h0k/"]),
        getLegacySearchKey: () => (0, T.WJ)("SessionsPanel") ? void 0 : E.H.PRIVACY_ENCRYPTION_VERIFIED_DEVICES_V2,
        icon: l.LaptopPhoneIcon,
        trailing: {
            type: a.S.BADGE_NEW,
            getDismissibleContentTypes: () => [s.M.AUTH_SESSIONS_NEW]
        },
        buildLayout: () => (0, T.WJ)("SessionsPanel") ? [I] : [c]
    })