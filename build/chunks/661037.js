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
    A = i(720619),
    C = i(985018),
    b = i(678930);

function h(e) {
    let {
        className: t,
        guildId: i,
        onChange: l,
        isGuildIncluded: a
    } = e, {
        options: s
    } = (0, A.A)({
        isGuildIncluded: a
    });
    return (0, n.jsx)("div", {
        className: t,
        children: (0, n.jsx)(d.ZiE, {
            onSelectionChange: l,
            value: i,
            options: s,
            placeholder: C.intl.string(C.t.etZ9tX),
            selectionMode: "single"
        })
    })
}

function m(e) {
    let {
        transitionState: t,
        onClose: i,
        feature: a,
        section: A,
        subsection: C
    } = e, m = (0, o.GV)(), {
        canCreateGuild: v,
        createGuildCta: x,
        createGuildDescription: E,
        selectGuildCta: _,
        title: I,
        description: M,
        isGuildSupported: F
    } = (0, S.q)(a), [N, j] = l.useState(), [O, T] = l.useState(!1), R = async () => {
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
        }), p.A.open(e, A, void 0, C), i?.()
    };
    return (0, n.jsxs)(d.EOs, {
        transitionState: t,
        "aria-labelledby": m,
        parentComponent: "GuildSettingsPickerModal",
        children: [(0, n.jsxs)(d.rQ0, {
            className: b.Hc,
            separator: !1,
            children: [(0, n.jsx)(d.Heading, {
                id: m,
                variant: "heading-lg/medium",
                children: I
            }), (0, n.jsx)(d.s_y, {
                onClick: i
            })]
        }), (0, n.jsxs)(d.$mQ, {
            className: b.jE,
            children: [(0, n.jsxs)(d.BJc, {
                direction: "vertical",
                gap: 8,
                children: [(0, n.jsx)(d.Text, {
                    variant: "text-md/medium",
                    children: M
                }), (0, n.jsxs)("div", {
                    className: b.ce,
                    children: [(0, n.jsx)("div", {
                        className: b.oN,
                        children: (0, n.jsx)(h, {
                            guildId: N,
                            onChange: j,
                            isGuildIncluded: F
                        })
                    }), (0, n.jsx)(d.Button, {
                        variant: "primary",
                        text: _,
                        onClick: () => {
                            s()(null != N, "Guild ID must not be null on click"), G.A.hasSeenCreatorOnboardingForGuild(N) || (0, c.G)(N), p.A.open(N, A, void 0, C), i?.()
                        },
                        disabled: null == N
                    })]
                })]
            }), v && (0, n.jsxs)(d.BJc, {
                direction: "vertical",
                gap: 8,
                children: [(0, n.jsx)(d.Text, {
                    variant: "text-md/medium",
                    children: E
                }), (0, n.jsx)(r.$n, {
                    onClick: R,
                    submitting: O,
                    className: b.qo,
                    children: x
                })]
            })]
        })]
    })
}