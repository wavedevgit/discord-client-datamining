/** Chunk was on 7869 **/
/** chunk id: 675623, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => y
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

function y(e) {
    let {
        guildEventId: t,
        guildId: n,
        recurrenceId: y
    } = e, f = (0, r.bG)([u.A], () => u.A.isLurking(n), [n]), b = (0, r.bG)([o.default], () => o.default.getId()), {
        rsvped: p,
        baseRsvp: A,
        recurrenceRsvp: v
    } = (0, r.cf)([a.Ay], () => ({
        rsvped: a.Ay.isInterestedInEventRecurrence(t, y),
        baseRsvp: a.Ay.getRsvp(t, null, b),
        recurrenceRsvp: a.Ay.getRsvp(t, y, b)
    }), [y, t, b]), E = (0, s.A)(y, t);
    if (f || (null == E ? void 0 : E.is_canceled)) return null;
    let O = function() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            l = (null == A ? void 0 : A.response) === d.Qi.INTERESTED ? d.Qi.UNINTERESTED : d.Qi.INTERESTED,
            r = e ? null : y;
        c.A.updateRsvp(t, r, n, l)
    };
    return (0, l.jsxs)(i.Drp, {
        id: p ? g.intl.string(g.t["7M5gaN"]) : g.intl.string(g.t.FXixvH),
        label: p ? g.intl.string(g.t["7M5gaN"]) : g.intl.string(g.t.FXixvH),
        action: void 0,
        children: [(0, l.jsx)(i.Drp, {
            id: g.intl.string(g.t.lwZCFT),
            label: g.intl.string(g.t.lwZCFT),
            action: () => O(!1)
        }), (0, l.jsx)(i.Drp, {
            id: g.intl.string(g.t.uoorxi),
            label: g.intl.string(g.t.uoorxi),
            action: () => O(!0),
            disabled: null != v
        })]
    })
}