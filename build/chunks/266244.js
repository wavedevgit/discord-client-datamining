/** chunk id: 266244 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => A
});
var i = n(627968),
    s = n(64700),
    a = n(311907),
    l = n(828100),
    r = n(355205),
    o = n(793322),
    d = n(366811),
    c = n(256415),
    u = n(9302),
    h = n(652215),
    p = n(985018),
    f = n(358640);
let _ = () => (0, o.WU)("DM_SEARCH"),
    A = s.memo(function() {
        let e = (0, a.bG)([c.default], () => c.default.isLocked((0, u.getPID)()) ? "true" : "false"),
            t = (0, d.A)(e => {
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
                    onClick: _,
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
                children: (0, i.jsx)(r.A, {
                    guildId: null
                })
            })]
        })
    })