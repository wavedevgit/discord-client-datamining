/** chunk id: 236986 params = (module,exports,require) **/
n.d(t, {
    L: () => u
});
var i = n(753806),
    s = n(145331),
    l = n(419954),
    r = n(253932),
    a = n(780964),
    o = n(358776),
    d = n(652215),
    c = n(985018);
let u = (0, l.Qx)(a.X.CHAT_MESSAGE_SEARCH_DEFAULT_DM_SEARCH_BEHAVIOR, {
    useTitle: () => (0, o.bp)("DefaultDMSearchBehavior") ? c.intl.string(c.t.VkoLsy) : c.intl.string(c.t["NxjN+q"]),
    useSearchTerms: () => [c.intl.string(c.t["t4+fbe"])],
    useOptions: function() {
        let e = (0, o.bp)("DefaultDMSearchBehavior");
        return [{
            name: e ? c.intl.string(c.t.E9JM4J) : c.intl.string(c.t["t+fGsk"]),
            value: 0
        }, {
            name: e ? c.intl.string(c.t["Kr+lPi"]) : c.intl.string(c.t.MwlEGN),
            value: 1
        }]
    },
    useValue: () => +!!r.Hu.useSetting(),
    setValue: e => {
        let t = 1 === e;
        t ? i.A.cleanUpPrivateChannelSearchState() : i.A.cleanUpSearchState({
            type: d.I4_.DMS
        }), (0, s._k)({
            prevIsCrossDMSettingEnabled: r.Hu.getSetting(),
            isCrossDMSettingEnabled: t,
            location: s.vy.USER_SETTINGS
        }), r.Hu.updateSetting(t)
    }
})