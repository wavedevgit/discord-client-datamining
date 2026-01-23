/** Chunk was on 71905 **/
/** chunk id: 636042, original params: t,e,n (module,exports,require) **/
n.d(e, {
    C5: () => u,
    E9: () => h,
    JY: () => S,
    Ts: () => s,
    Ul: () => l,
    Y_: () => c,
    ZH: () => _,
    n3: () => E,
    nK: () => d,
    pn: () => O,
    uc: () => p,
    yy: () => r
}), n(228524), n(896048);
var i = n(73153),
    o = n(686956),
    a = n(619006);

function r(t) {
    i.h.dispatch({
        type: "GUILD_SETTINGS_ROLES_SORT_UPDATE",
        roles: t
    })
}

function s() {
    i.h.dispatch({
        type: "GUILD_SETTINGS_ROLES_INIT"
    })
}

function l(t, e, n) {
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

function u(t, e) {
    i.h.dispatch({
        type: "GUILD_SETTINGS_ROLES_ROLE_STYLE_UPDATE",
        id: t,
        currentStyle: e
    })
}

function h(t, e, n) {
    i.h.dispatch({
        type: "GUILD_SETTINGS_ROLES_UPDATE_SETTINGS",
        id: t,
        hoist: e,
        mentionable: n
    })
}

function E(t, e, n) {
    i.h.dispatch({
        type: "GUILD_SETTINGS_ROLES_UPDATE_ROLE_ICON",
        id: t,
        icon: e,
        unicodeEmoji: n
    })
}

function O(t, e) {
    i.h.dispatch({
        type: "GUILD_SETTINGS_ROLES_UPDATE_ROLE_CONNECTION_CONFIGURATIONS",
        roleId: t,
        roleConnectionConfigurations: e
    })
}
async function S(t, e, n, r, s) {
    var l, c, d, _;
    let p = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {};
    i.h.dispatch({
        type: "GUILD_SETTINGS_ROLES_SUBMITTING"
    });
    try {
        for (null != n && n.length > 0 && await o.A.batchRoleUpdate(t, n); null != e && e.length > 0;) {
            let n = e.pop();
            null != n && "" !== n.name && await o.A.updateRole(t, n.id, {
                name: n.name,
                description: null != (l = n.description) ? l : void 0,
                permissions: n.permissions,
                color: n.color,
                colors: null != (c = n.colors) ? c : void 0,
                hoist: n.hoist,
                mentionable: n.mentionable,
                icon: n.icon,
                unicodeEmoji: n.unicodeEmoji
            })
        }
        if (null != s && null != r)
            for await (let e of r) {
                let n = s.get(e);
                await (0, a.qK)(t, e, null != n ? n : [])
            }
        i.h.dispatch({
            type: "GUILD_SETTINGS_ROLES_SAVE_SUCCESS"
        })
    } catch (t) {
        if (i.h.dispatch({
                type: "GUILD_SETTINGS_ROLES_SAVE_FAIL",
                message: null != (d = null == (_ = t.body) ? void 0 : _.message) ? d : Object.values(t.body)[0]
            }), p.throwErr) throw t
    }
}