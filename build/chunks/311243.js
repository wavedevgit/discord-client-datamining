/** chunk id: 311243 params = (module,exports,require) **/
n.d(t, {
    A: () => m
});
var l = n(627968);
n(64700);
var s = n(503698),
    i = n.n(s),
    r = n(397927),
    a = n(714510),
    o = n(890687),
    u = n(895253),
    c = n(442734),
    d = n(646764),
    A = n(102810);
let m = function(e) {
    let {
        className: t,
        autoplay: n,
        quest: s,
        questContent: m,
        taskDetails: E,
        location: f,
        sourceQuestContent: _,
        gameProfileSource: N
    } = e, T = (0, a.mU)({
        quest: s,
        taskDetails: E,
        location: f,
        questContent: m,
        sourceQuestContent: _,
        gameProfileSource: N
    }), p = (0, o.SD)(s), g = (0, o.Oq)(), h = p && g;
    return (0, l.jsxs)("div", {
        className: i()(A.iE, t),
        children: [(0, l.jsx)(u.A, {
            visible: h
        }), (0, l.jsx)(d.A, {
            autoplay: n,
            className: A.Qq,
            quest: s,
            questContent: m,
            sourceQuestContent: _
        }), (0, l.jsx)("div", {
            className: A.C,
            children: (0, l.jsxs)("div", {
                className: A.P2,
                children: [(0, l.jsx)(r.Text, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: T
                }), p && (0, l.jsx)(c.e, {
                    questId: s.id,
                    canUseQuestOrbMultiplier: g
                })]
            })
        })]
    })
}