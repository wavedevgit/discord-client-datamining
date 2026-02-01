/** chunk id: 868048, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => u
});
var l = n(832712),
    r = n(543465),
    i = n(477427),
    a = n(393432),
    s = n(652215),
    o = n(790782),
    c = n(355097);

function u(e, t, n) {
    l.A.updateChannelOverrideSettings(e, t, {
        flags: (0, a.mD)(r.Ay.getChannelIdFlags(e, t), n)
    }, i.G_.unreads(n === c.vv.UNREADS_ALL_MESSAGES ? o.e.ALL_MESSAGES : o.e.ONLY_MENTIONS), {
        object: s.ZSU.NOTIFICATION_SETTING_UNREAD_NOTICE
    })
}