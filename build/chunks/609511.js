/** Chunk was on 97492 **/
/** chunk id: 609511, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => c
}), n(896048);
var r, l = n(311907),
    i = n(73153);

function s(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
let a = {};
class o extends(r = l.Ay.PersistedStore) {
    initialize(e) {
        for (let t in e) {
            let n = e[t];
            a[t] = new Set(n)
        }
    }
    hasViewedPrompt(e, t) {
        let n = a[t];
        return null != n && !!n.has(e)
    }
    getState() {
        return a
    }
}
s(o, "displayName", "GuildPromptsStore"), s(o, "persistKey", "GuildPromptsStore");
let c = new o(i.h, {
    GUILD_PROMPT_VIEWED: function(e) {
        let {
            prompt: t,
            guildId: n
        } = e, r = a[n];
        return null == r ? (a[n] = new Set, a[n].add(t), !0) : !r.has(t) && (r.add(t), !0)
    },
    GUILD_DELETE: function(e) {
        let {
            guild: t
        } = e;
        return null != a[t.id] && !t.unavailable && (delete a[t.id], !0)
    }
})