/** chunk id: 649308 params = (module,exports,require) **/
n.d(t, {
    A: () => b
});
var r = n(627968),
    i = n(397927),
    a = n(72152),
    c = n(976860),
    o = n(967198),
    d = n(422258),
    s = n(93055),
    l = n(5180),
    u = n(652215),
    p = n(335993),
    j = n(985018);

function b() {
    let {
        hasAccess: e
    } = (0, s.TW)("useHideServerItem");
    return (0, r.jsx)(i.Drp, {
        id: "hide-favorites",
        label: e ? j.intl.string(p.default["8FO0y9"]) : j.intl.string(j.t.ojM1xJ),
        subtext: e ? j.intl.string(p.default.FaHxWl) : void 0,
        color: e ? "danger" : "default",
        action: function() {
            (0, a.Z)(!1), e && (0, d.tV)(!1, "server_context_menu"), (0, l.ai)(o.A.getGuildId()) && (0, c.pX)(u.BVt.ME)
        }
    })
}