/** chunk id: 309038, original params: e,t,i (module,exports,require) **/
i.d(t, {
    L: () => d
});
var n = i(753806),
    l = i(145331),
    s = i(419954),
    r = i(253932),
    a = i(780964),
    u = i(652215),
    o = i(985018);
let d = (0, s.Qx)(a.X.CHAT_MESSAGE_SEARCH_DEFAULT_DM_SEARCH_BEHAVIOR, {
    useTitle: () => o.intl.string(o.t["NxjN+q"]),
    useSearchTerms: () => [o.intl.string(o.t["t4+fbe"])],
    useOptions: () => [{
        name: o.intl.string(o.t["t+fGsk"]),
        value: 0
    }, {
        name: o.intl.string(o.t.MwlEGN),
        value: 1
    }],
    useValue: () => +!!r.Hu.useSetting(),
    setValue: e => {
        let t = 1 === e;
        t ? n.A.cleanUpPrivateChannelSearchState() : n.A.cleanUpSearchState({
            type: u.I4_.DMS
        }), (0, l._k)({
            prevIsCrossDMSettingEnabled: r.Hu.getSetting(),
            isCrossDMSettingEnabled: t,
            location: l.vy.USER_SETTINGS
        }), r.Hu.updateSetting(t)
    }
})