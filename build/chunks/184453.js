/** chunk id: 184453 params = (module,exports,require) **/
n.d(t, {
    A: () => x
});
var i = n(627968),
    l = n(64700),
    r = n(503698),
    a = n.n(r),
    s = n(696292),
    o = n(397927),
    d = n(881615),
    c = n(416730),
    u = n(310419),
    A = n(282026),
    h = n(601193),
    _ = n(631001),
    m = n(954571),
    g = n(726845),
    p = n(285395),
    E = n(837057),
    I = n(488995),
    f = n(652215),
    C = n(654487),
    T = n(985018),
    S = n(404260);

function N(e) {
    let {
        tab: t
    } = e, n = g.A.useField("selectedTab"), r = l.useMemo(() => (function(e) {
        switch (e) {
            case I.GlobalDiscoveryTab.SERVERS:
                return (0, i.jsx)(o.RR9, {
                    color: "currentColor"
                });
            case I.GlobalDiscoveryTab.APPS:
                return (0, i.jsx)(o.k9F, {
                    color: "currentColor"
                });
            case I.GlobalDiscoveryTab.QUESTS:
                return (0, i.jsx)(o.r2v, {
                    color: "currentColor"
                })
        }
    })(t), [t]), T = l.useMemo(() => (0, p.t)(t), [t]), N = n === t, x = l.useCallback(() => {
        switch (t) {
            case I.GlobalDiscoveryTab.QUESTS:
                return N && _.A.resetState(), m.default.track(f.HAw.DISCOVERY_QUEST_TAB_CLICKED, {
                    client_ad_session_id: (0, d.sN)().uuid
                }), (0, E.transitionToGlobalDiscovery)({
                    tab: I.GlobalDiscoveryTab.QUESTS,
                    location: C.rE.DISCOVERY_SIDEBAR,
                    questContent: s.u.DISCOVERY_SIDEBAR
                });
            case I.GlobalDiscoveryTab.APPS:
                if (!N) return (0, E.transitionToGlobalDiscovery)({
                    tab: t,
                    newSessionState: {
                        entrypoint: {
                            name: u.sW.GLOBAL_DISCOVERY_SIDEBAR
                        },
                        restorePreviousView: !0
                    }
                });
                c.A.resetState(), (0, E.transitionToGlobalDiscovery)({
                    tab: t
                });
                return;
            case I.GlobalDiscoveryTab.SERVERS:
                if (!N) return (0, E.transitionToGlobalDiscovery)({
                    tab: t
                });
                A.A.resetState(), h.A.resetState();
                return;
            default:
                return (0, E.transitionToGlobalDiscovery)({
                    tab: t
                })
        }
    }, [t, N]);
    return (0, i.jsxs)(o.DUT, {
        onClick: x,
        className: a()(S.pc, {
            [S.wH]: N
        }),
        children: [(0, i.jsx)("div", {
            className: S.wz,
            children: r
        }), (0, i.jsx)(o.Text, {
            variant: "text-md/medium",
            color: "none",
            children: T
        })]
    })
}
let x = function() {
    return (0, i.jsxs)("div", {
        className: S.kL,
        children: [(0, i.jsx)("div", {
            className: S.wx,
            children: (0, i.jsx)(o.Heading, {
                variant: "text-lg/semibold",
                children: T.intl.string(T.t["1KqYnl"])
            })
        }), (0, i.jsx)("nav", {
            className: S.C$,
            children: I.GLOBAL_DISCOVERY_TABS.map(e => (0, i.jsx)(N, {
                tab: e
            }, e))
        })]
    })
}