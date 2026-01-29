/** Chunk was on 4670 **/
/** chunk id: 744344, original params: e,t,i (module,exports,require) **/
i.d(t, {
    r: () => c
}), i(228524);
var n = i(311907),
    l = i(684013),
    s = i(592598),
    r = i(419954),
    a = i(780964),
    u = i(790076),
    o = i(985018);
let d = (0, u.ze)(!0);

function T(e) {
    return (0, r.zD)(e.key, {
        useTitle: () => o.intl.string(e.title),
        useSubtitle: () => o.intl.string(e.description),
        useValue: () => !(0, n.bG)([s.A], () => s.A.getDisabledNotifications().has(e.disabledSetting)),
        setValue: t => {
            l.A.setNotificationDisabledSetting(e.disabledSetting, !t)
        },
        usePredicate: e.usePredicate
    })
}
let c = (0, r.FW)(a.X.OVERLAY_NOTIFICATIONS_LIST, {
    buildLayout: () => d.map(T)
})