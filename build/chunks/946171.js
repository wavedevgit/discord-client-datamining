/** chunk id: 946171 params = (module,exports,require) **/
"use strict";
n.d(t, {
    s: () => G
});
var i = n(627968),
    s = n(64700);
n(516773);
var l = n(311907),
    r = n(397927),
    a = n(513521),
    o = n(460760),
    d = n(596484),
    c = n(405810),
    u = n(498642),
    m = n(997509),
    g = n(555337),
    x = n(310345),
    h = n(764548),
    _ = n(268075),
    A = n(458907),
    p = n(719175),
    f = n(366846),
    j = n(716610),
    N = n(927573),
    E = n(814758),
    T = n(985018),
    C = n(307456);

function I() {
    return (0, i.jsx)(r.Text, {
        tag: "span",
        variant: "text-xs/bold",
        color: "text-feedback-critical",
        className: C.mw,
        children: "*"
    })
}

function b(e) {
    let {
        guild: t,
        requireDescription: n
    } = e, a = s.useCallback(e => {
        m.A.updateGuild({
            discoverySplash: e
        })
    }, []), o = s.useCallback(() => {
        m.A.updateGuild({
            discoverySplash: null
        })
    }, []), d = s.useCallback(e => {
        m.A.updateGuild({
            description: e
        })
    }, []), {
        memberCount: g,
        onlineCount: x
    } = (0, l.cf)([u.A], () => ({
        memberCount: u.A.getMemberCount(t.id),
        onlineCount: u.A.getOnlineCount(t.id)
    }));
    return (0, i.jsxs)("div", {
        className: C.cL,
        children: [(0, i.jsxs)("div", {
            className: C.hd,
            children: [(0, i.jsxs)("div", {
                children: [(0, i.jsx)(r.Heading, {
                    variant: "text-md/semibold",
                    color: "text-strong",
                    className: C.wx,
                    children: T.intl.string(T.t.LYju5J)
                }), (0, i.jsx)(r.Text, {
                    variant: "text-sm/medium",
                    color: "text-subtle",
                    children: T.intl.string(T.t["53LhI6"])
                })]
            }), (0, i.jsxs)("div", {
                children: [(0, i.jsx)(r.Heading, {
                    variant: "text-xs/bold",
                    color: "text-muted",
                    className: C.uI,
                    children: T.intl.string(T.t.JaecVH)
                }), (0, i.jsx)(r.Text, {
                    variant: "text-sm/medium",
                    color: "text-subtle",
                    children: T.intl.string(T.t.VJMq8R)
                }), (0, i.jsxs)("div", {
                    className: C.Ll,
                    children: [(0, i.jsx)("div", {
                        className: C.wF,
                        children: (0, i.jsx)(c.A, {
                            onChange: a,
                            text: T.intl.string(T.t["3UB9ad"]),
                            size: "sm",
                            variant: "secondary"
                        })
                    }), null != t.discoverySplash ? (0, i.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: C.wF,
                        children: (0, i.jsx)(r.Button, {
                            variant: "critical-secondary",
                            size: "sm",
                            text: T.intl.string(T.t.N86XcP),
                            onClick: o
                        })
                    }) : null]
                })]
            }), (0, i.jsxs)("div", {
                children: [(0, i.jsxs)(r.Heading, {
                    variant: "text-xs/bold",
                    color: "text-muted",
                    className: C.uI,
                    children: [T.intl.string(T.t["1Ts7QP"]), n ? (0, i.jsx)(I, {}) : null]
                }), (0, i.jsx)(r.Text, {
                    variant: "text-sm/medium",
                    color: "text-subtle",
                    children: T.intl.string(T.t["6Y9q8d"])
                }), (0, i.jsx)("div", {
                    className: C.wF,
                    children: (0, i.jsx)(r.fs1, {
                        value: t.description ?? "",
                        placeholder: T.intl.string(T.t.Nvfowl),
                        onChange: d,
                        maxLength: 300
                    })
                })]
            })]
        }), (0, i.jsx)(h.A, {
            className: C.VH,
            guild: t,
            memberCount: g,
            presenceCount: x
        })]
    })
}

