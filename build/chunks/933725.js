/** chunk id: 933725 params = (module,exports,require) **/
t.d(n, {
    m: () => s
});
var i = t(562465),
    a = t(73153),
    l = t(287809),
    r = t(652215);
async function s(e, n) {
    try {
        let t = await i.Bo.put({
            url: r.Rsh.USER_SET_GUILD_IDENTITY,
            body: {
                identity_guild_id: e,
                identity_enabled: n
            },
            rejectWithError: !1
        });
        return t.ok && a.h.dispatch({
            type: "CURRENT_USER_UPDATE",
            user: {
                ...l.default.getCurrentUser(),
                ...t.body
            }
        }), t
    } catch (e) {
        return e
    }
}