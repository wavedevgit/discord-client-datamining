/** chunk id: 667369, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    _: () => a
}), n(321073);
var i = n(370876),
    s = n(946116),
    l = n(985018);

function a(e, t) {
    if (t !== s.mU.ALL) return [{
        entries: (0, i._t)(e),
        appendEndCard: !0
    }];
    let n = [],
        a = (0, i.A3)(e),
        r = new Set(a.map(e => e.guildId));
    a.length > 0 && n.push({
        header: l.intl.string(l.t.CbaapP),
        entries: a,
        appendEndCard: !1
    });
    let o = e.filter(e => !r.has(e.guildId));
    return (o = (0, i.DN)(o)).length > 0 && n.push({
        header: l.intl.string(l.t.wxbhEe),
        entries: o,
        appendEndCard: !0
    }), n
}