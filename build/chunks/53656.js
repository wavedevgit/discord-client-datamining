/** chunk id: 53656, original params: e,t,n (module,exports,require) **/
"use strict";
let r, i;
n.r(t), n.d(t, {
    default: () => X
}), n(321073), n(896048);
var a, o = n(735438),
    s = n.n(o),
    l = n(311907),
    c = n(73153),
    u = n(824953),
    d = n(576705),
    f = n(718116),
    p = n(555337),
    _ = n(652215);

function h(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function m(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            h(e, t, n[t])
        })
    }
    return e
}
let g = [],
    E = [],
    y = null,
    b = null,
    O = null,
    v = !1,
    A = !1,
    I = _.XlH.CLOSED,
    S = {},
    T = !1,
    C = null;

function N(e) {
    let {
        section: t
    } = e;
    if (t !== _.BEX.INTEGRATIONS) return !1;
    if (null == r) {
        let e = p.A.getGuildId();
        null != e && (u.A.fetchForGuild(e), v = !0), R(!1)
    }
}

function w(e) {
    let {
        section: t,
        sectionId: n
    } = e;
    i = t, C = n
}

function R(e) {
    if (null != (r = p.A.getProps().guild) && d.A.can(_.xBc.MANAGE_GUILD, r)) {
        let e = p.A.getProps().integrations;
        null == e && (A = !0), g = null != e ? e : []
    } else g = [];
    if (E = null != r && d.A.can(_.xBc.MANAGE_WEBHOOKS, r) ? f.A.getWebhooksForGuild(r.id) : [], !e && null != b) {
        let e = z(b.id);
        null != e && (b = e)
    }
    if (null != O) {
        let e = q(O.id);
        null != e && (O = e)
    }
    y = null, I = _.XlH.OPEN, S = {}, T = !1
}

function P() {
    r = null, g = [], E = [], y = null, b = null, O = null, I = _.XlH.CLOSED, T = !1
}
let D = s().debounce(() => {
    T && (null != b ? s().isEqual(b, z(b.id)) && (T = !1) : null != O && s().isEqual(O, q(O.id)) && (T = !1), T || Q.emitChange())
}, 500);

function L(e) {
    let {
        settings: t
    } = e;
    if (null == b) return !1;
    b = m({}, b), null != t.enableEmoticons && b.enable_emoticons !== t.enableEmoticons && (b.enable_emoticons = t.enableEmoticons, T = !0), null != t.expireBehavior && b.expire_behavior !== t.expireBehavior && (b.expire_behavior = t.expireBehavior, T = !0), null != t.expireGracePeriod && b.expire_grace_period !== t.expireGracePeriod && (b.expire_grace_period = t.expireGracePeriod, T = !0), T && D()
}

function x(e) {
    let {
        settings: t
    } = e;
    if (null == O) return !1;
    O = m({}, O), null != t.name && O.name !== t.name && (O.name = t.name, T = !0), void 0 !== t.avatar && O.avatar !== t.avatar && (O.avatar = t.avatar, T = !0), null != t.channelId && O.channel_id !== t.channelId && (O.channel_id = t.channelId, T = !0), T && D()
}

function M() {
    I = _.XlH.SUBMITTING, S = {}
}

function j(e) {
    var t;
    if (I !== _.XlH.SUBMITTING) return !1;
    I = _.XlH.OPEN, S = null != (t = e.errors) ? t : {}
}

function k(e) {
    let {
        guildId: t,
        integrations: n
    } = e;
    if (null == r || t !== r.id || I === _.XlH.SUBMITTING) return !1;
    for (let e of (A = !1, n))
        if (null == g.find(t => {
                let {
                    id: n
                } = t;
                if (n === e.id) return !0
            })) {
            var i, a;
            g.push(e), e.type === (null == b ? void 0 : b.type) && (null == (i = e.account) ? void 0 : i.id) === (null == (a = b.account) ? void 0 : a.id) && (b = e)
        } for (let e = g.length - 1; e >= 0; e--) {
        let t = g[e],
            r = n.find(e => {
                let {
                    id: n
                } = e;
                if (n === t.id) return !0
            });
        if (null != r) {
            let n = m({}, t, r);
            (null == b ? void 0 : b.id) === n.id && (!1 === n.enabled ? b = null : T || (b = n)), g[e] = n
        } else(null == b ? void 0 : b.id) === t.id && (b = null), g.splice(e, 1)
    }
    g = [...g], D()
}

