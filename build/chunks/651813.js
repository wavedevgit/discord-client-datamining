/** chunk id: 651813, original params: e,t,n (module,exports,require) **/
function i(e, t) {
    return null == e ? null : e.isDM() ? t.getUser(e.getRecipientId()) ?? null : null
}

function l(e, t) {
    return null == e ? null : null != e.getGuildId() ? t.getGuild(e.getGuildId()) ?? null : null
}
n.d(t, {
    P: () => l,
    j: () => i
})