/** chunk id: 966107, original params: e,t,n (module,exports,require) **/
n.d(t, {
    JH: () => c,
    RK: () => o,
    ST: () => p,
    Sk: () => u,
    UK: () => d,
    xf: () => f
});
var r = n(562465),
    l = n(73153),
    i = n(830215),
    a = n(961523),
    s = n(652215);
async function o(e) {
    await r.Bo.put({
        url: s.Rsh.CHANNEL_RECIPIENT_ME(e),
        body: {
            consent_status: a.w.ACCEPTED
        },
        rejectWithError: !1
    }), l.h.dispatch({
        type: "MESSAGE_REQUEST_ACCEPT_OPTIMISTIC",
        channelId: e
    })
}

function c(e) {
    return r.Bo.put({
        url: s.Rsh.CHANNEL_RECIPIENT_ME(e),
        body: {
            consent_status: a.w.UNSPECIFIED
        },
        rejectWithError: !1
    })
}

function u(e) {
    return r.Bo.put({
        url: s.Rsh.CHANNEL_RECIPIENT_ME(e),
        body: {
            consent_status: a.w.PENDING
        },
        rejectWithError: !1
    })
}

function d(e) {
    return r.Bo.del({
        url: s.Rsh.CHANNEL_RECIPIENT_ME(e),
        rejectWithError: !1
    })
}

function p(e) {
    return r.Bo.put({
        url: s.Rsh.CHANNEL_RECIPIENT_REJECT_BATCH(),
        body: {
            channel_ids: e
        },
        rejectWithError: !1
    })
}

function f() {
    i.A.getLocationMetadata()
}