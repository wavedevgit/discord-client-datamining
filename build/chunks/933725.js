/** chunk id: 933725 params = (module,exports,require) **/
n.d(t, {
    m: () => s
});
var l = n(562465),
    a = n(73153),
    i = n(287809),
    r = n(652215);
async function s(e, t) {
    try {
        let n = await l.Bo.put({
            url: r.Rsh.USER_SET_GUILD_IDENTITY,
            body: {
                identity_guild_id: e,
                identity_enabled: t
            },
            rejectWithError: !1
        });
        return n.ok && a.h.dispatch({
            type: "CURRENT_USER_UPDATE",
            user: {
                ...i.default.getCurrentUser(),
                ...n.body
            }
        }), n
    } catch (e) {
        return e
    }
}