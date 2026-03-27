/** chunk id: 624826 params = (module,exports,require) **/
t.d(n, {
    t: () => l
});
var a = t(392107),
    i = t(954571),
    r = t(486020),
    o = t(652215);

function l(e) {
    let {
        avatarHash: n,
        avatarId: t,
        isGuildProfile: l = !1,
        avatarAssetOrigin: d = a.E.NEW_ASSET
    } = e;
    i.default.track(o.HAw.USER_AVATAR_UPDATED, {
        animated: (0, r.VI)(n),
        is_guild_profile: l,
        recent_avatar_id: d === a.E.ARCHIVED_ASSET ? Number(t) : void 0,
        is_edited_recent_avatar: d === a.E.EDITED_ARCHIVED_ASSET
    })
}