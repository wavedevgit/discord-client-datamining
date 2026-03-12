/** chunk id: 290595 params = (module,exports,require) **/
n.d(t, {
    Q: () => d,
    U: () => c
});
var i = n(562465),
    s = n(73153),
    l = n(652215),
    r = n(985018);

function a(e) {
    return null != e && null != e.body && s.h.dispatch({
        type: "UPDATE_CONSENTS",
        consents: {
            ...e.body
        }
    }), e.body
}

function o(e) {
    throw Error(e.status >= 500 && e.status <= 599 ? r.intl.string(r.t.cvJdtg) : null != e && null != e.body && null != e.body.message ? e.body.message : r.intl.string(r.t.cvJdtg))
}

function d() {
    return i.Bo.get({
        url: l.Rsh.SETTINGS_CONSENT,
        oldFormErrors: !0,
        rejectWithError: !1
    }).then(a, e => Promise.reject(Error(e.body.message)))
}

function c(e, t) {
    return i.Bo.post({
        url: l.Rsh.SETTINGS_CONSENT,
        body: {
            grant: e,
            revoke: t
        },
        oldFormErrors: !0,
        rejectWithError: !1
    }).then(a, o)
}