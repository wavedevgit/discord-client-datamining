/** chunk id: 980545, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => C
});
var i = n(627968),
    s = n(64700),
    a = n(503698),
    l = n.n(a),
    r = n(835245),
    o = n(582754),
    c = n(397927),
    d = n(736653),
    u = n(12901),
    _ = n(954571),
    m = n(341915),
    A = n(590202),
    g = n(545986),
    h = n(652215),
    x = n(985018),
    p = n(165055),
    E = n(641701);

function C(e) {
    let {
        inOldSettings: t = !1
    } = e, n = (0, o.Mw)((0, d.Ay)()), a = s.useMemo(() => ({
        backgroundImage: "url(https://cdn.discordapp.com/assets/discovery/quests-wumpus-hikes-mountain-transparent-background.png)"
    }), []), C = s.useCallback(() => {
        (0, u.default)(), (0, g.navigateToQuestHome)({
            fromContent: m.uF.QUEST_HOME_MOVE_CALLOUT
        }), _.default.track(h.HAw.QUEST_CONTENT_CLICKED, {
            cta_name: A.Cy.VIEW_QUESTS,
            click_id: (0, r.A)(),
            is_targeted: !1,
            ...(0, A.fF)(m.uF.QUEST_HOME_MOVE_CALLOUT)
        })
    }, []);
    return (0, i.jsx)("div", {
        className: l()(p.kL, {
            [p.Zd]: t
        }),
        style: a,
        children: (0, i.jsxs)(c.BJc, {
            className: p.FS,
            justify: "space-between",
            children: [(0, i.jsxs)(c.BJc, {
                gap: 4,
                children: [(0, i.jsxs)("div", {
                    className: p.N1,
                    children: [(0, i.jsx)("img", {
                        alt: "",
                        src: E,
                        className: p.Kk
                    }), (0, i.jsx)(c.Heading, {
                        variant: "heading-lg/bold",
                        color: "always-white",
                        children: x.intl.string(x.t.z8YP2A)
                    })]
                }), (0, i.jsx)(c.Text, {
                    variant: "text-md/medium",
                    color: "text-subtle",
                    children: x.intl.string(x.t.HdKh65)
                })]
            }), (0, i.jsx)(c.Button, {
                variant: n ? "primary" : "overlay-primary",
                text: x.intl.string(x.t.GURBQl),
                onClick: C
            })]
        })
    })
}