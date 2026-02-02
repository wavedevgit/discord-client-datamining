/** chunk id: 857802, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => T
}), n(896048);
var r = n(627968),
    i = n(64700),
    l = n(311907),
    s = n(732955),
    a = n(397927),
    o = n(975807),
    c = n(469993),
    d = n(486802),
    u = n(194362),
    g = n(95035),
    m = n(411671),
    p = n(130771),
    f = n(260509),
    h = n(287809),
    b = n(531685),
    x = n(954571),
    j = n(599941),
    _ = n(11351),
    O = n(319225),
    v = n(781289),
    y = n(652215),
    A = n(705751),
    E = n(269927),
    N = n(985018),
    S = n(486984);

function I(e) {
    let {
        onCreateTeamClick: t,
        isGuildOwner: n
    } = e;
    return (0, r.jsx)("div", {
        className: S.xF,
        children: (0, r.jsx)(s.$nd, {
            text: N.intl.string(N.t["5k6FfR"]),
            disabled: !n,
            onClick: t,
            fullWidth: !0
        })
    })
}

function C(e) {
    let {
        guild: t,
        eligibleTeams: n,
        isGuildOwner: l
    } = e, [o, c] = i.useState(), {
        enableGuildMonetizationForTeam: u,
        submitting: g,
        error: m
    } = (0, d.A)(), {
        fetchSubscriptionsSettings: p
    } = (0, j.XE)(), f = (0, _.gN)(), h = i.useMemo(() => n.map(e => ({
        id: e.id,
        label: e.name,
        value: e.id
    })), [n]), b = async () => {
        await u(t, o, A.S7.GUILD_ROLE_SUBSCRIPTIONS) && (p(t.id), (0, O.E)({
            title: N.intl.string(N.t["AP/2qe"]),
            body: N.intl.string(N.t.kHMgaK)
        }))
    };
    return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsxs)("div", {
            className: S.xF,
            children: [(0, r.jsx)(a.l6P, {
                selectionMode: "single",
                options: h,
                placeholder: N.intl.string(N.t.QXf93A),
                value: o,
                disabled: 0 === h.length || f || !l,
                onSelectionChange: c,
                label: N.intl.string(N.t.QXf93A),
                hideLabel: !0
            }), (0, r.jsx)(s.$nd, {
                text: N.intl.string(N.t["9HU3ZV"]),
                onClick: b,
                loading: g,
                disabled: null == o || f || !l
            })]
        }), null != m && (0, r.jsx)(a.Text, {
            className: S.z3,
            variant: "text-sm/normal",
            children: m.getAnyErrorMessage()
        })]
    })
}
let T = e => {
    let {
        guild: t
    } = e, n = (0, l.bG)([h.default], () => h.default.getCurrentUser()), s = (0, f.bM)(t, n), d = (0, c.ME)(t), j = (0, l.bG)([b.A], () => b.A.isFocused()), {
        teams: _,
        loading: O
    } = (0, p.A)({
        refreshOnDepChange: j
    }), A = i.useMemo(() => _.filter(e => {
        var t;
        return e.payout_account_status !== E.y.BLOCKED && (0, m.y)(null != (t = null == n ? void 0 : n.id) ? t : y.dJq, e)
    }), [_, n]), T = A.length > 0, P = i.useCallback(async () => {
        x.default.track(y.HAw.GUILD_ROLE_SUBSCRIPTION_TEAM_SETUP_CLICKED, {
            is_onboarding_v2: d,
            has_eligible_team: T,
            guild_id: t.id,
            is_owner: s
        });
        let e = await (0, u.a)(y.dSh.DEVELOPER_PORTAL_TEAMS);
        (0, o.A)(e)
    }, [t, s, d, T]), w = i.useCallback(e => s ? (0, r.jsx)(g.A, {
        onClick: P,
        children: e
    }) : e, [P, s]);
    return O ? (0, r.jsx)(a.y$y, {}) : (0, r.jsxs)(a.BJc, {
        gap: 32,
        children: [!s && (0, r.jsx)("div", {
            className: S.b8,
            children: (0, r.jsx)(a.wx6, {
                type: "warning",
                children: N.intl.string(N.t.t56qWO)
            })
        }), (0, r.jsx)(a.D0$, {
            label: N.intl.string(N.t["sYLCY/"]),
            disabled: !s,
            description: N.intl.format(N.t["5mfqpW"], {
                onCreateTeamHook: w
            }),
            children: T ? (0, r.jsx)(C, {
                guild: t,
                eligibleTeams: A,
                isGuildOwner: s
            }) : (0, r.jsx)(I, {
                onCreateTeamClick: P,
                isGuildOwner: s
            })
        }), (0, r.jsx)(a.D0$, {
            label: N.intl.string(N.t["0n7R2X"]),
            children: (0, r.jsx)(v.A, {
                guildId: t.id,
                allPeriods: []
            })
        })]
    })
}