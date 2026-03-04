/** chunk id: 114074, original params: t,e,i (module,exports,require) **/
i.d(e, {
    K: () => I
});
var n = i(311907),
    l = i(775602),
    s = i(502229),
    a = i(47671),
    r = i(419954),
    u = i(933297),
    o = i(780964),
    d = i(70040),
    A = i(840065),
    T = i(506305),
    S = i(69551),
    E = i(225216),
    g = i(866352),
    c = i(652215),
    _ = i(985018);
let I = (0, r.zZ)(o.X.DISPLAY_THEME_CATEGORY, {
    useTitle: () => _.intl.string(_.t.Ksh3ik),
    useInlineNotice: function() {
        return (0, n.bG)([l.A], () => l.A.useForcedColors) ? {
            type: u.lT.INLINE_NOTICE,
            noticeType: "info",
            useText: () => (0, s.D)() ? _.intl.format(_.t.Jae48E, {
                onClick: () => {
                    (0, A.openUserSettings)(o.X.SYNC_FORCED_COLORS, {
                        section: c.nc_.ACCESSIBILITY
                    })
                }
            }) : _.intl.string(_.t.AUMSZP)
        } : null
    },
    useHeaderDecoration: function() {
        return (0, n.bG)([a.A, l.A], () => l.A.useForcedColors || a.A.isPreview) ? null : {
            type: u.WX.BUTTON_GROUP,
            buttons: [{
                id: "open-client-themes-button",
                type: u.UV.BUTTON,
                useText: () => _.intl.string(_.t["E+COuA"]),
                onClick: d.J3
            }]
        }
    },
    buildLayout: () => [E.k, S.l, T.p, g.W]
})