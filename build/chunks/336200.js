/** Chunk was on 263 **/
/** chunk id: 336200, original params: e,t,a (module,exports,require) **/
a.d(t, {
    c: () => l,
    y: () => i
});
var r = a(562465),
    n = a(73153),
    s = a(652215);

function l(e, t) {
    n.h.dispatch({
        type: "GUILD_ROLE_SUBSCRIPTIONS_STASH_TEMPLATE_CHANNELS",
        selectedTemplate: e,
        guildId: t
    })
}
async function i(e) {
    let t = (await r.Bo.get({
        url: s.Rsh.GUILD_ROLE_SUBSCRIPTION_LISTING_TEMPLATES(e),
        rejectWithError: !1
    })).body;
    null != t.templates && n.h.dispatch({
        type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_TEMPLATES",
        templates: t.templates,
        guildId: e
    })
}