/** chunk id: 225437 params = (module,exports,require) **/
n.d(t, {
    A: () => u
});
var i = n(311907),
    l = n(506774),
    r = n(73153);
let a = "hasSeenGuildTemplatePromotionTooltip",
    s = {},
    o = !0 === l.w.get(a);

function d(e) {
    let {
        guildId: t
    } = e;
    s = {
        ...s,
        [t]: !1
    }
}
class c extends i.Ay.Store {
    static displayName = "GuildTemplateTooltipStore";
    shouldShowGuildTemplateDirtyTooltip(e) {
        return s[e] ?? !1
    }
    shouldShowGuildTemplatePromotionTooltip() {
        return !o
    }
}
let u = new c(r.h, {
    GUILD_TEMPLATE_DIRTY_TOOLTIP_REFRESH: function(e) {
        let {
            guildTemplate: t
        } = e;
        s = {
            ...s,
            [t.source_guild_id]: t.is_dirty || !1
        }
    },
    GUILD_TEMPLATE_PROMOTION_TOOLTIP_HIDE: function() {
        l.w.set(a, !0), o = !0
    },
    GUILD_TEMPLATE_SYNC_SUCCESS: function(e) {
        s = {
            ...s,
            [e.guildTemplate.source_guild_id]: !1
        }
    },
    GUILD_TEMPLATE_DIRTY_TOOLTIP_HIDE: d,
    GUILD_TEMPLATE_DELETE_SUCCESS: d
})