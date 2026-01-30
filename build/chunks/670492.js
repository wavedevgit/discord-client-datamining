/** chunk id: 670492, original params: e,t,r (module,exports,require) **/
"use strict";
r.d(t, {
    A: () => y
});
var n, o, s = r(735438),
    i = r.n(s),
    a = r(247775),
    c = r(311907),
    l = r(73153);
let d = !1,
    u = [],
    p = "",
    h = !1,
    f = {
        viewNonce: "",
        regenerateNonce: ""
    };
class _ extends(o = c.Ay.Store) {
    getVerificationKey() {
        return p
    }
    getBackupCodes() {
        return u
    }
    get togglingSMS() {
        return d
    }
    getNonces() {
        return f
    }
    get hasSeenBackupPrompt() {
        return h
    }
}(n = "displayName") in _ ? Object.defineProperty(_, n, {
    value: "MFAStore",
    enumerable: !0,
    configurable: !0,
    writable: !0
}) : _[n] = "MFAStore";
let y = new _(l.h, {
    MFA_ENABLE_SUCCESS: function(e) {
        let {
            token: t,
            codes: r
        } = e;
        void 0 !== t && a.setToken(t), u = r
    },
    MFA_DISABLE_SUCCESS: function(e) {
        let {
            token: t
        } = e;
        a.setToken(t)
    },
    MFA_SMS_TOGGLE: function() {
        d = !0
    },
    MFA_SMS_TOGGLE_COMPLETE: function() {
        d = !1
    },
    MFA_CLEAR_BACKUP_CODES: function() {
        u = []
    },
    MFA_VIEW_BACKUP_CODES: function(e) {
        let {
            codes: t,
            key: r
        } = e;
        u = i().sortBy(t, "code"), p = r
    },
    MFA_SEND_VERIFICATION_KEY: function(e) {
        let {
            nonces: t
        } = e;
        f = t
    },
    MFA_SEEN_BACKUP_CODE_PROMPT: function() {
        h = !0
    },
    CONNECTION_OPEN: () => {}
})