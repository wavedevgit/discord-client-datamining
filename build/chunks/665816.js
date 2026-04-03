/** chunk id: 665816 params = (module,exports,require) **/
n.d(t, {
    i: () => x
});
var i = n(627968);
n(64700);
var l = n(503698),
    r = n.n(l),
    s = n(835245),
    a = n(397927),
    o = n(954571),
    d = n(18437),
    c = n(590202),
    u = n(545986),
    m = n(394900),
    _ = n(652215),
    h = n(985018),
    p = n(254885),
    g = n(956324);

function A(e) {
    let {
        questId: t,
        questContent: n,
        fullWidth: l
    } = e;
    return (0, i.jsx)("div", {
        className: p.UD,
        children: (0, i.jsx)(a.Button, {
            fullWidth: l,
            variant: "primary",
            onClick: () => {
                (0, u.navigateToQuestHome)({
                    fromContent: n
                }), o.default.track(_.HAw.QUEST_CONTENT_CLICKED, {
                    quest_id: t,
                    click_id: (0, s.A)(),
                    cta_name: c.Cy.VIEW_QUESTS,
                    is_targeted: !1,
                    ...(0, c.fF)(n)
                })
            },
            text: h.intl.string(h.t.GURBQl)
        })
    })
}

function x(e) {
    let {
        questId: t,
        fallbackReason: n,
        bodyText: l,
        questContent: s
    } = e, {
        containerRef: o,
        size: c
    } = (0, m.L)();
    return (0, d.Ii)(n, t), (0, i.jsxs)("div", {
        ref: e => {
            o.current = e
        },
        className: r()(p.kL, {
            [p.U]: "lg" === c,
            [p.SP]: "lg" !== c
        }),
        children: [(0, i.jsxs)("div", {
            className: p.hQ,
            children: [(0, i.jsx)(a.Heading, {
                variant: "lg" === c ? "heading-xl/bold" : "heading-lg/bold",
                color: "text-strong",
                children: h.intl.string(h.t.vnP31W)
            }), (0, i.jsx)(a.Text, {
                variant: "lg" === c ? "text-sm/medium" : "text-xs/medium",
                color: "text-default",
                className: p.__invalid_mobileWebCopy,
                children: l
            }), (0, i.jsx)(A, {
                questId: t,
                questContent: s,
                fullWidth: "lg" !== c
            })]
        }), (0, i.jsx)("div", {
            className: p.Dg,
            children: (0, i.jsx)("img", {
                src: g,
                alt: "",
                className: p.Wg
            })
        })]
    })
}