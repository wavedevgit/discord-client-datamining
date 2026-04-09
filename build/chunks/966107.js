/** chunk id: 966107 params = (module,exports,require) **/
n.d(e, {
    JH: () => u,
    RK: () => o,
    ST: () => h,
    Sk: () => d,
    UK: () => c,
    xf: () => A
});
var i = n(562465),
    l = n(73153),
    r = n(830215),
    s = n(961523),
    a = n(652215);
async function o(t) {
    await i.Bo.put({
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

function u(t) {
    return i.Bo.put({
        url: a.Rsh.CHANNEL_RECIPIENT_ME(t),
        body: {
            consent_status: s.w.UNSPECIFIED
        },
        rejectWithError: !1
    })
}

function d(t) {
    return i.Bo.put({
        url: a.Rsh.CHANNEL_RECIPIENT_ME(t),
        body: {
            consent_status: s.w.PENDING
        },
        rejectWithError: !1
    })
}

function c(t) {
    return i.Bo.del({
        url: a.Rsh.CHANNEL_RECIPIENT_ME(t),
        rejectWithError: !1
    })
}

function h(t) {
    return i.Bo.put({
        url: a.Rsh.CHANNEL_RECIPIENT_REJECT_BATCH(),
        body: {
            channel_ids: t
        },
        rejectWithError: !1
    })
}

function A() {
    r.A.getLocationMetadata()
}