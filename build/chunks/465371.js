/** chunk id: 465371 params = (module,exports,require) **/
r.d(e, {
    A: () => d
});
var i = r(627968);
r(64700);
var l = r(311907),
    t = r(397927),
    a = r(686956),
    s = r(824492),
    c = r(985018);

function d(n) {
    let e = (0, l.bG)([s.A], () => s.A.didAgree(n.id));
    return n.isSpoilerChannel() && e ? (0, i.jsx)(t.Drp, {
        id: "clear-spoiler-agree",
        label: c.intl.string(c.t.ix2UVZ),
        action: () => a.A.clearSpoilerAgree(n.id)
    }) : null
}