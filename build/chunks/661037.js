/** chunk id: 661037 params = (module,exports,require) **/
i.d(t, {
    default: () => m
});
var n = i(627968),
    l = i(64700),
    a = i(284009),
    s = i.n(a),
    r = i(421380),
    d = i(397927),
    o = i(915089),
    u = i(272613),
    c = i(544199),
    G = i(448564),
    p = i(997509),
    g = i(71393),
    S = i(751394),
    C = i(720619),
    h = i(985018),
    A = i(876627);

function b(e) {
    let {
        className: t,
        guildId: i,
        onChange: l,
        isGuildIncluded: a
    } = e, {
        options: s
    } = (0, C.A)({
        isGuildIncluded: a
    });
    return (0, n.jsx)("div", {
        className: t,
        children: (0, n.jsx)(d.ZiE, {
            onSelectionChange: l,
            value: i,
            options: s,
            placeholder: h.intl.string(h.t.etZ9tX),
            selectionMode: "single"
        })
    })
}

function m(e) {
    let {
        transitionState: t,
        onClose: i,
        feature: a,
        section: C,
        subsection: h
    } = e, m = (0, o.GV)(), {
        canCreateGuild: x,
        createGuildCta: E,
        createGuildDescription: v,
        selectGuildCta: _,
        title: M,
        description: I,
        isGuildSupported: j
    } = (0, S.q)(a), [N, F] = l.useState(), [O, T] = l.useState(!1), R = async () => {
        T(!0);
        let e = await new Promise(e => {
            u.A.openCreateGuildModal({
                onSuccess: e
            })
        });
        await new Promise(t => {
            g.A.addChangeListener(function i() {
                null != g.A.getGuild(e) && (g.A.removeChangeListener(i), t())
            })
        }), p.A.open(e, C, void 0, h), i?.()
    };
    return (0, n.jsxs)(d.EOs, {
        transitionState: t,
        "aria-labelledby": m,
        parentComponent: "GuildSettingsPickerModal",
        children: [(0, n.jsxs)(d.rQ0, {
            className: A.Hc,
            separator: !1,
            children: [(0, n.jsx)(d.Heading, {
                id: m,
                variant: "heading-lg/medium",
                children: M
            }), (0, n.jsx)(d.s_y, {
                onClick: i
            })]
        }), (0, n.jsxs)(d.$mQ, {
            className: A.jE,
            children: [(0, n.jsxs)(d.BJc, {
                direction: "vertical",
                gap: 8,
                children: [(0, n.jsx)(d.Text, {
                    variant: "text-md/medium",
                    children: I
                }), (0, n.jsxs)("div", {
                    className: A.ce,
                    children: [(0, n.jsx)("div", {
                        className: A.oN,
                        children: (0, n.jsx)(b, {
                            guildId: N,
                            onChange: F,
                            isGuildIncluded: j
                        })
                    }), (0, n.jsx)(d.Button, {
                        variant: "primary",
                        text: _,
                        onClick: () => {
                            s()(null != N, "Guild ID must not be null on click"), G.A.hasSeenCreatorOnboardingForGuild(N) || (0, c.G)(N), p.A.open(N, C, void 0, h), i?.()
                        },
                        disabled: null == N
                    })]
                })]
            }), x && (0, n.jsxs)(d.BJc, {
                direction: "vertical",
                gap: 8,
                children: [(0, n.jsx)(d.Text, {
                    variant: "text-md/medium",
                    children: v
                }), (0, n.jsx)(r.$n, {
                    onClick: R,
                    submitting: O,
                    className: A.qo,
                    children: E
                })]
            })]
        })]
    })
}