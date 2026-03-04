/** chunk id: 890801, original params: t,e,i (module,exports,require) **/
i.d(e, {
    $: () => E
});
var n = i(934551),
    l = i(419954),
    s = i(780964),
    a = i(358776),
    r = i(490510),
    u = i(635603),
    o = i(531525),
    d = i(985018);
let A = (0, l.zZ)(s.X.KEYBINDS_CATEGORY, {
        buildLayout: () => [u.O]
    }),
    T = (0, l.t_)(s.X.KEYBINDS_PANEL, {
        usePredicate: () => !(0, a.dk)("LegacyKeybindsPanel"),
        useTitle: () => d.intl.string(d.t.T9DA2K),
        StronglyDiscouragedCustomComponent: r.A,
        buildLayout: () => []
    }),
    S = (0, l.t_)(s.X.KEYBINDS_PANEL, {
        usePredicate: () => (0, a.dk)("KeybindsPanel"),
        useTitle: () => d.intl.string(d.t.T9DA2K),
        buildLayout: () => [A]
    }),
    E = (0, l.i4)(s.X.KEYBINDS_SIDEBAR_ITEM, {
        useTitle: () => d.intl.string(d.t.T9DA2K),
        getLegacySearchKey: () => (0, a.WJ)("KeybindsPanel") ? void 0 : o.H.KEYBINDS,
        icon: n.KeyboardIcon,
        buildLayout: () => (0, a.WJ)("KeybindsPanel") ? [S] : [T]
    })