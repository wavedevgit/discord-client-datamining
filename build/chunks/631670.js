/** chunk id: 631670 params = (module,exports,require) **/
n.d(t, {
    $I: () => m,
    Cw: () => c,
    F7: () => f,
    IM: () => g,
    KD: () => p,
    U_: () => u,
    Uo: () => _,
    _L: () => E,
    _e: () => A,
    fw: () => v,
    pZ: () => S,
    x8: () => h
});
var i = n(562465),
    a = n(506774),
    r = n(73153),
    s = n(976860);
n(624826);
var l = n(830215);
n(252452);
var o = n(652215),
    d = n(516780);

function c() {
    r.h.dispatch({
        type: "USER_PROFILE_SETTINGS_INIT"
    })
}

function _() {
    r.h.dispatch({
        type: "USER_PROFILE_SETTINGS_CLOSE"
    })
}

function u(e, t) {
    let n = t ? o.Rsh.DELETE_ACCOUNT : o.Rsh.DISABLE_ACCOUNT;
    return i.Bo.post({
        url: n,
        body: {
            password: e
        },
        oldFormErrors: !0,
        rejectWithError: !1
    }).then(() => {
        l.A.logoutInternal(), (0, s.pX)(o.BVt.DEFAULT_LOGGED_OUT)
    })
}
async function p(e) {
    let t = await i.Bo.patch({
            url: o.Rsh.ME,
            oldFormErrors: !0,
            body: e,
            rejectWithError: !1
        }),
        n = t.body;
    if (n.token) {
        let t = n.token;
        delete n.token, r.h.dispatch({
            type: "UPDATE_TOKEN",
            token: t,
            userId: n.id
        }), e?.password != null && e?.new_password != null && r.h.dispatch({
            type: "PASSWORD_UPDATED",
            userId: n.id
        })
    }
    return r.h.dispatch({
        type: "CURRENT_USER_UPDATE",
        user: n
    }), t
}

function E(e) {
    let {
        username: t,
        discriminator: n,
        email: i,
        emailToken: s,
        password: l,
        avatar: c,
        avatarDescription: _,
        avatarId: u,
        avatarDecoration: E,
        newPassword: m,
        globalName: h,
        legacyUsername: S,
        nameplate: g,
        primaryGuildId: f,
        displayNameStyles: A
    } = e;
    r.h.dispatch({
        type: "USER_PROFILE_SETTINGS_SUBMIT"
    });
    let v = {
        username: t,
        email: i,
        email_token: s,
        password: l,
        avatar: c,
        avatar_description: _,
        avatar_id: u,
        discriminator: n,
        global_name: h,
        legacy_username: S,
        new_password: m
    };
    void 0 !== E && (v.avatar_decoration_sku_id = E?.skuId ?? null), void 0 !== g && (v.nameplate_sku_id = g?.skuId ?? null), void 0 !== f && (v.primary_guild_id = f), null != A ? (v.display_name_font_id = A.fontId, v.display_name_effect_id = A.effectId, v.display_name_colors = A.colors) : null === A && (v.display_name_font_id = null, v.display_name_effect_id = null, v.display_name_colors = null);
    let N = a.w.get(o.Xlh),
        T = (0, d.oH)();
    null != T && null != N && (v.push_provider = T, v.push_token = N);
    let I = a.w.get(o.Ahp);
    return null != d.vz && null != I && (v.push_voip_provider = d.vz, v.push_voip_token = I), p(v).then(e => (r.h.dispatch({
        type: "USER_PROFILE_SETTINGS_SUBMIT_SUCCESS"
    }), (null != c || null != u) && r.h.dispatch({
        type: "RECENT_AVATARS_UPDATE"
    }), e), e => (r.h.dispatch({
        type: "USER_PROFILE_SETTINGS_SUBMIT_FAILURE",
        errors: e.body
    }), e))
}

function m(e) {
    return i.Bo.post({
        url: o.Rsh.USER_HARVEST,
        body: {
            backends: e
        },
        oldFormErrors: !0,
        rejectWithError: !1
    })
}

function h() {
    r.h.dispatch({
        type: "USER_PROFILE_SETTINGS_CLEAR_ERRORS"
    })
}

function S() {
    r.h.dispatch({
        type: "USER_PROFILE_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES"
    })
}

function g() {
    r.h.dispatch({
        type: "USER_PROFILE_SETTINGS_RESET_PENDING_CHANGES"
    })
}

function f() {
    r.h.dispatch({
        type: "USER_PROFILE_SETTINGS_RESET_AND_CLOSE_FORM"
    })
}

function A() {
    r.h.dispatch({
        type: "USER_PROFILE_SETTINGS_RESET_PENDING_LEGACY_USERNAME_DISABLED"
    })
}

function v() {
    r.h.dispatch({
        type: "USER_PROFILE_SETTINGS_RESET_PENDING_PRIMARY_GUILD_CHANGES"
    })
}