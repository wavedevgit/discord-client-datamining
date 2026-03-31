/** chunk id: 602146 params = (module,exports,require) **/
n.d(e, {
    RR: () => d,
    RY: () => a,
    yG: () => r
});
var l = n(562465),
    i = n(652215);
async function r(t, e, n, r, a) {
    return (await l.Bo.post({
        url: i.Rsh.STAGE_INSTANCES,
        body: {
            channel_id: t,
            topic: e,
            privacy_level: n,
            guild_scheduled_event_id: a,
            send_start_notification: r
        },
        rejectWithError: !1
    })).body
}
async function a(t, e, n) {
    return (await l.Bo.patch({
        url: i.Rsh.STAGE_INSTANCE(t),
        body: {
            topic: e,
            privacy_level: n
        },
        rejectWithError: !1
    })).body
}

function d(t) {
    return l.Bo.del({
        url: i.Rsh.STAGE_INSTANCE(t),
        rejectWithError: !1
    })
}