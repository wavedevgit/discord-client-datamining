/** chunk id: 624826 params = (module,exports,require) **/
E.d(t, {
    t: () => a
});
var e = E(392107),
    i = E(954571),
    n = E(486020),
    o = E(652215);

function a(_) {
    let {
        avatarHash: t,
        avatarId: E,
        isGuildProfile: a = !1,
        avatarAssetOrigin: S = e.E.NEW_ASSET
    } = _;
    i.default.track(o.HAw.USER_AVATAR_UPDATED, {
        animated: (0, n.VI)(t),
        is_guild_profile: a,
        recent_avatar_id: S === e.E.ARCHIVED_ASSET ? Number(E) : void 0,
        is_edited_recent_avatar: S === e.E.EDITED_ARCHIVED_ASSET
    })
}