/** chunk id: 670492, original params: e,t,r (module,exports,require) **/
"use strict";
r.d(t, {
    A: () => _
});
var s = r(735438),
    n = r.n(s),
    o = r(247775),
    i = r(311907),
    a = r(73153);
let c = !1,
    l = [],
    d = "",
    h = !1,
    p = {
        viewNonce: "",
        regenerateNonce: ""
    };
class u extends i.Ay.Store {
    static displayName = "MFAStore";
    getVerificationKey() {
        return d
    }
    getBackupCodes() {
        return l
    }
    get togglingSMS() {
        return c
    }
    getNonces() {
        return p
    }
    get hasSeenBackupPrompt() {
        return h
    }
}
let _ = new u(a.h, {
    MFA_ENABLE_SUCCESS: function(e) {
        let {
            token: t,
            codes: r
        } = e;
        void 0 !== t && o.setToken(t), l = r
    },
    MFA_DISABLE_SUCCESS: function(e) {
        let {
            token: t
        } = e;
        o.setToken(t)
    },
    MFA_SMS_TOGGLE: function() {
        c = !0
    },
    MFA_SMS_TOGGLE_COMPLETE: function() {
        c = !1
    },
    MFA_CLEAR_BACKUP_CODES: function() {
        l = []
    },
    MFA_VIEW_BACKUP_CODES: function(e) {
        let {
            codes: t,
            key: r
        } = e;
        l = n().sortBy(t, "code"), d = r
    },
    MFA_SEND_VERIFICATION_KEY: function(e) {
        let {
            nonces: t
        } = e;
        p = t
    },
    MFA_SEEN_BACKUP_CODE_PROMPT: function() {
        h = !0
    },
    CONNECTION_OPEN: () => {}
})