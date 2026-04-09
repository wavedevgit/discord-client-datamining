/** chunk id: 752319 params = (module,exports,require) **/
var i = n(311907),
    a = n(73153),
    r = n(287809),
    l = n(652215);
let s = l.XlH.CLOSED,
    o = {},
    d = null;

function c() {
    let e = r.default.getCurrentUser();
    if (null == e) return u();
    s = l.XlH.OPEN, o = {}, d = {
        ...{
            userId: e.id,
            username: e.username,
            discriminator: e.discriminator,
            email: e.email,
            avatar: e.avatar,
            password: "",
            newPassword: null,
            claimed: e.isClaimed()
        }
    }
}

function u() {
    s = l.XlH.CLOSED, d = null, o = {}
}

function A() {
    s = l.XlH.OPEN, o = {}
}
class _ extends i.Ay.Store {
    static displayName = "UserSettingsAccountStore";
    initialize() {
        this.waitFor(r.default)
    }
    getErrors() {
        return o
    }
    getSubmitting() {
        return s === l.XlH.SUBMITTING
    }
    getSettings() {
        return d
    }
}
new _(a.h, {
    USER_SETTINGS_MODAL_OPEN: function() {
        c()
    },
    USER_SETTINGS_MODAL_INIT: c,
    USER_SETTINGS_MODAL_CLOSE: u,
    LOGOUT: u,
    USER_SETTINGS_MODAL_SUBMIT: function() {
        s = l.XlH.SUBMITTING
    },
    USER_SETTINGS_MODAL_SUBMIT_FAILURE: function(e) {
        if (s !== l.XlH.SUBMITTING) return !1;
        s = l.XlH.OPEN, o = e.errors ?? {}
    },
    USER_SETTINGS_MODAL_UPDATE_ACCOUNT: function(e) {
        let {
            settings: t
        } = e;
        null == d && (d = {}), d = {
            ...d,
            ...t
        }
    },
    USER_SETTINGS_MODAL_SUBMIT_COMPLETE: A,
    USER_SETTINGS_MODAL_RESET: function() {
        let e = r.default.getCurrentUser();
        A(), null != e && (d = {
            ...{
                userId: e.id,
                username: e.username,
                discriminator: e.discriminator,
                email: e.email,
                avatar: e.avatar,
                password: "",
                newPassword: null,
                claimed: e.isClaimed()
            }
        })
    }
})