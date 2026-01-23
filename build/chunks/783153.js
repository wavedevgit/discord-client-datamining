/** Chunk was on 39579 **/
/** chunk id: 783153, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => j
});
var r = n(627968),
    i = n(64700),
    l = n(311907),
    s = n(397927),
    o = n(793574),
    a = n(58149),
    c = n(546183),
    d = n(962173),
    u = n(954571),
    p = n(817818),
    f = n(591552),
    m = n(961973),
    g = n(724531),
    b = n(539916),
    _ = n(652215),
    h = n(985018),
    x = n(225305);

function O(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            var r;
            r = n[t], t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r
        })
    }
    return e
}

function v(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
        }
        return n
    })(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}

function j(e) {
    let {
        guildId: t,
        onComplete: n,
        isLastStep: j,
        isSubmitting: y = !1,
        disableTracking: A
    } = e, N = i.useRef(!1), {
        onboardingConnections: P,
        isLoading: E
    } = (0, l.cf)([f.A], () => ({
        onboardingConnections: f.A.getConnections(t),
        isLoading: f.A.isLoading()
    })), w = (0, l.bG)([c.default, d.A], () => P.some(e => {
        if (e.connection_type === b.wZ.APPLICATION && null != e.application_id) {
            let t = c.default.getNewestTokenForApplication(e.application_id);
            return c.default.getFetchStateForApplication(e.application_id) === c.FetchState.FETCHED && null != t
        }
        if (e.connection_type === b.wZ.PROVIDER_CONNECTED_ACCOUNT && null != e.provider_id) {
            let t = d.A.getAccount(null, e.provider_id);
            return null != t && !t.revoked
        }
        return !1
    }), [P]);
    i.useEffect(() => {
        if (A || E || 0 === P.length || N.current) return;
        let e = (0, m.H_)(P),
            n = (0, m.OG)(P);
        u.default.track(_.HAw.GUILD_ONBOARDING_STEP_VIEWED, v(O({}, (0, a.H$)(t)), {
            step: p.l8,
            required: !1,
            provider_connections_connected: e.connected,
            provider_connections_not_connected: e.notConnected,
            application_connections_connected: n.connected,
            application_connections_not_connected: n.notConnected
        })), N.current = !0
    }, [t, E, P, A]);
    let D = i.useCallback(() => {
        if (!A) {
            let e = (0, m.H_)(P),
                n = (0, m.OG)(P);
            u.default.track(_.HAw.GUILD_ONBOARDING_STEP_COMPLETED, v(O({}, (0, a.H$)(t)), {
                step: p.l8,
                skipped: !w,
                back: !1,
                options_selected: 0,
                in_onboarding: !0,
                is_final_step: j,
                provider_connections_connected: e.connected,
                provider_connections_not_connected: e.notConnected,
                application_connections_connected: n.connected,
                application_connections_not_connected: n.notConnected
            }))
        }
        n()
    }, [n, A, t, P, w, j]);
    return E ? (0, r.jsxs)("div", {
        className: x.g4,
        children: [(0, r.jsx)(s.y$y, {}), (0, r.jsx)(s.Text, {
            variant: "text-md/normal",
            color: "text-muted",
            children: h.intl.string(h.t.ZTNur7)
        })]
    }) : (0, r.jsx)("div", {
        className: x.kL,
        children: (0, r.jsxs)("div", {
            className: x.Qs,
            children: [(0, r.jsxs)("div", {
                className: x.gT,
                children: [(0, r.jsxs)("div", {
                    className: x.wx,
                    children: [(0, r.jsx)("div", {
                        className: x.qd,
                        children: (0, r.jsx)(s.Heading, {
                            variant: "heading-xl/semibold",
                            children: h.intl.string(h.t.eDVMrA)
                        })
                    }), (0, r.jsx)("div", {
                        className: x.ux,
                        children: (0, r.jsx)(s.Text, {
                            variant: "text-md/normal",
                            color: "text-muted",
                            children: h.intl.string(h.t.BozOXu)
                        })
                    })]
                }), (0, r.jsx)("div", {
                    className: x.A5,
                    children: (0, r.jsx)("div", {
                        className: x.eF,
                        children: P.map((e, n) => (0, r.jsx)(g.A, {
                            connection: e,
                            guildId: t,
                            location: o.A.GUILD_ONBOARDING
                        }, n))
                    })
                })]
            }), (0, r.jsx)("div", {
                className: x.qr,
                children: (0, r.jsxs)("div", {
                    className: x.o1,
                    children: [(0, r.jsx)("div", {}), (0, r.jsx)("div", {
                        className: x.E3,
                        children: (0, r.jsx)(s.Button, {
                            variant: w ? "primary" : "secondary",
                            onClick: D,
                            text: w ? j ? "".concat(h.intl.string(h.t["8SuVoE"]), " \uD83C\uDF89") : h.intl.string(h.t.PDTjLN) : h.intl.string(h.t["5Wxrcd"]),
                            disabled: y,
                            loading: y,
                            icon: j ? void 0 : s.KS6,
                            iconPosition: "end"
                        })
                    })]
                })
            })]
        })
    })
}