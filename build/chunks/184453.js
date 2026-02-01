/** chunk id: 184453, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => S
});
var r = n(627968),
    i = n(64700),
    l = n(503698),
    a = n.n(l),
    s = n(696292),
    o = n(397927),
    c = n(881615),
    u = n(416730),
    d = n(310419),
    p = n(282026),
    h = n(601193),
    g = n(631001),
    m = n(954571),
    f = n(726845),
    A = n(285395),
    _ = n(837057),
    b = n(488995),
    E = n(652215),
    O = n(654487),
    y = n(985018),
    I = n(169653);

function v(e) {
    let {
        tab: t
    } = e, n = f.A.useField("selectedTab"), l = i.useMemo(() => (function(e) {
        switch (e) {
            case b.GlobalDiscoveryTab.SERVERS:
                return (0, r.jsx)(o.RR9, {
                    color: "currentColor"
                });
            case b.GlobalDiscoveryTab.APPS:
                return (0, r.jsx)(o.k9F, {
                    color: "currentColor"
                });
            case b.GlobalDiscoveryTab.QUESTS:
                return (0, r.jsx)(o.r2v, {
                    color: "currentColor"
                })
        }
    })(t), [t]), y = i.useMemo(() => (0, A.t)(t), [t]), v = n === t, S = i.useCallback(() => {
        switch (t) {
            case b.GlobalDiscoveryTab.QUESTS:
                return v && g.A.resetState(), m.default.track(E.HAw.DISCOVERY_QUEST_TAB_CLICKED, {
                    client_ad_session_id: (0, c.sN)().uuid
                }), (0, _.transitionToGlobalDiscovery)({
                    tab: b.GlobalDiscoveryTab.QUESTS,
                    location: O.rE.DISCOVERY_SIDEBAR,
                    questContent: s.u.DISCOVERY_SIDEBAR
                });
            case b.GlobalDiscoveryTab.APPS:
                if (!v) return (0, _.transitionToGlobalDiscovery)({
                    tab: t,
                    newSessionState: {
                        entrypoint: {
                            name: d.sW.GLOBAL_DISCOVERY_SIDEBAR
                        },
                        restorePreviousView: !0
                    }
                });
                u.A.resetState(), (0, _.transitionToGlobalDiscovery)({
                    tab: t
                });
                return;
            case b.GlobalDiscoveryTab.SERVERS:
                if (!v) return (0, _.transitionToGlobalDiscovery)({
                    tab: t
                });
                p.A.resetState(), h.A.resetState();
                return;
            default:
                return (0, _.transitionToGlobalDiscovery)({
                    tab: t
                })
        }
    }, [t, v]);
    return (0, r.jsxs)(o.DUT, {
        onClick: S,
        className: a()(I.pc, {
            [I.wH]: v
        }),
        children: [(0, r.jsx)("div", {
            className: I.wz,
            children: l
        }), (0, r.jsx)(o.Text, {
            variant: "text-md/medium",
            color: "none",
            children: y
        })]
    })
}
let S = function() {
    return (0, r.jsxs)("div", {
        className: I.kL,
        children: [(0, r.jsx)("div", {
            className: I.wx,
            children: (0, r.jsx)(o.Heading, {
                variant: "text-lg/semibold",
                children: y.intl.string(y.t["1KqYnl"])
            })
        }), (0, r.jsx)("nav", {
            className: I.C$,
            children: b.GLOBAL_DISCOVERY_TABS.map(e => (0, r.jsx)(v, {
                tab: e
            }, e))
        })]
    })
}