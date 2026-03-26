/** chunk id: 130802 params = (module,exports,require) **/
"use strict";
n.d(t, {
    u5: () => N,
    zd: () => b
});
var i, s = n(627968),
    l = n(64700),
    r = n(311907),
    a = n(342494),
    o = n(397927),
    c = n(827827),
    d = n(253932),
    u = n(461213),
    h = n(481045),
    A = n(536482),
    m = n(985018),
    p = n(373431),
    g = n(233732);

function _(e) {
    let {
        closePopout: t
    } = e;
    return (0, s.jsx)("div", {
        "data-button-hoisted-classname-wrapper": !0,
        className: p.K2,
        children: (0, s.jsx)(o.Button, {
            variant: "primary",
            size: "sm",
            text: m.intl.string(A.default.Poezn1),
            onClick: () => {
                t(), (0, c.A)({
                    nextStatus: o.clD.ONLINE
                })
            },
            fullWidth: !0
        })
    })
}

function f(e) {
    let {
        showCurrentGame: t,
        shouldShowStatus: n = !1
    } = e, i = (0, r.bG)([u.A], () => u.A.getStatus());
    return (0, s.jsxs)("div", {
        className: p.E3,
        children: [(0, s.jsxs)("div", {
            className: p.fu,
            children: [(0, s.jsx)(o.Text, {
                variant: "text-sm/medium",
                color: "text-strong",
                children: m.intl.string(A.default.WhdCGP)
            }), n && (0, s.jsxs)("div", {
                className: p.$v,
                children: [(0, s.jsx)(o.nW6, {
                    status: o.clD.ONLINE,
                    size: 8
                }), (0, s.jsx)(o.Text, {
                    variant: "text-xs/normal",
                    color: "text-subtle",
                    children: i === o.clD.INVISIBLE ? m.intl.string(A.default.a3AofS) : m.intl.string(m.t.WbGtnH)
                })]
            })]
        }), (0, s.jsx)(o.dOG, {
            onChange: e => {
                d.tz.updateSetting(e), n && (0, c.A)({
                    nextStatus: e ? o.clD.ONLINE : o.clD.INVISIBLE
                })
            },
            checked: t
        })]
    })
}

function x(e) {
    let {
        children: t
    } = e, n = (0, l.useRef)(null);
    return (0, o.tjt)(n), (0, s.jsx)("div", {
        className: p.iE,
        ref: n,
        children: (0, s.jsx)("div", {
            className: p.Qs,
            children: t
        })
    })
}

function C(e) {
    let {
        closePopout: t
    } = e, n = d.tz.useSetting();
    return (0, s.jsxs)(x, {
        children: [(0, s.jsx)(f, {
            showCurrentGame: n
        }), (0, s.jsx)(o.Text, {
            variant: "text-sm/normal",
            color: "text-subtle",
            children: m.intl.string(A.default["7cfFob"])
        }), (0, s.jsx)(o.cGx, {
            className: p.yF
        }), (0, s.jsx)(h.qA, {
            onClosePopout: t
        })]
    })
}

function E(e) {
    let {
        closePopout: t
    } = e;
    return (0, s.jsxs)(x, {
        children: [(0, s.jsxs)(o.BJc, {
            align: "start",
            gap: 0,
            style: {
                marginBottom: 8
            },
            children: [(0, s.jsx)(o.Heading, {
                variant: "heading-sm/semibold",
                color: "text-strong",
                className: p._M,
                children: m.intl.string(A.default["5YsmGI"])
            }), (0, s.jsxs)("div", {
                className: p.$v,
                children: [(0, s.jsx)(o.nW6, {
                    status: o.clD.ONLINE,
                    size: 8
                }), (0, s.jsx)(o.Text, {
                    variant: "text-xs/normal",
                    color: "text-subtle",
                    children: m.intl.string(A.default.U8MFdR)
                })]
            })]
        }), (0, s.jsx)(o.Text, {
            variant: "text-sm/normal",
            color: "text-subtle",
            children: m.intl.string(A.default.Yl0mh4)
        }), (0, s.jsx)(_, {
            closePopout: t
        })]
    })
}

