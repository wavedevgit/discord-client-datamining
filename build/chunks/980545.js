/** chunk id: 980545 params = (module,exports,require) **/
n.d(t, {
    A: () => p
});
var i = n(627968),
    s = n(64700),
    l = n(835245),
    a = n(582754),
    r = n(397927),
    o = n(736653),
    d = n(12901),
    c = n(954571),
    u = n(341915),
    m = n(590202),
    g = n(545986),
    _ = n(652215),
    A = n(985018),
    x = n(144950),
    h = n(641701);

function p() {
    let e = (0, a.Mw)((0, o.Ay)()),
        t = s.useMemo(() => ({
            backgroundImage: "url(https://cdn.discordapp.com/assets/discovery/quests-wumpus-hikes-mountain-transparent-background.png)"
        }), []),
        n = s.useCallback(() => {
            (0, d.default)(), (0, g.navigateToQuestHome)({
                fromContent: u.uF.QUEST_HOME_MOVE_CALLOUT
            }), c.default.track(_.HAw.QUEST_CONTENT_CLICKED, {
                cta_name: m.Cy.VIEW_QUESTS,
                click_id: (0, l.A)(),
                is_targeted: !1,
                ...(0, m.fF)(u.uF.QUEST_HOME_MOVE_CALLOUT)
            })
        }, []);
    return (0, i.jsx)("div", {
        className: x.kL,
        style: t,
        children: (0, i.jsxs)(r.BJc, {
            className: x.FS,
            justify: "space-between",
            children: [(0, i.jsxs)(r.BJc, {
                gap: 4,
                children: [(0, i.jsxs)("div", {
                    className: x.N1,
                    children: [(0, i.jsx)("img", {
                        alt: "",
                        src: h,
                        className: x.Kk
                    }), (0, i.jsx)(r.Heading, {
                        variant: "heading-lg/bold",
                        color: "always-white",
                        children: A.intl.string(A.t.z8YP2A)
                    })]
                }), (0, i.jsx)(r.Text, {
                    variant: "text-md/medium",
                    color: "text-subtle",
                    children: A.intl.string(A.t.HdKh65)
                })]
            }), (0, i.jsx)(r.Button, {
                variant: e ? "primary" : "overlay-primary",
                text: A.intl.string(A.t.GURBQl),
                onClick: n
            })]
        })
    })
}