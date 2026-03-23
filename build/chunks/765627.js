/** chunk id: 765627 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => f
});
var i = n(627968);
n(64700);
var s = n(417597),
    l = n(873298),
    a = n(827734),
    r = n(397927),
    o = n(835835),
    c = n(966597),
    d = n(85109),
    u = n(566908),
    h = n(646468),
    A = n(790368),
    m = n(435084),
    p = n(412484),
    _ = n(985018),
    g = n(655967);

function f(e) {
    let {
        tab: t,
        setTab: n,
        badgeState: h,
        closePopout: m
    } = e, {
        enabled: p,
        inInbox: f
    } = c.A.useConfig({
        location: "RecentsPopout"
    }), C = (0, u.Sc)({
        location: "RecentsHeader"
    }), E = (0, s.bG)([d.A], () => d.A.getOverdueMessageReminderCount());
    return (0, i.jsxs)(o.Y9, {
        className: g.wx,
        children: [(0, i.jsxs)("div", {
            className: g.qd,
            children: [(0, i.jsx)(r.K$s, {
                size: "md",
                color: "currentColor",
                className: g.yH
            }), (0, i.jsx)(r.Heading, {
                className: g.Hi,
                variant: "text-lg/semibold",
                color: "interactive-text-active",
                children: _.intl.string(_.t.GSmTKJ)
            }), (0, i.jsxs)(r.sqX, {
                className: g.ne,
                onClick: e => e.stopPropagation(),
                focusProps: {
                    enabled: !1
                },
                "aria-label": _.intl.string(_.t["8k+6QY"]),
                children: [(0, i.jsx)(x, {
                    tab: t
                }), (0, i.jsx)(A.A, {
                    closePopout: m
                })]
            })]
        }), (0, i.jsx)("div", {
            className: g.YF,
            children: (0, i.jsxs)(r.VQ0, {
                selectedItem: t,
                type: "top",
                look: "brand",
                onItemSelect: n,
                className: g.$H,
                children: [(0, i.jsxs)(r.VQ0.Item, {
                    id: l.Y2.FOR_YOU,
                    "aria-label": _.intl.string(_.t["En+D+u"]),
                    className: g.Mf,
                    children: [_.intl.string(_.t["En+D+u"]), h?.badgeForYou ? (0, i.jsx)(r.SC0, {
                        color: a.A.colors.BACKGROUND_FEEDBACK_NOTIFICATION.css,
                        className: g.bG
                    }) : null]
                }), (0, i.jsx)(r.VQ0.Item, {
                    id: l.Y2.UNREADS,
                    className: g.Mf,
                    children: _.intl.string(_.t.sRUdB8)
                }), (0, i.jsx)(r.VQ0.Item, {
                    "aria-label": _.intl.string(_.t.GRZF96),
                    id: l.Y2.MENTIONS,
                    className: g.Mf,
                    children: _.intl.string(_.t.GRZF96)
                }), p && f ? (0, i.jsx)(r.VQ0.Item, {
                    "aria-label": _.intl.string(_.t["2pAkDA"]),
                    id: l.Y2.BOOKMARKS,
                    className: g.Mf,
                    children: 0 === E ? _.intl.string(_.t["2pAkDA"]) : _.intl.formatToPlainString(_.t.I4fryG, {
                        count: E
                    })
                }) : null, C ? (0, i.jsx)(r.VQ0.Item, {
                    "aria-label": "scheduled",
                    id: l.Y2.SCHEDULED,
                    className: g.Mf,
                    children: _.intl.string(_.t.Fn6Odn)
                }) : null]
            })
        })]
    })
}

function x(e) {
    let {
        tab: t
    } = e;
    return t === l.Y2.FOR_YOU ? (0, i.jsx)(h.xc, {}) : t === l.Y2.UNREADS ? (0, i.jsx)(p.NH, {}) : t === l.Y2.MENTIONS ? (0, i.jsx)(m.A, {}) : null
}