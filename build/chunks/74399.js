/** chunk id: 74399 params = (module,exports,require) **/
"use strict";
a.d(t, {
    A: () => _
});
var n = a(311907),
    r = a(73153),
    i = a(95701),
    o = a(734057);
let s = {},
    l = {};
class c extends n.Ay.Store {
    initialize() {
        this.waitFor(o.A)
    }
    static displayName = "GuildRoleSubscriptionTierTemplatesStore";
    getTemplates(e) {
        return s[e]
    }
    getTemplateWithCategory(e, t) {
        return s[e]?.find(e => e.category === t)
    }
    getChannel(e) {
        return l[e]
    }
}
let _ = new c(r.h, {
    GUILD_ROLE_SUBSCRIPTIONS_STASH_TEMPLATE_CHANNELS: function(e) {
        let {
            selectedTemplate: t,
            guildId: a
        } = e, n = Object.values(o.A.getMutableGuildChannelsForGuild(a));
        t.listings.forEach(e => {
            e.channels.forEach(e => {
                let t = n.find(t => t.name === e.name);
                if (void 0 !== t) e.id = t.id;
                else if (!(e.id in l)) {
                    let t = (0, i.createChannelRecord)(e);
                    l[e.id] = t
                }
            })
        })
    },
    GUILD_ROLE_SUBSCRIPTIONS_FETCH_TEMPLATES: function(e) {
        let {
            templates: t,
            guildId: a
        } = e;
        s[a] = t
    }
})