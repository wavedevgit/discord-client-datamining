/** Chunk was on 39048 **/
/** chunk id: 360827, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    Ay: () => N,
    fO: () => I
}), n(896048);
var r = n(627968),
    i = n(64700),
    l = n(311907),
    s = n(36525),
    a = n(397927),
    o = n(713654),
    c = n(591552),
    d = n(961973),
    u = n(555337),
    g = n(863694),
    m = n(527678),
    p = n(923121),
    f = n(352821),
    h = n(107795),
    b = n(655943),
    x = n(259866),
    j = n(699256),
    _ = n(191117),
    O = n(652215),
    v = n(539916),
    y = n(985018),
    A = n(42483);

function E(e) {
    let {
        guildId: t,
        prompts: n
    } = e, s = (0, l.bG)([g.A], () => g.A.editedDefaultChannelIds), [c, u] = (0, d.Lx)(t, n, [...s]), m = c.length, p = c.length + u.length, f = m / p * 100, h = Math.max(Math.ceil(85 * p / 100) - m, 0), [b, x] = i.useState(!1), j = b ? a.abt : a.tN5;
    return (0, r.jsxs)("div", {
        className: A.Kf,
        children: [(0, r.jsxs)(a.DUT, {
            className: A.a9,
            onClick: () => x(!b),
            children: [(0, r.jsxs)("div", {
                className: A.Vn,
                children: [f <= 85 && (0, r.jsx)(a.EpV, {
                    size: "xs",
                    color: "currentColor",
                    className: A.$e
                }), (0, r.jsx)(a.Text, {
                    className: A.XG,
                    variant: "text-xs/medium",
                    color: "text-muted",
                    children: y.intl.format(y.t.nMVKCX, {
                        numChannelsMissing: p - m
                    })
                })]
            }), (0, r.jsxs)("div", {
                className: A.L$,
                children: [(0, r.jsx)(a.iCB, {
                    className: A.gH,
                    foregroundColor: f > 85 ? "var(--status-positive)" : "var(--status-warning)",
                    percent: f
                }), (0, r.jsx)(j, {
                    size: "md",
                    color: "currentColor",
                    className: A.OW
                })]
            })]
        }), b ? (0, r.jsxs)("div", {
            className: A.k$,
            children: [(0, r.jsx)(a.Text, {
                variant: "text-xs/semibold",
                color: "text-muted",
                children: y.intl.string(y.t["0FM4i+"])
            }), (0, r.jsx)("div", {
                className: A.BM,
                children: u.map(e => {
                    var t;
                    let n = null != (t = (0, o.gU)(e)) ? t : a.N$i;
                    return (0, r.jsx)("div", {
                        className: A.N5,
                        children: (0, r.jsxs)(a.Text, {
                            className: A.Ix,
                            variant: "text-xs/normal",
                            color: "interactive-text-active",
                            children: [(0, r.jsx)(n, {
                                size: "xxs",
                                color: "currentColor"
                            }), e.name]
                        })
                    }, e.id)
                })
            }), (0, r.jsx)("div", {
                className: A.fg,
                children: h > 0 ? (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(a.EpV, {
                        size: "xs",
                        color: "currentColor"
                    }), (0, r.jsx)(a.Text, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: y.intl.format(y.t.sX8890, {
                            numChannels: h
                        })
                    })]
                }) : (0, r.jsx)(a.Text, {
                    variant: "text-xs/normal",
                    color: "text-muted",
                    children: y.intl.string(y.t.o4s29v)
                })
            })]
        }) : null]
    })
}

function N(e) {
    let {
        saveOnClose: t
    } = e, n = (0, l.bG)([u.A], () => u.A.getGuild());
    return null == n ? null : (0, r.jsx)(S, {
        guild: n,
        saveOnClose: t
    })
}

function S(e) {
    let {
        guild: t,
        saveOnClose: n
    } = e, s = (0, l.bG)([c.A], () => c.A.isLoading()), o = (0, l.bG)([b.A], () => b.A.editedOnboardingPrompts), d = (0, l.bG)([b.A], () => b.A.advancedMode), u = i.useRef(!1);
    i.useEffect(() => {
        s || u.current || (u.current = !0, d || 0 !== o.length || (0, h.WC)(t, [(0, v.Mc)()], !1))
    });
    let g = i.useRef(t);
    if (i.useEffect(() => {
            g.current = t
        }), i.useEffect(() => {
            if (n) return () => {
                let e = g.current;
                null != e && (0, h.dm)(e, {
                    ignoreDefaultPrompt: !0
                }).then(() => (0, p.fH)(e.id)).catch(() => {})
            }
        }, [n]), null == t) return null;
    let f = async () => {
        try {
            await (0, h.dm)(t), await (0, m.X$)(t.id)
        } catch (e) {}
    };
    return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(a.Heading, {
            className: A.wx,
            variant: "heading-lg/extrabold",
            children: d ? y.intl.string(y.t.AGjtFv) : y.intl.string(y.t.dqCzoT)
        }), (0, r.jsx)(a.Text, {
            variant: "text-sm/normal",
            color: "text-default",
            children: y.intl.string(y.t["q/6MLL"])
        }), (0, r.jsxs)("div", {
            className: A.yJ,
            children: [(0, r.jsx)(a.MzZ, {
                target: "_blank",
                href: O.X7G.GUILD_ONBOARDING_EXAMPLES,
                children: (0, r.jsx)(a.Text, {
                    variant: "text-sm/medium",
                    color: "text-link",
                    children: y.intl.string(y.t.Ok55Kh)
                })
            }), (0, r.jsx)("div", {
                className: A.Om
            }), (0, r.jsx)(a.MzZ, {
                onClick: f,
                children: (0, r.jsx)(a.Text, {
                    variant: "text-sm/medium",
                    color: "text-link",
                    children: y.intl.string(y.t["6gsjdM"])
                })
            }), (0, r.jsx)("div", {
                className: A.Om
            }), (0, r.jsx)(x.mU, {
                guildId: t.id
            })]
        }), (0, r.jsx)(E, {
            guildId: t.id,
            prompts: o
        }), n && (0, r.jsx)(j.A, {
            guildId: t.id
        }), (0, r.jsx)("div", {
            className: A.E3,
            children: s ? (0, r.jsx)(a.y$y, {}) : (0, r.jsx)(_.A, {
                postjoinOnly: d,
                guildId: t.id
            })
        })]
    })
}

function I() {
    let e = (0, l.bG)([u.A], () => u.A.getGuild()),
        t = (0, l.bG)([b.A], () => b.A.submitting),
        n = (0, l.bG)([f.A], () => f.A.isSubmitting()),
        i = (0, l.bG)([f.A], () => f.A.hasChanges());
    return null == e ? null : (0, r.jsx)(s.A, {
        onSave: async () => {
            try {
                await (0, h.dm)(e), i && await (0, p.q3)(e.id)
            } catch (e) {}
        },
        onReset: () => {
            (0, h.P3)(), i && (0, p.p2)()
        },
        submitting: t || i && n,
        onSaveText: y.intl.string(y.t["R3BPH+"])
    })
}