function U(e) {
    let {
        guildId: t,
        channelId: n,
        webhooks: i
    } = e;
    if (v = !1, null != r && t === r.id && null != i && I !== _.XlH.SUBMITTING) {
        for (let e = E.length - 1; e >= 0; e--) {
            let t = E[e];
            if (null != n && (null == t ? void 0 : t.channel_id) !== n) continue;
            let r = i.find(e => {
                let {
                    id: n
                } = e;
                if (n === t.id) return !0
            });
            if (null != r) {
                let n = m({}, t, r);
                E[e] = n, T || (null == O ? void 0 : O.id) !== n.id || (O = n)
            } else(null == O ? void 0 : O.id) === t.id && (O = null), E.splice(e, 1)
        }
        for (let e of i) null == E.find(t => {
            let {
                id: n
            } = t;
            if (n === e.id) return !0
        }) && E.push(e);
        E = [...E], D()
    }
}

function G(e) {
    let {
        commandId: t
    } = e;
    y = t, b = null, O = null, S = {}, T = !0
}

function F(e) {
    let {
        commandId: t
    } = e;
    if (null == y || y !== t) return !1;
    y = null, S = {}, T = !1
}

function V(e) {
    let {
        integrationId: t
    } = e, n = z(t);
    if (null == n) return !1;
    b = n, y = null, O = null, S = {}, T = !1
}

function B() {
    b = null, S = {}, T = !1
}

function H(e) {
    let {
        webhookId: t
    } = e, n = q(t);
    if (null == n) return !1;
    O = n, y = null, b = null, S = {}, T = !1
}

function Y() {
    O = null, S = {}, T = !1
}

function W() {
    return R(!1)
}

function K() {
    return R(!0)
}

function z(e) {
    return g.find(t => {
        let {
            id: n
        } = t;
        return n === e
    })
}

function q(e) {
    return E.find(t => {
        let {
            id: n
        } = t;
        return n === e
    })
}
class Z extends(a = l.Ay.Store) {
    initialize() {
        this.waitFor(p.A, f.A, d.A)
    }
    hasChanges() {
        return T
    }
    get guild() {
        return r
    }
    get integrations() {
        return g
    }
    get webhooks() {
        return E
    }
    get editedCommandId() {
        return y
    }
    get editedIntegration() {
        return b
    }
    get editedWebhook() {
        return O
    }
    get formState() {
        return I
    }
    getErrors() {
        return S
    }
    getSection() {
        return null != i ? i : _.wLn.OVERVIEW
    }
    getSectionId() {
        return C
    }
    getIntegration(e) {
        return z(e)
    }
    getWebhook(e) {
        return q(e)
    }
    isFetching() {
        return A || v
    }
    showNotice() {
        return this.hasChanges()
    }
    getApplication(e) {
        var t;
        return null == (t = g.find(t => {
            var n;
            return (null == (n = t.application) ? void 0 : n.id) === e
        })) ? void 0 : t.application
    }
}
h(Z, "displayName", "GuildSettingsIntegrationsStore");
let Q = new Z(c.h, __OVERLAY__ ? {} : {
        INTEGRATION_SETTINGS_INIT: W,
        INTEGRATION_SETTINGS_SAVE_SUCCESS: K,
        GUILD_SETTINGS_INIT: N,
        GUILD_SETTINGS_SET_SECTION: N,
        INTEGRATION_SETTINGS_SET_SECTION: w,
        INTEGRATION_SETTINGS_START_EDITING_COMMAND: G,
        INTEGRATION_SETTINGS_STOP_EDITING_COMMAND: F,
        INTEGRATION_SETTINGS_START_EDITING_INTEGRATION: V,
        INTEGRATION_SETTINGS_STOP_EDITING_INTEGRATION: B,
        INTEGRATION_SETTINGS_UPDATE_INTEGRATION: L,
        INTEGRATION_SETTINGS_UPDATE_WEBHOOK: x,
        INTEGRATION_SETTINGS_START_EDITING_WEBHOOK: H,
        INTEGRATION_SETTINGS_STOP_EDITING_WEBHOOK: Y,
        GUILD_SETTINGS_CLOSE: P,
        GUILD_SETTINGS_LOADED_INTEGRATIONS: k,
        WEBHOOKS_UPDATE: U,
        INTEGRATION_SETTINGS_SUBMITTING: M,
        INTEGRATION_SETTINGS_SAVE_FAILURE: j
    }),
    X = Q