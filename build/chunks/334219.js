/** chunk id: 334219, original params: t,e,i (module,exports,require) **/
i.d(e, {
    z: () => _
});
var n = i(627968),
    l = i(311907),
    s = i(3137),
    r = i(454292),
    a = i(419954),
    u = i(780964),
    o = i(358776),
    d = i(74695),
    A = i(531525),
    T = i(985018),
    S = i(879349);
let E = (0, a.t_)(u.X.POGGERMODE_PANEL, {
        usePredicate: () => !(0, o.dk)("LegacyPoggermodePanel"),
        useTitle: () => T.intl.string(T.t.AtCukI),
        StronglyDiscouragedCustomComponent: r.A,
        buildLayout: () => []
    }),
    g = (0, a.t_)(u.X.POGGERMODE_PANEL, {
        usePredicate: () => (0, o.dk)("PoggermodePanel"),
        useTitle: () => T.intl.string(T.t.AtCukI),
        buildLayout: () => [d.c]
    }),
    _ = (0, a.i4)(u.X.POGGERMODE_SIDEBAR_ITEM, {
        useTitle: () => T.intl.string(T.t.AtCukI),
        getLegacySearchKey: () => (0, o.WJ)("PoggermodePanel") ? void 0 : A.H.POGGERMODE,
        icon: () => (0, n.jsx)("img", {
            alt: "",
            src: i(724405),
            className: S.$
        }),
        usePredicate: () => (0, l.bG)([s.A], () => s.A.settingsVisible),
        buildLayout: () => (0, o.WJ)("PoggermodePanel") ? [g] : [E]
    })