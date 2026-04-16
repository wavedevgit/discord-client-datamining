/** chunk id: 624826 params = (module,exports,require) **/
n.d(t, {
    t: () => o
});
var a = n(392107),
    i = n(954571),
    r = n(486020),
    l = n(652215);

function o(e) {
    let {
        avatarHash: t,
        avatarId: n,
        isGuildProfile: o = !1,
        avatarAssetOrigin: d = a.E.NEW_ASSET
    } = e;
    i.default.track(l.HAw.USER_AVATAR_UPDATED, {
        animated: (0, r.VI)(t),
        is_guild_profile: o,
        recent_avatar_id: d === a.E.ARCHIVED_ASSET ? Number(n) : void 0,
        is_edited_recent_avatar: d === a.E.EDITED_ARCHIVED_ASSET
    })
}