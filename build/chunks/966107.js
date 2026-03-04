/** chunk id: 966107, original params: t,e,n (module,exports,require) **/
n.d(e, {
    JH: () => d,
    RK: () => o,
    ST: () => A,
    Sk: () => u,
    UK: () => c,
    xf: () => p
});
var i = n(562465),
    l = n(73153),
    r = n(830215),
    a = n(961523),
    s = n(652215);
async function o(t) {
    await i.Bo.put({
        url: s.Rsh.CHANNEL_RECIPIENT_ME(t),
        body: {
            consent_status: a.w.ACCEPTED
        },
        rejectWithError: !1
    }), l.h.dispatch({
        type: "MESSAGE_REQUEST_ACCEPT_OPTIMISTIC",
        channelId: t
    })
}

function d(t) {
    return i.Bo.put({
        url: s.Rsh.CHANNEL_RECIPIENT_ME(t),
        body: {
            consent_status: a.w.UNSPECIFIED
        },
        rejectWithError: !1
    })
}

function u(t) {
    return i.Bo.put({
        url: s.Rsh.CHANNEL_RECIPIENT_ME(t),
        body: {
            consent_status: a.w.PENDING
        },
        rejectWithError: !1
    })
}

function c(t) {
    return i.Bo.del({
        url: s.Rsh.CHANNEL_RECIPIENT_ME(t),
        rejectWithError: !1
    })
}

function A(t) {
    return i.Bo.put({
        url: s.Rsh.CHANNEL_RECIPIENT_REJECT_BATCH(),
        body: {
            channel_ids: t
        },
        rejectWithError: !1
    })
}

function p() {
    r.A.getLocationMetadata()
}