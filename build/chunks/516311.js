/** Chunk was on 78528 **/
/** chunk id: 516311, original params: e,t,n (module,exports,require) **/
n.d(t, {
    RQ: () => y,
    dA: () => _
});
var r = n(627968);
n(64700);
var l = n(284009),
    i = n.n(l),
    s = n(311907),
    a = n(397927);
n(313961), n(666328), n(734337), n(74329), n(956747);
var o = n(288104),
    c = n(661504),
    u = n(267102),
    d = n(769591),
    p = n(734057),
    h = n(576705),
    f = n(993838),
    g = n(233993),
    m = n(446600),
    b = n(418208);
n(806931);
var A = n(985018);

function y(e) {
    let t = (0, s.bG)([p.A], () => p.A.getChannel(e), [e]),
        n = (0, s.bG)([h.A], () => h.A.can(g.QY, t)),
        l = (0, b.zU)(),
        i = (0, s.bG)([m.A], () => m.A.getStageInstanceByChannel(e), [e]),
        o = (0, u.Us)();
    return (null == t ? void 0 : t.isGuildStageVoice()) && n && !l ? null != i ? (0, r.jsx)(a.Drp, {
        id: "edit-stage",
        label: A.intl.string(A.t["I+9bLx"]),
        action: () => {
            null != t && (0, f.tQ)(t, o)
        }
    }) : (0, r.jsx)(a.Drp, {
        id: "start-stage",
        label: A.intl.string(A.t.OYbHfv),
        action: () => {
            null != t && (0, f.tQ)(t, o)
        }
    }) : null
}

function _(e) {
    let t = (0, s.bG)([p.A], () => p.A.getChannel(e), [e]);
    i()(null != t, "useNotificationSettingsItem: channel cannot be undefined");
    let n = (0, d.os)("StageChannelCallOverflowMenu"),
        r = (0, c.Ay)(t),
        l = (0, o.A)(t);
    return n ? r : l
}