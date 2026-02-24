/** chunk id: 98207, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => r
});
var i = n(562465),
    s = n(73153),
    a = n(670492),
    l = n(652215);
let r = {
    enable(e) {
        let {
            code: t,
            secret: n
        } = e;
        return i.Bo.post({
            url: l.Rsh.MFA_TOTP_ENABLE,
            body: {
                code: t,
                secret: n
            },
            oldFormErrors: !0,
            rejectWithError: !1
        }).then(e => s.h.dispatch({
            type: "MFA_ENABLE_SUCCESS",
            token: e.body.token,
            codes: e.body.backup_codes
        }))
    },
    disable() {
        i.Bo.post({
            url: l.Rsh.MFA_TOTP_DISABLE,
            oldFormErrors: !0,
            rejectWithError: !1
        }).then(e => {
            let {
                body: {
                    token: t
                }
            } = e;
            return s.h.dispatch({
                type: "MFA_DISABLE_SUCCESS",
                token: t
            })
        })
    },
    enableSMS: () => (s.h.dispatch({
        type: "MFA_SMS_TOGGLE"
    }), i.Bo.post({
        url: l.Rsh.MFA_SMS_ENABLE,
        oldFormErrors: !0,
        rejectWithError: !1
    }).then(e => (s.h.dispatch({
        type: "MFA_SMS_TOGGLE_COMPLETE"
    }), e), e => {
        throw s.h.dispatch({
            type: "MFA_SMS_TOGGLE_COMPLETE"
        }), e
    })),
    disableSMS: e => (s.h.dispatch({
        type: "MFA_SMS_TOGGLE"
    }), i.Bo.post({
        url: l.Rsh.MFA_SMS_DISABLE,
        body: {
            password: e
        },
        oldFormErrors: !0,
        rejectWithError: !1
    }).then(e => (s.h.dispatch({
        type: "MFA_SMS_TOGGLE_COMPLETE"
    }), e), e => {
        throw s.h.dispatch({
            type: "MFA_SMS_TOGGLE_COMPLETE"
        }), e
    })),
    sendMFABackupCodesVerificationKeyEmail: e => i.Bo.post({
        url: l.Rsh.MFA_SEND_VERIFICATION_KEY,
        body: {
            password: e
        },
        oldFormErrors: !0,
        rejectWithError: !1
    }).then(e => s.h.dispatch({
        type: "MFA_SEND_VERIFICATION_KEY",
        nonces: {
            viewNonce: e.body.nonce,
            regenerateNonce: e.body.regenerate_nonce
        }
    }), e => {
        throw e
    }),
    confirmViewBackupCodes(e, t) {
        let {
            viewNonce: n,
            regenerateNonce: r
        } = a.A.getNonces();
        return i.Bo.post({
            url: l.Rsh.MFA_CODES_VERIFICATION,
            body: {
                key: e,
                nonce: t ? r : n,
                regenerate: t
            },
            oldFormErrors: !0,
            rejectWithError: !1
        }).then(t => s.h.dispatch({
            type: "MFA_VIEW_BACKUP_CODES",
            codes: t.body.backup_codes,
            key: e
        }), e => {
            throw e
        })
    },
    clearBackupCodes() {
        s.h.dispatch({
            type: "MFA_CLEAR_BACKUP_CODES"
        })
    }
}