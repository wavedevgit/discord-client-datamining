/** Chunk was on 4670 **/
/** chunk id: 247865, original params: e,t,i (module,exports,require) **/
i.d(t, {
    k: () => d
});
var n = i(793574),
    l = i(419954),
    s = i(954571),
    r = i(253932),
    a = i(780964),
    u = i(652215),
    o = i(985018);
let d = (0, l.zD)(a.X.CHAT_STICKERS_AUTOCOMPLETE, {
    useTitle: () => o.intl.string(o.t["29xPVZ"]),
    useSubtitle: () => o.intl.string(o.t["/eVrj8"]),
    useValue: r.ML.useSetting,
    setValue: e => {
        s.default.track(u.HAw.STICKERS_IN_AUTOCOMPLETE_TOGGLED, {
            enabled: e,
            location: {
                section: u.JJy.SETTINGS_TEXT_AND_IMAGES
            },
            location_stack: [n.A.TEXT_AND_IMAGES]
        }), r.ML.updateSetting(e)
    }
})