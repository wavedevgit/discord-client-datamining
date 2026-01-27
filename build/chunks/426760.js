/** Chunk was on web.js **/
/** chunk id: 426760, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => C
}), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(311907),
    o = n(230109),
    s = n(397927),
    l = n(444927),
    c = n(688810),
    u = n(665171),
    d = n(488803),
    f = n(522055),
    p = n(645619),
    _ = n(954571),
    h = n(917064),
    m = n(787001),
    g = n(232122),
    E = n(340195),
    y = n(244027),
    b = n(286188),
    O = n(278115),
    v = n(527113),
    A = n(250493),
    I = n(652215),
    S = n(985018),
    T = n(200430);

function C(e) {
    let {
        analyticsLocation: t,
        guild: n,
        onClose: C,
        scrollToPowerupCards: N
    } = e, [w, R] = i.useState(!0), P = i.useRef(!1), D = (0, l.A)(() => Date.now()), {
        analyticsLocations: L
    } = (0, c.Ay)(), x = i.useRef(null), M = i.useRef(null), j = i.useRef(null), k = i.useCallback(() => {
        null != j.current && null != M.current && M.current.scrollIntoViewNode({
            node: j.current,
            animate: !0,
            shouldScrollToStart: !0
        })
    }, []), U = i.useCallback(() => {
        k()
    }, [k]), G = i.useCallback(() => {
        null == C || C(), _.default.track(I.HAw.MODAL_DISMISSED, {
            type: I.liQ.PREMIUM_GUILD_USER_MODAL,
            location_stack: L,
            location_section: t.section,
            location_object: t.object,
            guild_id: n.id,
            duration_open_ms: Date.now() - D
        })
    }, [C, t, L, D, n.id]), F = i.useCallback(e => {
        e && !P.current && (_.default.track(I.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
            type: I.liQ.PREMIUM_GUILD_USER_MODAL,
            location_stack: L,
            location_section: t.section,
            location_object: t.object,
            guild_id: n.id
        }), P.current = !0)
    }, [t, L, n.id]);
    i.useEffect(() => {
        _.default.track(I.HAw.OPEN_MODAL, {
            type: I.liQ.PREMIUM_GUILD_USER_MODAL,
            location_stack: L,
            location_section: t.section,
            location_object: t.object,
            guild_id: n.id
        })
    }, [n.id, t, L]), i.useEffect(() => {
        function e(e) {
            "Escape" === e.key && G()
        }
        return window.addEventListener("keydown", e), () => {
            window.removeEventListener("keydown", e)
        }
    }, [G]);
    let V = (0, d.C$)(n.id, "GuildBoostingMarketingRefresh"),
        B = (0, a.bG)([f.A], () => f.A.hasFetchedCatalog(n.id));
    i.useEffect(() => {
        V && !B && (0, u.z9)(n.id)
    }, [n.id, V, B]);
    let H = (0, a.bG)([p.A], () => p.A.hasFetchedPowerupCatalog(n.id));
    return i.useEffect(() => {
        if (N && H) {
            let e = setTimeout(() => {
                k()
            }, 100);
            return () => clearTimeout(e)
        }
    }, [N, k, H]), (0, r.jsxs)(r.Fragment, {
        children: [null != C && (0, r.jsx)("div", {
            className: T.Yk,
            children: (0, r.jsx)(s.DUT, {
                className: T.b,
                onClick: G,
                "aria-label": S.intl.string(S.t.cpT0Cq),
                children: (0, r.jsx)(s.PGe, {
                    size: "md",
                    color: "currentColor"
                })
            })
        }), (0, r.jsxs)(s.GtU, {
            ref: M,
            className: T.XG,
            children: [(0, r.jsxs)("div", {
                className: T.wx,
                children: [(0, r.jsx)(E.A, {
                    className: T.y2
                }), (0, r.jsxs)("div", {
                    className: T.AZ,
                    children: [(0, r.jsx)(b.A, {
                        guildId: e.guild.id,
                        onButtonClick: U
                    }), (0, r.jsx)(m.A, {
                        guild: n,
                        closeLayer: G,
                        onCtaVisibilityChange: R
                    }), (0, r.jsx)(y.A, {
                        guild: n
                    })]
                })]
            }), (0, r.jsx)("div", {
                className: T.uE,
                children: (0, r.jsx)(O.A, {
                    ref: j,
                    guild: e.guild,
                    onClose: G
                })
            }), (0, r.jsx)("div", {
                className: T.o6,
                children: (0, r.jsxs)("div", {
                    className: T.y$,
                    children: [(0, r.jsx)(v.A, {
                        className: T.Q,
                        guild: n
                    }), (0, r.jsx)(h.A, {}), (0, r.jsx)(g.A, {})]
                })
            }), (0, r.jsx)(o.L, {
                innerRef: x,
                onChange: F,
                children: (0, r.jsx)("div", {
                    ref: x,
                    className: T.mR
                })
            })]
        }), (0, r.jsx)(A.A, {
            guild: n,
            isVisible: !w,
            closeLayer: G
        })]
    })
}