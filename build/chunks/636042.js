/** chunk id: 636042, original params: t,e,n (module,exports,require) **/
n.d(e, {
    C5: () => r,
    E9: () => T,
    JY: () => s,
    Ts: () => c,
    Ul: () => p,
    Y_: () => E,
    ZH: () => l,
    n3: () => d,
    nK: () => S,
    pn: () => h,
    uc: () => I,
    yy: () => _
});
var o = n(73153),
    i = n(686956),
    a = n(619006);

function _(t) {
    o.h.dispatch({
        type: "GUILD_SETTINGS_ROLES_SORT_UPDATE",
        roles: t
    })
}

function c() {
    o.h.dispatch({
        type: "GUILD_SETTINGS_ROLES_INIT"
    })
}

function p(t, e, n) {
    o.h.dispatch({
        type: "GUILD_SETTINGS_ROLES_UPDATE_PERMISSIONS",
        id: t,
        flag: e,
        allow: n
    })
}

function E(t) {
    o.h.dispatch({
        type: "GUILD_SETTINGS_ROLES_CLEAR_PERMISSIONS",
        id: t
    })
}

function S(t, e) {
    o.h.dispatch({
        type: "GUILD_SETTINGS_ROLES_UPDATE_NAME",
        id: t,
        name: e
    })
}

function l(t, e) {
    o.h.dispatch({
        type: "GUILD_SETTINGS_ROLES_UPDATE_COLOR",
        id: t,
        color: e
    })
}

function I(t, e, n) {
    o.h.dispatch({
        type: "GUILD_SETTINGS_ROLES_UPDATE_COLORS",
        id: t,
        colors: e,
        currentStyle: n
    })
}

function r(t, e) {
    o.h.dispatch({
        type: "GUILD_SETTINGS_ROLES_ROLE_STYLE_UPDATE",
        id: t,
        currentStyle: e
    })
}

function T(t, e, n) {
    o.h.dispatch({
        type: "GUILD_SETTINGS_ROLES_UPDATE_SETTINGS",
        id: t,
        hoist: e,
        mentionable: n
    })
}

function d(t, e, n) {
    o.h.dispatch({
        type: "GUILD_SETTINGS_ROLES_UPDATE_ROLE_ICON",
        id: t,
        icon: e,
        unicodeEmoji: n
    })
}

function h(t, e) {
    o.h.dispatch({
        type: "GUILD_SETTINGS_ROLES_UPDATE_ROLE_CONNECTION_CONFIGURATIONS",
        roleId: t,
        roleConnectionConfigurations: e
    })
}
async function s(t, e, n, _, c) {
    let p = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {};
    o.h.dispatch({
        type: "GUILD_SETTINGS_ROLES_SUBMITTING"
    });
    try {
        for (null != n && n.length > 0 && await i.A.batchRoleUpdate(t, n); null != e && e.length > 0;) {
            let n = e.pop();
            null != n && "" !== n.name && await i.A.updateRole(t, n.id, {
                name: n.name,
                description: n.description ?? void 0,
                permissions: n.permissions,
                color: n.color,
                colors: n.colors ?? void 0,
                hoist: n.hoist,
                mentionable: n.mentionable,
                icon: n.icon,
                unicodeEmoji: n.unicodeEmoji
            })
        }
        if (null != c && null != _)
            for await (let e of _) {
                let n = c.get(e);
                await (0, a.qK)(t, e, n ?? [])
            }
        o.h.dispatch({
            type: "GUILD_SETTINGS_ROLES_SAVE_SUCCESS"
        })
    } catch (t) {
        if (o.h.dispatch({
                type: "GUILD_SETTINGS_ROLES_SAVE_FAIL",
                message: t.body?.message ?? Object.values(t.body)[0]
            }), p.throwErr) throw t
    }
}