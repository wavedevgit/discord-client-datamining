/** chunk id: 50960, original params: t,e,i (module,exports,require) **/
i.d(e, {
    W: () => u
});
var n = i(968011),
    l = i(419954),
    s = i(253932),
    a = i(780964),
    r = i(985018);
let u = (0, l.zD)(a.X.CHAT_TEXT_BOX_MENTION_SUGGESTIONS, {
    useTitle: () => r.intl.string(r.t.uXQ2xT),
    useValue: s.ng.useSetting,
    setValue: s.ng.updateSetting,
    usePredicate: () => {
        let {
            enabled: t
        } = (0, n.us)("MentionSuggestionsSettings", {
            autoTrackExposure: !1
        });
        return t
    }
})