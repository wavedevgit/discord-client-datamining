/** chunk id: 64460, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    J: () => f
}), n(321073), n(747238);
var r = n(181079),
    i = n(832275),
    a = n(976860),
    o = n(345942),
    s = n(734057),
    l = n(576705),
    c = n(967198),
    u = n(711014),
    d = n(652215);
let f = {
    binds: (() => {
        let e = 10,
            t = [];
        for (let n = 1; n < e; n++) t.push("mod+".concat(n));
        return t
    })(),
    comboKeysBindGlobal: !0,
    action(e, t) {
        let n, f = parseInt(t.split("+")[1], 10);
        if ((0 === f && (f = 10), !isNaN(f) && 0 !== f) && null != (n = 1 === f ? d.ME : (0, i.J)(r.A, s.A, l.A) ? 2 === f ? d.YYv : u.Ay.getFlattenedGuildIds()[f - 3] : u.Ay.getFlattenedGuildIds()[f - 2])) return n === d.ME && null == c.A.getGuildId() ? (0, a.pX)(d.BVt.CHANNEL(n)) : (0, o.u)(n), !1
    }
}