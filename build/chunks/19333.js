/** chunk id: 19333 params = (module,exports,require) **/
n.d(t, {
    A: () => I
});
var i = n(627968);
n(64700);
var a = n(503698),
    l = n.n(a),
    s = n(688807),
    r = n(311907),
    o = n(435371),
    c = n(397927),
    d = n(442433),
    u = n(775602),
    m = n(915089),
    g = n(961350),
    p = n(183555),
    x = n(735321),
    f = n(606758),
    _ = n(518477),
    h = n(985018),
    A = n(183035);

function I(e) {
    let {
        widget: t,
        className: n,
        buttonRef: a,
        additionalMenuItems: s
    } = e, r = (0, x.L)(t), o = (0, m.GV)();
    return (0, i.jsx)(j, {
        targetRef: a,
        widget: t,
        additionalMenuItems: s,
        children: e => (0, i.jsx)(v, {
            children: (0, i.jsxs)(c.DUT, {
                innerRef: a,
                className: l()(A.x6, n),
                "data-dnd-name": r,
                "aria-label": h.intl.formatToPlainString(h.t.HWNJJN, {
                    widgetTitle: r
                }),
                "aria-describedby": o,
                "aria-keyshortcuts": "Control+D, Meta+D",
                ...e,
                children: [(0, i.jsx)(c.WP0, {
                    size: "sm"
                }), (0, i.jsx)(c.AC4, {
                    id: o,
                    children: h.intl.string(h.t.bsuqFn)
                })]
            })
        })
    })
}
let v = e => {
        let {
            children: t
        } = e, n = (0, r.bG)([u.A], () => u.A.keyboardModeEnabled), {
            isDragging: a
        } = (0, s.V)(e => ({
            isDragging: e.isDragging()
        }));
        return (0, i.jsx)(o.m_, {
            __unsupportedReactNodeAsText: (0, i.jsxs)("div", {
                className: A.HE,
                children: [(0, i.jsx)(c.Text, {
                    variant: "text-sm/normal",
                    color: "none",
                    children: h.intl.format(n ? h.t["zvln/l"] : h.t["7cdwhg"], {
                        emphasizeHook: e => (0, i.jsx)("strong", {
                            children: e
                        })
                    })
                }), (0, i.jsx)(c.Text, {
                    variant: "text-sm/normal",
                    color: "none",
                    children: h.intl.format(h.t["4e0rM4"], {
                        emphasizeHook: e => (0, i.jsx)("strong", {
                            children: e
                        })
                    })
                })]
            }),
            position: "top",
            shouldShow: !0 !== a,
            ariaHidden: !0,
            children: t
        })
    },
    j = e => {
        let {
            children: t,
            widget: a,
            targetRef: l,
            additionalMenuItems: s
        } = e, {
            trackUserProfileEditAction: r
        } = (0, p.NJ)(), o = e => {
            if (e.shiftKey) {
                (0, x.qA)(a), r({
                    action: "WIDGET_REMOVED",
                    ...a.getProfileEditAnalyticsOptions()
                }), (0, f.XA)(_.jM.WIDGET_REMOVED);
                return
            }(0, c.mMO)(async () => {
                let {
                    default: e
                } = await n.e("53600").then(n.bind(n, 380035));
                return t => (0, i.jsx)(e, {
                    ...t,
                    userId: g.default.getId(),
                    widget: a,
                    trackUserProfileEditAction: r
                })
            }, {
                stackingBehavior: "stack"
            })
        };
        return (0, i.jsx)(c.YNO, {
            targetElementRef: l,
            align: "top",
            position: "right",
            disablePointerEvents: !1,
            renderPopout: e => {
                let {
                    closePopout: t
                } = e;
                return (0, i.jsx)(c.W1t, {
                    "data-menu-migrated": !0,
                    navId: "user-profile-widget-context-menu",
                    onClose: () => {
                        (0, d.Z_)(), t()
                    },
                    onSelect: () => {},
                    "aria-label": h.intl.string(h.t.xpSHSk),
                    className: A.MK,
                    children: (0, i.jsxs)(c.rXV, {
                        children: [s, (0, i.jsx)(c.Drp, {
                            id: "remove-widget",
                            label: h.intl.string(h.t.Mm07Yc),
                            action: o,
                            color: "danger",
                            icon: c.ucK,
                            leadingAccessory: {
                                type: "icon",
                                icon: c.ucK
                            }
                        })]
                    })
                })
            },
            children: t
        })
    }