/** Chunk was on 39048 **/
/** chunk id: 989860, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    I: () => m
});
var r = n(627968),
    i = n(64700),
    l = n(582754),
    s = n(397927),
    a = n(736653),
    o = n(997509),
    c = n(985018),
    d = n(600854),
    u = n(347953),
    g = n(622327);

function m(e) {
    let {
        canManageGuild: t,
        premiumProgressBarEnabled: n
    } = e, m = (0, a.Ay)(), p = i.useCallback(e => {
        o.A.updateGuild({
            premiumProgressBarEnabled: e
        })
    }, []);
    return (0, r.jsxs)("div", {
        className: d.kL,
        children: [(0, r.jsx)("div", {
            className: d.fi,
            children: (0, r.jsx)(s.dOG, {
                label: c.intl.string(c.t.Dl4mJS),
                description: c.intl.string(c.t.xzHcod),
                checked: n,
                onChange: p,
                disabled: !t
            })
        }), (0, r.jsx)("div", {
            className: d.fi,
            children: (0, r.jsx)("img", {
                alt: c.intl.string(c.t.UOJp5a),
                src: (0, l.qB)(m) ? g : u,
                className: d.WI
            })
        })]
    })
}