/** chunk id: 74399 params = (module,exports,require) **/
"use strict";
r.d(t, {
    A: () => c
});
var n = r(311907),
    i = r(73153),
    a = r(95701),
    o = r(734057);
let s = {},
    l = {};
class _ extends n.Ay.Store {
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
let c = new _(i.h, {
    GUILD_ROLE_SUBSCRIPTIONS_STASH_TEMPLATE_CHANNELS: function(e) {
        let {
            selectedTemplate: t,
            guildId: r
        } = e, n = Object.values(o.A.getMutableGuildChannelsForGuild(r));
        t.listings.forEach(e => {
            e.channels.forEach(e => {
                let t = n.find(t => t.name === e.name);
                if (void 0 !== t) e.id = t.id;
                else if (!(e.id in l)) {
                    let t = (0, a.createChannelRecord)(e);
                    l[e.id] = t
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