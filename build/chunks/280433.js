/** chunk id: 280433, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => u
}), n(896048);
var r = n(627968);
n(64700);
var i = n(397927),
    l = n(306444),
    s = n(846922),
    a = n(922975),
    o = n(847419),
    c = n(277321),
    d = n(985018);

function u(e) {
    let {
        "aria-labelledby": t,
        disabled: n = !1
    } = e, {
        editStateId: u,
        guildId: g
    } = (0, l.O)(), [m, p] = a.W5(u, g);
    return (0, r.jsx)(i.z6M, {
        onChange: e => p(e),
        options: [{
            name: d.intl.string(d.t["vs2T+B"]),
            value: s.h.SOME_CHANNELS_ACCESS,
            leadingIcon: (0, i.kHD)(c.A)
        }, {
            name: d.intl.string(d.t.l4Tr7X),
            value: s.h.ALL_CHANNELS_ACCESS,
            leadingIcon: (0, i.kHD)(o.A)
        }],
        value: m,
        "aria-labelledby": t,
        disabled: n
    })
}