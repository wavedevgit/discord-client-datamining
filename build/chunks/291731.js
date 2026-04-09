/** chunk id: 291731 params = (module,exports,require) **/
let i, a, r;
n.d(t, {
    A: () => y
}), n(321073);
var l = n(735438),
    s = n.n(l),
    o = n(311907),
    d = n(73153),
    c = n(824953),
    u = n(863036),
    A = n(71393),
    _ = n(576705),
    h = n(718116),
    m = n(652215);
let g = [],
    p = null,
    E = !1,
    I = m.XlH.CLOSED,
    f = {},
    C = !1,
    T = null;

function N() {
    if (i = null != (a = u.A.getChannel()) ? A.A.getGuild(a.guild_id) : null, g = null != a && null != i && _.A.can(m.xBc.MANAGE_WEBHOOKS, a) ? h.A.getWebhooksForChannel(i.id, a.id) : [], null != p) {
        let e = x(p.id);
        null != e && (p = e)
    }
    I = m.XlH.OPEN, f = {}, C = !1
}
let S = s().debounce(() => {
    C && ((null == p || s().isEqual(p, x(p.id))) && (C = !1), C || b.emitChange())
}, 500);

function x(e) {
    return g.find(t => {
        let {
            id: n
        } = t;
        return n === e
    })
}
class v extends o.Ay.Store {
    static displayName = "ChannelSettingsIntegrationsStore";
    initialize() {
        this.waitFor(u.A, A.A, h.A, _.A)
    }
    hasChanges() {
        return C
    }
    get webhooks() {
        return g
    }
    get editedWebhook() {
        return p
    }
    get formState() {
        return I
    }
    getWebhook(e) {
        return x(e)
    }
    showNotice() {
        return this.hasChanges()
    }
    getProps() {
        return {
            submitting: I === m.XlH.SUBMITTING,
            webhooks: g,
            editedWebhook: p,
            section: r,
            sectionId: T,
            hasChanges: this.hasChanges(),
            isFetching: E,
            errors: f
        }
    }
}
let b = new v(d.h, __OVERLAY__ ? {} : {
        INTEGRATION_SETTINGS_INIT: N,
        INTEGRATION_SETTINGS_SAVE_SUCCESS: N,
        CHANNEL_SETTINGS_SET_SECTION: function(e) {
            let {
                section: t
            } = e;
            if (t !== m.p_A.INTEGRATIONS) return !1;
            if (r = m.wLn.OVERVIEW, null == i) {
                let e = u.A.getChannel(),
                    t = e?.getGuildId();
                null != e && null != t && (c.A.fetchForChannel(t, e.id), E = !0), N()
            }
        },
        INTEGRATION_SETTINGS_SET_SECTION: function(e) {
            let {
                section: t,
                sectionId: n
            } = e;
            r = t, T = n
        },
        INTEGRATION_SETTINGS_START_EDITING_WEBHOOK: function(e) {
            let {
                webhookId: t
            } = e, n = x(t);
            if (null == n) return !1;
            p = n, f = {}, C = !1
        },
        INTEGRATION_SETTINGS_STOP_EDITING_WEBHOOK: function() {
            p = null, f = {}, C = !1
        },
        INTEGRATION_SETTINGS_UPDATE_WEBHOOK: function(e) {
            let {
                settings: t
            } = e;
            if (null == p) return !1;
            p = {
                ...p
            }, null != t.name && p.name !== t.name && (p.name = t.name, C = !0), void 0 !== t.avatar && p.avatar !== t.avatar && (p.avatar = t.avatar, C = !0), null != t.channelId && p.channel_id !== t.channelId && (p.channel_id = t.channelId, C = !0), C && S()
        },
        CHANNEL_SETTINGS_CLOSE: function() {
            a = null, i = null, g = [], p = null, I = m.XlH.CLOSED
        },
        WEBHOOKS_UPDATE: function(e) {
            let {
                guildId: t,
                channelId: n,
                webhooks: r
            } = e;
            if (E = !1, null != i && t === i.id && null != a && n === a.id && null != r && I !== m.XlH.SUBMITTING) {
                for (let e = g.length - 1; e >= 0; e--) {
                    let t = g[e];
                    if (null != n && t?.channel_id !== n) continue;
                    let i = r.find(e => {
                        let {
                            id: n
                        } = e;
                        if (n === t.id) return !0
                    });
                    if (null != i) {
                        let n = {
                            ...t,
                            ...i
                        };
                        g[e] = n, C || p?.id !== n.id || (p = n)
                    } else p?.id === t.id && (p = null), g.splice(e, 1)
                }
                for (let e of r) null == g.find(t => {
                    let {
                        id: n
                    } = t;
                    if (n === e.id) return !0
                }) && g.push(e);
                g = [...g], S()
            }
        },
        INTEGRATION_SETTINGS_SUBMITTING: function() {
            I = m.XlH.SUBMITTING, f = {}
        },
        INTEGRATION_SETTINGS_SAVE_FAILURE: function(e) {
            if (I !== m.XlH.SUBMITTING) return !1;
            I = m.XlH.OPEN, f = e.errors ?? {}
        }
    }),
    y = b