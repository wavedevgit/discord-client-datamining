/** chunk id: 824953, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => c
});
var r = n(735438),
    i = n.n(r),
    a = n(562465),
    o = n(73153),
    s = n(652215);
let l = ["Spidey Bot", "Captain Hook"],
    c = {
        fetchForGuild(e) {
            o.h.dispatch({
                type: "WEBHOOKS_FETCHING",
                guildId: e
            }), a.Bo.get({
                url: s.Rsh.GUILD_WEBHOOKS(e),
                oldFormErrors: !0,
                rejectWithError: !1
            }).then(t => {
                let {
                    body: n
                } = t;
                return o.h.dispatch({
                    type: "WEBHOOKS_UPDATE",
                    guildId: e,
                    webhooks: n
                })
            }).catch(t => {
                let {
                    body: n
                } = t;
                o.h.dispatch({
                    type: "WEBHOOKS_UPDATE",
                    guildId: e,
                    error: n.message
                })
            })
        },
        fetchForChannel(e, t) {
            o.h.dispatch({
                type: "WEBHOOKS_FETCHING",
                guildId: e,
                channelId: t
            }), a.Bo.get({
                url: s.Rsh.CHANNEL_WEBHOOKS(t),
                oldFormErrors: !0,
                rejectWithError: !0
            }).then(n => {
                let {
                    body: r
                } = n;
                return o.h.dispatch({
                    type: "WEBHOOKS_UPDATE",
                    guildId: e,
                    channelId: t,
                    webhooks: r
                })
            }).catch(t => {
                let {
                    body: n
                } = t;
                o.h.dispatch({
                    type: "WEBHOOKS_UPDATE",
                    guildId: e,
                    error: n.message
                })
            })
        },
        create: (e, t, n) => (null == n && (n = l[i().random(0, l.length - 1)]), a.Bo.post({
            url: s.Rsh.CHANNEL_WEBHOOKS(t),
            body: {
                name: n
            },
            oldFormErrors: !0,
            rejectWithError: !1
        }).then(t => {
            let {
                body: n
            } = t;
            return o.h.dispatch({
                type: "WEBHOOK_CREATE",
                guildId: e,
                webhook: n
            }), n
        })),
        delete: (e, t) => a.Bo.del({
            url: s.Rsh.WEBHOOK(t),
            oldFormErrors: !0,
            rejectWithError: !1
        }).then(() => {
            o.h.dispatch({
                type: "WEBHOOK_DELETE",
                guildId: e,
                webhookId: t
            })
        }),
        update: (e, t, n) => a.Bo.patch({
            url: s.Rsh.WEBHOOK(t),
            body: n,
            oldFormErrors: !0,
            rejectWithError: !1
        }).then(t => {
            let {
                body: n
            } = t;
            return o.h.dispatch({
                type: "WEBHOOK_UPDATE",
                guildId: e,
                webhook: n
            }), n
        })
    }