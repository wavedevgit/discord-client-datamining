/** chunk id: 311243 params = (module,exports,require) **/
n.d(t, {
    A: () => m
});
var l = n(627968);
n(64700);
var s = n(503698),
    i = n.n(s),
    a = n(397927),
    r = n(714510),
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
        location: _,
        sourceQuestContent: N,
        gameProfileSource: f
    } = e, T = (0, r.mU)({
        quest: s,
        taskDetails: E,
        location: _,
        questContent: m,
        sourceQuestContent: N,
        gameProfileSource: f
    }), p = (0, o.SD)(s), h = (0, o.Oq)(), S = p && h;
    return (0, l.jsxs)("div", {
        className: i()(A.iE, t),
        children: [(0, l.jsx)(u.A, {
            visible: S
        }), (0, l.jsx)(d.A, {
            autoplay: n,
            className: A.Qq,
            quest: s,
            questContent: m,
            sourceQuestContent: N
        }), (0, l.jsx)("div", {
            className: A.C,
            children: (0, l.jsxs)("div", {
                className: A.P2,
                children: [(0, l.jsx)(a.Text, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: T
                }), p && (0, l.jsx)(c.e, {
                    questId: s.id,
                    canUseQuestOrbMultiplier: h
                })]
            })
        })]
    })
}