/** chunk id: 568873, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => u
});
var i = n(627968);
n(64700);
var r = n(311907),
    d = n(397927),
    s = n(832712),
    a = n(543465),
    c = n(477427),
    l = n(985018);

function u(e) {
    let t = (0, r.bG)([a.Ay], () => a.Ay.isMuteScheduledEventsEnabled(e), [e]);
    return (0, i.jsx)(d.sLh, {
        id: "mute-events",
        label: l.intl.string(l.t.ONG3Yz),
        action: () => {
            var n;
            return n = {
                mute_scheduled_events: !t
            }, void s.A.updateGuildNotificationSettings(e, n, c.G_.mutedEvents(n.mute_scheduled_events))
        },
        checked: t
    })
}