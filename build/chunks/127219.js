/** chunk id: 127219 params = (module,exports,require) **/
n.d(t, {
    l: () => c,
    o: () => d
});
var i, a = n(627968);
n(64700);
var l = n(341915),
    s = n(665816),
    r = n(654487),
    o = n(985018),
    d = ((i = {}).NOT_FOUND = "not_found", i.MOBILE_ONLY = "mobile_only", i);

function c(e) {
    let {
        questId: t,
        reason: n = "not_found"
    } = e;
    return (0, a.jsx)(s.i, {
        questId: t,
        fallbackReason: r.eA.UNKNOWN_QUEST,
        bodyText: o.intl.string("mobile_only" === n ? o.t.Pag1gS : o.t.c9275Z),
        questContent: l.uF.INVALID_QUEST_EMBED
    })
}