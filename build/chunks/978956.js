/** chunk id: 978956, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => s
});
var i = n(652215);

function s(e) {
    let t = e.features.has(i.GuildFeatures.COMMUNITY);
    return !t && e.features.has(i.GuildFeatures.NON_COMMUNITY_RAID_ALERTS) || t && !e.features.has(i.GuildFeatures.RAID_ALERTS_DISABLED)
}