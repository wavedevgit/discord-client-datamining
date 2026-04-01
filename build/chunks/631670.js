/** chunk id: 631670 params = (module,exports,require) **/
E.d(t, {
    $I: () => c,
    Cw: () => r,
    F7: () => I,
    IM: () => u,
    KD: () => s,
    U_: () => p,
    Uo: () => l,
    _L: () => T,
    _e: () => A,
    fw: () => N,
    pZ: () => R,
    x8: () => h
});
var e = E(562465),
    i = E(506774),
    n = E(73153),
    o = E(976860);
E(624826);
var a = E(830215);
E(252452);
var S = E(652215),
    d = E(516780);

function r() {
    n.h.dispatch({
        type: "USER_PROFILE_SETTINGS_INIT"
    })
}

function l() {
    n.h.dispatch({
        type: "USER_PROFILE_SETTINGS_CLOSE"
    })
}

function p(_, t) {
    let E = t ? S.Rsh.DELETE_ACCOUNT : S.Rsh.DISABLE_ACCOUNT;
    return e.Bo.post({
        url: E,
        body: {
            password: _
        },
        oldFormErrors: !0,
        rejectWithError: !1
    }).then(() => {
        a.A.logoutInternal(), (0, o.pX)(S.BVt.DEFAULT_LOGGED_OUT)
    })
}
async function s(_) {
    let t = await e.Bo.patch({
            url: S.Rsh.ME,
            oldFormErrors: !0,
            body: _,
            rejectWithError: !1
        }),
        E = t.body;
    if (E.token) {
        let t = E.token;
        delete E.token, n.h.dispatch({
            type: "UPDATE_TOKEN",
            token: t,
            userId: E.id
        }), _?.password != null && _?.new_password != null && n.h.dispatch({
            type: "PASSWORD_UPDATED",
            userId: E.id
        })
    }
    return n.h.dispatch({
        type: "CURRENT_USER_UPDATE",
        user: E
    }), t
}

function T(_) {
    let {
        username: t,
        discriminator: E,
        email: e,
        emailToken: o,
        password: a,
        avatar: r,
        avatarDescription: l,
        avatarId: p,
        avatarDecoration: T,
        newPassword: c,
        globalName: h,
        legacyUsername: R,
        nameplate: u,
        primaryGuildId: I,
        displayNameStyles: A
    } = _;
    n.h.dispatch({
        type: "USER_PROFILE_SETTINGS_SUBMIT"
    });
    let N = {
        username: t,
        email: e,
        email_token: o,
        password: a,
        avatar: r,
        avatar_description: l,
        avatar_id: p,
        discriminator: E,
        global_name: h,
        legacy_username: R,
        new_password: c
    };
    void 0 !== T && (N.avatar_decoration_sku_id = T?.skuId ?? null), void 0 !== u && (N.nameplate_sku_id = u?.skuId ?? null), void 0 !== I && (N.primary_guild_id = I), null != A ? (N.display_name_font_id = A.fontId, N.display_name_effect_id = A.effectId, N.display_name_colors = A.colors) : null === A && (N.display_name_font_id = null, N.display_name_effect_id = null, N.display_name_colors = null);
    let U = i.w.get(S.Xlh),
        L = (0, d.oH)();
    null != L && null != U && (N.push_provider = L, N.push_token = U);
    let y = i.w.get(S.Ahp);
    return null != d.vz && null != y && (N.push_voip_provider = d.vz, N.push_voip_token = y), s(N).then(_ => (n.h.dispatch({
        type: "USER_PROFILE_SETTINGS_SUBMIT_SUCCESS"
    }), (null != r || null != p) && n.h.dispatch({
        type: "RECENT_AVATARS_UPDATE"
    }), _), _ => (n.h.dispatch({
        type: "USER_PROFILE_SETTINGS_SUBMIT_FAILURE",
        errors: _.body
    }), _))
}

function c(_) {
    return e.Bo.post({
        url: S.Rsh.USER_HARVEST,
        body: {
            backends: _
        },
        oldFormErrors: !0,
        rejectWithError: !1
    })
}

function h() {
    n.h.dispatch({
        type: "USER_PROFILE_SETTINGS_CLEAR_ERRORS"
    })
}

function R() {
    n.h.dispatch({
        type: "USER_PROFILE_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES"
    })
}

function u() {
    n.h.dispatch({
        type: "USER_PROFILE_SETTINGS_RESET_PENDING_CHANGES"
    })
}

function I() {
    n.h.dispatch({
        type: "USER_PROFILE_SETTINGS_RESET_AND_CLOSE_FORM"
    })
}

function A() {
    n.h.dispatch({
        type: "USER_PROFILE_SETTINGS_RESET_PENDING_LEGACY_USERNAME_DISABLED"
    })
}

function N() {
    n.h.dispatch({
        type: "USER_PROFILE_SETTINGS_RESET_PENDING_PRIMARY_GUILD_CHANGES"
    })
}