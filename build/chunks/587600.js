/** chunk id: 587600 params = (module,exports,require) **/
n.d(t, {
    C5: () => d,
    Sk: () => o,
    yX: () => r,
    yg: () => _
}), n(321073);
var i = n(575593),
    a = n(392107),
    l = n(546145);

function r(e, t) {
    let n = {};
    void 0 !== e.pendingBanner && (n.banner = e.pendingBanner), null != e.pendingBio && (n.bio = e.pendingBio), null != e.pendingPronouns && (n.pronouns = e.pendingPronouns), void 0 !== e.pendingAccentColor && (n.accent_color = e.pendingAccentColor), void 0 !== e.pendingThemeColors && (n.theme_colors = e.pendingThemeColors);
    let a = function(e, t) {
        let {
            pendingProfileEffect: n,
            pendingProfileFrame: a
        } = e;
        if (void 0 === n && void 0 === a) return {};
        let r = (0, l.A)(t),
            o = [...r?.collectibles ?? []];
        return void 0 !== n && (o = o.filter(e => {
            let {
                type: t
            } = e;
            return t !== i.R.PROFILE_EFFECT
        }), null !== n && o.push({
            skuId: n.skuId,
            type: i.R.PROFILE_EFFECT
        })), void 0 !== a && (o = o.filter(e => {
            let {
                type: t
            } = e;
            return t !== i.R.PROFILE_FRAME
        }), null !== a && o.push(a)), {
            collectibles_sku_ids: o.map(e => {
                let {
                    skuId: t
                } = e;
                return t
            })
        }
    }(e, t);
    return void 0 !== a.collectibles_sku_ids && (n.collectibles_sku_ids = a.collectibles_sku_ids), n
}

function o(e) {
    let t = {};
    if (void 0 !== e.pendingGlobalName && (t.globalName = e.pendingGlobalName), void 0 !== e.pendingNameplate && (t.nameplate = e.pendingNameplate), void 0 !== e.pendingAvatar) {
        let {
            pendingAvatar: n
        } = e;
        null === n ? t.avatar = null : n.assetOrigin === a.E.ARCHIVED_ASSET ? t.avatarId = n.originalAsset.id : (t.avatar = n.imageUri, t.avatarDescription = n.description)
    }
    return void 0 !== e.pendingAvatarDecoration && (t.avatarDecoration = e.pendingAvatarDecoration), void 0 !== e.pendingDisplayNameStyles && (t.displayNameStyles = e.pendingDisplayNameStyles), t
}

function d(e) {
    let t = {};
    if (void 0 !== e.pendingAvatar) {
        let {
            pendingAvatar: n
        } = e;
        null === n ? t.avatar = null : n.assetOrigin === a.E.ARCHIVED_ASSET ? t.avatarId = n.originalAsset.id : (t.avatar = n.imageUri, t.avatarDescription = n.description)
    }
    return void 0 !== e.pendingNickname && (t.nick = e.pendingNickname ?? ""), void 0 !== e.pendingAvatarDecoration && (t.avatarDecoration = e.pendingAvatarDecoration), void 0 !== e.pendingNameplate && (t.nameplate = e.pendingNameplate), void 0 !== e.pendingDisplayNameStyles && (t.displayNameStyles = e.pendingDisplayNameStyles), t
}

function _(e) {
    let t = {};
    return void 0 !== e.pendingPrimaryGuildId && (t.primaryGuildId = e.pendingPrimaryGuildId), t
}