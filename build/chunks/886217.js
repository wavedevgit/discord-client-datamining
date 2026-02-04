/** chunk id: 886217, original params: e,t,n (module,exports,require) **/
n.d(t, {
    Ok: () => g,
    _B: () => f
});
var r = n(627968),
    i = n(311907),
    l = n(859703),
    a = n(929271),
    s = n(392344),
    o = n(522043),
    c = n(214832),
    u = n(76531),
    d = n(563905),
    p = n(478677),
    h = n(985018);

function f() {
    return [{
        value: "quest_bar",
        label: h.intl.string(h.t.rjVPdM)
    }, {
        value: "share_embed",
        label: h.intl.string(h.t["D/gSWS"])
    }, {
        value: "home_card",
        label: h.intl.string(h.t["5wnpF3"])
    }, {
        value: "channel_call_header",
        label: h.intl.string(h.t.gWinpQ)
    }, {
        value: "members_list",
        label: h.intl.string(h.t.wpYima)
    }, {
        value: "activity_panel",
        label: h.intl.string(h.t.L2mlUb)
    }]
}
let g = e => {
    let {
        questId: t,
        selectedSections: n
    } = e, h = (0, i.bG)([l.A], () => l.A.getQuest(t));
    if (null != (0, i.bG)([l.A], () => l.A.getFetchQuestPreviewError(t)) || null == h) return null;
    let f = e => null == n || 0 === n.length || n.includes(e);
    return (0, r.jsxs)(r.Fragment, {
        children: [f("quest_bar") && (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(o.A, {
                quest: h
            }), (0, r.jsx)(a.c, {})]
        }), f("home_card") && (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(d._, {
                quest: h
            }), (0, r.jsx)(a.c, {})]
        }), f("share_embed") && (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(u.A, {
                questId: h.id
            }), (0, r.jsx)(a.c, {})]
        }), f("channel_call_header") && (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(c.n, {
                quest: h
            }), (0, r.jsx)(a.c, {})]
        }), f("members_list") && (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(p.A, {
                quest: h
            }), (0, r.jsx)(a.c, {})]
        }), f("activity_panel") && (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(s.A, {
                quest: h
            }), (0, r.jsx)(a.c, {})]
        })]
    })
}