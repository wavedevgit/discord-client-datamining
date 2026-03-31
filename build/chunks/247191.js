/** chunk id: 247191 params = (module,exports,require) **/
n.d(e, {
    A: () => G
});
var l = n(627968);
n(64700);
var i = n(242934),
    r = n.n(i),
    a = n(989349),
    d = n.n(a),
    s = n(492462),
    u = n(311907),
    o = n(397927),
    c = n(77729),
    E = n(451909),
    A = n(71393),
    g = n(723702),
    _ = n(698441),
    h = n(563312),
    T = n(794782),
    f = n(974930),
    y = n(988794),
    v = n(652215),
    p = n(985018);
let m = "YYYYMMDDTHHmmss",
    N = "YYYY-MM-DDTHH:mm:ss",
    S = /RRULE:.*/;

function G(t, e, n, i) {
    let a, G = (0, u.bG)([_.Ay], () => _.Ay.isActive(t)),
        b = (0, h.nh)(t ?? "", i),
        D = (0, u.bG)([_.Ay], () => _.Ay.getGuildScheduledEvent(t), [t]),
        I = (0, u.bG)([A.A], () => A.A.getGuild(e), [e]);
    if (G || null == b || null == D) return null;
    a = D.entity_type === y.Ps.EXTERNAL ? D.entity_metadata.location : null != n && null != I ? p.intl.formatToPlainString(p.t["2t8L04"], {
        channelName: n.name,
        guildName: I.name
    }) : p.intl.string(p.t.VSgOVg);
    let C = d()(D.scheduled_start_time),
        x = null != D.scheduled_end_time ? d()(D.scheduled_end_time) : C,
        w = null != D.description && "" !== D.description ? E.Ay.unparse(D.description, n?.id ?? v.dJq, !0) : "",
        O = (0, T.Sn)(D.recurrence_rule),
        R = null != O ? (0, f.X7)(O) : null,
        {
            startTime: j,
            endTime: L
        } = b,
        U = d()(j) ?? C,
        P = d()(L ?? j) ?? C,
        V = () => {
            let t = r()();
            t.createEvent({
                start: C,
                end: x,
                summary: D.name,
                description: w,
                location: a,
                repeating: R
            }), g.isPlatformEmbedded ? c.A.fileManager.saveWithDialog(t.toString(), "discord-event.ics") : window.open(t.toURL(), "_blank")
        };
    return (0, l.jsxs)(o.Drp, {
        id: p.intl.string(p.t.k5pvjo),
        label: p.intl.string(p.t.k5pvjo),
        action: V,
        children: [(0, l.jsx)(o.Drp, {
            id: p.intl.string(p.t.JKSLRH),
            label: p.intl.string(p.t.JKSLRH),
            action: () => {
                let t = R?.toString(),
                    e = {
                        text: D.name,
                        dates: `${C.format(m)}/${x.format(m)}`,
                        details: w,
                        action: "TEMPLATE",
                        location: a,
                        recur: null != t ? S.exec(t)?.[0] : void 0
                    },
                    n = `https://calendar.google.com/calendar/render?${(0,s.stringify)(e)}`;
                window.open(n, "_blank")
            }
        }), (0, l.jsx)(o.Drp, {
            id: p.intl.string(p.t.nrBYSe),
            label: p.intl.string(p.t.nrBYSe),
            action: V
        }), (0, l.jsx)(o.Drp, {
            id: p.intl.string(p.t.odzaCd),
            label: p.intl.string(p.t.odzaCd),
            action: () => {
                let t = {
                        v: 60,
                        title: D.name,
                        st: U.format(m),
                        et: P.format(m),
                        desc: w,
                        in_loc: a
                    },
                    e = `https://calendar.yahoo.com/?${(0,s.stringify)(t)}`;
                window.open(e, "_blank")
            }
        }), (0, l.jsx)(o.Drp, {
            id: p.intl.string(p.t.rQe8EE),
            label: p.intl.string(p.t.rQe8EE),
            action: () => {
                let t = {
                        path: "/calendar/action/compose",
                        rru: "addevent",
                        startdt: U.format(N),
                        enddt: P.format(N),
                        subject: D.name,
                        body: w,
                        location: a,
                        allday: !1
                    },
                    e = `https://outlook.live.com/calendar/0/deeplink/compose?${(0,s.stringify)(t)}`;
                window.open(e, "_blank")
            }
        })]
    })
}