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
    _ = n(341915),
    g = n(590202),
    A = n(545986),
    x = n(652215),
    p = n(985018),
    h = n(608821),
    f = n(641701);

function T(e) {
    let {
        inOldSettings: t = !1
    } = e, n = (0, o.Mw)((0, c.Ay)()), l = s.useMemo(() => ({
        backgroundImage: "url(https://cdn.discordapp.com/assets/discovery/quests-wumpus-hikes-mountain-transparent-background.png)"
    }), []), T = s.useCallback(() => {
        (0, u.default)(), (0, A.navigateToQuestHome)({
            fromContent: _.uF.QUEST_HOME_MOVE_CALLOUT
        }), m.default.track(x.HAw.QUEST_CONTENT_CLICKED, {
            cta_name: g.Cy.VIEW_QUESTS,
            click_id: (0, r.A)(),
            is_targeted: !1,
            ...(0, g.fF)(_.uF.QUEST_HOME_MOVE_CALLOUT)
        })
    }, []);
    return (0, i.jsx)("div", {
        className: a()(h.kL, {
            [h.Zd]: t
        }),
        style: l,
        children: (0, i.jsxs)(d.BJc, {
            className: h.FS,
            justify: "space-between",
            children: [(0, i.jsxs)(d.BJc, {
                gap: 4,
                children: [(0, i.jsxs)("div", {
                    className: h.N1,
                    children: [(0, i.jsx)("img", {
                        alt: "",
                        src: f,
                        className: h.Kk
                    }), (0, i.jsx)(d.Heading, {
                        variant: "heading-lg/bold",
                        color: "always-white",
                        children: p.intl.string(p.t.z8YP2A)
                    })]
                }), (0, i.jsx)(d.Text, {
                    variant: "text-md/medium",
                    color: "text-subtle",
                    children: p.intl.string(p.t.HdKh65)
                })]
            }), (0, i.jsx)(d.Button, {
                variant: n ? "primary" : "overlay-primary",
                text: p.intl.string(p.t.GURBQl),
                onClick: T
            })]
        })
    })
}