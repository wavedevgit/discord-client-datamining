/** chunk id: 966107 params = (module,exports,require) **/
n.d(e, {
    JH: () => u,
    RK: () => d,
    ST: () => A,
    Sk: () => s,
    UK: () => c,
    xf: () => E
});
var i = n(562465),
    r = n(73153),
    l = n(830215),
    a = n(961523),
    o = n(652215);
async function d(t) {
    await i.Bo.put({
        url: o.Rsh.CHANNEL_RECIPIENT_ME(t),
        body: {
            consent_status: a.w.ACCEPTED
        },
        rejectWithError: !1
    }), r.h.dispatch({
        type: "MESSAGE_REQUEST_ACCEPT_OPTIMISTIC",
        channelId: t
    })
}

function u(t) {
    return i.Bo.put({
        url: o.Rsh.CHANNEL_RECIPIENT_ME(t),
        body: {
            consent_status: a.w.UNSPECIFIED
        },
        rejectWithError: !1
    })
}

function s(t) {
    return i.Bo.put({
        url: o.Rsh.CHANNEL_RECIPIENT_ME(t),
        body: {
            consent_status: a.w.PENDING
        },
        rejectWithError: !1
    })
}

function c(t) {
    return i.Bo.del({
        url: o.Rsh.CHANNEL_RECIPIENT_ME(t),
        rejectWithError: !1
    })
}

function A(t) {
    return i.Bo.put({
        url: o.Rsh.CHANNEL_RECIPIENT_REJECT_BATCH(),
        body: {
            channel_ids: t
        },
        rejectWithError: !1
    })
}

function E() {
    l.A.getLocationMetadata()
}