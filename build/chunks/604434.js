/** Chunk was on 4670 **/
/** chunk id: 604434, original params: e,t,i (module,exports,require) **/
i.d(t, {
    m: () => o
});
var n = i(419954),
    l = i(954571),
    s = i(253932),
    r = i(780964),
    a = i(652215),
    u = i(985018);
let o = (0, n.zD)(r.X.CHAT_TEXT_BOX_PREVIEWS, {
    useTitle: () => u.intl.string(u.t.AqGrEI),
    useValue: s.SI.useSetting,
    setValue: e => {
        l.default.track(a.HAw.PREVIEW_MARKDOWN_TOGGLED, {
            enabled: e,
            location: {
                section: a.JJy.SETTINGS_TEXT_AND_IMAGES
            }
        }), s.SI.updateSetting(e)
    }
})