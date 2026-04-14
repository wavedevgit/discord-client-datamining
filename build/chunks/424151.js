/** chunk id: 424151 params = (module,exports,require) **/
n.d(t, {
    A: () => o
});
var i = n(627968),
    a = n(397927),
    l = n(92246),
    s = n(201805),
    r = n(985018);
let o = function(e) {
    let {
        quest: t,
        analyticsCtxQuestContent: n,
        analyticsCtxSourceQuestContent: o,
        analyticsCtxQuestContentPosition: d,
        analyticsCtxQuestContentRowIndex: c,
        size: u
    } = e, _ = (0, s.ix)({
        quest: t,
        questContent: n,
        questContentPosition: d,
        questContentRowIndex: c,
        sourceQuestContent: o
    }), m = (0, l.r7)(t.config) ? r.intl.string(r.t.bAGFz3) : r.intl.string(r.t.vTgCWx);
    return (0, i.jsx)(a.Button, {
        variant: "primary",
        fullWidth: !0,
        size: u,
        onClick: _,
        text: m
    })
}