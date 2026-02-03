/** chunk id: 899847, original params: t,e,n (module,exports,require) **/
n.d(e, {
    Ay: () => I,
    HB: () => A,
    Xz: () => C,
    e$: () => f,
    nt: () => S
}), n(896048);
var i = n(562465),
    l = n(873298),
    r = n(73153),
    a = n(979286),
    o = n(159201),
    u = n(761821),
    s = n(954571),
    d = n(842144),
    E = n(191627),
    c = n(652215);

function _(t) {
    for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {},
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
            return Object.getOwnPropertyDescriptor(n, t).enumerable
        }))), i.forEach(function(e) {
            var i;
            i = n[e], e in t ? Object.defineProperty(t, e, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = i
        })
    }
    return t
}
async function T(t) {
    let e = new Set;
    t.forEach(t => {
        if (null != t.invoice_items && t.invoice_items.length > 0) {
            let n = t.invoice_items[0];
            null != n.sku_id && e.add(n.sku_id)
        }
    }), await Promise.all(Array.from(e).map(t => (0, a.RE)(t)))
}
async function S(t, e) {
    await i.Bo.patch({
        url: c.Rsh.FAMILY_CENTER_LINKED_USERS,
        body: {
            linked_user_id: t,
            link_status: e
        },
        rejectWithError: !1
    }).then(t => {
        let {
            body: e
        } = t;
        return r.h.dispatch({
            type: "FAMILY_CENTER_REQUEST_LINK_UPDATE_SUCCESS",
            linkedUsers: e
        }), e
    })
}
async function f(t) {
    await i.Bo.del({
        url: c.Rsh.FAMILY_CENTER_LINKED_USERS,
        body: {
            linked_user_id: t
        },
        rejectWithError: !1
    }).then(e => {
        let {
            body: n
        } = e;
        return r.h.dispatch({
            type: "FAMILY_CENTER_REQUEST_LINK_REMOVE_SUCCESS",
            linkedUsers: n,
            deletedUserId: t
        }), n
    })
}
async function A() {
    await i.Bo.get({
        url: c.Rsh.FAMILY_CENTER_LINK_CODE,
        rejectWithError: !1
    }).then(t => {
        let {
            body: e
        } = t, n = e.link_code;
        return r.h.dispatch({
            type: "FAMILY_CENTER_LINK_CODE_FETCH_SUCCESS",
            linkCode: n
        }), n
    })
}
async function C() {
    await i.Bo.post({
        url: c.Rsh.FAMILY_CENTER_SHARE_IAR_WITH_PARENTS,
        rejectWithError: !0
    })
}
let I = {
    async initialPageLoad() {
        var t, e, n, l, a, o, u, s, d, E, _;
        r.h.dispatch({
            type: "FAMILY_CENTER_FETCH_START"
        });
        let {
            body: S
        } = await i.Bo.get({
            url: c.Rsh.FAMILY_CENTER_TEEN_ACTIVITY_ME,
            rejectWithError: !1
        }), {
            teen_audit_log: f,
            linked_users: A,
            users: C,
            age_group: I
        } = S, N = {
            teenId: null == f ? void 0 : f.teen_user_id,
            rangeStartId: null == f ? void 0 : f.range_start_id,
            totals: null != (t = null == f ? void 0 : f.totals) ? t : {},
            actions: null != (e = null == f ? void 0 : f.actions) ? e : [],
            users: null != (n = null == f ? void 0 : f.users) ? n : [],
            guilds: null != (l = null == f ? void 0 : f.guilds) ? l : [],
            topUserActivities: null != (a = null == f ? void 0 : f.top_user_activities) ? a : [],
            topGuildActivities: null != (o = null == f ? void 0 : f.top_guild_activities) ? o : [],
            totalSpendAmount: null != (u = null == f || null == (E = f.total_spend) ? void 0 : E.amount) ? u : null,
            totalSpendCurrency: null != (s = null == f || null == (_ = f.total_spend) ? void 0 : _.currency) ? s : null,
            invoices: null != (d = null == f ? void 0 : f.invoices) ? d : []
        };
        return null != N.invoices && N.invoices.length > 0 && await T(N.invoices), r.h.dispatch({
            type: "FAMILY_CENTER_INITIAL_LOAD",
            familyCenterTeenActivity: N,
            linkedUsers: A,
            users: C,
            ageGroup: I
        }), N
    },
    async fetchLinkedUsers() {
        let {
            body: t
        } = await i.Bo.get({
            url: c.Rsh.FAMILY_CENTER_LINKED_USERS,
            rejectWithError: !1
        }), e = {
            linkedUsers: t.linked_users,
            users: t.users
        };
        return r.h.dispatch(_({
            type: "FAMILY_CENTER_LINKED_USERS_FETCH_SUCCESS"
        }, e)), e
    },
    async requestLink(t, e) {
        let {
            body: n
        } = await i.Bo.post({
            url: c.Rsh.FAMILY_CENTER_LINKED_USERS,
            body: {
                recipient_id: t,
                code: e
            },
            rejectWithError: !1
        }), l = {
            linkedUsers: n.linked_users,
            users: n.users
        };
        return r.h.dispatch(_({
            type: "FAMILY_CENTER_REQUEST_LINK_SUCCESS"
        }, l)), l
    },
    async fetchTeenActivity(t) {
        var e, n, l, a, o, u, s;
        r.h.dispatch({
            type: "FAMILY_CENTER_FETCH_START"
        });
        let d = c.Rsh.FAMILY_CENTER_TEEN_ACTIVITY(t),
            {
                body: E
            } = await i.Bo.get({
                url: d,
                rejectWithError: !1
            }),
            _ = E.teen_audit_log,
            S = {
                teenId: _.teen_user_id,
                rangeStartId: _.range_start_id,
                totals: _.totals,
                actions: _.actions,
                users: _.users,
                guilds: _.guilds,
                topUserActivities: null != (e = _.top_user_activities) ? e : [],
                topGuildActivities: null != (n = _.top_guild_activities) ? n : [],
                totalSpendAmount: null != (l = null == _ || null == (u = _.total_spend) ? void 0 : u.amount) ? l : null,
                totalSpendCurrency: null != (a = null == _ || null == (s = _.total_spend) ? void 0 : s.currency) ? a : null,
                invoices: null != (o = null == _ ? void 0 : _.invoices) ? o : []
            };
        return S.invoices && S.invoices.length > 0 && await T(S.invoices), r.h.dispatch({
            type: "FAMILY_CENTER_TEEN_ACTIVITY_FETCH_SUCCESS",
            familyCenterTeenActivity: S
        }), S
    },
    async fetchMoreTeenActivity(t, e, n, l) {
        var a, o, u, d, _, T, S;
        let {
            body: f
        } = await i.Bo.get({
            url: c.Rsh.FAMILY_CENTER_TEEN_ACTIVITY_MORE(t, e, n, l),
            rejectWithError: !1
        }), {
            teen_audit_log: A
        } = f, C = {
            teenId: A.teen_user_id,
            rangeStartId: A.range_start_id,
            actions: A.actions,
            users: A.users,
            guilds: A.guilds,
            topUserActivities: null != (a = A.top_user_activities) ? a : [],
            topGuildActivities: null != (o = A.top_guild_activities) ? o : [],
            totalSpendAmount: null != (u = null == A || null == (T = A.total_spend) ? void 0 : T.amount) ? u : null,
            totalSpendCurrency: null != (d = null == A || null == (S = A.total_spend) ? void 0 : S.currency) ? d : null,
            invoices: null != (_ = null == A ? void 0 : A.invoices) ? _ : []
        };
        return s.default.track(c.HAw.FAMILY_CENTER_ACTION, {
            action: E.qb.LoadMore,
            selected_teen_id: t,
            action_display_type: e
        }), r.h.dispatch({
            type: "FAMILY_CENTER_TEEN_ACTIVITY_MORE_FETCH_SUCCESS",
            familyCenterTeenActivity: C
        }), A
    },
    selectTab(t) {
        r.h.dispatch({
            type: "FAMILY_CENTER_HANDLE_TAB_SELECT",
            tab: t
        })
    },
    fetchTeenSettingsAndConsents: t => i.Bo.get({
        url: c.Rsh.FAMILY_CENTER_TEEN_SETTINGS_AND_CONSENTS(t),
        rejectWithError: !1
    }).then(e => {
        let {
            body: n
        } = e, {
            settings: i,
            consents: l
        } = n;
        r.h.dispatch({
            type: "FAMILY_CENTER_TEEN_SETTINGS_AND_CONSENTS_FETCH_SUCCESS",
            userId: t,
            settings: i,
            consents: l
        })
    }),
    async updateTeenSettings(t, e, n) {
        var a;
        let s = (0, o.f)(l.nT, e),
            E = null == (a = d.A.getSettings(t)) ? void 0 : a[e],
            _ = (0, o.a)(E, n, s, l.nT, e);
        if (null == _) return;
        let {
            body: T
        } = await i.Bo.patch({
            url: c.Rsh.FAMILY_CENTER_TEEN_SETTINGS(t),
            body: {
                settings: (0, u.ob)(l.nT, _)
            },
            rejectWithError: !1
        }), {
            settings: S
        } = T;
        r.h.dispatch({
            type: "FAMILY_CENTER_TEEN_UPDATE_SETTINGS_SUCCESS",
            userId: t,
            settings: S
        })
    },
    updateTeenConsents: (t, e, n) => i.Bo.patch({
        url: c.Rsh.FAMILY_CENTER_TEEN_CONSENTS(t),
        body: {
            grant: e,
            revoke: n
        },
        rejectWithError: !1
    }).then(e => {
        let {
            body: n
        } = e;
        r.h.dispatch({
            type: "FAMILY_CENTER_TEEN_CONSENTS_UPDATE_SUCCESS",
            userId: t,
            consents: n
        })
    })
}