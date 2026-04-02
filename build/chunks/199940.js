/** chunk id: 199940 params = (module,exports,require) **/
t.d(n, {
    A4: () => A,
    DE: () => O,
    E0: () => p,
    G$: () => G,
    J4: () => h,
    Rp: () => D,
    UP: () => f,
    W5: () => M,
    WA: () => m,
    Wh: () => C,
    XD: () => g,
    hL: () => T,
    kO: () => B,
    px: () => R,
    sd: () => d,
    sk: () => w,
    z4: () => U
});
var _ = t(735438),
    r = t.n(_),
    i = t(562465),
    E = t(73153),
    s = t(157559),
    o = t(701785),
    l = t(374084),
    a = t(954571),
    c = t(515718),
    I = t(728458),
    N = t(132514),
    u = t(652215),
    S = t(985018);

function T(e) {
    E.h.dispatch({
        type: "GUILD_SETTINGS_ONBOARDING_UPDATE_WELCOME_MESSAGE",
        welcomeMessage: e
    })
}

function G(e, n) {
    E.h.dispatch({
        type: "GUILD_SETTINGS_ONBOARDING_ADD_NEW_MEMBER_ACTION",
        action: e,
        pendingData: n
    })
}

function h(e, n) {
    E.h.dispatch({
        type: "GUILD_SETTINGS_ONBOARDING_UPDATE_NEW_MEMBER_ACTION_PENDING_DATA",
        channelId: e,
        pendingData: n
    })
}

function D(e) {
    E.h.dispatch({
        type: "GUILD_SETTINGS_ONBOARDING_CLEAR_NEW_MEMBER_ACTION_PENDING_DATA",
        channelId: e
    })
}

function A(e, n) {
    E.h.dispatch({
        type: "GUILD_SETTINGS_ONBOARDING_UPDATE_NEW_MEMBER_ACTION",
        channelId: e,
        action: n
    })
}

function d(e) {
    E.h.dispatch({
        type: "GUILD_SETTINGS_ONBOARDING_DELETE_NEW_MEMBER_ACTION",
        channelId: e
    })
}

function O(e) {
    E.h.dispatch({
        type: "GUILD_SETTINGS_ONBOARDING_REORDER_NEW_MEMBER_ACTION",
        actions: e
    })
}
async function C(e, n, t) {
    let _ = {};
    null != t.emoji ? _.emoji = t.emoji : _.icon = t.icon;
    try {
        let t = await i.Bo.patch({
                url: u.Rsh.NEW_MEMBER_ACTION(e, n),
                body: _,
                oldFormErrors: !0,
                rejectWithError: !1
            }),
            r = (0, l.kk)(t.body);
        return E.h.dispatch({
            type: "GUILD_NEW_MEMBER_ACTION_UPDATE_SUCCESS",
            guildId: e,
            action: r
        }), Promise.resolve(t.body)
    } catch (n) {
        let e = r().flatMap(n.body ?? {}, e => e);
        return s.A.show({
            title: S.intl.string(S.t["6nCZyG"]),
            body: S.intl.format(S.t.dYCPD2, {
                errorMessage: e.join(", ")
            })
        }), I.A.addBreadcrumb({
            message: "Error updating new member action icon"
        }), Promise.reject()
    }
}

function R(e) {
    E.h.dispatch({
        type: "GUILD_SETTINGS_ONBOARDING_ADD_RESOURCE_CHANNEL",
        resourceChannel: e
    })
}

function U(e, n) {
    E.h.dispatch({
        type: "GUILD_SETTINGS_ONBOARDING_UPDATE_RESOURCE_CHANNEL",
        channelId: e,
        resourceChannel: n
    })
}

function g(e) {
    E.h.dispatch({
        type: "GUILD_SETTINGS_ONBOARDING_DELETE_RESOURCE_CHANNEL",
        resourceChannelId: e
    })
}

