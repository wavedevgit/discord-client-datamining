/** chunk id: 66149, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => y
}), n(801541), n(896048);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    s = n.n(i),
    a = n(889137),
    o = n(397927),
    c = n(375901),
    u = n(491182),
    d = n(371741),
    h = n(922529),
    p = n(888675),
    g = n(652215),
    f = n(985018),
    m = n(410132),
    b = n(119907);

function A(e) {
    let {
        expanded: t,
        onClick: n,
        count: l,
        compact: i,
        collapsedReason: s
    } = e, c = (0, a.YW)({
        collapsedReason: s
    }).with({
        collapsedReason: f.t["VFWjc+"]
    }, () => (0, r.jsx)(o.G3N, {
        size: "md",
        color: "currentColor",
        className: m.Q6
    })).with({
        collapsedReason: f.t["+FcYM/"]
    }, () => (0, r.jsx)(o.KTN, {
        size: "md",
        color: "currentColor",
        className: m.Q6
    })).otherwise(() => (0, r.jsx)(o.PGe, {
        size: "md",
        color: "currentColor",
        className: m.Q6
    }));
    return (0, r.jsx)(u.A, {
        compact: i,
        role: "group",
        childrenMessageContent: (0, r.jsx)(p.A, {
            compact: i,
            className: m.L9,
            iconNode: c,
            children: (0, r.jsxs)("div", {
                className: m.Fo,
                children: [f.intl.format(s, {
                    count: l
                }), " —", " ", (0, r.jsx)(o.DUT, {
                    tag: "span",
                    onClick: n,
                    className: m.rB,
                    children: t ? f.intl.string(f.t.fgq1gs) : f.intl.string(f.t.XJuakA)
                })]
            })
        })
    })
}
let y = l.memo(function(e) {
    var t;
    let {
        messages: n,
        channel: i,
        compact: a = !1,
        unreadId: o,
        collapsedReason: u
    } = e, {
        hasJumpTarget: p = !1
    } = n, [f, y] = l.useState(p), O = l.useCallback(() => y(e => !e), []);
    l.useEffect(() => {
        p && y(!0)
    }, [p]);
    let _ = n.hasUnread ? n.content.length - 1 : n.content.length;
    return (0, r.jsxs)("div", {
        className: s()({
            [b._A]: !0,
            [m.sz]: f
        }),
        children: [n.hasUnread && (!f || (null == (t = n.content[0]) ? void 0 : t.type) === g.TZK.DIVIDER) ? (0, r.jsx)(h.A, {
            isUnread: !0,
            id: o
        }, "divider") : null, (0, r.jsx)(A, {
            count: _,
            compact: a,
            expanded: f,
            onClick: O,
            collapsedReason: u
        }, "collapsed-message-item"), f ? n.content.map((e, t) => {
            if (e.type === g.TZK.DIVIDER && t > 0) {
                var l, s;
                let e = null != (l = null == (s = n.content[t + 1]) ? void 0 : s.isGroupStart) && l;
                return (0, r.jsx)(h.A, {
                    isUnread: !0,
                    isBeforeGroup: e,
                    id: o
                }, "divider")
            }
            if (e.type === g.TZK.MESSAGE || e.type === g.TZK.THREAD_STARTER_MESSAGE) {
                let t = e.type === g.TZK.THREAD_STARTER_MESSAGE ? d.VO : d.Ay;
                return (0, r.jsx)(t, {
                    id: (0, c.j)(i.id, e.content.id),
                    className: m.__invalid_blocked,
                    compact: a,
                    channel: i,
                    message: e.content,
                    groupId: e.groupId,
                    flashKey: e.flashKey,
                    isLastItem: !1,
                    renderContentOnly: !1
                }, e.content.id)
            }
        }) : null]
    })
})