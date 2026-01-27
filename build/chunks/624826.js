/** Chunk was on web.js **/
/** chunk id: 624826, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    t: () => s
});
var r = n(392107),
    i = n(954571),
    a = n(486020),
    o = n(652215);

function s(e) {
    let {
        avatarHash: t,
        avatarId: n,
        isGuildProfile: s = !1,
        avatarAssetOrigin: l = r.E.NEW_ASSET
    } = e;
    i.default.track(o.HAw.USER_AVATAR_UPDATED, {
        animated: (0, a.VI)(t),
        is_guild_profile: s,
        recent_avatar_id: l === r.E.ARCHIVED_ASSET ? Number(n) : void 0,
        is_edited_recent_avatar: l === r.E.EDITED_ARCHIVED_ASSET
    })
}