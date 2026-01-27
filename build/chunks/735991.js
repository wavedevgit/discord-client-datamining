/** Chunk was on web.js **/
/** chunk id: 735991, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    $B: () => P,
    Ag: () => x,
    Cx: () => G,
    EF: () => z,
    Ii: () => U,
    K4: () => B,
    ME: () => H,
    MJ: () => F,
    N3: () => R,
    NO: () => j,
    Pp: () => q,
    V1: () => Z,
    X2: () => V,
    b7: () => M,
    fl: () => k,
    hX: () => K,
    kF: () => W,
    lq: () => D,
    sw: () => Y,
    u8: () => L
}), n(228524), n(938796), n(747238), n(812715), n(866193), n(321073), n(896048);
var r = n(487899),
    i = n(665260),
    a = n(157559),
    o = n(843472),
    s = n(155718),
    l = n(847381),
    c = n(264322),
    u = n(392054),
    d = n(168186),
    f = n(545152),
    p = n(204776),
    _ = n(451909),
    h = n(611010),
    m = n(486020),
    g = n(723702),
    E = n(989837),
    y = n(500049),
    b = n(652215),
    O = n(73510),
    v = n(381941),
    A = n(985018);

function I(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function S(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            I(e, t, n[t])
        })
    }
    return e
}

function T(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), n.push.apply(n, r)
    }
    return n
}

function C(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : T(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}

function N(e, t) {
    if (null == e) return {};
    var n, r, i, a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a
    }
    if (a = w(e, t), Object.getOwnPropertySymbols)
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
}

function w(e, t) {
    if (null == e) return {};
    var n, r, i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i
}
let R = {
    id: O.Ik.BUILT_IN
};

function P(e) {
    return e.id !== O.Ik.BUILT_IN
}

function D(e) {
    return P(e) ? e.name : A.intl.string(A.t.UB2gG2)
}

function L(e) {
    return P(e) ? e.description : A.intl.string(A.t.X9fusn)
}

function x(e) {
    var t;
    return P(e) && (0, i.Lt)(null != (t = e.flags) ? t : 0, b.gfo.EMBEDDED)
}

function M(e) {
    var t;
    return P(e) && (0, i.Lt)(null != (t = e.flags) ? t : 0, b.gfo.PARTNER)
}

function j(e) {
    var t;
    return P(e) && (0, i.Lt)(null != (t = e.flags) ? t : 0, b.gfo.PROMOTED)
}

function k(e) {
    let t = G(e),
        n = null == t ? void 0 : t.client_platform_config[(0, l.A)((0, g.getOS)())],
        r = Date.now();
    if ((null == n ? void 0 : n.label_until) != null && r < Date.parse(n.label_until) && (null == n ? void 0 : n.label_from) != null && r > Date.parse(n.label_from)) {
        var i;
        return null != (i = null == n ? void 0 : n.label_type) ? i : s.Hr.NONE
    }
    return s.Hr.NONE
}

function U(e) {
    switch (k(e)) {
        case s.Hr.NEW:
            return "New";
        case s.Hr.UPDATED:
            return "Updated";
        default:
            return ""
    }
}

function G(e) {
    return P(e) && x(e) ? e instanceof h.Ay ? e.embeddedActivityConfig : e.embedded_activity_config : null
}

function F(e) {
    let {
        command: t,
        optionValues: n,
        context: r,
        commandTargetId: i,
        maxSizeCallback: s,
        sectionName: l,
        commandOrigin: c = u.iw.APPLICATION_LAUNCHER
    } = e, {
        channel: d
    } = r, p = async () => {
        try {
            let a = await (0, f.A)({
                command: t,
                optionValues: n,
                context: r,
                commandTargetId: i,
                maxSizeCallback: s,
                commandOrigin: c,
                sectionName: l,
                source: E.A.entrypoint()
            });
            if (t.inputType === u.y$.BUILT_IN_TEXT && null != a && null != r.channel) {
                var e;
                let t = _.Ay.parse(d, a.content);
                t.tts = null != (e = a.tts) && e, o.A.sendMessage(r.channel.id, t, !0, {
                    location: v.Hx.APP_COMMAND
                })
            }
        } catch (e) {
            throw a.A.show({
                title: A.intl.string(A.t["aHO//m"]),
                body: A.intl.string(A.t.kuzKHK),
                confirmText: A.intl.string(A.t["5911Lb"]),
                onConfirm: () => p()
            }), e
        }
    };
    return p()
}

function V(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        {
            fakeAppIconURL: n
        } = t,
        r = N(t, ["fakeAppIconURL"]);
    return P(e) ? {
        iconURL: m.Ay.getApplicationIconURL(C(S({}, r), {
            id: e.id,
            icon: e.icon
        })),
        name: e.name,
        description: e.description
    } : {
        iconURL: null != n ? n : null,
        name: A.intl.string(A.t.UB2gG2),
        description: A.intl.string(A.t.X9fusn)
    }
}

function B(e) {
    return !!P(e) && (e instanceof h.Ay ? e.isMonetized : e.is_monetized)
}

function H(e) {
    let t = G(e);
    return null != t && t.displays_advertisements
}

function Y(e) {
    return e === y.s4.TEXT
}

function W(e) {
    return null == e ? "" : (e.charAt(0).toLocaleUpperCase() + e.slice(1)).replaceAll("_", " ")
}

function K(e) {
    let t = [];
    for (let n of e) {
        let e = n.application_directory_collection_items.filter(e => e.type === r.L.APPLICATION && x(e.application));
        0 !== e.length && t.push(C(S({}, n), {
            application_directory_collection_items: e
        }))
    }
    return t
}

function z(e) {
    return {
        applicationId: e.id,
        customInstallUrl: e.customInstallUrl,
        installParams: e.installParams,
        integrationTypesConfig: e.integrationTypesConfig
    }
}

function q(e) {
    return e instanceof h.Ay ? {
        applicationId: e.id,
        customInstallUrl: e.customInstallUrl,
        installParams: e.installParams,
        integrationTypesConfig: e.integrationTypesConfig
    } : {
        applicationId: e.id,
        customInstallUrl: e.custom_install_url,
        installParams: e.install_params,
        integrationTypesConfig: e.integration_types_config
    }
}

function Z(e, t) {
    let n = null != t ? c.Ay.getGuildState(t) : null,
        r = null != n && (0, d.gI)(e.id, n);
    return (0, p.Kp)(e) || r
}