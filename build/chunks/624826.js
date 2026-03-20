/** chunk id: 624826 params = (module,exports,require) **/
n.d(t, {
    t: () => o
});
var a = n(392107),
    i = n(954571),
    l = n(486020),
    r = n(652215);

function o(e) {
    let {
        avatarHash: t,
        avatarId: n,
        isGuildProfile: o = !1,
        avatarAssetOrigin: s = a.E.NEW_ASSET
    } = e;
    i.default.track(r.HAw.USER_AVATAR_UPDATED, {
        animated: (0, l.VI)(t),
        is_guild_profile: o,
        recent_avatar_id: s === a.E.ARCHIVED_ASSET ? Number(n) : void 0,
        is_edited_recent_avatar: s === a.E.EDITED_ARCHIVED_ASSET
    })
}