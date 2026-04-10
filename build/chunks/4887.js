/** chunk id: 4887 params = (module,exports,require) **/
n.d(t, {
    $: () => f,
    C: () => T
});
var i = n(64700),
    s = n(934551),
    l = n(554146),
    r = n(974544),
    a = n(200921),
    o = n(419954),
    d = n(933297),
    c = n(780964),
    u = n(358776),
    m = n(102255),
    g = n(416047),
    _ = n(222994),
    x = n(342537),
    h = n(985018);
let A = (0, o.zZ)(c.X.SESSIONS_CATEGORY, {
        useTitle: () => h.intl.string(h.t.mEndXM),
        useSubtitle: () => h.intl.string(h.t.b7ZpTM),
        initialize: () => ((0, a.GY)(), () => {
            (0, a.ZQ)()
        }),
        buildLayout: () => [g.I, x.A, _.V],
        useSearchTerms: () => [h.intl.string(h.t["+1h0k/"]), h.intl.string(h.t.LLS19o), h.intl.string(h.t.xx1MWc), h.intl.string(h.t.lSWsrd)]
    }),
    p = (0, o.zZ)(c.X.SESSIONS_CATEGORY, {
        useSearchTerms: () => [h.intl.string(h.t["+1h0k/"]), h.intl.string(h.t.LLS19o), h.intl.string(h.t.xx1MWc), h.intl.string(h.t.Vij32M), h.intl.string(h.t.lSWsrd)],
        buildLayout: () => [g.I, x.A],
        initialize: () => ((0, a.GY)(), () => {
            (0, a.ZQ)()
        }),
        useInlineNotice: function() {
            return i.useMemo(() => ({
                type: d.lT.STRONGLY_DISCOURAGED_CUSTOM,
                notice: m.jH
            }), [])
        }
    }),
    T = (0, o.t_)(c.X.SESSIONS_PANEL, {
        useTitle: () => (0, u._A)("SessionsPanel") ? h.intl.string(h.t.mEndXM) : h.intl.string(h.t["+1h0k/"]),
        useObscuredNotice: r.L,
        buildLayout: () => (0, u.pC)("SessionsPanel") ? [A] : [p]
    }),
    f = (0, o.i4)(c.X.SESSIONS_SIDEBAR_ITEM, {
        useTitle: () => h.intl.string(h.t["+1h0k/"]),
        icon: s.LaptopPhoneIcon,
        getDismissibleBadges: function() {
            return [{
                badgeType: d.Xi.NEW,
                dismissibleContent: l.M.AUTH_SESSIONS_NEW
            }]
        },
        usePredicate: () => !(0, u._A)("SessionsPanel"),
        buildLayout: () => [T]
    })