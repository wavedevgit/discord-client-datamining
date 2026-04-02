/** chunk id: 752319 params = (module,exports,require) **/
var i = n(311907),
    l = n(73153),
    a = n(287809),
    r = n(652215);
let s = r.XlH.CLOSED,
    o = {},
    d = null;

function c() {
    let e = a.default.getCurrentUser();
    if (null == e) return u();
    s = r.XlH.OPEN, o = {}, d = {
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
    s = r.XlH.CLOSED, d = null, o = {}
}

function A() {
    s = r.XlH.OPEN, o = {}
}
class h extends i.Ay.Store {
    static displayName = "UserSettingsAccountStore";
    initialize() {
        this.waitFor(a.default)
    }
    getErrors() {
        return o
    }
    getSubmitting() {
        return s === r.XlH.SUBMITTING
    }
    getSettings() {
        return d
    }
}
new h(l.h, {
    USER_SETTINGS_MODAL_OPEN: function() {
        c()
    },
    USER_SETTINGS_MODAL_INIT: c,
    USER_SETTINGS_MODAL_CLOSE: u,
    LOGOUT: u,
    USER_SETTINGS_MODAL_SUBMIT: function() {
        s = r.XlH.SUBMITTING
    },
    USER_SETTINGS_MODAL_SUBMIT_FAILURE: function(e) {
        if (s !== r.XlH.SUBMITTING) return !1;
        s = r.XlH.OPEN, o = e.errors ?? {}
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
        let e = a.default.getCurrentUser();
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