/** chunk id: 943220, original params: e,s,t (module,exports,require) **/
t.d(s, {
    A: () => r
});
var n = t(627968);
t(64700);
var a = t(763754),
    l = t(635071),
    i = t(812299);

function r(e) {
    let s = (0, a.Ay)(e.message),
        t = (0, i.y)({
            message: e.message,
            channel: e.channel,
            user: e.message?.author ?? e.userOverride,
            compact: !!e.compact,
            isRepliedMessage: !!e.isRepliedMessage
        }),
        r = {};
    return null != t && (r[l.w.SYSTEM_TAG] = t), (0, n.jsx)(l.A, {
        ...e,
        author: s,
        decorations: r
    })
}