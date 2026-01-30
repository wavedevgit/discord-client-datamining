/** chunk id: 490427, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => l
});
var r = n(508675),
    i = n(95701),
    a = n(690521),
    o = n(488926),
    s = n(652215);

function l(e) {
    let {
        activity: t,
        user: n,
        channel: l
    } = e;
    if (null == n || (null == t ? void 0 : t.type) !== s.$pd.CUSTOM_STATUS || null == t.emoji) return !1;
    let c = t.emoji;
    if (null == c.id || null == l || !(0, i.ke)(l.type)) return !0;
    let u = r.Ay.getUsableCustomEmojiById(c.id),
        d = a.Ay.isInternalEmojiForGuildId(u, l.getGuildId()),
        f = o.$3({
            permission: s.xBc.USE_EXTERNAL_EMOJIS,
            user: n,
            context: l
        });
    return !d || f
}