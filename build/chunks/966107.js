/** chunk id: 966107 params = (module,exports,require) **/
i.d(e, {
    JH: () => d,
    RK: () => o,
    ST: () => m,
    Sk: () => u,
    UK: () => c,
    xf: () => p
});
var n = i(562465),
    l = i(73153),
    r = i(830215),
    s = i(961523),
    a = i(652215);
async function o(t) {
    await n.Bo.put({
        url: a.Rsh.CHANNEL_RECIPIENT_ME(t),
        body: {
            consent_status: s.w.ACCEPTED
        },
        rejectWithError: !1
    }), l.h.dispatch({
        type: "MESSAGE_REQUEST_ACCEPT_OPTIMISTIC",
        channelId: t
    })
}

function d(t) {
    return n.Bo.put({
        url: a.Rsh.CHANNEL_RECIPIENT_ME(t),
        body: {
            consent_status: s.w.UNSPECIFIED
        },
        rejectWithError: !1
    })
}

function u(t) {
    return n.Bo.put({
        url: a.Rsh.CHANNEL_RECIPIENT_ME(t),
        body: {
            consent_status: s.w.PENDING
        },
        rejectWithError: !1
    })
}

function c(t) {
    return n.Bo.del({
        url: a.Rsh.CHANNEL_RECIPIENT_ME(t),
        rejectWithError: !1
    })
}

function m(t) {
    return n.Bo.put({
        url: a.Rsh.CHANNEL_RECIPIENT_REJECT_BATCH(),
        body: {
            channel_ids: t
        },
        rejectWithError: !1
    })
}

function p() {
    r.A.getLocationMetadata()
}