function v(e) {
    let {
        guild: t,
        guildMetadata: n,
        requirePrimaryCategory: s,
        error: l
    } = e;
    return (0, i.jsxs)("div", {
        className: C.hd,
        children: [(0, i.jsxs)("div", {
            children: [(0, i.jsx)(r.Heading, {
                variant: "text-md/semibold",
                color: "text-strong",
                className: C.wx,
                children: T.intl.string(T.t["5b4VCV"])
            }), (0, i.jsx)(r.Text, {
                variant: "text-sm/medium",
                color: "text-subtle",
                children: T.intl.string(T.t.MMEJFB)
            })]
        }), (0, i.jsxs)("div", {
            children: [(0, i.jsxs)(r.Heading, {
                variant: "text-xs/bold",
                color: "text-muted",
                className: C.uI,
                children: [T.intl.string(T.t.Rv9Anz), s ? (0, i.jsx)(I, {}) : null]
            }), (0, i.jsx)(r.Text, {
                variant: "text-sm/medium",
                color: "text-subtle",
                children: T.intl.string(T.t.CE5Gya)
            }), (0, i.jsx)("div", {
                className: C.wF,
                children: (0, i.jsx)(A.T, {
                    guildId: t.id,
                    guildMetadata: n
                })
            })]
        }), (0, i.jsxs)("div", {
            children: [(0, i.jsx)(r.Heading, {
                variant: "text-xs/bold",
                color: "text-muted",
                className: C.uI,
                children: T.intl.string(T.t.oOPlPA)
            }), (0, i.jsx)(r.Text, {
                variant: "text-sm/medium",
                color: "text-subtle",
                children: T.intl.string(T.t["4jnzla"])
            }), (0, i.jsx)("div", {
                className: C.wF,
                children: (0, i.jsx)(p.A, {
                    guild: t,
                    guildMetadata: n
                })
            }), null != l ? (0, i.jsx)(r.Text, {
                color: "text-feedback-critical",
                variant: "text-sm/normal",
                className: C.z3,
                children: l
            }) : null]
        })]
    })
}

function S(e) {
    let {
        guildId: t,
        guildMetadata: n,
        requireTag: l,
        error: c
    } = e, [u, m] = s.useState(null), g = s.useCallback(e => {
        let i = Array.from(e),
            s = [...n.keywords].filter(e => !i.includes(e));
        m(null), (0, o.ZH)(t, s)
    }, [t, n]), h = s.useCallback(e => {
        let {
            keywords: i
        } = n;
        i.length >= N.Qy || i.includes(e) || (m(null), (0, o.ZH)(t, [...i, e]))
    }, [t, n]), _ = s.useMemo(() => (0, x.hV)(n.primaryCategoryId).filter(e => !n.keywords.includes(e)).map(e => {
        let t = n.keywords.length >= N.Qy;
        return {
            text: e,
            onClick: () => h(e),
            disabled: t,
            tooltipText: t ? T.intl.string(T.t.Xx7XeB) : void 0
        }
    }), [n.keywords, n.primaryCategoryId, h]), A = c ?? u, p = s.useMemo(() => n.keywords.map(e => ({
        id: e,
        label: e
    })), [n.keywords]);
    return (0, i.jsxs)("div", {
        className: C.hd,
        children: [(0, i.jsxs)("div", {
            children: [(0, i.jsx)(a.A, {
                required: l,
                label: T.intl.string(T.t["0PJZXj"]),
                description: T.intl.string(T.t.ztiTDH),
                tagsLabel: T.intl.string(T.t["0PJZXj"]),
                tags: p,
                onRemoveTag: g,
                onAddTag: h,
                onAddTagError: m,
                maxTags: N.Qy,
                maxTaxLength: N.Ug,
                placeholder: n.keywords.length < 1 ? T.intl.string(T.t.EL4Lhs) : void 0
            }), null != A ? (0, i.jsx)(r.Text, {
                color: "text-feedback-critical",
                variant: "text-sm/normal",
                className: C.z3,
                children: A
            }) : null]
        }), _.length > 0 ? (0, i.jsxs)("div", {
            children: [(0, i.jsx)(r.Heading, {
                variant: "text-xs/bold",
                color: "text-muted",
                className: C.uI,
                children: T.intl.string(T.t.sF28Ou)
            }), (0, i.jsx)("div", {
                className: C.wF,
                children: (0, i.jsx)(d.z, {
                    pills: _
                })
            })]
        }) : null]
    })
}

