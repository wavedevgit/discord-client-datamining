/** chunk id: 587600 params = (module,exports,require) **/
t.d(n, {
    C5: () => o,
    Sk: () => r,
    yX: () => i,
    yg: () => l
}), t(321073);
var a = t(392107);

function i(e) {
    let n = {};
    return void 0 !== e.pendingBanner && (n.banner = e.pendingBanner), null != e.pendingBio && (n.bio = e.pendingBio), null != e.pendingPronouns && (n.pronouns = e.pendingPronouns), void 0 !== e.pendingAccentColor && (n.accent_color = e.pendingAccentColor), void 0 !== e.pendingThemeColors && (n.theme_colors = e.pendingThemeColors), void 0 !== e.pendingProfileEffect && (n.collectibles_sku_ids = n.collectibles_sku_ids ?? [], e.pendingProfileEffect?.skuId != null && n.collectibles_sku_ids.push(e.pendingProfileEffect.skuId)), n
}

function r(e) {
    let n = {};
    if (void 0 !== e.pendingGlobalName && (n.globalName = e.pendingGlobalName), void 0 !== e.pendingNameplate && (n.nameplate = e.pendingNameplate), void 0 !== e.pendingAvatar) {
        let {
            pendingAvatar: t
        } = e;
        null === t ? n.avatar = null : t.assetOrigin === a.E.ARCHIVED_ASSET ? n.avatarId = t.originalAsset.id : (n.avatar = t.imageUri, n.avatarDescription = t.description)
    }
    return void 0 !== e.pendingAvatarDecoration && (n.avatarDecoration = e.pendingAvatarDecoration), void 0 !== e.pendingDisplayNameStyles && (n.displayNameStyles = e.pendingDisplayNameStyles), n
}

function o(e) {
    let n = {};
    if (void 0 !== e.pendingAvatar) {
        let {
            pendingAvatar: t
        } = e;
        null === t ? n.avatar = null : t.assetOrigin === a.E.ARCHIVED_ASSET ? n.avatarId = t.originalAsset.id : (n.avatar = t.imageUri, n.avatarDescription = t.description)
    }
    return void 0 !== e.pendingNickname && (n.nick = e.pendingNickname ?? ""), void 0 !== e.pendingAvatarDecoration && (n.avatarDecoration = e.pendingAvatarDecoration), void 0 !== e.pendingNameplate && (n.nameplate = e.pendingNameplate), void 0 !== e.pendingDisplayNameStyles && (n.displayNameStyles = e.pendingDisplayNameStyles), n
}

function l(e) {
    let n = {};
    return void 0 !== e.pendingPrimaryGuildId && (n.primaryGuildId = e.pendingPrimaryGuildId), n
}