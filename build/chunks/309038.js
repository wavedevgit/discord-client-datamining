/** chunk id: 309038, original params: t,e,i (module,exports,require) **/
i.d(e, {
    L: () => A
});
var n = i(753806),
    l = i(145331),
    s = i(419954),
    r = i(253932),
    a = i(780964),
    u = i(358776),
    o = i(652215),
    d = i(985018);
let A = (0, s.Qx)(a.X.CHAT_MESSAGE_SEARCH_DEFAULT_DM_SEARCH_BEHAVIOR, {
    useTitle: () => (0, u.bp)("DefaultDMSearchBehavior") ? d.intl.string(d.t.VkoLsy) : d.intl.string(d.t["NxjN+q"]),
    useSearchTerms: () => [d.intl.string(d.t["t4+fbe"])],
    useOptions: function() {
        let t = (0, u.bp)("DefaultDMSearchBehavior");
        return [{
            name: t ? d.intl.string(d.t.E9JM4J) : d.intl.string(d.t["t+fGsk"]),
            value: 0
        }, {
            name: t ? d.intl.string(d.t["Kr+lPi"]) : d.intl.string(d.t.MwlEGN),
            value: 1
        }]
    },
    useValue: () => +!!r.Hu.useSetting(),
    setValue: t => {
        let e = 1 === t;
        e ? n.A.cleanUpPrivateChannelSearchState() : n.A.cleanUpSearchState({
            type: o.I4_.DMS
        }), (0, l._k)({
            prevIsCrossDMSettingEnabled: r.Hu.getSetting(),
            isCrossDMSettingEnabled: e,
            location: l.vy.USER_SETTINGS
        }), r.Hu.updateSetting(e)
    }
})