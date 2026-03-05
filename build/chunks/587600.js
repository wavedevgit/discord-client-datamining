/** chunk id: 587600 params = (module,exports,require) **/
a.d(n, {
    C5: () => r,
    Sk: () => l,
    yX: () => i,
    yg: () => s
}), a(321073);
var t = a(392107);

function i(e) {
    let n = {};
    return void 0 !== e.pendingBanner && (n.banner = e.pendingBanner), null != e.pendingBio && (n.bio = e.pendingBio), null != e.pendingPronouns && (n.pronouns = e.pendingPronouns), void 0 !== e.pendingAccentColor && (n.accent_color = e.pendingAccentColor), void 0 !== e.pendingThemeColors && (n.theme_colors = e.pendingThemeColors), void 0 !== e.pendingProfileEffect && (n.collectibles_sku_ids = n.collectibles_sku_ids ?? [], e.pendingProfileEffect?.skuId != null && n.collectibles_sku_ids.push(e.pendingProfileEffect.skuId)), n
}

function l(e) {
    let n = {};
    if (void 0 !== e.pendingGlobalName && (n.globalName = e.pendingGlobalName), void 0 !== e.pendingNameplate && (n.nameplate = e.pendingNameplate), void 0 !== e.pendingAvatar) {
        let {
            pendingAvatar: a
        } = e;
        null === a ? n.avatar = null : a.assetOrigin === t.E.ARCHIVED_ASSET ? n.avatarId = a.originalAsset.id : (n.avatar = a.imageUri, n.avatarDescription = a.description)
    }
    return void 0 !== e.pendingAvatarDecoration && (n.avatarDecoration = e.pendingAvatarDecoration), void 0 !== e.pendingDisplayNameStyles && (n.displayNameStyles = e.pendingDisplayNameStyles), n
}

function r(e) {
    let n = {};
    if (void 0 !== e.pendingAvatar) {
        let {
            pendingAvatar: a
        } = e;
        null === a ? n.avatar = null : a.assetOrigin === t.E.ARCHIVED_ASSET ? n.avatarId = a.originalAsset.id : (n.avatar = a.imageUri, n.avatarDescription = a.description)
    }
    return void 0 !== e.pendingNickname && (n.nick = e.pendingNickname ?? ""), void 0 !== e.pendingAvatarDecoration && (n.avatarDecoration = e.pendingAvatarDecoration), void 0 !== e.pendingNameplate && (n.nameplate = e.pendingNameplate), void 0 !== e.pendingDisplayNameStyles && (n.displayNameStyles = e.pendingDisplayNameStyles), n
}

function s(e) {
    let n = {};
    return void 0 !== e.pendingPrimaryGuildId && (n.primaryGuildId = e.pendingPrimaryGuildId), n
}