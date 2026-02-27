/** chunk id: 424912, original params: t,e,n (module,exports,require) **/
n.d(e, {
    A: () => u,
    D: () => L
});
var i = n(627968),
    a = n(64700),
    r = n(397927),
    l = n(686956),
    s = n(356343),
    d = n(235986),
    c = n(915089),
    o = n(287809),
    m = n(695184),
    p = n(943457),
    C = n(652215),
    g = n(985018),
    _ = n(550886);

function L(t) {
    let {
        guildTemplate: e,
        onClose: n,
        onBack: L,
        onHubGuildInfoSet: u,
        onGuildCreated: x,
        isSlideReady: T,
        hasFooter: E = !0,
        isCommunity: G = !1
    } = t, [I, b] = a.useState(m.A.getGuildNameSuggestion()), [D, h] = a.useState(null), [A, U] = a.useState(!1), [y, N] = a.useState(null), j = !!o.default.getCurrentUser()?.isStaff(), [v, S] = a.useState(j), M = (0, c.GV)(), f = a.useRef(null);
    a.useEffect(() => {
        T && f.current?.focus()
    }, [T]);
    let O = a.useCallback(async t => {
            if (t.preventDefault(), null != e) {
                U(!0), N(null);
                try {
                    if (null != u) u(I, D);
                    else {
                        let t = await p.A.createGuildFromTemplate(I, D, e, G, v);
                        l.A.transitionToGuildSync(t.id), x?.(t.id)
                    }
                } catch (t) {
                    N(t)
                }
                U(!1)
            }
        }, [e, u, I, D, G, v, x]),
        R = (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(r.Button, {
                variant: "primary",
                text: null != u ? g.intl.string(g.t.PDTjLN) : g.intl.string(g.t.CumH4u),
                onClick: O,
                disabled: 0 === I.length,
                loading: A
            }), (0, i.jsx)(r.QWc, {
                size: "sm",
                variant: "secondary",
                text: g.intl.string(g.t["13/7kX"]),
                onClick: L
            })]
        });
    return {
        content: (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsxs)(r.rQ0, {
                "data-migration-pending": !0,
                direction: d.A.Direction.VERTICAL,
                className: _.wx,
                separator: !1,
                children: [(0, i.jsx)(r.Heading, {
                    className: _.DD,
                    variant: "heading-xl/semibold",
                    children: g.intl.string(g.t["2H6Nij"])
                }), (0, i.jsx)(r.Text, {
                    className: _.VA,
                    color: "text-default",
                    variant: "text-md/normal",
                    children: g.intl.string(g.t.AAfVqR)
                }), null != n && (0, i.jsx)(r.s_y, {
                    "data-migration-pending": !0,
                    className: _.b,
                    onClick: n
                })]
            }), (0, i.jsxs)(r.$mQ, {
                "data-migration-pending": !0,
                className: _.iW,
                children: [(0, i.jsx)("div", {
                    className: _.T3,
                    children: (0, i.jsx)(s.A, {
                        icon: D,
                        onChange: h
                    })
                }), (0, i.jsx)("form", {
                    onSubmit: O,
                    children: (0, i.jsxs)(r.BJc, {
                        gap: 16,
                        children: [(0, i.jsx)(r.ksK, {
                            label: g.intl.string(g.t.dBih7e),
                            required: !0,
                            error: y?.getFirstFieldErrorMessage("name"),
                            value: I,
                            maxLength: 100,
                            onChange: b,
                            inputRef: f,
                            id: M
                        }), j && (0, i.jsx)(r.dOG, {
                            label: "Staff Only",
                            description: g.intl.string(g.t.edQ5va),
                            checked: v,
                            onChange: t => S(t)
                        }), (0, i.jsx)(r.Text, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: g.intl.format(g.t["2bprXx"], {
                                guidelinesURL: C.X7G.GUIDELINES
                            })
                        })]
                    })
                }), null == y || y.hasFieldErrors() ? null : (0, i.jsx)(r.Text, {
                    variant: "text-xs/normal",
                    color: "text-feedback-critical",
                    children: y.message
                })]
            }), E && (0, i.jsx)(r.jlY, {
                "data-migration-pending": !0,
                className: _.qr,
                children: R
            })]
        }),
        footer: R
    }
}

function u(t) {
    let {
        content: e
    } = L(t);
    return e
}