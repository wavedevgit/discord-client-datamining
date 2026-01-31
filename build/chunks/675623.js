/** chunk id: 675623, original params: t,e,n (module,exports,require) **/
n.d(e, {
    A: () => E
});
var l = n(627968);
n(64700);
var r = n(311907),
    i = n(397927),
    u = n(857071),
    o = n(961350),
    a = n(698441),
    c = n(496092),
    s = n(722260),
    d = n(988794),
    g = n(985018);

function E(t) {
    let {
        guildEventId: e,
        guildId: n,
        recurrenceId: E
    } = t, f = (0, r.bG)([u.A], () => u.A.isLurking(n), [n]), A = (0, r.bG)([o.default], () => o.default.getId()), {
        rsvped: y,
        baseRsvp: p,
        recurrenceRsvp: b
    } = (0, r.cf)([a.Ay], () => ({
        rsvped: a.Ay.isInterestedInEventRecurrence(e, E),
        baseRsvp: a.Ay.getRsvp(e, null, A),
        recurrenceRsvp: a.Ay.getRsvp(e, E, A)
    }), [E, e, A]), v = (0, s.A)(E, e);
    if (f || (null == v ? void 0 : v.is_canceled)) return null;
    let O = function() {
        let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            l = (null == p ? void 0 : p.response) === d.Qi.INTERESTED ? d.Qi.UNINTERESTED : d.Qi.INTERESTED,
            r = t ? null : E;
        c.A.updateRsvp(e, r, n, l)
    };
    return (0, l.jsxs)(i.Drp, {
        id: y ? g.intl.string(g.t["7M5gaN"]) : g.intl.string(g.t.FXixvH),
        label: y ? g.intl.string(g.t["7M5gaN"]) : g.intl.string(g.t.FXixvH),
        action: void 0,
        children: [(0, l.jsx)(i.Drp, {
            id: g.intl.string(g.t.lwZCFT),
            label: g.intl.string(g.t.lwZCFT),
            action: () => O(!1)
        }), (0, l.jsx)(i.Drp, {
            id: g.intl.string(g.t.uoorxi),
            label: g.intl.string(g.t.uoorxi),
            action: () => O(!0),
            disabled: null != b
        })]
    })
}