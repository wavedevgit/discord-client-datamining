/** chunk id: 935066, original params: t,e,i (module,exports,require) **/
i.d(e, {
    Y: () => d
});
var n = i(311907),
    l = i(817281),
    s = i(419954),
    a = i(964404),
    r = i(253932),
    u = i(780964),
    o = i(985018);
let d = (0, s.zD)(u.X.APPEARANCE_DISPLAY_COMPACT_AVATARS, {
    useTitle: () => o.intl.string(o.t["//vhWi"]),
    usePredicate: () => r.hH.useSetting(),
    useValue: () => !(0, n.bG)([a.Ay], () => a.Ay.displayCompactAvatars),
    setValue: t => {
        l.Ay.updatedUnsyncedSettings({
            displayCompactAvatars: !t
        })
    }
})