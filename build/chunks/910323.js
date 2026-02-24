/** chunk id: 910323, original params: e,_,n (module,exports,require) **/
n.d(_, {
    i: () => d
}), n(417597);
var a = n(832712),
    t = n(543465),
    i = n(477427),
    o = n(393432),
    c = n(24873),
    r = n(652215),
    s = n(355097);

function d(e, _) {
    let n = t.Ay.getGuildFlags(e);
    _ === c.N9.ALL_MESSAGES ? a.A.updateGuildNotificationSettings(e, {
        message_notifications: r.orn.ALL_MESSAGES,
        flags: (0, o.md)(n, s.n3.UNREADS_ALL_MESSAGES)
    }, i.fd.PresetAll) : _ === c.N9.MENTIONS ? a.A.updateGuildNotificationSettings(e, {
        message_notifications: r.orn.ONLY_MENTIONS,
        flags: (0, o.md)(n, s.n3.UNREADS_ONLY_MENTIONS)
    }, i.fd.PresetMentions) : _ === c.N9.NOTHING && a.A.updateGuildNotificationSettings(e, {
        message_notifications: r.orn.NO_MESSAGES,
        flags: (0, o.md)(n, s.n3.UNREADS_ONLY_MENTIONS)
    }, i.fd.PresetNothing)
}