/** chunk id: 184453 params = (module,exports,require) **/
n.d(t, {
    A: () => x
});
var i = n(627968),
    a = n(64700),
    l = n(503698),
    r = n.n(l),
    s = n(696292),
    o = n(397927),
    d = n(881615),
    c = n(416730),
    u = n(310419),
    A = n(282026),
    h = n(601193),
    _ = n(631001),
    m = n(954571),
    p = n(726845),
    g = n(285395),
    E = n(837057),
    I = n(488995),
    f = n(652215),
    C = n(654487),
    T = n(985018),
    N = n(788427);

function S(e) {
    let {
        tab: t
    } = e, n = p.A.useField("selectedTab"), l = a.useMemo(() => (function(e) {
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
    })(t), [t]), T = a.useMemo(() => (0, g.t)(t), [t]), S = n === t, x = a.useCallback(() => {
        switch (t) {
            case I.GlobalDiscoveryTab.QUESTS:
                return S && _.A.resetState(), m.default.track(f.HAw.DISCOVERY_QUEST_TAB_CLICKED, {
                    client_ad_session_id: (0, d.sN)().uuid
                }), (0, E.transitionToGlobalDiscovery)({
                    tab: I.GlobalDiscoveryTab.QUESTS,
                    location: C.rE.DISCOVERY_SIDEBAR,
                    questContent: s.u.DISCOVERY_SIDEBAR
                });
            case I.GlobalDiscoveryTab.APPS:
                if (!S) return (0, E.transitionToGlobalDiscovery)({
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
                if (!S) return (0, E.transitionToGlobalDiscovery)({
                    tab: t
                });
                A.A.resetState(), h.A.resetState();
                return;
            default:
                return (0, E.transitionToGlobalDiscovery)({
                    tab: t
                })
        }
    }, [t, S]);
    return (0, i.jsxs)(o.DUT, {
        onClick: x,
        className: r()(N.pc, {
            [N.wH]: S
        }),
        children: [(0, i.jsx)("div", {
            className: N.wz,
            children: l
        }), (0, i.jsx)(o.Text, {
            variant: "text-md/medium",
            color: "none",
            children: T
        })]
    })
}
let x = function() {
    return (0, i.jsxs)("div", {
        className: N.kL,
        children: [(0, i.jsx)("div", {
            className: N.wx,
            children: (0, i.jsx)(o.Heading, {
                variant: "text-lg/semibold",
                children: T.intl.string(T.t["1KqYnl"])
            })
        }), (0, i.jsx)("nav", {
            className: N.C$,
            children: I.GLOBAL_DISCOVERY_TABS.map(e => (0, i.jsx)(S, {
                tab: e
            }, e))
        })]
    })
}