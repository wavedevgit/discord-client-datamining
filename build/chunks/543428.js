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
    g = l(309777),
    f = l(429364),
    v = l(794905),
    j = l(219480),
    b = l(650995),
    C = l(792852),
    y = l(409067),
    A = l(985018),
    N = l(847455);
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
    } = (0, v.A)(t), U = (0, r.bG)([p.A], () => p.A.getExportingClipIds().length > 0), [G, V] = a.useState("gallery"), [z, H] = a.useState(null), $ = (0, r.bG)([p.A], () => null != z ? p.A.getClipById(z) : null, [z]), _ = a.useRef(G);
    _.current = G;
    let [K, B] = a.useState(c.ip4.HIDDEN), F = a.useRef(null), X = (0, C.P)(e => e.selectedGameId), Y = a.useMemo(() => null == X || "favorites" === X ? null : T.find(e => e.applicationId === X) ?? null, [X, T]), Q = a.useMemo(() => "favorites" === X ? D : Y?.filteredClips ?? R, [X, Y, R, D]), q = a.useMemo(() => "favorites" === X ? A.intl.string(A.t["9rlCk1"]) : Y?.name ?? A.intl.string(A.t.dPVrEv), [X, Y]), W = a.useCallback(e => {
        M(t => {
            let l = new Set(t);
            return l.has(e) ? l.delete(e) : l.add(e), l
        })
    }, []), Z = a.useCallback(e => {
        H(e.id), V("editing"), u.A.useReducedMotion && B(c.ip4.ENTERED)
    }, []), J = a.useCallback(() => {
        u.A.useReducedMotion && H(null), V("gallery")
    }, []);
    a.useEffect(() => {
        let e = e => {
            "Escape" === e.key && "editing" === _.current && (e.stopPropagation(), J())
        };
        return document.addEventListener("keydown", e), () => {
            document.removeEventListener("keydown", e)
        }
    }, [J, i]);
    let ee = a.useCallback(() => {
            M(new Set)
        }, []),
        et = L.size > 0,
        el = a.useCallback(() => {
            let e = O.filter(e => L.has(e.id));
            (0, c.mMO)(async () => {
                let {
                    default: t
                } = await l.e("13367").then(l.bind(l, 223818));
                return l => (0, n.jsx)(t, {
                    ...l,
                    clips: e,
                    onAfterDelete: () => {
                        ee(), l.onClose()
                    }
                })
            }, {
                stackingBehavior: "stack"
            })
        }, [O, L, ee]),
        en = a.useCallback(async () => {
            let e = O.filter(e => L.has(e.id));
            await P({
                clips: e
            }), ee()
        }, [O, L, P, ee]),
        ea = a.useMemo(() => ({
            selectedClipIds: L,
            toggleClipSelection: W,
            clearSelection: ee,
            isMultiSelectMode: et
        }), [L, W, ee, et]);
    return (0, n.jsx)(h.f5, {
        value: w,
        children: (0, n.jsx)(E.Provider, {
            value: ea,
            children: (0, n.jsx)(o.N, {
                onClose: i,
                transitionState: I,
                ...S,
                children: (0, n.jsxs)("div", {
                    className: N.jT,
                    ref: F,
                    children: [(0, n.jsxs)("div", {
                        className: s()(N.PD, "gallery" === G && N.vu),
                        "aria-hidden": "gallery" !== G,
                        children: [(0, n.jsx)(b.A, {
                            clipsByGame: T,
                            filteredClips: R,
                            favoriteClips: D,
                            allClips: O
                        }), (0, n.jsxs)("div", {
                            className: N.Qs,
                            children: [(0, n.jsxs)("div", {
                                className: N.$Q,
                                children: [(0, n.jsx)(c.Heading, {
                                    variant: "heading-md/medium",
                                    color: "text-default",
                                    children: q
                                }), (0, n.jsxs)("div", {
                                    className: N.$s,
                                    children: [et && (0, n.jsxs)(n.Fragment, {
                                        children: [(0, n.jsx)(d.m, {
                                            text: A.intl.string(A.t.RDE0Sc),
                                            children: (0, n.jsx)(c.K0, {
                                                onClick: en,
                                                icon: c.liv,
                                                size: "sm",
                                                variant: "icon-only",
                                                "aria-label": A.intl.string(A.t.RDE0Sc),
                                                loading: U
                                            })
                                        }), (0, n.jsx)(d.m, {
                                            text: A.intl.string(A.t.oyYWHE),
                                            children: (0, n.jsx)(c.K0, {
                                                onClick: el,
                                                icon: c.ucK,
                                                size: "sm",
                                                variant: "icon-only",
                                                "aria-label": A.intl.string(A.t.oyYWHE)
                                            })
                                        })]
                                    }), (0, n.jsx)(c.K0, {
                                        onClick: i,
                                        icon: c.d$L,
                                        size: "sm",
                                        variant: "icon-only",
                                        "aria-label": A.intl.string(A.t.cpT0Cq)
                                    })]
                                })]
                            }), (0, n.jsx)(j.A, {
                                onEdit: Z,
                                channelId: t,
                                filteredClips: Q,
                                totalClipCount: O.length,
                                onClipClick: k
                            })]
                        })]
                    }), (0, n.jsx)("div", {
                        className: s()(N.jN, "editing" === G && N.vu),
                        "aria-hidden": "editing" !== G,
                        onTransitionEnd: () => {
                            "gallery" === G ? (H(null), B(c.ip4.HIDDEN)) : "editing" === G && B(c.ip4.ENTERED)
                        },
                        children: null != $ && (0, n.jsxs)(f.p, {
                            clip: $,
                            modalContainerRef: F,
                            children: [(0, n.jsx)(x.A, {
                                clip: $,
                                transitionState: K,
                                onClose: J
                            }), (0, n.jsx)(g.A, {
                                channelId: t,
                                clip: $,
                                onClose: J
                            })]
                        })
                    })]
                })
            })
        })
    })
}