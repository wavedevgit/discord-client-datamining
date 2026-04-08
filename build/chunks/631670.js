/** chunk id: 631670 params = (module,exports,require) **/
n.d(t, {
    $I: () => S,
    Cw: () => s,
    F7: () => I,
    IM: () => R,
    KD: () => c,
    U_: () => p,
    Uo: () => u,
    _L: () => E,
    _e: () => T,
    fw: () => v,
    pZ: () => A,
    x8: () => h
});
var a = n(562465),
    i = n(506774),
    r = n(73153),
    l = n(976860);
n(624826);
var o = n(830215);
n(252452);
var d = n(652215),
    _ = n(516780);

function s() {
    r.h.dispatch({
        type: "USER_PROFILE_SETTINGS_INIT"
    })
}

function u() {
    r.h.dispatch({
        type: "USER_PROFILE_SETTINGS_CLOSE"
    })
}

function p(e, t) {
    let n = t ? d.Rsh.DELETE_ACCOUNT : d.Rsh.DISABLE_ACCOUNT;
    return a.Bo.post({
        url: n,
        body: {
            password: e
        },
        oldFormErrors: !0,
        rejectWithError: !1
    }).then(() => {
        o.A.logoutInternal(), (0, l.pX)(d.BVt.DEFAULT_LOGGED_OUT)
    })
}
async function c(e) {
    let t = await a.Bo.patch({
            url: d.Rsh.ME,
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
        email: a,
        emailToken: l,
        password: o,
        avatar: s,
        avatarDescription: u,
        avatarId: p,
        avatarDecoration: E,
        newPassword: S,
        globalName: h,
        legacyUsername: A,
        nameplate: R,
        primaryGuildId: I,
        displayNameStyles: T
    } = e;
    r.h.dispatch({
        type: "USER_PROFILE_SETTINGS_SUBMIT"
    });
    let v = {
        username: t,
        email: a,
        email_token: l,
        password: o,
        avatar: s,
        avatar_description: u,
        avatar_id: p,
        discriminator: n,
        global_name: h,
        legacy_username: A,
        new_password: S
    };
    void 0 !== E && (v.avatar_decoration_sku_id = E?.skuId ?? null), void 0 !== R && (v.nameplate_sku_id = R?.skuId ?? null), void 0 !== I && (v.primary_guild_id = I), null != T ? (v.display_name_font_id = T.fontId, v.display_name_effect_id = T.effectId, v.display_name_colors = T.colors) : null === T && (v.display_name_font_id = null, v.display_name_effect_id = null, v.display_name_colors = null);
    let g = i.w.get(d.Xlh),
        f = (0, _.oH)();
    null != f && null != g && (v.push_provider = f, v.push_token = g);
    let m = i.w.get(d.Ahp);
    return null != _.vz && null != m && (v.push_voip_provider = _.vz, v.push_voip_token = m), c(v).then(e => (r.h.dispatch({
        type: "USER_PROFILE_SETTINGS_SUBMIT_SUCCESS"
    }), (null != s || null != p) && r.h.dispatch({
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

function R() {
    r.h.dispatch({
        type: "USER_PROFILE_SETTINGS_RESET_PENDING_CHANGES"
    })
}

function I() {
    r.h.dispatch({
        type: "USER_PROFILE_SETTINGS_RESET_AND_CLOSE_FORM"
    })
}

function T() {
    r.h.dispatch({
        type: "USER_PROFILE_SETTINGS_RESET_PENDING_LEGACY_USERNAME_DISABLED"
    })
}

function v() {
    r.h.dispatch({
        type: "USER_PROFILE_SETTINGS_RESET_PENDING_PRIMARY_GUILD_CHANGES"
    })
}