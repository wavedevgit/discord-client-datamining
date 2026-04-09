/** chunk id: 886217 params = (module,exports,require) **/
n.d(t, {
    Ok: () => m,
    _B: () => h
});
var i = n(627968),
    a = n(311907),
    r = n(859703),
    l = n(929271),
    s = n(392344),
    o = n(522043),
    d = n(214832),
    c = n(76531),
    u = n(563905),
    A = n(478677),
    _ = n(985018);

function h() {
    return [{
        value: "quest_bar",
        label: _.intl.string(_.t.rjVPdM)
    }, {
        value: "share_embed",
        label: _.intl.string(_.t["D/gSWS"])
    }, {
        value: "home_card",
        label: _.intl.string(_.t["5wnpF3"])
    }, {
        value: "channel_call_header",
        label: _.intl.string(_.t.gWinpQ)
    }, {
        value: "members_list",
        label: _.intl.string(_.t.wpYima)
    }, {
        value: "activity_panel",
        label: _.intl.string(_.t.L2mlUb)
    }]
}
let m = e => {
    let {
        questId: t,
        selectedSections: n
    } = e, _ = (0, a.bG)([r.A], () => r.A.getQuest(t));
    if (null != (0, a.bG)([r.A], () => r.A.getFetchQuestPreviewError(t)) || null == _) return null;
    let h = e => null == n || 0 === n.length || n.includes(e);
    return (0, i.jsxs)(i.Fragment, {
        children: [h("quest_bar") && (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(o.A, {
                quest: _
            }), (0, i.jsx)(l.c, {})]
        }), h("home_card") && (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(u._, {
                quest: _
            }), (0, i.jsx)(l.c, {})]
        }), h("share_embed") && (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(c.A, {
                questId: _.id
            }), (0, i.jsx)(l.c, {})]
        }), h("channel_call_header") && (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(d.n, {
                quest: _
            }), (0, i.jsx)(l.c, {})]
        }), h("members_list") && (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(A.A, {
                quest: _
            }), (0, i.jsx)(l.c, {})]
        }), h("activity_panel") && (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(s.A, {
                quest: _
            }), (0, i.jsx)(l.c, {})]
        })]
    })
}