/** chunk id: 19333 params = (module,exports,require) **/
n.d(t, {
    A: () => A
});
var r = n(627968);
n(64700);
var l = n(503698),
    i = n.n(l),
    a = n(688807),
    s = n(311907),
    o = n(435371),
    d = n(397927),
    c = n(442433),
    u = n(775602),
    m = n(915089),
    h = n(961350),
    x = n(183555),
    g = n(735321),
    f = n(606758),
    v = n(518477),
    j = n(985018),
    p = n(558454);

function A(e) {
    let {
        widget: t,
        className: n,
        buttonRef: l,
        additionalMenuItems: a
    } = e, s = (0, g.L)(t), o = (0, m.GV)();
    return (0, r.jsx)(N, {
        targetRef: l,
        widget: t,
        additionalMenuItems: a,
        children: e => (0, r.jsx)(y, {
            children: (0, r.jsxs)(d.DUT, {
                innerRef: l,
                className: i()(p.x6, n),
                "data-dnd-name": s,
                "aria-label": j.intl.formatToPlainString(j.t.HWNJJN, {
                    widgetTitle: s
                }),
                "aria-describedby": o,
                "aria-keyshortcuts": "Control+D, Meta+D",
                ...e,
                children: [(0, r.jsx)(d.WP0, {
                    size: "sm"
                }), (0, r.jsx)(d.AC4, {
                    id: o,
                    children: j.intl.string(j.t.bsuqFn)
                })]
            })
        })
    })
}
let y = e => {
        let {
            children: t
        } = e, n = (0, s.bG)([u.A], () => u.A.keyboardModeEnabled), {
            isDragging: l
        } = (0, a.V)(e => ({
            isDragging: e.isDragging()
        }));
        return (0, r.jsx)(o.m_, {
            __unsupportedReactNodeAsText: (0, r.jsxs)("div", {
                className: p.HE,
                children: [(0, r.jsx)(d.Text, {
                    variant: "text-sm/normal",
                    color: "none",
                    children: j.intl.format(n ? j.t["zvln/l"] : j.t["7cdwhg"], {
                        emphasizeHook: e => (0, r.jsx)("strong", {
                            children: e
                        })
                    })
                }), (0, r.jsx)(d.Text, {
                    variant: "text-sm/normal",
                    color: "none",
                    children: j.intl.format(j.t["4e0rM4"], {
                        emphasizeHook: e => (0, r.jsx)("strong", {
                            children: e
                        })
                    })
                })]
            }),
            position: "top",
            shouldShow: !0 !== l,
            ariaHidden: !0,
            children: t
        })
    },
    N = e => {
        let {
            children: t,
            widget: l,
            targetRef: i,
            additionalMenuItems: a
        } = e, {
            trackUserProfileEditAction: s
        } = (0, x.NJ)(), o = e => {
            if (e.shiftKey) {
                (0, g.qA)(l), s({
                    action: "WIDGET_REMOVED",
                    ...l.getProfileEditAnalyticsOptions()
                }), (0, f.XA)(v.jM.WIDGET_REMOVED);
                return
            }(0, d.mMO)(async () => {
                let {
                    default: e
                } = await Promise.all([n.e("95320"), n.e("10117"), n.e("62371"), n.e("23016"), n.e("35526")]).then(n.bind(n, 380035));
                return t => (0, r.jsx)(e, {
                    ...t,
                    userId: h.default.getId(),
                    widget: l,
                    trackUserProfileEditAction: s
                })
            }, {
                stackingBehavior: "stack"
            })
        };
        return (0, r.jsx)(d.YNO, {
            targetElementRef: i,
            align: "top",
            position: "right",
            disablePointerEvents: !1,
            renderPopout: e => {
                let {
                    closePopout: t
                } = e;
                return (0, r.jsx)(d.W1t, {
                    "data-menu-migrated": !0,
                    navId: "user-profile-widget-context-menu",
                    onClose: () => {
                        (0, c.Z_)(), t()
                    },
                    onSelect: () => {},
                    "aria-label": j.intl.string(j.t.xpSHSk),
                    className: p.MK,
                    children: (0, r.jsxs)(d.rXV, {
                        children: [a, (0, r.jsx)(d.Drp, {
                            id: "remove-widget",
                            label: j.intl.string(j.t.Mm07Yc),
                            action: o,
                            color: "danger",
                            icon: d.ucK,
                            leadingAccessory: {
                                type: "icon",
                                icon: d.ucK
                            }
                        })]
                    })
                })
            },
            children: t
        })
    }