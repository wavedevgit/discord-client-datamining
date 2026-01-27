/** Chunk was on 77870 **/
/** chunk id: 765627, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => A
});
var r = n(627968);
n(64700);
var l = n(417597),
    i = n(873298),
    s = n(827734),
    a = n(397927),
    o = n(835835),
    c = n(966597),
    u = n(85109),
    d = n(566908),
    p = n(646468),
    h = n(790368),
    f = n(435084),
    g = n(412484),
    m = n(985018),
    b = n(655967);

function A(e) {
    let {
        tab: t,
        setTab: n,
        badgeState: p,
        closePopout: f
    } = e, {
        enabled: g,
        inInbox: A
    } = c.A.useExperiment({
        location: "RecentsPopout"
    }), _ = (0, d.Sc)({
        location: "RecentsHeader"
    }), O = (0, l.bG)([u.A], () => u.A.getOverdueMessageReminderCount());
    return (0, r.jsxs)(o.Y9, {
        className: b.wx,
        children: [(0, r.jsxs)("div", {
            className: b.qd,
            children: [(0, r.jsx)(a.K$s, {
                size: "md",
                color: "currentColor",
                className: b.yH
            }), (0, r.jsx)(a.Heading, {
                className: b.Hi,
                variant: "text-lg/semibold",
                color: "interactive-text-active",
                children: m.intl.string(m.t.GSmTKJ)
            }), (0, r.jsxs)(a.sqX, {
                className: b.ne,
                onClick: e => e.stopPropagation(),
                focusProps: {
                    enabled: !1
                },
                "aria-label": m.intl.string(m.t["8k+6QY"]),
                children: [(0, r.jsx)(y, {
                    tab: t
                }), (0, r.jsx)(h.A, {
                    closePopout: f
                })]
            })]
        }), (0, r.jsx)("div", {
            className: b.YF,
            children: (0, r.jsxs)(a.VQ0, {
                selectedItem: t,
                type: "top",
                look: "brand",
                onItemSelect: n,
                className: b.$H,
                children: [(0, r.jsxs)(a.VQ0.Item, {
                    id: i.Y2.FOR_YOU,
                    "aria-label": m.intl.string(m.t["En+D+u"]),
                    className: b.Mf,
                    children: [m.intl.string(m.t["En+D+u"]), (null == p ? void 0 : p.badgeForYou) ? (0, r.jsx)(a.SC0, {
                        color: s.A.colors.BACKGROUND_FEEDBACK_NOTIFICATION.css,
                        className: b.bG
                    }) : null]
                }), (0, r.jsx)(a.VQ0.Item, {
                    id: i.Y2.UNREADS,
                    className: b.Mf,
                    children: m.intl.string(m.t.sRUdB8)
                }), (0, r.jsx)(a.VQ0.Item, {
                    "aria-label": m.intl.string(m.t.GRZF96),
                    id: i.Y2.MENTIONS,
                    className: b.Mf,
                    children: m.intl.string(m.t.GRZF96)
                }), g && A ? (0, r.jsx)(a.VQ0.Item, {
                    "aria-label": m.intl.string(m.t["2pAkDA"]),
                    id: i.Y2.BOOKMARKS,
                    className: b.Mf,
                    children: 0 === O ? m.intl.string(m.t["2pAkDA"]) : m.intl.formatToPlainString(m.t.I4fryG, {
                        count: O
                    })
                }) : null, _ ? (0, r.jsx)(a.VQ0.Item, {
                    "aria-label": "scheduled",
                    id: i.Y2.SCHEDULED,
                    className: b.Mf,
                    children: m.intl.string(m.t.Fn6Odn)
                }) : null]
            })
        })]
    })
}

function y(e) {
    let {
        tab: t
    } = e;
    return t === i.Y2.FOR_YOU ? (0, r.jsx)(p.xc, {}) : t === i.Y2.UNREADS ? (0, r.jsx)(g.NH, {}) : t === i.Y2.MENTIONS ? (0, r.jsx)(f.A, {}) : null
}