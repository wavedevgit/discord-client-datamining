/** chunk id: 966107 params = (module,exports,require) **/
n.d(e, {
    JH: () => c,
    RK: () => o,
    ST: () => u,
    Sk: () => d,
    UK: () => E,
    xf: () => _
});
var i = n(562465),
    r = n(73153),
    s = n(830215),
    a = n(961523),
    l = n(652215);
async function o(t) {
    await i.Bo.put({
        url: l.Rsh.CHANNEL_RECIPIENT_ME(t),
        body: {
            consent_status: a.w.ACCEPTED
        },
        rejectWithError: !1
    }), r.h.dispatch({
        type: "MESSAGE_REQUEST_ACCEPT_OPTIMISTIC",
        channelId: t
    })
}

function c(t) {
    return i.Bo.put({
        url: l.Rsh.CHANNEL_RECIPIENT_ME(t),
        body: {
            consent_status: a.w.UNSPECIFIED
        },
        rejectWithError: !1
    })
}

function d(t) {
    return i.Bo.put({
        url: l.Rsh.CHANNEL_RECIPIENT_ME(t),
        body: {
            consent_status: a.w.PENDING
        },
        rejectWithError: !1
    })
}

function E(t) {
    return i.Bo.del({
        url: l.Rsh.CHANNEL_RECIPIENT_ME(t),
        rejectWithError: !1
    })
}

function u(t) {
    return i.Bo.put({
        url: l.Rsh.CHANNEL_RECIPIENT_REJECT_BATCH(),
        body: {
            channel_ids: t
        },
        rejectWithError: !1
    })
}

function _() {
    s.A.getLocationMetadata()
}