/** chunk id: 631670 params = (module,exports,require) **/
n.d(t, {
    $I: () => S,
    Cw: () => u,
    F7: () => g,
    IM: () => A,
    KD: () => _,
    U_: () => c,
    Uo: () => p,
    _L: () => E,
    _e: () => I,
    fw: () => T,
    pZ: () => v,
    x8: () => h
});
var a = n(562465),
    i = n(506774),
    l = n(73153),
    r = n(976860);
n(624826);
var o = n(830215);
n(252452);
var s = n(652215),
    d = n(516780);

function u() {
    l.h.dispatch({
        type: "USER_PROFILE_SETTINGS_INIT"
    })
}

function p() {
    l.h.dispatch({
        type: "USER_PROFILE_SETTINGS_CLOSE"
    })
}

function c(e, t) {
    let n = t ? s.Rsh.DELETE_ACCOUNT : s.Rsh.DISABLE_ACCOUNT;
    return a.Bo.post({
        url: n,
        body: {
            password: e
        },
        oldFormErrors: !0,
        rejectWithError: !1
    }).then(() => {
        o.A.logoutInternal(), (0, r.pX)(s.BVt.DEFAULT_LOGGED_OUT)
    })
}
async function _(e) {
    let t = await a.Bo.patch({
            url: s.Rsh.ME,
            oldFormErrors: !0,
            body: e,
            rejectWithError: !1
        }),
        n = t.body;
    if (n.token) {
        let t = n.token;
        delete n.token, l.h.dispatch({
            type: "UPDATE_TOKEN",
            token: t,
            userId: n.id
        }), e?.password != null && e?.new_password != null && l.h.dispatch({
            type: "PASSWORD_UPDATED",
            userId: n.id
        })
    }
    return l.h.dispatch({
        type: "CURRENT_USER_UPDATE",
        user: n
    }), t
}

function E(e) {
    let {
        username: t,
        discriminator: n,
        email: a,
        emailToken: r,
        password: o,
        avatar: u,
        avatarDescription: p,
        avatarId: c,
        avatarDecoration: E,
        newPassword: S,
        globalName: h,
        legacyUsername: v,
        nameplate: A,
        primaryGuildId: g,
        displayNameStyles: I
    } = e;
    l.h.dispatch({
        type: "USER_PROFILE_SETTINGS_SUBMIT"
    });
    let T = {
        username: t,
        email: a,
        email_token: r,
        password: o,
        avatar: u,
        avatar_description: p,
        avatar_id: c,
        discriminator: n,
        global_name: h,
        legacy_username: v,
        new_password: S
    };
    void 0 !== E && (T.avatar_decoration_sku_id = E?.skuId ?? null), void 0 !== A && (T.nameplate_sku_id = A?.skuId ?? null), void 0 !== g && (T.primary_guild_id = g), null != I ? (T.display_name_font_id = I.fontId, T.display_name_effect_id = I.effectId, T.display_name_colors = I.colors) : null === I && (T.display_name_font_id = null, T.display_name_effect_id = null, T.display_name_colors = null);
    let R = i.w.get(s.Xlh),
        y = (0, d.oH)();
    null != y && null != R && (T.push_provider = y, T.push_token = R);
    let m = i.w.get(s.Ahp);
    return null != d.vz && null != m && (T.push_voip_provider = d.vz, T.push_voip_token = m), _(T).then(e => (l.h.dispatch({
        type: "USER_PROFILE_SETTINGS_SUBMIT_SUCCESS"
    }), (null != u || null != c) && l.h.dispatch({
        type: "RECENT_AVATARS_UPDATE"
    }), e), e => (l.h.dispatch({
        type: "USER_PROFILE_SETTINGS_SUBMIT_FAILURE",
        errors: e.body
    }), e))
}

function S(e) {
    return a.Bo.post({
        url: s.Rsh.USER_HARVEST,
        body: {
            backends: e
        },
        oldFormErrors: !0,
        rejectWithError: !1
    })
}

function h() {
    l.h.dispatch({
        type: "USER_PROFILE_SETTINGS_CLEAR_ERRORS"
    })
}

function v() {
    l.h.dispatch({
        type: "USER_PROFILE_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES"
    })
}

function A() {
    l.h.dispatch({
        type: "USER_PROFILE_SETTINGS_RESET_PENDING_CHANGES"
    })
}

function g() {
    l.h.dispatch({
        type: "USER_PROFILE_SETTINGS_RESET_AND_CLOSE_FORM"
    })
}

function I() {
    l.h.dispatch({
        type: "USER_PROFILE_SETTINGS_RESET_PENDING_LEGACY_USERNAME_DISABLED"
    })
}

function T() {
    l.h.dispatch({
        type: "USER_PROFILE_SETTINGS_RESET_PENDING_PRIMARY_GUILD_CHANGES"
    })
}