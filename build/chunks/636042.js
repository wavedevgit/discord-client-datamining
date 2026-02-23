/** chunk id: 636042, original params: t,e,n (module,exports,require) **/
n.d(e, {
    C5: () => h,
    E9: () => E,
    JY: () => T,
    Ts: () => l,
    Ul: () => r,
    Y_: () => c,
    ZH: () => _,
    n3: () => u,
    nK: () => d,
    pn: () => S,
    uc: () => p,
    yy: () => s
});
var i = n(73153),
    a = n(686956),
    o = n(619006);

function s(t) {
    i.h.dispatch({
        type: "GUILD_SETTINGS_ROLES_SORT_UPDATE",
        roles: t
    })
}

function l() {
    i.h.dispatch({
        type: "GUILD_SETTINGS_ROLES_INIT"
    })
}

function r(t, e, n) {
    i.h.dispatch({
        type: "GUILD_SETTINGS_ROLES_UPDATE_PERMISSIONS",
        id: t,
        flag: e,
        allow: n
    })
}

function c(t) {
    i.h.dispatch({
        type: "GUILD_SETTINGS_ROLES_CLEAR_PERMISSIONS",
        id: t
    })
}

function d(t, e) {
    i.h.dispatch({
        type: "GUILD_SETTINGS_ROLES_UPDATE_NAME",
        id: t,
        name: e
    })
}

function _(t, e) {
    i.h.dispatch({
        type: "GUILD_SETTINGS_ROLES_UPDATE_COLOR",
        id: t,
        color: e
    })
}

function p(t, e, n) {
    i.h.dispatch({
        type: "GUILD_SETTINGS_ROLES_UPDATE_COLORS",
        id: t,
        colors: e,
        currentStyle: n
    })
}

function h(t, e) {
    i.h.dispatch({
        type: "GUILD_SETTINGS_ROLES_ROLE_STYLE_UPDATE",
        id: t,
        currentStyle: e
    })
}

function E(t, e, n) {
    i.h.dispatch({
        type: "GUILD_SETTINGS_ROLES_UPDATE_SETTINGS",
        id: t,
        hoist: e,
        mentionable: n
    })
}

function u(t, e, n) {
    i.h.dispatch({
        type: "GUILD_SETTINGS_ROLES_UPDATE_ROLE_ICON",
        id: t,
        icon: e,
        unicodeEmoji: n
    })
}

function S(t, e) {
    i.h.dispatch({
        type: "GUILD_SETTINGS_ROLES_UPDATE_ROLE_CONNECTION_CONFIGURATIONS",
        roleId: t,
        roleConnectionConfigurations: e
    })
}
async function T(t, e, n, s, l) {
    let r = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {};
    i.h.dispatch({
        type: "GUILD_SETTINGS_ROLES_SUBMITTING"
    });
    try {
        for (null != n && n.length > 0 && await a.A.batchRoleUpdate(t, n); null != e && e.length > 0;) {
            let n = e.pop();
            null != n && "" !== n.name && await a.A.updateRole(t, n.id, {
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
        if (null != l && null != s)
            for await (let e of s) {
                let n = l.get(e);
                await (0, o.qK)(t, e, n ?? [])
            }
        i.h.dispatch({
            type: "GUILD_SETTINGS_ROLES_SAVE_SUCCESS"
        })
    } catch (t) {
        if (i.h.dispatch({
                type: "GUILD_SETTINGS_ROLES_SAVE_FAIL",
                message: t.body?.message ?? Object.values(t.body)[0]
            }), r.throwErr) throw t
    }
}