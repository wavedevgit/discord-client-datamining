/** chunk id: 247191, original params: t,e,n (module,exports,require) **/
n.d(e, {
    A: () => j
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

function j(t, e, n, r) {
    var u, j, S;
    let w, D = (0, c.bG)([A.Ay], () => A.Ay.isActive(t)),
        N = (0, y.nh)(null != t ? t : "", r),
        P = (0, c.bG)([A.Ay], () => A.Ay.getGuildScheduledEvent(t), [t]),
        G = (0, c.bG)([E.A], () => E.A.getGuild(e), [e]);
    if (D || null == N || null == P) return null;
    w = P.entity_type === v.Ps.EXTERNAL ? P.entity_metadata.location : null != n && null != G ? h.intl.formatToPlainString(h.t["2t8L04"], {
        channelName: n.name,
        guildName: G.name
    }) : h.intl.string(h.t.VSgOVg);
    let I = o()(P.scheduled_start_time),
        C = null != P.scheduled_end_time ? o()(P.scheduled_end_time) : I,
        x = null != P.description && "" !== P.description ? g.Ay.unparse(P.description, null != (u = null == n ? void 0 : n.id) ? u : O.dJq, !0) : "",
        R = (0, p.Sn)(P.recurrence_rule),
        L = null != R ? (0, b.X7)(R) : null,
        {
            startTime: U,
            endTime: V
        } = N,
        M = null != (j = o()(U)) ? j : I,
        B = null != (S = o()(null != V ? V : U)) ? S : I,
        k = () => {
            let t = i()();
            t.createEvent({
                start: I,
                end: C,
                summary: P.name,
                description: x,
                location: w,
                repeating: L
            }), f.isPlatformEmbedded ? d.A.fileManager.saveWithDialog(t.toString(), "discord-event.ics") : window.open(t.toURL(), "_blank")
        };
    return (0, l.jsxs)(s.Drp, {
        id: h.intl.string(h.t.k5pvjo),
        label: h.intl.string(h.t.k5pvjo),
        action: k,
        children: [(0, l.jsx)(s.Drp, {
            id: h.intl.string(h.t.JKSLRH),
            label: h.intl.string(h.t.JKSLRH),
            action: () => {
                var t;
                let e = null == L ? void 0 : L.toString(),
                    n = {
                        text: P.name,
                        dates: "".concat(I.format(_), "/").concat(C.format(_)),
                        details: x,
                        action: "TEMPLATE",
                        location: w,
                        recur: null != e ? null == (t = T.exec(e)) ? void 0 : t[0] : void 0
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
                let t = {
                        v: 60,
                        title: P.name,
                        st: M.format(_),
                        et: B.format(_),
                        desc: x,
                        in_loc: w
                    },
                    e = "https://calendar.yahoo.com/?".concat((0, a.stringify)(t));
                window.open(e, "_blank")
            }
        }), (0, l.jsx)(s.Drp, {
            id: h.intl.string(h.t.rQe8EE),
            label: h.intl.string(h.t.rQe8EE),
            action: () => {
                let t = {
                        path: "/calendar/action/compose",
                        rru: "addevent",
                        startdt: M.format(m),
                        enddt: B.format(m),
                        subject: P.name,
                        body: x,
                        location: w,
                        allday: !1
                    },
                    e = "https://outlook.live.com/calendar/0/deeplink/compose?".concat((0, a.stringify)(t));
                window.open(e, "_blank")
            }
        })]
    })
}