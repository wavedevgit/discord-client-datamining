/** Chunk was on web.js **/
/** chunk id: 718116, original params: e,t,n (module,exports,require) **/
"use strict";
let r;
n.d(t, {
    A: () => b
}), n(896048);
var i, a = n(735438),
    o = n.n(a),
    s = n(311907),
    l = n(73153),
    c = n(824953);

function u(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
let d = {},
    f = {};

function p(e, t) {
    return null == t && (t = "guild"), "".concat(e, ":").concat(t)
}

function _(e) {
    return null != d[e] || (d[e] = {}), d[e]
}

function h(e) {
    let {
        guildId: t,
        channelId: n,
        webhooks: i,
        error: a
    } = e;
    if (null == i) return void(null != a ? (r = a, delete f[p(t, n)]) : null != n && null != d[t] && (r = null, c.A.fetchForChannel(t, n)));
    r = null;
    let s = [];
    null != n && (s = o()(_(t)).values().filter(e => e.channel_id !== n).value());
    let l = d[t] = {};
    s.concat(i).forEach(e => l[e.id] = e), delete f[p(t, n)]
}

function m(e) {
    let {
        guildId: t,
        channelId: n
    } = e;
    f[p(t, n)] = !0
}

function g(e) {
    let {
        guildId: t,
        webhook: n
    } = e;
    _(t)[n.id] = n
}

function E(e) {
    let {
        guildId: t,
        webhookId: n
    } = e;
    delete _(t)[n]
}
class y extends(i = s.Ay.Store) {
    isFetching(e, t) {
        return null != f[p(e, t)]
    }
    getWebhooksForGuild(e) {
        return o().values(_(e))
    }
    getWebhooksForChannel(e, t) {
        return o()(_(e)).values().filter(e => e.channel_id === t).value()
    }
    get error() {
        return r
    }
}
u(y, "displayName", "WebhooksStore");
let b = new y(l.h, {
    WEBHOOKS_UPDATE: h,
    WEBHOOKS_FETCHING: m,
    WEBHOOK_CREATE: g,
    WEBHOOK_UPDATE: g,
    WEBHOOK_DELETE: E
})