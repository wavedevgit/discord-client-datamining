/** chunk id: 266244 params = (module,exports,require) **/
"use strict";
i.d(t, {
    A: () => m
});
var n = i(627968),
    s = i(64700),
    a = i(311907),
    l = i(828100),
    r = i(355205),
    o = i(793322),
    d = i(366811),
    c = i(256415),
    u = i(9302),
    h = i(652215),
    _ = i(985018),
    p = i(165386);
let f = () => (0, o.WU)("DM_SEARCH"),
    m = s.memo(function() {
        let e = (0, a.bG)([c.default], () => c.default.isLocked((0, u.getPID)()) ? "true" : "false"),
            t = (0, d.A)(e => {
                let {
                    channelId: t
                } = e;
                return t
            });
        return (0, n.jsxs)("div", {
            className: p.AB,
            children: [(0, n.jsx)("div", {
                className: p.ON,
                children: (0, n.jsx)("button", {
                    type: "button",
                    className: p.lU,
                    onClick: f,
                    children: _.intl.string(_.t.LzcpeZ)
                })
            }), (0, n.jsx)(l.A, {
                padding: 8,
                theme: h.NJ8.DARK,
                version: e,
                selectedChannelId: t
            }), (0, n.jsx)("section", {
                className: p.C3,
                "aria-label": _.intl.string(_.t.StREWK),
                children: (0, n.jsx)(r.A, {
                    guildId: null
                })
            })]
        })
    })