function y(e) {
    let {
        guild: t,
        guildMetadata: n
    } = e, {
        emojiDiscoverabilityEnabled: l
    } = n, a = t.id, d = s.useCallback(() => {
        (0, o.r8)(a, !l)
    }, [a, l]);
    return (0, i.jsxs)("div", {
        className: C.cL,
        children: [(0, i.jsxs)("div", {
            children: [(0, i.jsx)(r.Heading, {
                variant: "text-md/semibold",
                color: "text-strong",
                className: C.wx,
                children: T.intl.string(T.t.DhJ8ur)
            }), (0, i.jsx)(r.Text, {
                variant: "text-sm/medium",
                color: "text-subtle",
                children: T.intl.string(T.t["/RSSlV"])
            }), (0, i.jsx)("div", {
                className: C.wF,
                children: (0, i.jsx)(r.Button, {
                    size: "sm",
                    variant: l ? "secondary" : "active",
                    text: l ? T.intl.string(T.t.XnrNLi) : T.intl.string(T.t.bHbZLP),
                    onClick: d
                })
            })]
        }), (0, i.jsx)("div", {
            children: (0, i.jsx)(_.k, {
                guild: t,
                discoverableGuild: null
            })
        })]
    })
}

function R(e) {
    let {
        preferredLocale: t
    } = e, n = s.useMemo(() => (0, E.fr)(), []), l = s.useCallback(e => {
        m.A.updateGuild({
            preferredLocale: e
        })
    }, []);
    return (0, i.jsx)(r.l6P, {
        layout: "horizontal-responsive",
        label: T.intl.string(T.t.pO60fy),
        description: T.intl.string(T.t["SF/GRh"]),
        value: t,
        options: n,
        onSelectionChange: l,
        selectionMode: "single",
        fullWidth: !0
    })
}

function O() {
    return (0, i.jsx)("div", {
        className: C.yF
    })
}

function G(e) {
    let {
        requireTerms: t,
        rules: n,
        settingsView: s
    } = e, {
        errors: r,
        guildMetadata: a,
        guild: o
    } = (0, l.cf)([g.A], () => {
        let {
            errors: e,
            guildMetadata: t,
            guild: n
        } = g.A.getProps();
        return {
            errors: e,
            guildMetadata: t,
            guild: n
        }
    });
    if (null == o) return null;
    let d = s === j.v.ELIGIBLE_DISABLED;
    return (0, i.jsxs)("div", {
        className: C.W0,
        children: [(0, i.jsx)(b, {
            guild: o,
            requireDescription: d
        }), (0, i.jsx)(O, {}), (0, i.jsx)(v, {
            guild: o,
            guildMetadata: a,
            requirePrimaryCategory: d,
            error: r.discovery_splash
        }), (0, i.jsx)(O, {}), (0, i.jsx)(S, {
            guildId: o.id,
            guildMetadata: a,
            requireTag: d,
            error: r.keywords
        }), (0, i.jsx)(O, {}), (0, i.jsx)(y, {
            guild: o,
            guildMetadata: a
        }), (0, i.jsx)(O, {}), (0, i.jsx)(R, {
            preferredLocale: o.preferredLocale
        }), (0, i.jsx)(O, {}), (0, i.jsx)("div", {
            children: (0, i.jsx)(f.D, {
                requireTerms: t,
                rules: n
            })
        })]
    })
}