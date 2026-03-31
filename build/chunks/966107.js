/** chunk id: 966107 params = (module,exports,require) **/
i.d(t, {
    JH: () => c,
    RK: () => o,
    ST: () => m,
    Sk: () => d,
    UK: () => u,
    xf: () => _
});
var n = i(562465),
    a = i(73153),
    l = i(830215),
    s = i(961523),
    r = i(652215);
async function o(e) {
    await n.Bo.put({
        url: r.Rsh.CHANNEL_RECIPIENT_ME(e),
        body: {
            consent_status: s.w.ACCEPTED
        },
        rejectWithError: !1
    }), a.h.dispatch({
        type: "MESSAGE_REQUEST_ACCEPT_OPTIMISTIC",
        channelId: e
    })
}

function c(e) {
    return n.Bo.put({
        url: r.Rsh.CHANNEL_RECIPIENT_ME(e),
        body: {
            consent_status: s.w.UNSPECIFIED
        },
        rejectWithError: !1
    })
}

function d(e) {
    return n.Bo.put({
        url: r.Rsh.CHANNEL_RECIPIENT_ME(e),
        body: {
            consent_status: s.w.PENDING
        },
        rejectWithError: !1
    })
}

function u(e) {
    return n.Bo.del({
        url: r.Rsh.CHANNEL_RECIPIENT_ME(e),
        rejectWithError: !1
    })
}

function m(e) {
    return n.Bo.put({
        url: r.Rsh.CHANNEL_RECIPIENT_REJECT_BATCH(),
        body: {
            channel_ids: e
        },
        rejectWithError: !1
    })
}

function _() {
    l.A.getLocationMetadata()
}