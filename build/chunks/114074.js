/** chunk id: 114074, original params: e,t,n (module,exports,require) **/
n.d(t, {
    K: () => x
});
var i = n(311907),
    s = n(775602),
    l = n(502229),
    a = n(47671),
    r = n(419954),
    o = n(933297),
    d = n(780964),
    c = n(70040),
    u = n(840065),
    _ = n(506305),
    g = n(69551),
    m = n(225216),
    A = n(866352),
    h = n(652215),
    p = n(985018);
let x = (0, r.zZ)(d.X.DISPLAY_THEME_CATEGORY, {
    useTitle: () => p.intl.string(p.t.Ksh3ik),
    useInlineNotice: function() {
        return (0, i.bG)([s.A], () => s.A.useForcedColors) ? {
            type: o.lT.INLINE_NOTICE,
            noticeType: "info",
            useText: () => (0, l.D)() ? p.intl.format(p.t.Jae48E, {
                onClick: () => {
                    (0, u.openUserSettings)(d.X.SYNC_FORCED_COLORS, {
                        section: h.nc_.ACCESSIBILITY
                    })
                }
            }) : p.intl.string(p.t.AUMSZP)
        } : null
    },
    useHeaderDecoration: function() {
        return (0, i.bG)([a.A, s.A], () => s.A.useForcedColors || a.A.isPreview) ? null : {
            type: o.WX.BUTTON_GROUP,
            buttons: [{
                id: "open-client-themes-button",
                type: o.UV.BUTTON,
                useText: () => p.intl.string(p.t["E+COuA"]),
                onClick: c.J3
            }]
        }
    },
    buildLayout: () => [m.k, g.l, _.p, A.W]
})