/** chunk id: 587600 params = (module,exports,require) **/
t.d(n, {
    C5: () => s,
    Sk: () => d,
    yX: () => r,
    yg: () => o
}), t(321073);
var i = t(575593),
    a = t(392107),
    l = t(546145);

function r(e, n) {
    let t = {};
    void 0 !== e.pendingBanner && (t.banner = e.pendingBanner), null != e.pendingBio && (t.bio = e.pendingBio), null != e.pendingPronouns && (t.pronouns = e.pendingPronouns), void 0 !== e.pendingAccentColor && (t.accent_color = e.pendingAccentColor), void 0 !== e.pendingThemeColors && (t.theme_colors = e.pendingThemeColors);
    let a = function(e, n) {
        let {
            pendingProfileEffect: t,
            pendingProfileFrame: a
        } = e;
        if (void 0 === t && void 0 === a) return {};
        let r = (0, l.A)(n),
            d = [...r?.collectibles ?? []];
        return void 0 !== t && (d = d.filter(e => {
            let {
                type: n
            } = e;
            return n !== i.R.PROFILE_EFFECT
        }), null !== t && d.push({
            skuId: t.skuId,
            type: i.R.PROFILE_EFFECT
        })), void 0 !== a && (d = d.filter(e => {
            let {
                type: n
            } = e;
            return n !== i.R.PROFILE_FRAME
        }), null !== a && d.push(a)), {
            collectibles_sku_ids: d.map(e => {
                let {
                    skuId: n
                } = e;
                return n
            })
        }
    }(e, n);
    return void 0 !== a.collectibles_sku_ids && (t.collectibles_sku_ids = a.collectibles_sku_ids), t
}

function d(e) {
    let n = {};
    if (void 0 !== e.pendingGlobalName && (n.globalName = e.pendingGlobalName), void 0 !== e.pendingNameplate && (n.nameplate = e.pendingNameplate), void 0 !== e.pendingAvatar) {
        let {
            pendingAvatar: t
        } = e;
        null === t ? n.avatar = null : t.assetOrigin === a.E.ARCHIVED_ASSET ? n.avatarId = t.originalAsset.id : (n.avatar = t.imageUri, n.avatarDescription = t.description)
    }
    return void 0 !== e.pendingAvatarDecoration && (n.avatarDecoration = e.pendingAvatarDecoration), void 0 !== e.pendingDisplayNameStyles && (n.displayNameStyles = e.pendingDisplayNameStyles), n
}

function s(e) {
    let n = {};
    if (void 0 !== e.pendingAvatar) {
        let {
            pendingAvatar: t
        } = e;
        null === t ? n.avatar = null : t.assetOrigin === a.E.ARCHIVED_ASSET ? n.avatarId = t.originalAsset.id : (n.avatar = t.imageUri, n.avatarDescription = t.description)
    }
    return void 0 !== e.pendingNickname && (n.nick = e.pendingNickname ?? ""), void 0 !== e.pendingAvatarDecoration && (n.avatarDecoration = e.pendingAvatarDecoration), void 0 !== e.pendingNameplate && (n.nameplate = e.pendingNameplate), void 0 !== e.pendingDisplayNameStyles && (n.displayNameStyles = e.pendingDisplayNameStyles), n
}

function o(e) {
    let n = {};
    return void 0 !== e.pendingPrimaryGuildId && (n.primaryGuildId = e.pendingPrimaryGuildId), n
}