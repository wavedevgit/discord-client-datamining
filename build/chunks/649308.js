/** chunk id: 649308 params = (module,exports,require) **/
n.d(e, {
    A: () => b
});
var i = n(627968),
    r = n(397927),
    a = n(72152),
    c = n(976860),
    d = n(967198),
    o = n(422258),
    l = n(93055),
    s = n(5180),
    u = n(652215),
    p = n(665606),
    j = n(985018);

function b() {
    let {
        hasAccess: t
    } = (0, l.TW)("useHideServerItem");
    return (0, i.jsx)(r.Drp, {
        id: "hide-favorites",
        label: t ? j.intl.string(p.default["8FO0y9"]) : j.intl.string(j.t.ojM1xJ),
        subtext: t ? j.intl.string(p.default.FaHxWl) : void 0,
        color: t ? "danger" : "default",
        action: function() {
            (0, a.Z)(!1), t && (0, o.tV)(!1), (0, s.ai)(d.A.getGuildId()) && (0, c.pX)(u.BVt.ME)
        }
    })
}