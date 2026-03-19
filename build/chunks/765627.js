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
    g = n(412484),
    p = n(985018),
    _ = n(347461);

function f(e) {
    let {
        tab: t,
        setTab: n,
        badgeState: h,
        closePopout: m
    } = e, {
        enabled: g,
        inInbox: f
    } = c.A.useConfig({
        location: "RecentsPopout"
    }), C = (0, u.Sc)({
        location: "RecentsHeader"
    }), E = (0, s.bG)([d.A], () => d.A.getOverdueMessageReminderCount());
    return (0, i.jsxs)(o.Y9, {
        className: _.wx,
        children: [(0, i.jsxs)("div", {
            className: _.qd,
            children: [(0, i.jsx)(r.K$s, {
                size: "md",
                color: "currentColor",
                className: _.yH
            }), (0, i.jsx)(r.Heading, {
                className: _.Hi,
                variant: "text-lg/semibold",
                color: "interactive-text-active",
                children: p.intl.string(p.t.GSmTKJ)
            }), (0, i.jsxs)(r.sqX, {
                className: _.ne,
                onClick: e => e.stopPropagation(),
                focusProps: {
                    enabled: !1
                },
                "aria-label": p.intl.string(p.t["8k+6QY"]),
                children: [(0, i.jsx)(x, {
                    tab: t
                }), (0, i.jsx)(A.A, {
                    closePopout: m
                })]
            })]
        }), (0, i.jsx)("div", {
            className: _.YF,
            children: (0, i.jsxs)(r.VQ0, {
                selectedItem: t,
                type: "top",
                look: "brand",
                onItemSelect: n,
                className: _.$H,
                children: [(0, i.jsxs)(r.VQ0.Item, {
                    id: l.Y2.FOR_YOU,
                    "aria-label": p.intl.string(p.t["En+D+u"]),
                    className: _.Mf,
                    children: [p.intl.string(p.t["En+D+u"]), h?.badgeForYou ? (0, i.jsx)(r.SC0, {
                        color: a.A.colors.BACKGROUND_FEEDBACK_NOTIFICATION.css,
                        className: _.bG
                    }) : null]
                }), (0, i.jsx)(r.VQ0.Item, {
                    id: l.Y2.UNREADS,
                    className: _.Mf,
                    children: p.intl.string(p.t.sRUdB8)
                }), (0, i.jsx)(r.VQ0.Item, {
                    "aria-label": p.intl.string(p.t.GRZF96),
                    id: l.Y2.MENTIONS,
                    className: _.Mf,
                    children: p.intl.string(p.t.GRZF96)
                }), g && f ? (0, i.jsx)(r.VQ0.Item, {
                    "aria-label": p.intl.string(p.t["2pAkDA"]),
                    id: l.Y2.BOOKMARKS,
                    className: _.Mf,
                    children: 0 === E ? p.intl.string(p.t["2pAkDA"]) : p.intl.formatToPlainString(p.t.I4fryG, {
                        count: E
                    })
                }) : null, C ? (0, i.jsx)(r.VQ0.Item, {
                    "aria-label": "scheduled",
                    id: l.Y2.SCHEDULED,
                    className: _.Mf,
                    children: p.intl.string(p.t.Fn6Odn)
                }) : null]
            })
        })]
    })
}

function x(e) {
    let {
        tab: t
    } = e;
    return t === l.Y2.FOR_YOU ? (0, i.jsx)(h.xc, {}) : t === l.Y2.UNREADS ? (0, i.jsx)(g.NH, {}) : t === l.Y2.MENTIONS ? (0, i.jsx)(m.A, {}) : null
}