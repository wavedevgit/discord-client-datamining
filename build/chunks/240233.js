/** Chunk was on web.js **/
/** chunk id: 240233, original params: e,t,n (module,exports,require) **/
"use strict";
let r, i;
n.d(t, {
    A: () => _
});
var a = n(247775),
    o = n(73153),
    s = n(439372),
    l = n(287809),
    c = n(954571),
    u = n(274303),
    d = n(652215);

function f(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
let p = !1;
class _ extends s.A {
    _initialize() {
        o.h.subscribe("CONNECTION_OPEN", () => this.handleConnectionOpen()), this.handleConnectionOpen()
    }
    _terminate() {
        o.h.unsubscribe("CONNECTION_OPEN", () => this.handleConnectionOpen())
    }
    constructor({
        onSwitchStart: e,
        onSwitchSuccess: t,
        onSwitchError: n,
        onTokenSet: o
    }) {
        super(), f(this, "onSwitchStart", void 0), f(this, "onSwitchSuccess", void 0), f(this, "onSwitchError", void 0), f(this, "onTokenSet", void 0), f(this, "actions", {
            LOGOUT: e => this.handleLogout(e)
        }), f(this, "handleConnectionOpen", () => {
            var e, t, n, o, s, f;
            let _ = l.default.getCurrentUser();
            if (null == _) return;
            if (null != i) {
                if (i !== r) {
                    let e = u.A.getUsers().map(e => {
                        let {
                            id: t
                        } = e;
                        return t
                    });
                    c.default.track(d.HAw.MULTI_ACCOUNT_SWITCH_SUCCESS, {
                        from_user_id: i,
                        linked_user_ids: e
                    }), null == (n = (o = this).onSwitchSuccess) || n.call(o, _, p)
                } else c.default.track(d.HAw.MULTI_ACCOUNT_SWITCH_FAILURE), null == (s = (f = this).onSwitchError) || s.call(f, _);
                i = null
            }
            r = _.id;
            let h = a.getToken();
            null != h && "" !== h && a.setToken(h, _.id), null == (e = (t = this).onTokenSet) || e.call(t, _)
        }), f(this, "handleLogout", e => {
            if (e.isSwitchingAccount) {
                var t, n;
                i = r, null == (t = (n = this).onSwitchStart) || t.call(n), p = !!e.goHomeAfterSwitching
            } else p = !1, a.removeToken(r);
            r = null
        }), this.onSwitchStart = e, this.onSwitchSuccess = t, this.onSwitchError = n, this.onTokenSet = o
    }
}