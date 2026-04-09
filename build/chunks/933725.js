/** chunk id: 933725 params = (module,exports,require) **/
n.d(t, {
    m: () => s
});
var l = n(562465),
    a = n(73153),
    r = n(287809),
    i = n(652215);
async function s(e, t) {
    try {
        let n = await l.Bo.put({
            url: i.Rsh.USER_SET_GUILD_IDENTITY,
            body: {
                identity_guild_id: e,
                identity_enabled: t
            },
            rejectWithError: !1
        });
        return n.ok && a.h.dispatch({
            type: "CURRENT_USER_UPDATE",
            user: {
                ...r.default.getCurrentUser(),
                ...n.body
            }
        }), n
    } catch (e) {
        return e
    }
}