/** chunk id: 758023 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => A
});
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(417597),
    o = n(990078),
    d = n(397927),
    c = n(374084),
    u = n(913423),
    m = n(961350),
    g = n(199940),
    x = n(132514),
    h = n(817136),
    _ = n(985018),
    p = n(499323);
let A = function(e) {
    let {
        guildId: t
    } = e, l = (0, a.cf)([x.A], () => x.A.getSettings().welcomeMessage ?? h.p), A = s.useCallback(() => (0, d.mMO)(async () => {
        let {
            default: e
        } = await n.e("94194").then(n.bind(n, 930345));
        return n => (0, i.jsx)(e, {
            ...n,
            guildId: t,
            welcomeMessage: l,
            onSave: e => (0, g.hL)(e)
        })
    }), [t, l]), f = (0, a.bG)([m.default], () => m.default.getId());
    return (0, c.Fn)(l) ? (0, i.jsx)(d.Button, {
        variant: "primary",
        size: "sm",
        text: _.intl.string(_.t["9Z+aEP"]),
        onClick: A
    }) : (0, i.jsxs)(d.DUT, {
        className: p.ab,
        onClick: A,
        children: [(0, i.jsx)(u.A, {
            guildId: t,
            welcomeMessage: {
                authorIds: l.authorIds.length > 0 ? l.authorIds : [f],
                message: l.message
            }
        }), (0, i.jsx)(o.m, {
            text: _.intl.string(_.t.bt75uw),
            children: (0, i.jsxs)("div", {
                className: r()(p.Md, p.Tu),
                children: [(0, i.jsx)(d.R2l, {
                    size: "md",
                    color: "currentColor"
                }), (0, i.jsx)(d.AC4, {
                    children: _.intl.string(_.t.bt75uw)
                })]
            })
        })]
    })
}