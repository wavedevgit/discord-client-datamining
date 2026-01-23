/** Chunk was on 84018 **/
/** chunk id: 266244, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => y
});
var i = n(627968),
    r = n(64700),
    s = n(311907),
    l = n(828100),
    o = n(355205),
    a = n(793322),
    c = n(366811),
    d = n(256415),
    u = n(9302),
    h = n(652215),
    p = n(985018),
    f = n(165386);
let g = () => (0, a.WU)("DM_SEARCH"),
    y = r.memo(function() {
        let e = (0, s.bG)([d.default], () => d.default.isLocked((0, u.getPID)()) ? "true" : "false"),
            t = (0, c.A)(e => {
                let {
                    channelId: t
                } = e;
                return t
            });
        return (0, i.jsxs)("div", {
            className: f.AB,
            children: [(0, i.jsx)("div", {
                className: f.ON,
                children: (0, i.jsx)("button", {
                    type: "button",
                    className: f.lU,
                    onClick: g,
                    children: p.intl.string(p.t.LzcpeZ)
                })
            }), (0, i.jsx)(l.A, {
                padding: 8,
                theme: h.NJ8.DARK,
                version: e,
                selectedChannelId: t
            }), (0, i.jsx)("section", {
                className: f.C3,
                "aria-label": p.intl.string(p.t.StREWK),
                children: (0, i.jsx)(o.A, {
                    guildId: null
                })
            })]
        })
    })