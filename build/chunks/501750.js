/** chunk id: 501750, original params: t,e,i (module,exports,require) **/
i.d(e, {
    y: () => g
});
var n = i(934551),
    l = i(419954),
    s = i(933297),
    r = i(780964),
    a = i(358776),
    u = i(517235),
    o = i(965304),
    d = i(485079),
    A = i(531525),
    T = i(985018);
let S = (0, l.t_)(r.X.NITRO_PANEL, {
        usePredicate: () => !(0, a.dk)("LegacyNitroPanel"),
        useTitle: () => T.intl.string(T.t.Ipxkog),
        StronglyDiscouragedCustomComponent: u.A,
        buildLayout: () => []
    }),
    E = (0, l.t_)(r.X.NITRO_PANEL, {
        usePredicate: () => (0, a.dk)("NitroPanel"),
        useTitle: () => T.intl.string(T.t.Ipxkog),
        buildLayout: () => [d.r]
    }),
    g = (0, l.i4)(r.X.NITRO_SIDEBAR_ITEM, {
        useTitle: () => T.intl.string(T.t.Ipxkog),
        getLegacySearchKey: () => (0, a.WJ)("NitroPanel") ? void 0 : A.H.PREMIUM,
        icon: n.NitroWheelIcon,
        trailing: {
            type: s.Si.STRONGLY_DISCOURAGED_CUSTOM,
            useCustomDecoration: (t, e) => (0, o.e)(e)
        },
        buildLayout: () => (0, a.WJ)("NitroPanel") ? [E] : [S]
    })