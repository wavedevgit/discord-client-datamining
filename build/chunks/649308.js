/** chunk id: 649308 params = (module,exports,require) **/
n.d(e, {
    A: () => j
});
var r = n(627968),
    i = n(397927),
    a = n(72152),
    c = n(976860),
    d = n(967198),
    o = n(422258),
    l = n(93055),
    s = n(652215),
    u = n(665606),
    p = n(985018);

function j() {
    let {
        hasAccess: t
    } = (0, l.TW)("useHideServerItem");
    return (0, r.jsx)(i.Drp, {
        id: "hide-favorites",
        label: t ? p.intl.string(u.default["8FO0y9"]) : p.intl.string(p.t.ojM1xJ),
        subtext: t ? p.intl.string(u.default.FaHxWl) : void 0,
        color: t ? "danger" : "default",
        action: function() {
            (0, a.Z)(!1), t && (0, o.tV)(!1), d.A.getGuildId() === s.YYv && (0, c.pX)(s.BVt.ME)
        }
    })
}