function I(e) {
    let {
        closePopout: t
    } = e, n = d.tz.useSetting();
    return (0, s.jsxs)(x, {
        children: [(0, s.jsx)(f, {
            showCurrentGame: n,
            shouldShowStatus: !0
        }), (0, s.jsx)(o.Text, {
            variant: "text-sm/normal",
            color: "text-subtle",
            children: m.intl.string(A.default["7cfFob"])
        }), (0, s.jsx)(o.cGx, {
            className: p.yF
        }), (0, s.jsx)(h.qA, {
            onClosePopout: t
        })]
    })
}
var N = ((i = {})[i.ActivityNux = 0] = "ActivityNux", i[i.StatusNux = 1] = "StatusNux", i[i.ActivityAndStatusNux = 2] = "ActivityAndStatusNux", i[i.Activity = 3] = "Activity", i[i.Status = 4] = "Status", i[i.ActivityAndStatus = 5] = "ActivityAndStatus", i);

function b(e) {
    let {
        showPopout: t,
        popoutState: n,
        handleClose: i,
        popoutTargetRef: r,
        children: u
    } = e, [p, _] = (0, l.useState)(n), f = (0, l.useRef)(null), x = function(e) {
        if (null === e) return null;
        switch (e) {
            case 0:
                return {
                    type: "popover", title: m.intl.string(A.default.vxVbGP), body: [m.intl.string(A.default["7cfFob"])], action: {
                        text: m.intl.string(A.default.k4tCg2),
                        onClick: () => {
                            d.tz.updateSetting(!0)
                        }
                    }, textLink: {
                        text: m.intl.string(m.t["ZrN+DT"]),
                        onClick: h.L7
                    }
                };
            case 1:
                return {
                    type: "popover", title: m.intl.string(A.default.qKDqet), body: [m.intl.string(A.default.Yl0mh4)], action: {
                        text: m.intl.string(A.default.Poezn1),
                        onClick: () => {
                            (0, c.A)({
                                nextStatus: o.clD.ONLINE
                            })
                        }
                    }
                };
            case 2:
                return {
                    type: "popover", title: m.intl.string(A.default["6cA8HZ"]), body: [m.intl.string(A.default["7cfFob"])], action: {
                        text: m.intl.string(A.default.k4tCg2),
                        onClick: () => {
                            d.tz.updateSetting(!0), (0, c.A)({
                                nextStatus: o.clD.ONLINE
                            })
                        }
                    }, textLink: {
                        text: m.intl.string(m.t["ZrN+DT"]),
                        onClick: h.L7
                    }
                };
            case 3:
                return {
                    type: "popout", children: C
                };
            case 4:
                return {
                    type: "popout", children: E
                };
            case 5:
                return {
                    type: "popout", children: I
                };
            default:
                return null
        }
    }(p), N = (0, l.useRef)(t);
    if ((0, l.useEffect)(() => {
            t && !N.current && _(n), t !== N.current && (N.current = t)
        }, [n, t]), null == x || !t) return u;
    if ("popover" === x.type) {
        let {
            action: e,
            title: t,
            body: n,
            textLink: l
        } = x;
        return (0, s.jsxs)(s.Fragment, {
            children: [(0, s.jsx)(a.AM, {
                targetElementRef: r,
                shouldShow: !0,
                position: "top",
                align: "center",
                onRequestClose: i,
                title: t,
                body: n,
                textLink: l,
                gradientColor: "purple",
                graphic: {
                    type: "image",
                    src: g.A
                },
                actions: [{
                    ...e,
                    onClick: t => {
                        e.onClick?.(t), i()
                    }
                }]
            }), u]
        })
    }
    let {
        children: b
    } = x;
    return (0, s.jsx)(o.YNO, {
        targetElementRef: f,
        shouldShow: !0,
        spacing: 10,
        position: "top",
        align: "left",
        renderPopout: e => {
            let {
                closePopout: t
            } = e;
            return (0, s.jsx)(b, {
                closePopout: t
            })
        },
        onRequestClose: i,
        children: () => (0, s.jsx)(o.DUT, {
            innerRef: f,
            onClick: i,
            children: u
        })
    })
}