/** chunk id: 670492 params = (module,exports,require) **/
n.d(t, {
    A: () => _
});
var i = n(735438),
    s = n.n(i),
    l = n(247775),
    a = n(311907),
    r = n(73153);
let o = !1,
    d = [],
    c = "",
    u = !1,
    m = {
        viewNonce: "",
        regenerateNonce: ""
    };
class g extends a.Ay.Store {
    static displayName = "MFAStore";
    getVerificationKey() {
        return c
    }
    getBackupCodes() {
        return d
    }
    get togglingSMS() {
        return o
    }
    getNonces() {
        return m
    }
    get hasSeenBackupPrompt() {
        return u
    }
}
let _ = new g(r.h, {
    MFA_ENABLE_SUCCESS: function(e) {
        let {
            token: t,
            codes: n
        } = e;
        void 0 !== t && l.setToken(t), d = n
    },
    MFA_DISABLE_SUCCESS: function(e) {
        let {
            token: t
        } = e;
        l.setToken(t)
    },
    MFA_SMS_TOGGLE: function() {
        o = !0
    },
    MFA_SMS_TOGGLE_COMPLETE: function() {
        o = !1
    },
    MFA_CLEAR_BACKUP_CODES: function() {
        d = []
    },
    MFA_VIEW_BACKUP_CODES: function(e) {
        let {
            codes: t,
            key: n
        } = e;
        d = s().sortBy(t, "code"), c = n
    },
    MFA_SEND_VERIFICATION_KEY: function(e) {
        let {
            nonces: t
        } = e;
        m = t
    },
    MFA_SEEN_BACKUP_CODE_PROMPT: function() {
        u = !0
    },
    CONNECTION_OPEN: () => {}
})