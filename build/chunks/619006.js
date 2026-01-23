/** Chunk was on 80971 **/
/** chunk id: 619006, original params: e,n,t (module,exports,require) **/
t.d(n, {
    XC: () => r,
    os: () => o,
    qK: () => s
});
var l = t(562465),
    a = t(73153),
    c = t(545868),
    i = t(652215);

function o(e, n) {
    l.Bo.get({
        url: i.Rsh.GUILD_ROLE_CONNECTIONS_CONFIGURATION(e, n),
        rejectWithError: !0
    }).then(e => {
        let t = [];
        e.body.length > 0 && (t = e.body.map(e => e.map(e => ({
            connectionType: e.connection_type,
            connectionMetadataField: e.connection_metadata_field,
            applicationId: e.application_id,
            operator: e.operator,
            value: e.value
        })))), a.h.dispatch({
            type: "GUILD_ROLE_CONNECTIONS_CONFIGURATIONS_FETCH_SUCCESS",
            roleId: n,
            roleConnectionConfigurations: t
        })
    }).catch(() => {})
}
async function s(e, n, t) {
    let o = t.map(e => e.map(e => ({
            connection_type: e.connectionType,
            connection_metadata_field: e.connectionMetadataField,
            application_id: e.applicationId,
            operator: e.operator,
            value: e.value
        }))),
        s = await l.Bo.put({
            url: i.Rsh.GUILD_ROLE_CONNECTIONS_CONFIGURATION(e, n),
            body: 0 === o.length ? [] : o,
            oldFormErrors: !0,
            rejectWithError: !1
        }).then(e => {
            let n = [];
            return e.body.length > 0 && (n = e.body.map(e => e.map(e => ({
                connectionType: e.connection_type,
                connectionMetadataField: e.connection_metadata_field,
                applicationId: e.application_id,
                operator: e.operator,
                value: e.value
            })))), n
        }),
        r = await (0, c.a)(e, n, !1);
    null != r && a.h.dispatch({
        type: "GUILD_ROLE_MEMBER_COUNT_UPDATE",
        guildId: e,
        roleId: n,
        count: r
    }), a.h.dispatch({
        type: "GUILD_ROLE_CONNECTIONS_CONFIGURATIONS_FETCH_SUCCESS",
        roleId: n,
        roleConnectionConfigurations: s
    })
}
async function r() {
    return (await l.Bo.get({
        url: i.Rsh.APPLICATION_USER_ROLE_CONNECTIONS,
        rejectWithError: !1
    })).body
}