/** chunk id: 74399 params = (module,exports,require) **/
n.d(t, {
    A: () => c
});
var r = n(311907),
    i = n(73153),
    l = n(95701),
    a = n(734057);
let o = {},
    s = {};
class d extends r.Ay.Store {
    initialize() {
        this.waitFor(a.A)
    }
    static displayName = "GuildRoleSubscriptionTierTemplatesStore";
    getTemplates(e) {
        return o[e]
    }
    getTemplateWithCategory(e, t) {
        return o[e]?.find(e => e.category === t)
    }
    getChannel(e) {
        return s[e]
    }
}
let c = new d(i.h, {
    GUILD_ROLE_SUBSCRIPTIONS_STASH_TEMPLATE_CHANNELS: function(e) {
        let {
            selectedTemplate: t,
            guildId: n
        } = e, r = Object.values(a.A.getMutableGuildChannelsForGuild(n));
        t.listings.forEach(e => {
            e.channels.forEach(e => {
                let t = r.find(t => t.name === e.name);
                if (void 0 !== t) e.id = t.id;
                else if (!(e.id in s)) {
                    let t = (0, l.createChannelRecord)(e);
                    s[e.id] = t
                }
            })
        })
    },
    GUILD_ROLE_SUBSCRIPTIONS_FETCH_TEMPLATES: function(e) {
        let {
            templates: t,
            guildId: n
        } = e;
        o[n] = t
    }
})