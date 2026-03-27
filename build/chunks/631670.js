/** chunk id: 631670 params = (module,exports,require) **/
t.d(n, {
    $I: () => S,
    Cw: () => s,
    F7: () => g,
    IM: () => f,
    KD: () => u,
    U_: () => c,
    Uo: () => p,
    _L: () => E,
    _e: () => T,
    fw: () => I,
    pZ: () => A,
    x8: () => h
});
var a = t(562465),
    i = t(506774),
    r = t(73153),
    o = t(976860);
t(624826);
var l = t(830215);
t(252452);
var d = t(652215),
    _ = t(516780);

function s() {
    r.h.dispatch({
        type: "USER_PROFILE_SETTINGS_INIT"
    })
}

function p() {
    r.h.dispatch({
        type: "USER_PROFILE_SETTINGS_CLOSE"
    })
}

function c(e, n) {
    let t = n ? d.Rsh.DELETE_ACCOUNT : d.Rsh.DISABLE_ACCOUNT;
    return a.Bo.post({
        url: t,
        body: {
            password: e
        },
        oldFormErrors: !0,
        rejectWithError: !1
    }).then(() => {
        l.A.logoutInternal(), (0, o.pX)(d.BVt.DEFAULT_LOGGED_OUT)
    })
}
async function u(e) {
    let n = await a.Bo.patch({
            url: d.Rsh.ME,
            oldFormErrors: !0,
            body: e,
            rejectWithError: !1
        }),
        t = n.body;
    if (t.token) {
        let n = t.token;
        delete t.token, r.h.dispatch({
            type: "UPDATE_TOKEN",
            token: n,
            userId: t.id
        }), e?.password != null && e?.new_password != null && r.h.dispatch({
            type: "PASSWORD_UPDATED",
            userId: t.id
        })
    }
    return r.h.dispatch({
        type: "CURRENT_USER_UPDATE",
        user: t
    }), n
}

function E(e) {
    let {
        username: n,
        discriminator: t,
        email: a,
        emailToken: o,
        password: l,
        avatar: s,
        avatarDescription: p,
        avatarId: c,
        avatarDecoration: E,
        newPassword: S,
        globalName: h,
        legacyUsername: A,
        nameplate: f,
        primaryGuildId: g,
        displayNameStyles: T
    } = e;
    r.h.dispatch({
        type: "USER_PROFILE_SETTINGS_SUBMIT"
    });
    let I = {
        username: n,
        email: a,
        email_token: o,
        password: l,
        avatar: s,
        avatar_description: p,
        avatar_id: c,
        discriminator: t,
        global_name: h,
        legacy_username: A,
        new_password: S
    };
    void 0 !== E && (I.avatar_decoration_sku_id = E?.skuId ?? null), void 0 !== f && (I.nameplate_sku_id = f?.skuId ?? null), void 0 !== g && (I.primary_guild_id = g), null != T ? (I.display_name_font_id = T.fontId, I.display_name_effect_id = T.effectId, I.display_name_colors = T.colors) : null === T && (I.display_name_font_id = null, I.display_name_effect_id = null, I.display_name_colors = null);
    let R = i.w.get(d.Xlh),
        v = (0, _.oH)();
    null != v && null != R && (I.push_provider = v, I.push_token = R);
    let m = i.w.get(d.Ahp);
    return null != _.vz && null != m && (I.push_voip_provider = _.vz, I.push_voip_token = m), u(I).then(e => (r.h.dispatch({
        type: "USER_PROFILE_SETTINGS_SUBMIT_SUCCESS"
    }), (null != s || null != c) && r.h.dispatch({
        type: "RECENT_AVATARS_UPDATE"
    }), e), e => (r.h.dispatch({
        type: "USER_PROFILE_SETTINGS_SUBMIT_FAILURE",
        errors: e.body
    }), e))
}

function S(e) {
    return a.Bo.post({
        url: d.Rsh.USER_HARVEST,
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

function A() {
    r.h.dispatch({
        type: "USER_PROFILE_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES"
    })
}

function f() {
    r.h.dispatch({
        type: "USER_PROFILE_SETTINGS_RESET_PENDING_CHANGES"
    })
}

function g() {
    r.h.dispatch({
        type: "USER_PROFILE_SETTINGS_RESET_AND_CLOSE_FORM"
    })
}

function T() {
    r.h.dispatch({
        type: "USER_PROFILE_SETTINGS_RESET_PENDING_LEGACY_USERNAME_DISABLED"
    })
}

function I() {
    r.h.dispatch({
        type: "USER_PROFILE_SETTINGS_RESET_PENDING_PRIMARY_GUILD_CHANGES"
    })
}