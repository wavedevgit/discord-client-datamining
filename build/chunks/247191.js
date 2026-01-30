/** chunk id: 247191, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => j
}), n(228524), n(747238);
var l = n(627968);
n(64700);
var r = n(931773),
    i = n.n(r),
    o = n(989349),
    u = n.n(o),
    a = n(492462),
    c = n(311907),
    s = n(397927),
    d = n(77729),
    g = n(451909),
    E = n(71393),
    f = n(723702),
    A = n(698441),
    y = n(563312),
    p = n(794782),
    b = n(974930),
    v = n(988794),
    O = n(652215),
    h = n(985018);
let _ = "YYYYMMDDTHHmmss",
    m = "YYYY-MM-DDTHH:mm:ss",
    T = /RRULE:.*/;

function j(e, t, n, r) {
    var o, j, S;
    let w, D = (0, c.bG)([A.Ay], () => A.Ay.isActive(e)),
        N = (0, y.nh)(null != e ? e : "", r),
        P = (0, c.bG)([A.Ay], () => A.Ay.getGuildScheduledEvent(e), [e]),
        G = (0, c.bG)([E.A], () => E.A.getGuild(t), [t]);
    if (D || null == N || null == P) return null;
    w = P.entity_type === v.Ps.EXTERNAL ? P.entity_metadata.location : null != n && null != G ? h.intl.formatToPlainString(h.t["2t8L04"], {
        channelName: n.name,
        guildName: G.name
    }) : h.intl.string(h.t.VSgOVg);
    let I = u()(P.scheduled_start_time),
        x = null != P.scheduled_end_time ? u()(P.scheduled_end_time) : I,
        C = null != P.description && "" !== P.description ? g.Ay.unparse(P.description, null != (o = null == n ? void 0 : n.id) ? o : O.dJq, !0) : "",
        R = (0, p.Sn)(P.recurrence_rule),
        L = null != R ? (0, b.X7)(R) : null,
        {
            startTime: U,
            endTime: V
        } = N,
        M = null != (j = u()(U)) ? j : I,
        B = null != (S = u()(null != V ? V : U)) ? S : I,
        k = () => {
            let e = i()();
            e.createEvent({
                start: I,
                end: x,
                summary: P.name,
                description: C,
                location: w,
                repeating: L
            }), f.isPlatformEmbedded ? d.A.fileManager.saveWithDialog(e.toString(), "discord-event.ics") : window.open(e.toURL(), "_blank")
        };
    return (0, l.jsxs)(s.Drp, {
        id: h.intl.string(h.t.k5pvjo),
        label: h.intl.string(h.t.k5pvjo),
        action: k,
        children: [(0, l.jsx)(s.Drp, {
            id: h.intl.string(h.t.JKSLRH),
            label: h.intl.string(h.t.JKSLRH),
            action: () => {
                var e;
                let t = null == L ? void 0 : L.toString(),
                    n = {
                        text: P.name,
                        dates: "".concat(I.format(_), "/").concat(x.format(_)),
                        details: C,
                        action: "TEMPLATE",
                        location: w,
                        recur: null != t ? null == (e = T.exec(t)) ? void 0 : e[0] : void 0
                    },
                    l = "https://calendar.google.com/calendar/render?".concat((0, a.stringify)(n));
                window.open(l, "_blank")
            }
        }), (0, l.jsx)(s.Drp, {
            id: h.intl.string(h.t.nrBYSe),
            label: h.intl.string(h.t.nrBYSe),
            action: k
        }), (0, l.jsx)(s.Drp, {
            id: h.intl.string(h.t.odzaCd),
            label: h.intl.string(h.t.odzaCd),
            action: () => {
                let e = {
                        v: 60,
                        title: P.name,
                        st: M.format(_),
                        et: B.format(_),
                        desc: C,
                        in_loc: w
                    },
                    t = "https://calendar.yahoo.com/?".concat((0, a.stringify)(e));
                window.open(t, "_blank")
            }
        }), (0, l.jsx)(s.Drp, {
            id: h.intl.string(h.t.rQe8EE),
            label: h.intl.string(h.t.rQe8EE),
            action: () => {
                let e = {
                        path: "/calendar/action/compose",
                        rru: "addevent",
                        startdt: M.format(m),
                        enddt: B.format(m),
                        subject: P.name,
                        body: C,
                        location: w,
                        allday: !1
                    },
                    t = "https://outlook.live.com/calendar/0/deeplink/compose?".concat((0, a.stringify)(e));
                window.open(t, "_blank")
            }
        })]
    })
}