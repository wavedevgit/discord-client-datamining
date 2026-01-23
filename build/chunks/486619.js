/** Chunk was on 47841 **/
/** chunk id: 486619, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    G: () => u
});
var r = n(627968),
    i = n(397927),
    l = n(529942),
    s = n(209700),
    a = n(997509),
    o = n(652215),
    c = n(985018),
    d = n(51527);

function u(e) {
    let {
        guildId: t,
        role: n
    } = e;
    return (0, r.jsx)("div", {
        className: d.k,
        children: (0, r.jsx)(i.D0$, {
            label: c.intl.string(c.t.arFPfJ),
            description: c.intl.string(c.t["IT/0AI"]),
            children: (0, r.jsx)(i.Button, {
                size: "sm",
                variant: "secondary",
                onClick: () => {
                    a.A.close(), (0, l.Tk)(t, {
                        type: s._.ROLES,
                        roles: {
                            [n.id]: n
                        },
                        returnToSection: o.BEX.ROLES
                    })
                },
                text: c.intl.string(c.t.arFPfJ),
                icon: i.KS6,
                iconPosition: "end"
            })
        })
    })
}