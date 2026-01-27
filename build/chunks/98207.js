/** Chunk was on 78811 **/
/** chunk id: 98207, original params: e,t,r (module,exports,require) **/
"use strict";
r.d(t, {
    A: () => a
});
var n = r(562465),
    o = r(73153),
    s = r(670492),
    i = r(652215);
let a = {
    enable(e) {
        let {
            code: t,
            secret: r
        } = e;
        return n.Bo.post({
            url: i.Rsh.MFA_TOTP_ENABLE,
            body: {
                code: t,
                secret: r
            },
            oldFormErrors: !0,
            rejectWithError: !1
        }).then(e => o.h.dispatch({
            type: "MFA_ENABLE_SUCCESS",
            token: e.body.token,
            codes: e.body.backup_codes
        }))
    },
    disable() {
        n.Bo.post({
            url: i.Rsh.MFA_TOTP_DISABLE,
            oldFormErrors: !0,
            rejectWithError: !1
        }).then(e => {
            let {
                body: {
                    token: t
                }
            } = e;
            return o.h.dispatch({
                type: "MFA_DISABLE_SUCCESS",
                token: t
            })
        })
    },
    enableSMS: () => (o.h.dispatch({
        type: "MFA_SMS_TOGGLE"
    }), n.Bo.post({
        url: i.Rsh.MFA_SMS_ENABLE,
        oldFormErrors: !0,
        rejectWithError: !1
    }).then(e => (o.h.dispatch({
        type: "MFA_SMS_TOGGLE_COMPLETE"
    }), e), e => {
        throw o.h.dispatch({
            type: "MFA_SMS_TOGGLE_COMPLETE"
        }), e
    })),
    disableSMS: e => (o.h.dispatch({
        type: "MFA_SMS_TOGGLE"
    }), n.Bo.post({
        url: i.Rsh.MFA_SMS_DISABLE,
        body: {
            password: e
        },
        oldFormErrors: !0,
        rejectWithError: !1
    }).then(e => (o.h.dispatch({
        type: "MFA_SMS_TOGGLE_COMPLETE"
    }), e), e => {
        throw o.h.dispatch({
            type: "MFA_SMS_TOGGLE_COMPLETE"
        }), e
    })),
    sendMFABackupCodesVerificationKeyEmail: e => n.Bo.post({
        url: i.Rsh.MFA_SEND_VERIFICATION_KEY,
        body: {
            password: e
        },
        oldFormErrors: !0,
        rejectWithError: !1
    }).then(e => o.h.dispatch({
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
            viewNonce: r,
            regenerateNonce: a
        } = s.A.getNonces();
        return n.Bo.post({
            url: i.Rsh.MFA_CODES_VERIFICATION,
            body: {
                key: e,
                nonce: t ? a : r,
                regenerate: t
            },
            oldFormErrors: !0,
            rejectWithError: !1
        }).then(t => o.h.dispatch({
            type: "MFA_VIEW_BACKUP_CODES",
            codes: t.body.backup_codes,
            key: e
        }), e => {
            throw e
        })
    },
    clearBackupCodes() {
        o.h.dispatch({
            type: "MFA_CLEAR_BACKUP_CODES"
        })
    }
}