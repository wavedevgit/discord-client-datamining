/** chunk id: 661037, original params: e,t,i (module,exports,require) **/
i.d(t, {
    default: () => h
}), i(228524), i(896048);
var n = i(627968),
    l = i(64700),
    r = i(284009),
    a = i.n(r),
    s = i(421380),
    d = i(397927),
    o = i(915089),
    u = i(272613),
    c = i(544199),
    p = i(448564),
    G = i(997509),
    g = i(71393),
    b = i(751394),
    S = i(720619),
    A = i(985018),
    m = i(857161);

function C(e) {
    let {
        className: t,
        guildId: i,
        onChange: l,
        isGuildIncluded: r
    } = e, {
        options: a
    } = (0, S.A)({
        isGuildIncluded: r
    });
    return (0, n.jsx)("div", {
        className: t,
        children: (0, n.jsx)(d.ZiE, {
            onSelectionChange: l,
            value: i,
            options: a,
            placeholder: A.intl.string(A.t.etZ9tX),
            selectionMode: "single"
        })
    })
}

function h(e) {
    let {
        transitionState: t,
        onClose: i,
        feature: r,
        section: S,
        subsection: A
    } = e, h = (0, o.GV)(), {
        canCreateGuild: v,
        createGuildCta: E,
        createGuildDescription: O,
        selectGuildCta: f,
        title: x,
        description: M,
        isGuildSupported: j
    } = (0, b.q)(r), [_, I] = l.useState(), [y, F] = l.useState(!1), N = async () => {
        F(!0);
        let e = await new Promise(e => {
            u.A.openCreateGuildModal({
                onSuccess: e
            })
        });
        await new Promise(t => {
            g.A.addChangeListener(function i() {
                null != g.A.getGuild(e) && (g.A.removeChangeListener(i), t())
            })
        }), G.A.open(e, S, void 0, A), null == i || i()
    };
    return (0, n.jsxs)(d.EOs, {
        transitionState: t,
        "aria-labelledby": h,
        parentComponent: "GuildSettingsPickerModal",
        children: [(0, n.jsxs)(d.rQ0, {
            className: m.Hc,
            separator: !1,
            children: [(0, n.jsx)(d.Heading, {
                id: h,
                variant: "heading-lg/medium",
                children: x
            }), (0, n.jsx)(d.s_y, {
                onClick: i
            })]
        }), (0, n.jsxs)(d.$mQ, {
            className: m.jE,
            children: [(0, n.jsxs)(d.BJc, {
                direction: "vertical",
                gap: 8,
                children: [(0, n.jsx)(d.Text, {
                    variant: "text-md/medium",
                    children: M
                }), (0, n.jsxs)("div", {
                    className: m.ce,
                    children: [(0, n.jsx)("div", {
                        className: m.oN,
                        children: (0, n.jsx)(C, {
                            guildId: _,
                            onChange: I,
                            isGuildIncluded: j
                        })
                    }), (0, n.jsx)(d.Button, {
                        variant: "primary",
                        text: f,
                        onClick: () => {
                            a()(null != _, "Guild ID must not be null on click"), p.A.hasSeenCreatorOnboardingForGuild(_) || (0, c.G)(_), G.A.open(_, S, void 0, A), null == i || i()
                        },
                        disabled: null == _
                    })]
                })]
            }), v && (0, n.jsxs)(d.BJc, {
                direction: "vertical",
                gap: 8,
                children: [(0, n.jsx)(d.Text, {
                    variant: "text-md/medium",
                    children: O
                }), (0, n.jsx)(s.$n, {
                    onClick: N,
                    submitting: y,
                    className: m.qo,
                    children: E
                })]
            })]
        })]
    })
}