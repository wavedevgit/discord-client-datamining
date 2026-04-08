/** chunk id: 619006 params = (module,exports,require) **/
n.d(e, {
    XC: () => c,
    os: () => l,
    qK: () => r
});
var i = n(562465),
    a = n(73153),
    o = n(545868),
    s = n(652215);

function l(t, e) {
    i.Bo.get({
        url: s.Rsh.GUILD_ROLE_CONNECTIONS_CONFIGURATION(t, e),
        rejectWithError: !0
    }).then(t => {
        let n = [];
        t.body.length > 0 && (n = t.body.map(t => t.map(t => ({
            connectionType: t.connection_type,
            connectionMetadataField: t.connection_metadata_field,
            applicationId: t.application_id,
            operator: t.operator,
            value: t.value
        })))), a.h.dispatch({
            type: "GUILD_ROLE_CONNECTIONS_CONFIGURATIONS_FETCH_SUCCESS",
            roleId: e,
            roleConnectionConfigurations: n
        })
    }).catch(() => {})
}
async function r(t, e, n) {
    let l = n.map(t => t.map(t => ({
            connection_type: t.connectionType,
            connection_metadata_field: t.connectionMetadataField,
            application_id: t.applicationId,
            operator: t.operator,
            value: t.value
        }))),
        r = await i.Bo.put({
            url: s.Rsh.GUILD_ROLE_CONNECTIONS_CONFIGURATION(t, e),
            body: 0 === l.length ? [] : l,
            oldFormErrors: !0,
            rejectWithError: !1
        }).then(t => {
            let e = [];
            return t.body.length > 0 && (e = t.body.map(t => t.map(t => ({
                connectionType: t.connection_type,
                connectionMetadataField: t.connection_metadata_field,
                applicationId: t.application_id,
                operator: t.operator,
                value: t.value
            })))), e
        }),
        c = await (0, o.a)(t, e, !1);
    null != c && a.h.dispatch({
        type: "GUILD_ROLE_MEMBER_COUNT_UPDATE",
        guildId: t,
        roleId: e,
        count: c
    }), a.h.dispatch({
        type: "GUILD_ROLE_CONNECTIONS_CONFIGURATIONS_FETCH_SUCCESS",
        roleId: e,
        roleConnectionConfigurations: r
    })
}
async function c() {
    return (await i.Bo.get({
        url: s.Rsh.APPLICATION_USER_ROLE_CONNECTIONS,
        rejectWithError: !1
    })).body
}