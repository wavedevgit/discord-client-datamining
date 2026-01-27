/** Chunk was on 96430 **/
/** chunk id: 966107, original params: t,e,n (module,exports,require) **/
n.d(e, {
    JH: () => d,
    RK: () => u,
    ST: () => E,
    Sk: () => s,
    UK: () => c,
    xf: () => A
});
var r = n(562465),
    i = n(73153),
    a = n(830215),
    l = n(961523),
    o = n(652215);
async function u(t) {
    await r.Bo.put({
        url: o.Rsh.CHANNEL_RECIPIENT_ME(t),
        body: {
            consent_status: l.w.ACCEPTED
        },
        rejectWithError: !1
    }), i.h.dispatch({
        type: "MESSAGE_REQUEST_ACCEPT_OPTIMISTIC",
        channelId: t
    })
}

function d(t) {
    return r.Bo.put({
        url: o.Rsh.CHANNEL_RECIPIENT_ME(t),
        body: {
            consent_status: l.w.UNSPECIFIED
        },
        rejectWithError: !1
    })
}

function s(t) {
    return r.Bo.put({
        url: o.Rsh.CHANNEL_RECIPIENT_ME(t),
        body: {
            consent_status: l.w.PENDING
        },
        rejectWithError: !1
    })
}

function c(t) {
    return r.Bo.del({
        url: o.Rsh.CHANNEL_RECIPIENT_ME(t),
        rejectWithError: !1
    })
}

function E(t) {
    return r.Bo.put({
        url: o.Rsh.CHANNEL_RECIPIENT_REJECT_BATCH(),
        body: {
            channel_ids: t
        },
        rejectWithError: !1
    })
}

function A() {
    a.A.getLocationMetadata()
}