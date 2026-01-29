/** Chunk was on 4670 **/
/** chunk id: 334219, original params: e,t,i (module,exports,require) **/
i.d(t, {
    z: () => E
});
var n = i(627968),
    l = i(311907),
    s = i(3137),
    r = i(454292),
    a = i(419954),
    u = i(780964),
    o = i(358776),
    d = i(74695),
    T = i(531525),
    c = i(985018),
    A = i(625587);
let S = (0, a.t_)(u.X.POGGERMODE_PANEL, {
        usePredicate: () => !(0, o.dk)("LegacyPoggermodePanel"),
        useTitle: () => c.intl.string(c.t.AtCukI),
        StronglyDiscouragedCustomComponent: r.A,
        buildLayout: () => []
    }),
    _ = (0, a.t_)(u.X.POGGERMODE_PANEL, {
        usePredicate: () => (0, o.dk)("PoggermodePanel"),
        useTitle: () => c.intl.string(c.t.AtCukI),
        buildLayout: () => [d.c]
    }),
    E = (0, a.i4)(u.X.POGGERMODE_SIDEBAR_ITEM, {
        useTitle: () => c.intl.string(c.t.AtCukI),
        getLegacySearchKey: () => (0, o.WJ)("PoggermodePanel") ? void 0 : T.H.POGGERMODE,
        icon: () => (0, n.jsx)("img", {
            alt: "",
            src: i(724405),
            className: A.$
        }),
        usePredicate: () => (0, l.bG)([s.A], () => s.A.settingsVisible),
        buildLayout: () => (0, o.WJ)("PoggermodePanel") ? [_] : [S]
    })