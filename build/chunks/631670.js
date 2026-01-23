/** Chunk was on web.js **/
/** chunk id: 631670, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    $I: () => g,
    Ch: () => v,
    Cw: () => f,
    F7: () => C,
    IM: () => T,
    U6: () => y,
    U_: () => _,
    Uo: () => p,
    VG: () => b,
    WR: () => O,
    _e: () => N,
    dM: () => A,
    fw: () => w,
    gt: () => h,
    pZ: () => S,
    x8: () => I,
    yu: () => m,
    zq: () => E
});
var r = n(562465),
    i = n(506774),
    a = n(582754),
    s = n(73153),
    o = n(976860),
    l = n(830215),
    c = n(652215),
    u = n(516780),
    d = n(985018);

function f() {
    s.h.dispatch({
        type: "USER_SETTINGS_ACCOUNT_INIT"
    })
}

function p() {
    s.h.dispatch({
        type: "USER_SETTINGS_ACCOUNT_CLOSE"
    })
}

function _(e, t) {
    let n = t ? c.Rsh.DELETE_ACCOUNT : c.Rsh.DISABLE_ACCOUNT;
    return r.Bo.post({
        url: n,
        body: {
            password: e
        },
        oldFormErrors: !0,
        rejectWithError: !1
    }).then(() => {
        l.A.logoutInternal(), (0, o.pX)(c.BVt.DEFAULT_LOGGED_OUT)
    })
}
async function h(e) {
    let t = await r.Bo.patch({
            url: c.Rsh.ME,
            oldFormErrors: !0,
            body: e,
            rejectWithError: !1
        }),
        n = t.body;
    if (n.token) {
        let t = n.token;
        delete n.token, s.h.dispatch({
            type: "UPDATE_TOKEN",
            token: t,
            userId: n.id
        }), (null == e ? void 0 : e.password) != null && (null == e ? void 0 : e.new_password) != null && s.h.dispatch({
            type: "PASSWORD_UPDATED",
            userId: n.id
        })
    }
    return s.h.dispatch({
        type: "CURRENT_USER_UPDATE",
        user: n
    }), t
}

function m(e) {
    var t, n;
    let {
        username: r,
        discriminator: a,
        email: o,
        emailToken: l,
        password: d,
        avatar: f,
        avatarDescription: p,
        avatarId: _,
        avatarDecoration: m,
        newPassword: g,
        globalName: E,
        legacyUsername: y,
        nameplate: b,
        primaryGuildId: O,
        displayNameStyles: v
    } = e;
    s.h.dispatch({
        type: "USER_SETTINGS_ACCOUNT_SUBMIT"
    });
    let A = {
        username: r,
        email: o,
        email_token: l,
        password: d,
        avatar: f,
        avatar_description: p,
        avatar_id: _,
        discriminator: a,
        global_name: E,
        legacy_username: y,
        new_password: g
    };
    void 0 !== m && (A.avatar_decoration_sku_id = null != (t = null == m ? void 0 : m.skuId) ? t : null), void 0 !== b && (A.nameplate_sku_id = null != (n = null == b ? void 0 : b.skuId) ? n : null), void 0 !== O && (A.primary_guild_id = O), null != v ? (A.display_name_font_id = v.fontId, A.display_name_effect_id = v.effectId, A.display_name_colors = v.colors) : null === v && (A.display_name_font_id = null, A.display_name_effect_id = null, A.display_name_colors = null);
    let I = i.w.get(c.Xlh),
        S = (0, u.oH)();
    null != S && null != I && (A.push_provider = S, A.push_token = I);
    let T = i.w.get(c.Ahp);
    return null != u.vz && null != T && (A.push_voip_provider = u.vz, A.push_voip_token = T), h(A).then(e => (s.h.dispatch({
        type: "USER_SETTINGS_ACCOUNT_SUBMIT_SUCCESS"
    }), (null != f || null != _) && s.h.dispatch({
        type: "RECENT_AVATARS_UPDATE"
    }), e), e => (s.h.dispatch({
        type: "USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE",
        errors: e.body
    }), e))
}

function g(e) {
    return r.Bo.post({
        url: c.Rsh.USER_HARVEST,
        body: {
            backends: e
        },
        oldFormErrors: !0,
        rejectWithError: !1
    })
}

function E(e) {
    s.h.dispatch({
        type: "USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR",
        avatar: e
    }), null == e ? a.OR.announce(d.intl.string(d.t["f1+oNk"])) : a.OR.announce(d.intl.string(d.t.NstziV))
}

function y(e) {
    s.h.dispatch({
        type: "USER_SETTINGS_ACCOUNT_SET_PENDING_GLOBAL_NAME",
        globalName: e
    })
}

function b(e) {
    s.h.dispatch({
        type: "USER_SETTINGS_ACCOUNT_SET_PENDING_LEGACY_USERNAME_DISABLED",
        legacyUsernameDisabled: e
    })
}

function O(e) {
    s.h.dispatch({
        type: "USER_SETTINGS_ACCOUNT_SET_PENDING_COLLECTIBLES_ITEM",
        item: e
    })
}

function v(e) {
    s.h.dispatch({
        type: "USER_SETTINGS_SET_PENDING_PRIMARY_GUILD_ID",
        primaryGuildId: e
    })
}

function A(e) {
    s.h.dispatch({
        type: "USER_SETTINGS_ACCOUNT_SET_PENDING_DISPLAY_NAME_STYLES",
        displayNameStyles: e
    })
}

function I() {
    s.h.dispatch({
        type: "USER_SETTINGS_CLEAR_ERRORS"
    })
}

function S() {
    s.h.dispatch({
        type: "USER_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES"
    })
}

function T() {
    s.h.dispatch({
        type: "USER_SETTINGS_RESET_ALL_PENDING"
    })
}

function C() {
    s.h.dispatch({
        type: "USER_SETTINGS_ACCOUNT_RESET_AND_CLOSE_FORM"
    })
}

function N() {
    s.h.dispatch({
        type: "USER_SETTINGS_ACCOUNT_RESET_PENDING_LEGACY_USERNAME_DISABLED"
    })
}

function w() {
    s.h.dispatch({
        type: "USER_SETTINGS_RESET_PENDING_PRIMARY_GUILD_CHANGES"
    })
}