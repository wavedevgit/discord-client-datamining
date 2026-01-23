/** Chunk was on 7869 **/
/** chunk id: 247191, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => _
}), n(228524), n(747238);
var l = n(627968);
n(64700);
var r = n(931773),
    i = n.n(r),
    u = n(989349),
    o = n.n(u),
    a = n(492462),
    c = n(311907),
    s = n(397927),
    d = n(77729),
    g = n(451909),
    y = n(71393),
    f = n(723702),
    b = n(698441),
    p = n(563312),
    A = n(794782),
    v = n(974930),
    E = n(988794),
    O = n(652215),
    m = n(985018);
let j = "YYYYMMDDTHHmmss",
    h = "YYYY-MM-DDTHH:mm:ss",
    D = /RRULE:.*/;

function _(e, t, n, r) {
    var u, _, w;
    let N, G = (0, c.bG)([b.Ay], () => b.Ay.isActive(e)),
        S = (0, p.nh)(null != e ? e : "", r),
        P = (0, c.bG)([b.Ay], () => b.Ay.getGuildScheduledEvent(e), [e]),
        x = (0, c.bG)([y.A], () => y.A.getGuild(t), [t]);
    if (G || null == S || null == P) return null;
    N = P.entity_type === E.Ps.EXTERNAL ? P.entity_metadata.location : null != n && null != x ? m.intl.formatToPlainString(m.t["2t8L04"], {
        channelName: n.name,
        guildName: x.name
    }) : m.intl.string(m.t.VSgOVg);
    let T = o()(P.scheduled_start_time),
        C = null != P.scheduled_end_time ? o()(P.scheduled_end_time) : T,
        I = null != P.description && "" !== P.description ? g.Ay.unparse(P.description, null != (u = null == n ? void 0 : n.id) ? u : O.dJq, !0) : "",
        L = (0, A.Sn)(P.recurrence_rule),
        U = null != L ? (0, v.X7)(L) : null,
        {
            startTime: V,
            endTime: M
        } = S,
        R = null != (_ = o()(V)) ? _ : T,
        B = null != (w = o()(null != M ? M : V)) ? w : T,
        k = () => {
            let e = i()();
            e.createEvent({
                start: T,
                end: C,
                summary: P.name,
                description: I,
                location: N,
                repeating: U
            }), f.isPlatformEmbedded ? d.A.fileManager.saveWithDialog(e.toString(), "discord-event.ics") : window.open(e.toURL(), "_blank")
        };
    return (0, l.jsxs)(s.Drp, {
        id: m.intl.string(m.t.k5pvjo),
        label: m.intl.string(m.t.k5pvjo),
        action: k,
        children: [(0, l.jsx)(s.Drp, {
            id: m.intl.string(m.t.JKSLRH),
            label: m.intl.string(m.t.JKSLRH),
            action: () => {
                var e;
                let t = null == U ? void 0 : U.toString(),
                    n = {
                        text: P.name,
                        dates: "".concat(T.format(j), "/").concat(C.format(j)),
                        details: I,
                        action: "TEMPLATE",
                        location: N,
                        recur: null != t ? null == (e = D.exec(t)) ? void 0 : e[0] : void 0
                    },
                    l = "https://calendar.google.com/calendar/render?".concat((0, a.stringify)(n));
                window.open(l, "_blank")
            }
        }), (0, l.jsx)(s.Drp, {
            id: m.intl.string(m.t.nrBYSe),
            label: m.intl.string(m.t.nrBYSe),
            action: k
        }), (0, l.jsx)(s.Drp, {
            id: m.intl.string(m.t.odzaCd),
            label: m.intl.string(m.t.odzaCd),
            action: () => {
                let e = {
                        v: 60,
                        title: P.name,
                        st: R.format(j),
                        et: B.format(j),
                        desc: I,
                        in_loc: N
                    },
                    t = "https://calendar.yahoo.com/?".concat((0, a.stringify)(e));
                window.open(t, "_blank")
            }
        }), (0, l.jsx)(s.Drp, {
            id: m.intl.string(m.t.rQe8EE),
            label: m.intl.string(m.t.rQe8EE),
            action: () => {
                let e = {
                        path: "/calendar/action/compose",
                        rru: "addevent",
                        startdt: R.format(h),
                        enddt: B.format(h),
                        subject: P.name,
                        body: I,
                        location: N,
                        allday: !1
                    },
                    t = "https://outlook.live.com/calendar/0/deeplink/compose?".concat((0, a.stringify)(e));
                window.open(t, "_blank")
            }
        })]
    })
}