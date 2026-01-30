/** chunk id: 568185, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => s
});
var r = n(73153),
    i = n(576705),
    a = n(292572),
    o = n(652215);
let s = {
    async checkGuildTemplateDirty(e) {
        if (!i.A.canWithPartialContext(o.xBc.MANAGE_GUILD, {
                guildId: e
            })) return;
        let t = await a.A.loadTemplatesForGuild(e);
        t.body.length > 0 && r.h.dispatch({
            type: "GUILD_TEMPLATE_DIRTY_TOOLTIP_REFRESH",
            guildTemplate: t.body[0]
        })
    },
    hideGuildTemplateDirtyTooltip(e) {
        r.h.dispatch({
            type: "GUILD_TEMPLATE_DIRTY_TOOLTIP_HIDE",
            guildId: e
        })
    },
    hideGuildTemplatePromotionTooltip() {
        r.h.dispatch({
            type: "GUILD_TEMPLATE_PROMOTION_TOOLTIP_HIDE"
        })
    }
}