/** chunk id: 370876, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A3: () => u,
    DN: () => d,
    _t: () => h,
    mR: () => o,
    zP: () => c
});
var i = n(284009),
    s = n.n(i),
    l = n(735438),
    a = n.n(l),
    r = n(946116);

function o(e) {
    return s()(e.type === r.fx.GUILD, "Directory entries must be connected to a guild!"), {
        channelId: e.directory_channel_id,
        guildId: e.entity_id,
        type: e.type,
        authorId: e.author_id,
        createdAt: e.created_at,
        description: e.description,
        primaryCategoryId: e.primary_category_id,
        name: e.guild?.name,
        icon: e.guild?.icon,
        splash: e.guild?.splash,
        features: new Set(e.guild?.features),
        approximateMemberCount: e.guild?.approximate_member_count,
        approximatePresenceCount: e.guild?.approximate_presence_count,
        featurableInDirectory: e.guild?.featurable_in_directory
    }
}
let c = 5;

function d(e) {
    return a().orderBy(e, [e => e.approximateMemberCount], ["desc"])
}

function u(e) {
    var t;
    return (t = e.filter(e => e.featurableInDirectory), a().orderBy(t, [e => e.createdAt], ["desc"])).slice(0, c)
}

function h(e) {
    return d(e)
}