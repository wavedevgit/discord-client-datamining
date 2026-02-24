/** chunk id: 670492, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => A
});
var i = n(735438),
    s = n.n(i),
    a = n(247775),
    l = n(311907),
    r = n(73153);
let o = !1,
    c = [],
    d = "",
    u = !1,
    _ = {
        viewNonce: "",
        regenerateNonce: ""
    };
class m extends l.Ay.Store {
    static displayName = "MFAStore";
    getVerificationKey() {
        return d
    }
    getBackupCodes() {
        return c
    }
    get togglingSMS() {
        return o
    }
    getNonces() {
        return _
    }
    get hasSeenBackupPrompt() {
        return u
    }
}
let A = new m(r.h, {
    MFA_ENABLE_SUCCESS: function(e) {
        let {
            token: t,
            codes: n
        } = e;
        void 0 !== t && a.setToken(t), c = n
    },
    MFA_DISABLE_SUCCESS: function(e) {
        let {
            token: t
        } = e;
        a.setToken(t)
    },
    MFA_SMS_TOGGLE: function() {
        o = !0
    },
    MFA_SMS_TOGGLE_COMPLETE: function() {
        o = !1
    },
    MFA_CLEAR_BACKUP_CODES: function() {
        c = []
    },
    MFA_VIEW_BACKUP_CODES: function(e) {
        let {
            codes: t,
            key: n
        } = e;
        c = s().sortBy(t, "code"), d = n
    },
    MFA_SEND_VERIFICATION_KEY: function(e) {
        let {
            nonces: t
        } = e;
        _ = t
    },
    MFA_SEEN_BACKUP_CODE_PROMPT: function() {
        u = !0
    },
    CONNECTION_OPEN: () => {}
})