/** chunk id: 863671 params = (module,exports,require) **/
n.d(t, {
    $: () => p,
    C: () => h
});
var i = n(64700),
    s = n(934551),
    l = n(554146),
    a = n(200921),
    r = n(419954),
    o = n(933297),
    d = n(780964),
    c = n(358776),
    u = n(119762),
    _ = n(119695),
    g = n(766761),
    A = n(985018);
let m = (0, r.zZ)(d.X.SESSIONS_CATEGORY, {
        buildLayout: () => [_.I, g.A],
        initialize: () => ((0, a.GY)(), () => {
            (0, a.ZQ)()
        }),
        useInlineNotice: function() {
            return i.useMemo(() => ({
                type: o.lT.STRONGLY_DISCOURAGED_CUSTOM,
                notice: u.jH
            }), [])
        }
    }),
    h = (0, r.t_)(d.X.SESSIONS_PANEL, {
        useTitle: () => (0, c._A)("SessionsPanel") ? A.intl.string(A.t.mEndXM) : A.intl.string(A.t["+1h0k/"]),
        hideInStreamerMode: !0,
        buildLayout: () => [m]
    }),
    p = (0, r.i4)(d.X.SESSIONS_SIDEBAR_ITEM, {
        useTitle: () => A.intl.string(A.t["+1h0k/"]),
        icon: s.LaptopPhoneIcon,
        getDismissibleBadges: function() {
            return [{
                badgeType: o.Xi.NEW,
                dismissibleContent: l.M.AUTH_SESSIONS_NEW
            }]
        },
        usePredicate: () => !(0, c._A)("SessionsPanel"),
        buildLayout: () => [h]
    })