function m(e) {
    E.h.dispatch({
        type: "GUILD_SETTINGS_ONBOARDING_REORDER_RESOURCE_CHANNEL",
        resourceChannels: e
    })
}
async function p(e, n, t) {
    try {
        let _ = await i.Bo.put({
                url: u.Rsh.RESOURCE_CHANNEL(e, n),
                body: {
                    icon: t
                },
                oldFormErrors: !0,
                rejectWithError: !1
            }),
            r = (0, l.RR)(_.body);
        return E.h.dispatch({
            type: "GUILD_RESOURCE_CHANNEL_UPDATE_SUCCESS",
            guildId: e,
            resourceChannel: r
        }), _.body
    } catch (n) {
        let e = r().flatMap(n.body ?? {}, e => e);
        s.A.show({
            title: S.intl.string(S.t["6nCZyG"]),
            body: S.intl.format(S.t.dYCPD2, {
                errorMessage: e.join(", ")
            })
        })
    }
}

function M(e, n) {
    let t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    return t || N.A.hasChanges() ? o.h.getEnabled(e) && !(0, l.Ic)(n) ? (s.A.show({
        title: S.intl.string(S.t["6nCZyG"]),
        body: S.intl.string(S.t.JuhUTS)
    }), I.A.addBreadcrumb({
        message: "Error saving home settings"
    }), Promise.reject()) : L(e, n) : Promise.resolve()
}

function f(e, n) {
    let t = o.h.getSettings(e);
    return n && !(0, l.Ic)(t) ? void s.A.show({
        title: S.intl.string(S.t["6nCZyG"]),
        body: S.intl.string(S.t.JuhUTS)
    }) : (E.h.dispatch({
        type: "GUILD_HOME_SETTINGS_TOGGLE_ENABLED",
        guildId: e,
        enabled: n
    }), L(e, {
        ...t,
        enabled: n
    }))
}
async function L(e, n) {
    E.h.dispatch({
        type: "GUILD_HOME_SETTINGS_UPDATE_START"
    });
    let t = N.A.getPendingData();
    try {
        let _ = await i.Bo.put({
                url: u.Rsh.GUILD_HOME_SETTINGS(e),
                body: (0, l.Y4)(e, n),
                oldFormErrors: !0,
                rejectWithError: !1
            }),
            r = (0, l.Xu)(_.body);
        return E.h.dispatch({
            type: "GUILD_HOME_SETTINGS_UPDATE_SUCCESS",
            guildId: e,
            homeSettings: r
        }), Object.entries(t).forEach(n => {
            let [t, _] = n;
            null == _ || (null != _.iconData ? y(e, t, _).finally(() => {
                D(t)
            }) : D(t))
        }), a.default.track(u.HAw.GUILD_SETTINGS_GUIDE_UPDATED, {
            guild_id: e,
            welcome_message_author_id: (r?.welcomeMessage?.authorIds ?? [])[0],
            welcome_message_length: r?.welcomeMessage?.message?.length ?? 0,
            member_action_channel_ids: (r?.newMemberActions ?? []).map(e => e.channelId),
            member_action_channel_actions: (r?.newMemberActions ?? []).map(e => e.actionType),
            resource_channel_ids: (r?.resourceChannels ?? []).map(e => e.channelId),
            enabled: r?.enabled
        }), _.body
    } catch (n) {
        let e = r().flatMap(n.body ?? {}, e => e);
        D(), E.h.dispatch({
            type: "GUILD_HOME_SETTINGS_UPDATE_FAIL"
        }), s.A.show({
            title: S.intl.string(S.t["6nCZyG"]),
            body: S.intl.format(S.t.dYCPD2, {
                errorMessage: e.join(", ")
            })
        })
    }
}
async function y(e, n, t) {
    let {
        iconData: _,
        isUrl: r,
        emoji: i
    } = t;
    if (null != i) return;
    let E = null != _ && r ? await b(_) : _;
    await C(e, n, {
        icon: E,
        emoji: null
    })
}
async function b(e) {
    let n = await fetch(e),
        t = await n.blob();
    return await (0, c.We)(t)
}

function B(e, n) {
    null != e && E.h.dispatch({
        type: "GUILD_SETTINGS_ONBOARDING_DISMISS_RESOURCE_CHANNEL_SUGGESTION",
        guildId: e,
        channelIds: n
    })
}

function w() {
    E.h.dispatch({
        type: "GUILD_SETTINGS_ONBOARDING_HOME_SETTINGS_RESET"
    })
}