/** chunk id: 74399 params = (module,exports,require) **/
r.d(t, {
    A: () => u
});
var n = r(311907),
    i = r(73153),
    l = r(95701),
    a = r(734057);
let s = {},
    o = {};
class d extends n.Ay.Store {
    initialize() {
        this.waitFor(a.A)
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
let u = new d(i.h, {
    GUILD_ROLE_SUBSCRIPTIONS_STASH_TEMPLATE_CHANNELS: function(e) {
        let {
            selectedTemplate: t,
            guildId: r
        } = e, n = Object.values(a.A.getMutableGuildChannelsForGuild(r));
        t.listings.forEach(e => {
            e.channels.forEach(e => {
                let t = n.find(t => t.name === e.name);
                if (void 0 !== t) e.id = t.id;
                else if (!(e.id in o)) {
                    let t = (0, l.createChannelRecord)(e);
                    o[e.id] = t
                }
            })
        })
    },
    GUILD_ROLE_SUBSCRIPTIONS_FETCH_TEMPLATES: function(e) {
        let {
            templates: t,
            guildId: r
        } = e;
        s[r] = t
    }
})