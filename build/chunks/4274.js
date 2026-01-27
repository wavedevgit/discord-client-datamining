/** Chunk was on 52081 **/
/** chunk id: 4274, original params: e,t,n (module,exports,require) **/
n.d(t, {
    g: () => s,
    s: () => c
});
var r = n(287809),
    l = n(975571),
    i = n(927578),
    o = n(652215),
    a = n(985018);

function s(e) {
    switch (e) {
        case o.t02.TOO_MANY_USER_GUILDS:
            let t = r.default.getCurrentUser(),
                n = i.Ay.canUseIncreasedGuildCap(t) || (null == t ? void 0 : t.isStaff()) ? o.cZu : o.qlD;
            return {
                title: a.intl.formatToPlainString(a.t["ttJ/hj"], {
                    quantity: n
                }), description: a.intl.string(a.t.iLyuDO)
            };
        case o.t02.GUILD_AT_CAPACITY:
            return {
                title: a.intl.string(a.t.ZZlox4), description: a.intl.string(a.t.ZUEGFn)
            };
        case o.t02.GUILD_JOIN_INVITE_LIMITED_ACCESS:
            return {
                title: a.intl.string(a.t.kJwpBW), description: a.intl.string(a.t.ZUEGFn)
            };
        case o.t02.USER_GUILD_JOIN_LARGE_GUILD_UNDERAGE_DISALLOWED:
            return {
                title: a.intl.string(a.t["u/xsK9"]), description: a.intl.string(a.t.SxY4IW)
            };
        default:
            return null
    }
}

function c(e) {
    switch (e) {
        case o.t02.TOO_MANY_USER_GUILDS:
            return a.intl.string(a.t.iLyuDO);
        case o.t02.GUILD_AT_CAPACITY:
            return a.intl.string(a.t.M6unNJ);
        case o.t02.INVALID_COUNTRY_CODE:
            return a.intl.string(a.t.sRJGR1);
        case o.t02.INVALID_CANNOT_FRIEND_SELF:
            return a.intl.string(a.t["mY2R+F"]);
        case o.t02.INVITES_DISABLED:
            return a.intl.format(a.t.RXSeLl, {
                articleLink: l.A.getArticleURL(o.MVz.INVITE_DISABLED)
            });
        default:
            return a.intl.string(a.t.dDZRdy)
    }
}