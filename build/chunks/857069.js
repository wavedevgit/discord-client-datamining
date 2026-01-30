/** chunk id: 857069, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => u,
    l: () => c
});
var r = n(405269),
    l = n(927813),
    i = n(661191),
    s = n(143413),
    a = n(652215);
let o = 7 * l.A.Millis.MINUTE;

function c(e, t, n) {
    return null == t || t.type === a.TZK.MESSAGE && t.content.id === t.content.channel_id || t.type !== a.TZK.MESSAGE && t.type !== a.TZK.THREAD_STARTER_MESSAGE || u(e, t.content, n)
}

function u(e, t, n) {
    return !!(n.hasFlag(a.pr7.HAS_THREAD) || n.isCommandType()) || (n.type > a.lAJ.DEFAULT ? !(0, s.A)(t) || n.type === a.lAJ.REPLY : !!((0, s.A)(t) || t.author.id !== n.author.id || t.hasFlag(a.pr7.EPHEMERAL) !== n.hasFlag(a.pr7.EPHEMERAL) || null != n.webhookId && t.author.username !== n.author.username || (null == e ? void 0 : e.isForumPost()) && t.id === i.default.castChannelIdAsMessageId(e.id) || !(0, r.ro)(t.timestamp, n.timestamp) || !(0, r.v0)(t.timestamp, n.timestamp, o) || n.hasFlag(a.pr7.SUPPRESS_NOTIFICATIONS) && !t.hasFlag(a.pr7.SUPPRESS_NOTIFICATIONS) || t.hasFlag(a.pr7.SUPPRESS_NOTIFICATIONS) && !n.hasFlag(a.pr7.SUPPRESS_NOTIFICATIONS) && (n.mentions.length > 0 || n.mentionRoles.length > 0 || n.mentionEveryone)) || n.applicationId !== t.applicationId)
}