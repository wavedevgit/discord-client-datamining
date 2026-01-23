/** Chunk was on 47841 **/
/** chunk id: 923121, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    Bq: () => p,
    fH: () => x,
    p2: () => f,
    q3: () => b,
    sF: () => u,
    yM: () => m,
    zN: () => g
}), n(321073), n(896048), n(65821);
var r = n(73153),
    i = n(157559),
    l = n(198982),
    s = n(403362),
    a = n(352821),
    o = n(107795),
    c = n(539916),
    d = n(985018);

function u(e) {
    r.h.dispatch({
        type: "GUILD_SETTINGS_ONBOARDING_CONNECTIONS_ADD",
        connection: e
    })
}

function g(e) {
    r.h.dispatch({
        type: "GUILD_SETTINGS_ONBOARDING_CONNECTIONS_REMOVE",
        index: e
    })
}

function m(e, t) {
    r.h.dispatch({
        type: "GUILD_SETTINGS_ONBOARDING_CONNECTIONS_UPDATE",
        index: e,
        updates: t
    })
}

function p(e) {
    r.h.dispatch({
        type: "GUILD_SETTINGS_ONBOARDING_CONNECTIONS_REORDER",
        connections: e
    })
}

function f() {
    r.h.dispatch({
        type: "GUILD_SETTINGS_ONBOARDING_CONNECTIONS_RESET"
    })
}
async function b(e) {
    var t, n, u;
    let g = a.A.getEditedConnections(),
        m = [];
    if (g.forEach(e => {
            let t = (0, c.Ii)(e);
            m.push(...t)
        }), m.length > 0) throw h(m), i.A.show({
        title: d.intl.string(d.t.ISppXw),
        body: m.join("\n")
    }), Error("failed to validate connections");
    r.h.dispatch({
        type: "GUILD_SETTINGS_ONBOARDING_CONNECTIONS_SUBMIT"
    });
    try {
        await (0, o.YN)(e, {
            connections: g
        }), t = e, n = g, r.h.dispatch({
            type: "GUILD_SETTINGS_ONBOARDING_CONNECTIONS_SAVE_SUCCESS",
            guildId: t,
            connections: n
        })
    } catch (r) {
        let {
            fieldName: e,
            error: t
        } = null != (u = new l.LG(r).getAnyErrorMessageAndField()) ? u : {}, n = [e, t].filter(s.Vq).join(": ");
        throw h([n]), i.A.show({
            title: d.intl.string(d.t.iLdiqY),
            body: n
        }), r
    }
}

function h(e) {
    r.h.dispatch({
        type: "GUILD_SETTINGS_ONBOARDING_CONNECTIONS_SAVE_FAILED",
        errors: e
    })
}

function x(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return t || a.A.hasChanges() ? b(e) : Promise.resolve()
}