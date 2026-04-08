/** chunk id: 424151 params = (module,exports,require) **/
n.d(t, {
    A: () => o
});
var i = n(627968),
    l = n(397927),
    s = n(92246),
    r = n(201805),
    a = n(985018);
let o = function(e) {
    let {
        quest: t,
        analyticsCtxQuestContent: n,
        analyticsCtxSourceQuestContent: o,
        analyticsCtxQuestContentPosition: d,
        analyticsCtxQuestContentRowIndex: c,
        size: u
    } = e, m = (0, r.ix)({
        quest: t,
        questContent: n,
        questContentPosition: d,
        questContentRowIndex: c,
        sourceQuestContent: o
    }), _ = (0, s.r7)(t.config) ? a.intl.string(a.t.bAGFz3) : a.intl.string(a.t.vTgCWx);
    return (0, i.jsx)(l.Button, {
        variant: "primary",
        fullWidth: !0,
        size: u,
        onClick: m,
        text: _
    })
}