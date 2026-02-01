/** chunk id: 66149, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => _
}), n(801541), n(896048);
var l = n(627968),
    r = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(889137),
    o = n(397927),
    c = n(375901),
    u = n(491182),
    d = n(371741),
    h = n(922529),
    p = n(888675),
    f = n(652215),
    m = n(985018),
    g = n(410132),
    A = n(119907);

function b(e) {
    let {
        expanded: t,
        onClick: n,
        count: r,
        compact: i,
        collapsedReason: a
    } = e, c = (0, s.YW)({
        collapsedReason: a
    }).with({
        collapsedReason: m.t["VFWjc+"]
    }, () => (0, l.jsx)(o.G3N, {
        size: "md",
        color: "currentColor",
        className: g.Q6
    })).with({
        collapsedReason: m.t["+FcYM/"]
    }, () => (0, l.jsx)(o.KTN, {
        size: "md",
        color: "currentColor",
        className: g.Q6
    })).otherwise(() => (0, l.jsx)(o.PGe, {
        size: "md",
        color: "currentColor",
        className: g.Q6
    }));
    return (0, l.jsx)(u.A, {
        compact: i,
        role: "group",
        childrenMessageContent: (0, l.jsx)(p.A, {
            compact: i,
            className: g.L9,
            iconNode: c,
            children: (0, l.jsxs)("div", {
                className: g.Fo,
                children: [m.intl.format(a, {
                    count: r
                }), " —", " ", (0, l.jsx)(o.DUT, {
                    tag: "span",
                    onClick: n,
                    className: g.rB,
                    children: t ? m.intl.string(m.t.fgq1gs) : m.intl.string(m.t.XJuakA)
                })]
            })
        })
    })
}
let _ = r.memo(function(e) {
    var t;
    let {
        messages: n,
        channel: i,
        compact: s = !1,
        unreadId: o,
        collapsedReason: u
    } = e, {
        hasJumpTarget: p = !1
    } = n, [m, _] = r.useState(p), y = r.useCallback(() => _(e => !e), []);
    r.useEffect(() => {
        p && _(!0)
    }, [p]);
    let v = n.hasUnread ? n.content.length - 1 : n.content.length;
    return (0, l.jsxs)("div", {
        className: a()({
            [A._A]: !0,
            [g.sz]: m
        }),
        children: [n.hasUnread && (!m || (null == (t = n.content[0]) ? void 0 : t.type) === f.TZK.DIVIDER) ? (0, l.jsx)(h.A, {
            isUnread: !0,
            id: o
        }, "divider") : null, (0, l.jsx)(b, {
            count: v,
            compact: s,
            expanded: m,
            onClick: y,
            collapsedReason: u
        }, "collapsed-message-item"), m ? n.content.map((e, t) => {
            if (e.type === f.TZK.DIVIDER && t > 0) {
                var r, a;
                let e = null != (r = null == (a = n.content[t + 1]) ? void 0 : a.isGroupStart) && r;
                return (0, l.jsx)(h.A, {
                    isUnread: !0,
                    isBeforeGroup: e,
                    id: o
                }, "divider")
            }
            if (e.type === f.TZK.MESSAGE || e.type === f.TZK.THREAD_STARTER_MESSAGE) {
                let t = e.type === f.TZK.THREAD_STARTER_MESSAGE ? d.VO : d.Ay;
                return (0, l.jsx)(t, {
                    id: (0, c.j)(i.id, e.content.id),
                    className: g.__invalid_blocked,
                    compact: s,
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