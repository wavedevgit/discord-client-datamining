/** Chunk was on 86746 **/
/** chunk id: 424912, original params: t,e,n (module,exports,require) **/
n.d(e, {
    A: () => u,
    D: () => L
}), n(896048);
var i = n(627968),
    a = n(64700),
    l = n(397927),
    r = n(686956),
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
    var e;
    let {
        guildTemplate: n,
        onClose: L,
        onBack: u,
        onHubGuildInfoSet: x,
        onGuildCreated: T,
        isSlideReady: E,
        hasFooter: G = !0,
        isCommunity: I = !1
    } = t, [b, D] = a.useState(m.A.getGuildNameSuggestion()), [h, A] = a.useState(null), [U, y] = a.useState(!1), [v, N] = a.useState(null), j = !!(null == (e = o.default.getCurrentUser()) ? void 0 : e.isStaff()), [S, M] = a.useState(j), f = (0, c.GV)(), O = a.useRef(null);
    a.useEffect(() => {
        var t;
        E && (null == (t = O.current) || t.focus())
    }, [E]);
    let R = a.useCallback(async t => {
            if (t.preventDefault(), null != n) {
                y(!0), N(null);
                try {
                    if (null != x) x(b, h);
                    else {
                        let t = await p.A.createGuildFromTemplate(b, h, n, I, S);
                        r.A.transitionToGuildSync(t.id), null == T || T(t.id)
                    }
                } catch (t) {
                    N(t)
                }
                y(!1)
            }
        }, [n, x, b, h, I, S, T]),
        Y = (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(l.Button, {
                variant: "primary",
                text: null != x ? g.intl.string(g.t.PDTjLN) : g.intl.string(g.t.CumH4u),
                onClick: R,
                disabled: 0 === b.length,
                loading: U
            }), (0, i.jsx)(l.QWc, {
                size: "sm",
                variant: "secondary",
                text: g.intl.string(g.t["13/7kX"]),
                onClick: u
            })]
        });
    return {
        content: (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsxs)(l.rQ0, {
                "data-migration-pending": !0,
                direction: d.A.Direction.VERTICAL,
                className: _.wx,
                separator: !1,
                children: [(0, i.jsx)(l.Heading, {
                    className: _.DD,
                    variant: "heading-xl/semibold",
                    children: g.intl.string(g.t["2H6Nij"])
                }), (0, i.jsx)(l.Text, {
                    className: _.VA,
                    color: "text-default",
                    variant: "text-md/normal",
                    children: g.intl.string(g.t.AAfVqR)
                }), null != L && (0, i.jsx)(l.s_y, {
                    "data-migration-pending": !0,
                    className: _.b,
                    onClick: L
                })]
            }), (0, i.jsxs)(l.$mQ, {
                "data-migration-pending": !0,
                className: _.iW,
                children: [(0, i.jsx)("div", {
                    className: _.T3,
                    children: (0, i.jsx)(s.A, {
                        icon: h,
                        onChange: A
                    })
                }), (0, i.jsx)("form", {
                    onSubmit: R,
                    children: (0, i.jsxs)(l.BJc, {
                        gap: 16,
                        children: [(0, i.jsx)(l.ksK, {
                            label: g.intl.string(g.t.dBih7e),
                            required: !0,
                            error: null == v ? void 0 : v.getFirstFieldErrorMessage("name"),
                            value: b,
                            maxLength: 100,
                            onChange: D,
                            inputRef: O,
                            id: f
                        }), j && (0, i.jsx)(l.dOG, {
                            label: "Staff Only",
                            description: g.intl.string(g.t.edQ5va),
                            checked: S,
                            onChange: t => M(t)
                        }), (0, i.jsx)(l.Text, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: g.intl.format(g.t["2bprXx"], {
                                guidelinesURL: C.X7G.GUIDELINES
                            })
                        })]
                    })
                }), null == v || v.hasFieldErrors() ? null : (0, i.jsx)(l.Text, {
                    variant: "text-xs/normal",
                    color: "text-feedback-critical",
                    children: v.message
                })]
            }), G && (0, i.jsx)(l.jlY, {
                "data-migration-pending": !0,
                className: _.qr,
                children: Y
            })]
        }),
        footer: Y
    }
}

function u(t) {
    let {
        content: e
    } = L(t);
    return e
}