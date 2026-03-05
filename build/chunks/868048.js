/** chunk id: 868048 params = (module,exports,require) **/
n.d(t, {
    A: () => d
});
var i = n(832712),
    l = n(543465),
    s = n(477427),
    a = n(393432),
    r = n(652215),
    o = n(790782),
    c = n(355097);

function d(e, t, n) {
    i.A.updateChannelOverrideSettings(e, t, {
        flags: (0, a.mD)(l.Ay.getChannelIdFlags(e, t), n)
    }, s.G_.unreads(n === c.vv.UNREADS_ALL_MESSAGES ? o.e.ALL_MESSAGES : o.e.ONLY_MENTIONS), {
        object: r.ZSU.NOTIFICATION_SETTING_UNREAD_NOTICE
    })
}