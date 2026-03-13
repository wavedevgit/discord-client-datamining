/** chunk id: 292103 params = (module,exports,require) **/
n.d(t, {
    Ay: () => S,
    S_: () => b,
    zo: () => _
});
var i = n(627968);
n(64700);
var l = n(311907),
    r = n(554146),
    a = n(397927),
    s = n(964486),
    o = n(865116),
    d = n(932001),
    c = n(928658),
    u = n(400528),
    g = n(376708),
    A = n(715757),
    m = n(967198),
    f = n(287809),
    p = n(628691),
    h = n(49999),
    y = n(985018),
    E = n(733045);

function S(e) {
    let t = (0, l.bG)([m.A], () => m.A.getGuildId()),
        n = (0, A.Qo)(t);
    return (0, p.ul)(e) ? (0, i.jsx)(a.Drp, {
        id: "report",
        label: n ? y.intl.string(y.t.n5EBAJ) : y.intl.string(y.t.GwbdGe),
        action: () => (0, c.V2)(e, "web_message_context_menu"),
        icon: n ? a.pVd : a.iFK,
        leadingAccessory: {
            type: "icon",
            icon: n ? a.pVd : a.iFK
        },
        color: "danger"
    }) : null
}

function _(e) {
    let t = (0, l.bG)([u.A], () => u.A.hasReportedMessage(e.channel_id, e.id)),
        n = (0, g.KB)(e),
        o = n ? [r.M.REPORT_TO_MOD_NEW_TAG] : [],
        [A, m] = (0, d.kn)(o);
    return ((0, s.l0)(() => {
        n && m(h.i.AUTO_DISMISS)
    }), n) ? (0, i.jsx)(a.Drp, {
        id: "report-to-mod",
        label: t ? y.intl.string(E.default["8wsdng"]) : y.intl.string(E.default["1D+vqy"]),
        action: () => {
            m(h.i.USER_DISMISS), (0, c.dy)(e)
        },
        icon: a.iFK,
        disabled: t,
        leadingAccessory: {
            type: "icon",
            icon: a.iFK
        },
        badge: A === r.M.REPORT_TO_MOD_NEW_TAG ? "new" : void 0,
        color: "danger"
    }) : null
}

function b(e) {
    let t = (0, l.bG)([o.Ay], () => o.Ay.get("iar_testing")),
        n = (0, l.bG)([f.default], () => f.default.getCurrentUser());
    return (0, p.ul)(e) && null != n && n.isStaff() && t ? (0, i.jsx)(a.Drp, {
        id: "staff-test-message-report",
        label: "[STAFF] Test Message Report",
        action: () => (0, c.Rj)(e, "web_message_context_menu"),
        icon: a.iFK,
        leadingAccessory: {
            type: "icon",
            icon: a.iFK
        },
        color: "danger"
    }) : null
}