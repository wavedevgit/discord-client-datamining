/** chunk id: 587600 params = (module,exports,require) **/
n.d(t, {
    C5: () => d,
    Sk: () => s,
    yX: () => r,
    yg: () => o
}), n(321073);
var a = n(575593),
    l = n(392107),
    i = n(546145);

function r(e, t) {
    let n = {};
    void 0 !== e.pendingBanner && (n.banner = e.pendingBanner), null != e.pendingBio && (n.bio = e.pendingBio), null != e.pendingPronouns && (n.pronouns = e.pendingPronouns), void 0 !== e.pendingAccentColor && (n.accent_color = e.pendingAccentColor), void 0 !== e.pendingThemeColors && (n.theme_colors = e.pendingThemeColors);
    let l = function(e, t) {
        let {
            pendingProfileEffect: n,
            pendingProfileFrame: l
        } = e;
        if (void 0 === n && void 0 === l) return {};
        let r = (0, i.A)(t),
            s = [...r?.collectibles ?? []];
        return void 0 !== n && (s = s.filter(e => {
            let {
                type: t
            } = e;
            return t !== a.R.PROFILE_EFFECT
        }), null !== n && s.push({
            skuId: n.skuId,
            type: a.R.PROFILE_EFFECT
        })), void 0 !== l && (s = s.filter(e => {
            let {
                type: t
            } = e;
            return t !== a.R.PROFILE_FRAME
        }), null !== l && s.push(l)), {
            collectibles_sku_ids: s.map(e => {
                let {
                    skuId: t
                } = e;
                return t
            })
        }
    }(e, t);
    return void 0 !== l.collectibles_sku_ids && (n.collectibles_sku_ids = l.collectibles_sku_ids), n
}

function s(e) {
    let t = {};
    if (void 0 !== e.pendingGlobalName && (t.globalName = e.pendingGlobalName), void 0 !== e.pendingNameplate && (t.nameplate = e.pendingNameplate), void 0 !== e.pendingAvatar) {
        let {
            pendingAvatar: n
        } = e;
        null === n ? t.avatar = null : n.assetOrigin === l.E.ARCHIVED_ASSET ? t.avatarId = n.originalAsset.id : (t.avatar = n.imageUri, t.avatarDescription = n.description)
    }
    return void 0 !== e.pendingAvatarDecoration && (t.avatarDecoration = e.pendingAvatarDecoration), void 0 !== e.pendingDisplayNameStyles && (t.displayNameStyles = e.pendingDisplayNameStyles), t
}

function d(e) {
    let t = {};
    if (void 0 !== e.pendingAvatar) {
        let {
            pendingAvatar: n
        } = e;
        null === n ? t.avatar = null : n.assetOrigin === l.E.ARCHIVED_ASSET ? t.avatarId = n.originalAsset.id : (t.avatar = n.imageUri, t.avatarDescription = n.description)
    }
    return void 0 !== e.pendingNickname && (t.nick = e.pendingNickname ?? ""), void 0 !== e.pendingAvatarDecoration && (t.avatarDecoration = e.pendingAvatarDecoration), void 0 !== e.pendingNameplate && (t.nameplate = e.pendingNameplate), void 0 !== e.pendingDisplayNameStyles && (t.displayNameStyles = e.pendingDisplayNameStyles), t
}

function o(e) {
    let t = {};
    return void 0 !== e.pendingPrimaryGuildId && (t.primaryGuildId = e.pendingPrimaryGuildId), t
}