/** chunk id: 569745 params = (module,exports,require) **/
n.d(t, {
    Q: () => s
});
var i = n(302495),
    l = n(334465),
    r = n(901123);
let a = new Set([r.BV.APP_WITH_INVITE_AND_GUILD_ONBOARDING(":inviteCode"), r.BV.APP_WITH_GIFT_CODE(":giftCode"), r.BV.APP, r.BV.PICK_GUILD_SETTINGS(":section?", ":subsection?"), r.BV.SETTINGS(":section", ":subsection?"), r.BV.USER_GUILD_NOTIFICATION_SETTINGS(i.p.guildId()), r.BV.APPLICATION_LIBRARY_INVENTORY, r.BV.WELCOME(i.p.guildId({
    optional: !0
}), i.p.channelId({
    optional: !0
})), r.BV.GUILD_EVENT_DETAILS(i.p.guildId({
    optional: !0
}), ":guildEventId"), r.BV.GUILD_SETTINGS(i.p.guildId(), ":section?", ":subsection?"), r.BV.CHANNEL_THREAD_VIEW(i.p.guildId(), i.p.channelId(), ":threadId", ":messageId?"), r.BV.CHANNEL(i.p.guildId(), i.p.channelId({
    optional: !0
}), ":messageId?"), r.BV.ACTIVITY, r.BV.ACTIVITIES, r.BV.ACTIVITIES_HAPPENING_NOW, r.BV.ACTIVITY_DETAILS(":applicationId"), r.BV.APPLICATION_LIBRARY, r.BV.APPLICATION_STORE, r.BV.MESSAGE_REQUESTS, r.BV.COLLECTIBLES_SHOP, r.BV.COLLECTIBLES_SHOP_COLLECTION_DETAIL(":collectionId"), r.BV.COLLECTIBLES_SHOP_PRODUCT_DETAIL(":skuId"), r.BV.COLLECTIBLES_SHOP_LAYOUT(":layoutId"), r.BV.GUILD_DISCOVERY, r.BV.QUEST_HOME_DEPRECATED, r.BV.QUEST_HOME, r.BV.ICYMI, r.BV.GLOBAL_DISCOVERY, r.BV.GUILD_MEMBER_VERIFICATION(i.p.guildId()), r.BV.GUILD_MEMBER_VERIFICATION_FOR_HUB(i.p.guildId(), ":inviteCode?"), r.BV.GUILD_BOOSTING_MARKETING(i.p.guildId()), r.BV.GUILD_FEATURE(":feature", i.p.guildId()), r.BV.FEATURE(":feature"), r.BV.FAMILY_CENTER, r.BV.APPLICATION_DIRECTORY, r.BV.GAME_SHOP(i.p.guildId(), ":shopSkuId?", ":shopSlug?")]);

function s(e) {
    for (let t of a)
        if (null != (0, l.B)(e, {
                path: t
            })) return !0;
    return !1
}