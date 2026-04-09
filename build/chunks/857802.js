/** chunk id: 857802 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => R
});
var i = n(627968),
    s = n(64700),
    l = n(311907),
    r = n(732955),
    a = n(397927),
    o = n(975807),
    d = n(469993),
    c = n(486802),
    u = n(194362),
    m = n(95035),
    g = n(411671),
    x = n(130771),
    h = n(260509),
    _ = n(287809),
    A = n(531685),
    p = n(954571),
    f = n(599941),
    j = n(11351),
    N = n(319225),
    E = n(781289),
    C = n(652215),
    T = n(705751),
    I = n(269927),
    b = n(985018),
    v = n(935339);

function S(e) {
    let {
        onCreateTeamClick: t,
        isGuildOwner: n
    } = e;
    return (0, i.jsx)("div", {
        className: v.xF,
        children: (0, i.jsx)(r.$nd, {
            text: b.intl.string(b.t["5k6FfR"]),
            disabled: !n,
            onClick: t,
            fullWidth: !0
        })
    })
}

function y(e) {
    let {
        guild: t,
        eligibleTeams: n,
        isGuildOwner: l
    } = e, [o, d] = s.useState(), {
        enableGuildMonetizationForTeam: u,
        submitting: m,
        error: g
    } = (0, c.A)(), {
        fetchSubscriptionsSettings: x
    } = (0, f.XE)(), h = (0, j.gN)(), _ = s.useMemo(() => n.map(e => ({
        id: e.id,
        label: e.name,
        value: e.id
    })), [n]), A = async () => {
        await u(t, o, T.S7.GUILD_ROLE_SUBSCRIPTIONS) && (x(t.id), (0, N.E)({
            title: b.intl.string(b.t["AP/2qe"]),
            body: b.intl.string(b.t.kHMgaK)
        }))
    };
    return (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsxs)("div", {
            className: v.xF,
            children: [(0, i.jsx)(a.l6P, {
                selectionMode: "single",
                options: _,
                placeholder: b.intl.string(b.t.QXf93A),
                value: o,
                disabled: 0 === _.length || h || !l,
                onSelectionChange: d,
                label: b.intl.string(b.t.QXf93A),
                hideLabel: !0
            }), (0, i.jsx)(r.$nd, {
                text: b.intl.string(b.t["9HU3ZV"]),
                onClick: A,
                loading: m,
                disabled: null == o || h || !l
            })]
        }), null != g && (0, i.jsx)(a.Text, {
            className: v.z3,
            variant: "text-sm/normal",
            children: g.getAnyErrorMessage()
        })]
    })
}
let R = e => {
    let {
        guild: t
    } = e, n = (0, l.bG)([_.default], () => _.default.getCurrentUser()), r = (0, h.bM)(t, n), c = (0, d.ME)(t), f = (0, l.bG)([A.A], () => A.A.isFocused()), {
        teams: j,
        loading: N
    } = (0, x.A)({
        refreshOnDepChange: f
    }), T = s.useMemo(() => j.filter(e => e.payout_account_status !== I.y.BLOCKED && (0, g.y)(n?.id ?? C.dJq, e)), [j, n]), R = T.length > 0, O = s.useCallback(async () => {
        p.default.track(C.HAw.GUILD_ROLE_SUBSCRIPTION_TEAM_SETUP_CLICKED, {
            is_onboarding_v2: c,
            has_eligible_team: R,
            guild_id: t.id,
            is_owner: r
        });
        let e = await (0, u.a)(C.dSh.DEVELOPER_PORTAL_TEAMS);
        (0, o.A)(e)
    }, [t, r, c, R]), G = s.useCallback(e => r ? (0, i.jsx)(m.A, {
        onClick: O,
        children: e
    }) : e, [O, r]);
    return N ? (0, i.jsx)(a.y$y, {}) : (0, i.jsxs)(a.BJc, {
        gap: 32,
        children: [!r && (0, i.jsx)("div", {
            className: v.b8,
            children: (0, i.jsx)(a.wx6, {
                type: "warning",
                children: b.intl.string(b.t.t56qWO)
            })
        }), (0, i.jsx)(a.D0$, {
            label: b.intl.string(b.t["sYLCY/"]),
            disabled: !r,
            description: b.intl.format(b.t["5mfqpW"], {
                onCreateTeamHook: G
            }),
            children: R ? (0, i.jsx)(y, {
                guild: t,
                eligibleTeams: T,
                isGuildOwner: r
            }) : (0, i.jsx)(S, {
                onCreateTeamClick: O,
                isGuildOwner: r
            })
        }), (0, i.jsx)(a.D0$, {
            label: b.intl.string(b.t["0n7R2X"]),
            children: (0, i.jsx)(E.A, {
                guildId: t.id,
                allPeriods: []
            })
        })]
    })
}