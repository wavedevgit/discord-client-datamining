/** chunk id: 980545 params = (module,exports,require) **/
n.d(t, {
    A: () => T
});
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(835245),
    o = n(582754),
    d = n(397927),
    c = n(736653),
    u = n(12901),
    m = n(954571),
    g = n(341915),
    _ = n(590202),
    x = n(545986),
    A = n(652215),
    h = n(985018),
    p = n(608821),
    f = n(641701);

function T(e) {
    let {
        inOldSettings: t = !1
    } = e, n = (0, o.Mw)((0, c.Ay)()), l = s.useMemo(() => ({
        backgroundImage: "url(https://cdn.discordapp.com/assets/discovery/quests-wumpus-hikes-mountain-transparent-background.png)"
    }), []), T = s.useCallback(() => {
        (0, u.default)(), (0, x.navigateToQuestHome)({
            fromContent: g.uF.QUEST_HOME_MOVE_CALLOUT
        }), m.default.track(A.HAw.QUEST_CONTENT_CLICKED, {
            cta_name: _.Cy.VIEW_QUESTS,
            click_id: (0, r.A)(),
            is_targeted: !1,
            ...(0, _.fF)(g.uF.QUEST_HOME_MOVE_CALLOUT)
        })
    }, []);
    return (0, i.jsx)("div", {
        className: a()(p.kL, {
            [p.Zd]: t
        }),
        style: l,
        children: (0, i.jsxs)(d.BJc, {
            className: p.FS,
            justify: "space-between",
            children: [(0, i.jsxs)(d.BJc, {
                gap: 4,
                children: [(0, i.jsxs)("div", {
                    className: p.N1,
                    children: [(0, i.jsx)("img", {
                        alt: "",
                        src: f,
                        className: p.Kk
                    }), (0, i.jsx)(d.Heading, {
                        variant: "heading-lg/bold",
                        color: "always-white",
                        children: h.intl.string(h.t.z8YP2A)
                    })]
                }), (0, i.jsx)(d.Text, {
                    variant: "text-md/medium",
                    color: "text-subtle",
                    children: h.intl.string(h.t.HdKh65)
                })]
            }), (0, i.jsx)(d.Button, {
                variant: n ? "primary" : "overlay-primary",
                text: h.intl.string(h.t.GURBQl),
                onClick: T
            })]
        })
    })
}