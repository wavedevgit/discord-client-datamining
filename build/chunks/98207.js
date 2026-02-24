/** chunk id: 98207, original params: e,t,s (module,exports,require) **/
"use strict";
s.d(t, {
    A: () => a
});
var r = s(562465),
    n = s(73153),
    i = s(670492),
    o = s(652215);
let a = {
    enable(e) {
        let {
            code: t,
            secret: s
        } = e;
        return r.Bo.post({
            url: o.Rsh.MFA_TOTP_ENABLE,
            body: {
                code: t,
                secret: s
            },
            oldFormErrors: !0,
            rejectWithError: !1
        }).then(e => n.h.dispatch({
            type: "MFA_ENABLE_SUCCESS",
            token: e.body.token,
            codes: e.body.backup_codes
        }))
    },
    disable() {
        r.Bo.post({
            url: o.Rsh.MFA_TOTP_DISABLE,
            oldFormErrors: !0,
            rejectWithError: !1
        }).then(e => {
            let {
                body: {
                    token: t
                }
            } = e;
            return n.h.dispatch({
                type: "MFA_DISABLE_SUCCESS",
                token: t
            })
        })
    },
    enableSMS: () => (n.h.dispatch({
        type: "MFA_SMS_TOGGLE"
    }), r.Bo.post({
        url: o.Rsh.MFA_SMS_ENABLE,
        oldFormErrors: !0,
        rejectWithError: !1
    }).then(e => (n.h.dispatch({
        type: "MFA_SMS_TOGGLE_COMPLETE"
    }), e), e => {
        throw n.h.dispatch({
            type: "MFA_SMS_TOGGLE_COMPLETE"
        }), e
    })),
    disableSMS: e => (n.h.dispatch({
        type: "MFA_SMS_TOGGLE"
    }), r.Bo.post({
        url: o.Rsh.MFA_SMS_DISABLE,
        body: {
            password: e
        },
        oldFormErrors: !0,
        rejectWithError: !1
    }).then(e => (n.h.dispatch({
        type: "MFA_SMS_TOGGLE_COMPLETE"
    }), e), e => {
        throw n.h.dispatch({
            type: "MFA_SMS_TOGGLE_COMPLETE"
        }), e
    })),
    sendMFABackupCodesVerificationKeyEmail: e => r.Bo.post({
        url: o.Rsh.MFA_SEND_VERIFICATION_KEY,
        body: {
            password: e
        },
        oldFormErrors: !0,
        rejectWithError: !1
    }).then(e => n.h.dispatch({
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
            viewNonce: s,
            regenerateNonce: a
        } = i.A.getNonces();
        return r.Bo.post({
            url: o.Rsh.MFA_CODES_VERIFICATION,
            body: {
                key: e,
                nonce: t ? a : s,
                regenerate: t
            },
            oldFormErrors: !0,
            rejectWithError: !1
        }).then(t => n.h.dispatch({
            type: "MFA_VIEW_BACKUP_CODES",
            codes: t.body.backup_codes,
            key: e
        }), e => {
            throw e
        })
    },
    clearBackupCodes() {
        n.h.dispatch({
            type: "MFA_CLEAR_BACKUP_CODES"
        })
    }
}