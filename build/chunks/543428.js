/** chunk id: 543428 params = (module,exports,require) **/
l.d(t, {
    $: () => E,
    default: () => k
});
var n = l(627968),
    a = l(64700),
    i = l(503698),
    s = l.n(i),
    r = l(311907),
    d = l(990078),
    o = l(521489),
    c = l(397927),
    u = l(775602),
    m = l(793574),
    h = l(688810),
    p = l(274372),
    x = l(247181),
    f = l(309777),
    g = l(429364),
    v = l(794905),
    j = l(219480),
    b = l(650995),
    C = l(792852),
    y = l(409067),
    N = l(985018),
    A = l(638208);
let E = a.createContext({
    selectedClipIds: new Set,
    toggleClipSelection: () => {},
    clearSelection: () => {},
    isMultiSelectMode: !1
});

function k(e) {
    let {
        channelId: t,
        onClose: i,
        onClipClick: k,
        transitionState: I,
        ...S
    } = e, {
        analyticsLocations: w
    } = (0, h.Ay)(m.A.CLIPS_GALLERY), [L, M] = a.useState(new Set), {
        clipsByGame: T,
        filteredClips: R,
        favoriteClips: D,
        allClips: O
    } = (0, y.a)(), {
        onShareClick: P
    } = (0, v.A)(t), U = (0, r.bG)([p.A], () => p.A.getExportingClipIds().length > 0), [G, V] = a.useState("gallery"), [H, z] = a.useState(null), [$, _] = a.useState(c.ip4.HIDDEN), K = a.useRef(null), B = (0, C.P)(e => e.selectedGameId), F = a.useMemo(() => null == B || "favorites" === B ? null : T.find(e => e.applicationId === B) ?? null, [B, T]), Y = a.useMemo(() => "favorites" === B ? D : F?.filteredClips ?? R, [B, F, R, D]), X = a.useMemo(() => "favorites" === B ? N.intl.string(N.t["9rlCk1"]) : F?.name ?? N.intl.string(N.t.dPVrEv), [B, F]), Q = a.useCallback(e => {
        M(t => {
            let l = new Set(t);
            return l.has(e) ? l.delete(e) : l.add(e), l
        })
    }, []), q = a.useCallback(e => {
        z(e), V("editing"), u.A.useReducedMotion && _(c.ip4.ENTERED)
    }, []), W = a.useCallback(() => {
        u.A.useReducedMotion && z(null), V("gallery")
    }, []), Z = a.useCallback(() => {
        M(new Set)
    }, []), J = L.size > 0, ee = a.useCallback(() => {
        let e = O.filter(e => L.has(e.id));
        (0, c.mMO)(async () => {
            let {
                default: t
            } = await l.e("13367").then(l.bind(l, 223818));
            return l => (0, n.jsx)(t, {
                ...l,
                clips: e,
                onAfterDelete: () => {
                    Z(), l.onClose()
                }
            })
        }, {
            stackingBehavior: "stack"
        })
    }, [O, L, Z]), et = a.useCallback(async () => {
        let e = O.filter(e => L.has(e.id));
        await P({
            clips: e
        }), Z()
    }, [O, L, P, Z]), el = a.useMemo(() => ({
        selectedClipIds: L,
        toggleClipSelection: Q,
        clearSelection: Z,
        isMultiSelectMode: J
    }), [L, Q, Z, J]);
    return (0, n.jsx)(h.f5, {
        value: w,
        children: (0, n.jsx)(E.Provider, {
            value: el,
            children: (0, n.jsx)(o.N, {
                onClose: i,
                transitionState: I,
                ...S,
                children: (0, n.jsxs)("div", {
                    className: A.jT,
                    ref: K,
                    children: [(0, n.jsxs)("div", {
                        className: s()(A.PD, "gallery" === G && A.vu),
                        children: [(0, n.jsx)(b.A, {
                            clipsByGame: T,
                            filteredClips: R,
                            favoriteClips: D,
                            allClips: O
                        }), (0, n.jsxs)("div", {
                            className: A.Qs,
                            children: [(0, n.jsxs)("div", {
                                className: A.$Q,
                                children: [(0, n.jsx)(c.Heading, {
                                    variant: "heading-md/medium",
                                    color: "text-default",
                                    children: X
                                }), (0, n.jsxs)("div", {
                                    className: A.$s,
                                    children: [J && (0, n.jsxs)(n.Fragment, {
                                        children: [(0, n.jsx)(d.m, {
                                            text: N.intl.string(N.t.RDE0Sc),
                                            children: (0, n.jsx)(c.K0, {
                                                onClick: et,
                                                icon: c.liv,
                                                size: "sm",
                                                variant: "icon-only",
                                                "aria-label": N.intl.string(N.t.RDE0Sc),
                                                loading: U
                                            })
                                        }), (0, n.jsx)(d.m, {
                                            text: N.intl.string(N.t.oyYWHE),
                                            children: (0, n.jsx)(c.K0, {
                                                onClick: ee,
                                                icon: c.ucK,
                                                size: "sm",
                                                variant: "icon-only",
                                                "aria-label": N.intl.string(N.t.oyYWHE)
                                            })
                                        })]
                                    }), (0, n.jsx)(c.K0, {
                                        onClick: i,
                                        icon: c.d$L,
                                        size: "sm",
                                        variant: "icon-only",
                                        "aria-label": N.intl.string(N.t.cpT0Cq)
                                    })]
                                })]
                            }), (0, n.jsx)(j.A, {
                                onEdit: q,
                                channelId: t,
                                filteredClips: Y,
                                totalClipCount: O.length,
                                onClipClick: k
                            })]
                        })]
                    }), (0, n.jsx)("div", {
                        className: s()(A.jN, "editing" === G && A.vu),
                        onTransitionEnd: () => {
                            "gallery" === G ? (z(null), _(c.ip4.HIDDEN)) : "editing" === G && _(c.ip4.ENTERED)
                        },
                        children: null != H && (0, n.jsxs)(g.p, {
                            clip: H,
                            modalContainerRef: K,
                            children: [(0, n.jsx)(x.A, {
                                clip: H,
                                transitionState: $,
                                onClose: W
                            }), (0, n.jsx)(f.A, {
                                channelId: t,
                                clip: H,
                                onClose: i
                            })]
                        })
                    })]
                })
            })
        })
    })
}