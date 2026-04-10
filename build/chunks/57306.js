/** chunk id: 57306 params = (module,exports,require) **/
n.d(t, {
    T: () => c
});
var i = n(704591),
    s = n(419954),
    l = n(954571),
    r = n(253932),
    a = n(780964),
    o = n(652215),
    d = n(985018);
let c = (0, s.zD)(a.X.CHAT_SOUNDMOJI_AUTOCOMPLETE, {
    useTitle: () => d.intl.string(d.t["CtYr+U"]),
    useSubtitle: () => d.intl.string(d.t.hrSIhN),
    useValue: r.eK.useSetting,
    setValue: e => {
        l.default.track(o.HAw.SOUNDMOJI_IN_AUTOCOMPLETE_TOGGLED, {
            checked: e,
            location: {
                section: o.JJy.SETTINGS_TEXT_AND_IMAGES
            }
        }), r.eK.updateSetting(e)
    },
    usePredicate: () => (0, i.AA)({
        location: "SoundmojiAutocomplete"
    })
})