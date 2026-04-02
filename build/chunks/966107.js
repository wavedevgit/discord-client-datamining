/** chunk id: 966107 params = (module,exports,require) **/
n.d(t, {
    JH: () => s,
    RK: () => d,
    ST: () => h,
    Sk: () => u,
    UK: () => c,
    xf: () => A
});
var i = n(562465),
    r = n(73153),
    l = n(830215),
    a = n(961523),
    o = n(652215);
async function d(e) {
    await i.Bo.put({
        url: o.Rsh.CHANNEL_RECIPIENT_ME(e),
        body: {
            consent_status: a.w.ACCEPTED
        },
        rejectWithError: !1
    }), r.h.dispatch({
        type: "MESSAGE_REQUEST_ACCEPT_OPTIMISTIC",
        channelId: e
    })
}

function s(e) {
    return i.Bo.put({
        url: o.Rsh.CHANNEL_RECIPIENT_ME(e),
        body: {
            consent_status: a.w.UNSPECIFIED
        },
        rejectWithError: !1
    })
}

function u(e) {
    return i.Bo.put({
        url: o.Rsh.CHANNEL_RECIPIENT_ME(e),
        body: {
            consent_status: a.w.PENDING
        },
        rejectWithError: !1
    })
}

function c(e) {
    return i.Bo.del({
        url: o.Rsh.CHANNEL_RECIPIENT_ME(e),
        rejectWithError: !1
    })
}

function h(e) {
    return i.Bo.put({
        url: o.Rsh.CHANNEL_RECIPIENT_REJECT_BATCH(),
        body: {
            channel_ids: e
        },
        rejectWithError: !1
    })
}

function A() {
    l.A.getLocationMetadata()
}