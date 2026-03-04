/** chunk id: 247865, original params: t,e,i (module,exports,require) **/
i.d(e, {
    k: () => A
});
var n = i(793574),
    l = i(419954),
    s = i(954571),
    a = i(253932),
    r = i(780964),
    u = i(358776),
    o = i(652215),
    d = i(985018);
let A = (0, l.zD)(r.X.CHAT_STICKERS_AUTOCOMPLETE, {
    useTitle: () => (0, u.bp)("StickersInAutocomplete") ? d.intl.string(d.t["d+It2U"]) : d.intl.string(d.t["29xPVZ"]),
    useSubtitle: () => (0, u.bp)("StickersInAutocomplete") ? void 0 : d.intl.string(d.t["/eVrj8"]),
    useValue: a.ML.useSetting,
    setValue: t => {
        s.default.track(o.HAw.STICKERS_IN_AUTOCOMPLETE_TOGGLED, {
            enabled: t,
            location: {
                section: o.JJy.SETTINGS_TEXT_AND_IMAGES
            },
            location_stack: [n.A.TEXT_AND_IMAGES]
        }), a.ML.updateSetting(t)
    }
})