/** Chunk was on 97492 **/
/** chunk id: 667369, original params: e,t,n (module,exports,require) **/
n.d(t, {
    _: () => s
}), n(896048), n(321073);
var r = n(370876),
    l = n(946116),
    i = n(985018);

function s(e, t) {
    if (t !== l.mU.ALL) return [{
        entries: (0, r._t)(e),
        appendEndCard: !0
    }];
    let n = [],
        s = (0, r.A3)(e),
        a = new Set(s.map(e => e.guildId));
    s.length > 0 && n.push({
        header: i.intl.string(i.t.CbaapP),
        entries: s,
        appendEndCard: !1
    });
    let o = e.filter(e => !a.has(e.guildId));
    return (o = (0, r.DN)(o)).length > 0 && n.push({
        header: i.intl.string(i.t.wxbhEe),
        entries: o,
        appendEndCard: !0
    }), n
}