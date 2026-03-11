/** chunk id: 74399 params = (module,exports,require) **/
n.d(t, {
    A: () => d
});
var i = n(311907),
    l = n(73153),
    a = n(95701),
    r = n(734057);
let s = {},
    o = {};
class c extends i.Ay.Store {
    initialize() {
        this.waitFor(r.A)
    }
    static displayName = "GuildRoleSubscriptionTierTemplatesStore";
    getTemplates(e) {
        return s[e]
    }
    getTemplateWithCategory(e, t) {
        return s[e]?.find(e => e.category === t)
    }
    getChannel(e) {
        return o[e]
    }
}
let d = new c(l.h, {
    GUILD_ROLE_SUBSCRIPTIONS_STASH_TEMPLATE_CHANNELS: function(e) {
        let {
            selectedTemplate: t,
            guildId: n
        } = e, i = Object.values(r.A.getMutableGuildChannelsForGuild(n));
        t.listings.forEach(e => {
            e.channels.forEach(e => {
                let t = i.find(t => t.name === e.name);
                if (void 0 !== t) e.id = t.id;
                else if (!(e.id in o)) {
                    let t = (0, a.createChannelRecord)(e);
                    o[e.id] = t
                }
            })
        })
    },
    GUILD_ROLE_SUBSCRIPTIONS_FETCH_TEMPLATES: function(e) {
        let {
            templates: t,
            guildId: n
        } = e;
        s[n] = t
    }
})