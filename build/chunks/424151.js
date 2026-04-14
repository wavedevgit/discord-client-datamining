/** chunk id: 424151 params = (module,exports,require) **/
n.d(t, {
    A: () => o
});
var i = n(627968),
    a = n(397927),
    l = n(92246),
    r = n(201805),
    s = n(985018);
let o = function(e) {
    let {
        quest: t,
        analyticsCtxQuestContent: n,
        analyticsCtxSourceQuestContent: o,
        analyticsCtxQuestContentPosition: d,
        analyticsCtxQuestContentRowIndex: c,
        size: u
    } = e, _ = (0, r.ix)({
        quest: t,
        questContent: n,
        questContentPosition: d,
        questContentRowIndex: c,
        sourceQuestContent: o
    }), m = (0, l.r7)(t.config) ? s.intl.string(s.t.bAGFz3) : s.intl.string(s.t.vTgCWx);
    return (0, i.jsx)(a.Button, {
        variant: "primary",
        fullWidth: !0,
        size: u,
        onClick: _,
        text: m
    })
}