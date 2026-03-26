/** chunk id: 609511 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => r
});
var i = n(311907),
    s = n(73153);
let l = {};
class a extends i.Ay.PersistedStore {
    static displayName = "GuildPromptsStore";
    static persistKey = "GuildPromptsStore";
    initialize(e) {
        for (let t in e) {
            let n = e[t];
            l[t] = new Set(n)
        }
    }
    hasViewedPrompt(e, t) {
        let n = l[t];
        return null != n && !!n.has(e)
    }
    getState() {
        return l
    }
}
let r = new a(s.h, {
    GUILD_PROMPT_VIEWED: function(e) {
        let {
            prompt: t,
            guildId: n
        } = e, i = l[n];
        return null == i ? (l[n] = new Set, l[n].add(t), !0) : !i.has(t) && (i.add(t), !0)
    },
    GUILD_DELETE: function(e) {
        let {
            guild: t
        } = e;
        return null != l[t.id] && !t.unavailable && (delete l[t.id], !0)
    }
})