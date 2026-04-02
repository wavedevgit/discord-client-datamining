/** chunk id: 114074 params = (module,exports,require) **/
n.d(t, {
    K: () => h
});
var i = n(311907),
    s = n(775602),
    l = n(502229),
    a = n(47671),
    r = n(419954),
    o = n(933297),
    d = n(780964),
    c = n(123857),
    u = n(858897),
    m = n(506305),
    g = n(69551),
    _ = n(225216),
    x = n(866352),
    A = n(985018);
let h = (0, r.zZ)(d.X.DISPLAY_THEME_CATEGORY, {
    useTitle: () => A.intl.string(A.t.Ksh3ik),
    useInlineNotice: function() {
        return (0, i.bG)([s.A], () => s.A.useForcedColors) ? {
            type: o.lT.INLINE_NOTICE,
            noticeType: "info",
            useText: () => (0, l.D)() ? A.intl.format(A.t.Jae48E, {
                onClick: () => {
                    (0, u.openUserSettings)(d.X.SYNC_FORCED_COLORS)
                }
            }) : A.intl.string(A.t.AUMSZP)
        } : null
    },
    useHeaderDecoration: function() {
        return (0, i.bG)([a.A, s.A], () => s.A.useForcedColors || a.A.isPreview) ? null : {
            type: o.WX.BUTTON_GROUP,
            buttons: [{
                id: "open-client-themes-button",
                type: o.UV.BUTTON,
                useText: () => A.intl.string(A.t["E+COuA"]),
                onClick: c.J3
            }]
        }
    },
    buildLayout: () => [_.k, g.l, m.p, x.W]
})