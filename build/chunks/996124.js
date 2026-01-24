/** Chunk was on 64992 **/
/** chunk id: 996124, original params: e,t,n (module,exports,require) **/
n.d(t, {
    Q: () => a,
    _: () => r
});
var i = n(652215),
    l = n(790782),
    s = n(985018);
let r = e => [{
        label: s.intl.string(s.t["HVah/3"]),
        value: i.orn.ALL_MESSAGES
    }, {
        label: s.intl.string(s.t["tu+ZWJ"]),
        value: i.orn.ONLY_MENTIONS
    }, {
        label: s.intl.string(s.t.X4wWUi),
        value: i.orn.NO_MESSAGES
    }],
    a = e => [{
        label: s.intl.string(s.t["HVah/3"]),
        value: l.e.ALL_MESSAGES
    }, {
        value: l.e.ONLY_MENTIONS,
        label: s.intl.string(s.t["tu+ZWJ"]),
        disabled: (null == e ? void 0 : e.notificationSetting) === i.orn.ALL_MESSAGES
    }]