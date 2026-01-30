/** chunk id: 566908, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    Lg: () => d,
    Sc: () => u,
    UF: () => c,
    dx: () => l
}), n(938796), n(896048);
var r = n(665260),
    i = n(626584),
    a = n(677413),
    o = n(403531),
    s = n(652215);
let l = new i.A("Scheduled Messages");

function c(e) {
    let {
        content: t,
        flags: n
    } = e, [i, o] = (0, a.A)(t);
    return i ? [o, (0, r.UI)(null != n ? n : 0, s.pr7.SUPPRESS_NOTIFICATIONS)] : [t, null != n ? n : 0]
}

function u(e) {
    let {
        location: t
    } = e;
    return o.t.useExperiment({
        location: t
    }, {
        autoTrackExposure: !1
    }).enabled
}

function d(e) {
    return {
        userId: e.user_id,
        scheduledMessageId: e.scheduled_message_id,
        sendAtTimestamp: e.send_at_timestamp,
        scheduledMessage: f(e.scheduled_message),
        state: e.state
    }
}

function f(e) {
    return {
        channelId: e.channel_id,
        content: e.content,
        type: e.type,
        flags: e.flags,
        messageReference: e.message_reference
    }
}