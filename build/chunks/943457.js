/** chunk id: 943457, original params: t,e,n (module,exports,require) **/
n.d(e, {
    A: () => s
});
var i = n(110259),
    a = n(198982),
    l = n(499785),
    r = n(652215);
let s = {
    createGuildFromTemplate: async function(t, e, n, s, d) {
        try {
            return (await l.A.post({
                url: r.Rsh.GUILDS,
                body: {
                    name: t,
                    icon: e,
                    channels: n.channels,
                    system_channel_id: n.system_channel_id,
                    roles: n.roles,
                    guild_template_code: n.code,
                    staff_only: !!d || void 0
                },
                trackedActionData: {
                    event: i.NetworkActionNames.GUILD_CREATE,
                    properties: {
                        template_name: n.id,
                        is_community_intent: s
                    }
                },
                rejectWithError: !1
            })).body
        } catch (t) {
            throw new a.LG(t)
        }
    }
}