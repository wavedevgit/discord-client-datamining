/** chunk id: 291731 params = (module,exports,require) **/
let i, l, a;
n.d(t, {
    A: () => b
}), n(321073);
var r = n(735438),
    s = n.n(r),
    o = n(311907),
    d = n(73153),
    c = n(824953),
    u = n(863036),
    A = n(71393),
    h = n(576705),
    _ = n(718116),
    m = n(652215);
let p = [],
    g = null,
    E = !1,
    I = m.XlH.CLOSED,
    f = {},
    C = !1,
    T = null;

function N() {
    if (i = null != (l = u.A.getChannel()) ? A.A.getGuild(l.guild_id) : null, p = null != l && null != i && h.A.can(m.xBc.MANAGE_WEBHOOKS, l) ? _.A.getWebhooksForChannel(i.id, l.id) : [], null != g) {
        let e = x(g.id);
        null != e && (g = e)
    }
    I = m.XlH.OPEN, f = {}, C = !1
}
let S = s().debounce(() => {
    C && ((null == g || s().isEqual(g, x(g.id))) && (C = !1), C || y.emitChange())
}, 500);

function x(e) {
    return p.find(t => {
        let {
            id: n
        } = t;
        return n === e
    })
}
class v extends o.Ay.Store {
    static displayName = "ChannelSettingsIntegrationsStore";
    initialize() {
        this.waitFor(u.A, A.A, _.A, h.A)
    }
    hasChanges() {
        return C
    }
    get webhooks() {
        return p
    }
    get editedWebhook() {
        return g
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
            webhooks: p,
            editedWebhook: g,
            section: a,
            sectionId: T,
            hasChanges: this.hasChanges(),
            isFetching: E,
            errors: f
        }
    }
}
let y = new v(d.h, __OVERLAY__ ? {} : {
        INTEGRATION_SETTINGS_INIT: N,
        INTEGRATION_SETTINGS_SAVE_SUCCESS: N,
        CHANNEL_SETTINGS_SET_SECTION: function(e) {
            let {
                section: t
            } = e;
            if (t !== m.p_A.INTEGRATIONS) return !1;
            if (a = m.wLn.OVERVIEW, null == i) {
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
            a = t, T = n
        },
        INTEGRATION_SETTINGS_START_EDITING_WEBHOOK: function(e) {
            let {
                webhookId: t
            } = e, n = x(t);
            if (null == n) return !1;
            g = n, f = {}, C = !1
        },
        INTEGRATION_SETTINGS_STOP_EDITING_WEBHOOK: function() {
            g = null, f = {}, C = !1
        },
        INTEGRATION_SETTINGS_UPDATE_WEBHOOK: function(e) {
            let {
                settings: t
            } = e;
            if (null == g) return !1;
            g = {
                ...g
            }, null != t.name && g.name !== t.name && (g.name = t.name, C = !0), void 0 !== t.avatar && g.avatar !== t.avatar && (g.avatar = t.avatar, C = !0), null != t.channelId && g.channel_id !== t.channelId && (g.channel_id = t.channelId, C = !0), C && S()
        },
        CHANNEL_SETTINGS_CLOSE: function() {
            l = null, i = null, p = [], g = null, I = m.XlH.CLOSED
        },
        WEBHOOKS_UPDATE: function(e) {
            let {
                guildId: t,
                channelId: n,
                webhooks: a
            } = e;
            if (E = !1, null != i && t === i.id && null != l && n === l.id && null != a && I !== m.XlH.SUBMITTING) {
                for (let e = p.length - 1; e >= 0; e--) {
                    let t = p[e];
                    if (null != n && t?.channel_id !== n) continue;
                    let i = a.find(e => {
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
                        p[e] = n, C || g?.id !== n.id || (g = n)
                    } else g?.id === t.id && (g = null), p.splice(e, 1)
                }
                for (let e of a) null == p.find(t => {
                    let {
                        id: n
                    } = t;
                    if (n === e.id) return !0
                }) && p.push(e);
                p = [...p], S()
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
    b = y