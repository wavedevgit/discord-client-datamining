/** chunk id: 661191, original params: e,t,n (module,exports,require) **/
"use strict";
n.r(t), n.d(t, {
    DISCORD_EPOCH: () => a.ZY,
    SnowflakeSequence: () => a.gg,
    default: () => s
});
var r = n(735438),
    i = n.n(r),
    a = n(363270);

function o(e) {
    return e
}
let s = {
    age: function(e) {
        return a.KW(e)
    },
    extractTimestamp: function(e) {
        return a.uL(e)
    },
    compare: function(e, t) {
        return a.UD(e, t)
    },
    atPreviousMillisecond: function(e) {
        return a.QQ(e)
    },
    atNextMillisecond: function(e) {
        return a.Uk(e)
    },
    fromTimestamp: function(e) {
        return a.z(e)
    },
    fromTimestampWithSequence: function(e, t) {
        return a.M0(e, t)
    },
    keys: function(e) {
        return Object.keys(e)
    },
    forEach: function(e, t) {
        i().forEach(e, (e, n) => t(e, n))
    },
    forEachKey: function(e, t) {
        for (let n in e) t(n)
    },
    entries: function(e) {
        return Object.entries(e)
    },
    isProbablyAValidSnowflake: function(e) {
        return a.Nl(e)
    },
    castChannelIdAsMessageId: function(e) {
        return o(e)
    },
    castMessageIdAsChannelId: function(e) {
        return o(e)
    },
    castGuildIdAsEveryoneGuildRoleId: function(e) {
        return o(e)
    },
    cast: o
}