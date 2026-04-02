/** chunk id: 292103 params = (module,exports,require) **/
n.d(t, {
    Ay: () => _,
    S_: () => b,
    zo: () => S
});
var i = n(627968);
n(64700);
var l = n(311907),
    a = n(554146),
    r = n(397927),
    s = n(964486),
    o = n(865116),
    d = n(932001),
    c = n(928658),
    u = n(400528),
    g = n(376708),
    A = n(715757),
    m = n(967198),
    p = n(287809),
    h = n(628691),
    f = n(49999),
    y = n(985018),
    E = n(733045);

function _(e) {
    let t = (0, l.bG)([m.A], () => m.A.getGuildId()),
        n = (0, A.Qo)(t);
    return (0, h.ul)(e) ? (0, i.jsx)(r.Drp, {
        id: "report",
        label: n ? y.intl.string(y.t.n5EBAJ) : y.intl.string(y.t.GwbdGe),
        action: () => (0, c.V2)(e, "web_message_context_menu"),
        icon: n ? r.pVd : r.iFK,
        leadingAccessory: {
            type: "icon",
            icon: n ? r.pVd : r.iFK
        },
        color: "danger"
    }) : null
}

function S(e) {
    let t = (0, l.bG)([u.A], () => u.A.hasReportedMessage(e.channel_id, e.id)),
        n = (0, g.KB)(e),
        o = n ? [a.M.REPORT_TO_MOD_NEW_TAG] : [],
        [A, m] = (0, d.kn)(o);
    return ((0, s.l0)(() => {
        n && m(f.i.AUTO_DISMISS)
    }), n) ? (0, i.jsx)(r.Drp, {
        id: "report-to-mod",
        label: t ? y.intl.string(E.default["8wsdng"]) : y.intl.string(E.default["1D+vqy"]),
        action: () => {
            m(f.i.USER_DISMISS), (0, c.dy)(e)
        },
        icon: r.iFK,
        disabled: t,
        leadingAccessory: {
            type: "icon",
            icon: r.iFK
        },
        badge: A === a.M.REPORT_TO_MOD_NEW_TAG ? "new" : void 0,
        color: "danger"
    }) : null
}

function b(e) {
    let t = (0, l.bG)([o.Ay], () => o.Ay.get("iar_testing")),
        n = (0, l.bG)([p.default], () => p.default.getCurrentUser());
    return (0, h.ul)(e) && null != n && n.isStaff() && t ? (0, i.jsx)(r.Drp, {
        id: "staff-test-message-report",
        label: "[STAFF] Test Message Report",
        action: () => (0, c.Rj)(e, "web_message_context_menu"),
        icon: r.iFK,
        leadingAccessory: {
            type: "icon",
            icon: r.iFK
        },
        color: "danger"
    }) : null
}