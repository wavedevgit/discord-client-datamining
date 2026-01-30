/** chunk id: 386936, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    $: () => a,
    s: () => o
});
var r = n(954571),
    i = n(652215);

function a(e, t) {
    r.default.track(i.HAw.DM_SETTINGS_UPSELL_ACTION, {
        action: e,
        guild_id: t
    })
}
var o = function(e) {
    return e.MODAL_VIEWED = "modal_viewed", e.MODAL_DISMISSED = "modal_dismissed", e.MODAL_GUILD_SETTINGS_CLICKED = "modal_guild_settings_clicked", e.SUPPRESSED_BY_COOLDOWN = "suppressed_by_cooldown", e.MODAL_DISABLED_DMS = "modal_disabled_dms", e
}({})