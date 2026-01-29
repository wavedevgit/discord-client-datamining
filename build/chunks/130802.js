/** Chunk was on 1113 **/
/** chunk id: 130802, original params: e,t,n (module,exports,require) **/
n.d(t, {
    u5: () => j,
    zd: () => v
}), n(896048);
var r, l = n(627968),
    i = n(64700),
    s = n(311907),
    a = n(342494),
    o = n(397927),
    c = n(827827),
    u = n(253932),
    d = n(461213),
    h = n(481045),
    p = n(536482),
    g = n(985018),
    f = n(761960),
    m = n(233732);

function b(e) {
    let {
        closePopout: t
    } = e;
    return (0, l.jsx)("div", {
        "data-button-hoisted-classname-wrapper": !0,
        className: f.K2,
        children: (0, l.jsx)(o.Button, {
            variant: "primary",
            size: "sm",
            text: g.intl.string(p.default.Poezn1),
            onClick: () => {
                t(), (0, c.A)({
                    nextStatus: o.clD.ONLINE
                })
            },
            fullWidth: !0
        })
    })
}

function A(e) {
    let {
        showCurrentGame: t,
        shouldShowStatus: n = !1
    } = e, r = (0, s.bG)([d.A], () => d.A.getStatus());
    return (0, l.jsxs)("div", {
        className: f.E3,
        children: [(0, l.jsxs)("div", {
            className: f.fu,
            children: [(0, l.jsx)(o.Text, {
                variant: "text-sm/medium",
                color: "text-strong",
                children: g.intl.string(p.default.WhdCGP)
            }), n && (0, l.jsxs)("div", {
                className: f.$v,
                children: [(0, l.jsx)(o.nW6, {
                    status: o.clD.ONLINE,
                    size: 8
                }), (0, l.jsx)(o.Text, {
                    variant: "text-xs/normal",
                    color: "text-subtle",
                    children: r === o.clD.INVISIBLE ? g.intl.string(p.default.a3AofS) : g.intl.string(g.t.WbGtnH)
                })]
            })]
        }), (0, l.jsx)(o.dOG, {
            onChange: e => {
                u.tz.updateSetting(e), n && (0, c.A)({
                    nextStatus: e ? o.clD.ONLINE : o.clD.INVISIBLE
                })
            },
            checked: t
        })]
    })
}

function y(e) {
    let {
        children: t
    } = e, n = (0, i.useRef)(null);
    return (0, o.tjt)(n), (0, l.jsx)("div", {
        className: f.iE,
        ref: n,
        children: (0, l.jsx)("div", {
            className: f.Qs,
            children: t
        })
    })
}

function O(e) {
    let {
        closePopout: t
    } = e, n = u.tz.useSetting();
    return (0, l.jsxs)(y, {
        children: [(0, l.jsx)(A, {
            showCurrentGame: n
        }), (0, l.jsx)(o.Text, {
            variant: "text-sm/normal",
            color: "text-subtle",
            children: g.intl.string(p.default["7cfFob"])
        }), (0, l.jsx)(o.cGx, {
            className: f.yF
        }), (0, l.jsx)(h.qA, {
            onClosePopout: t
        })]
    })
}

function _(e) {
    let {
        closePopout: t
    } = e;
    return (0, l.jsxs)(y, {
        children: [(0, l.jsxs)(o.BJc, {
            align: "start",
            gap: 0,
            style: {
                marginBottom: 8
            },
            children: [(0, l.jsx)(o.Heading, {
                variant: "heading-sm/semibold",
                color: "text-strong",
                className: f._M,
                children: g.intl.string(p.default["5YsmGI"])
            }), (0, l.jsxs)("div", {
                className: f.$v,
                children: [(0, l.jsx)(o.nW6, {
                    status: o.clD.ONLINE,
                    size: 8
                }), (0, l.jsx)(o.Text, {
                    variant: "text-xs/normal",
                    color: "text-subtle",
                    children: g.intl.string(p.default.U8MFdR)
                })]
            })]
        }), (0, l.jsx)(o.Text, {
            variant: "text-sm/normal",
            color: "text-subtle",
            children: g.intl.string(p.default.Yl0mh4)
        }), (0, l.jsx)(b, {
            closePopout: t
        })]
    })
}

function x(e) {
    let {
        closePopout: t
    } = e, n = u.tz.useSetting();
    return (0, l.jsxs)(y, {
        children: [(0, l.jsx)(A, {
            showCurrentGame: n,
            shouldShowStatus: !0
        }), (0, l.jsx)(o.Text, {
            variant: "text-sm/normal",
            color: "text-subtle",
            children: g.intl.string(p.default["7cfFob"])
        }), (0, l.jsx)(o.cGx, {
            className: f.yF
        }), (0, l.jsx)(h.qA, {
            onClosePopout: t
        })]
    })
}
var j = ((r = {})[r.ActivityNux = 0] = "ActivityNux", r[r.StatusNux = 1] = "StatusNux", r[r.ActivityAndStatusNux = 2] = "ActivityAndStatusNux", r[r.Activity = 3] = "Activity", r[r.Status = 4] = "Status", r[r.ActivityAndStatus = 5] = "ActivityAndStatus", r);

function v(e) {
    let {
        showPopout: t,
        popoutState: n,
        handleClose: r,
        popoutTargetRef: s,
        children: d
    } = e, [f, b] = (0, i.useState)(n), A = (0, i.useRef)(null), y = function(e) {
        if (null === e) return null;
        switch (e) {
            case 0:
                return {
                    type: "popover", title: g.intl.string(p.default.vxVbGP), body: [g.intl.string(p.default["7cfFob"])], action: {
                        text: g.intl.string(p.default.k4tCg2),
                        onClick: () => {
                            u.tz.updateSetting(!0)
                        }
                    }, textLink: {
                        text: g.intl.string(g.t["ZrN+DT"]),
                        onClick: h.L7
                    }
                };
            case 1:
                return {
                    type: "popover", title: g.intl.string(p.default.qKDqet), body: [g.intl.string(p.default.Yl0mh4)], action: {
                        text: g.intl.string(p.default.Poezn1),
                        onClick: () => {
                            (0, c.A)({
                                nextStatus: o.clD.ONLINE
                            })
                        }
                    }
                };
            case 2:
                return {
                    type: "popover", title: g.intl.string(p.default["6cA8HZ"]), body: [g.intl.string(p.default["7cfFob"])], action: {
                        text: g.intl.string(p.default.k4tCg2),
                        onClick: () => {
                            u.tz.updateSetting(!0), (0, c.A)({
                                nextStatus: o.clD.ONLINE
                            })
                        }
                    }, textLink: {
                        text: g.intl.string(g.t["ZrN+DT"]),
                        onClick: h.L7
                    }
                };
            case 3:
                return {
                    type: "popout", children: O
                };
            case 4:
                return {
                    type: "popout", children: _
                };
            case 5:
                return {
                    type: "popout", children: x
                };
            default:
                return null
        }
    }(f), j = (0, i.useRef)(t);
    if ((0, i.useEffect)(() => {
            t && !j.current && b(n), t !== j.current && (j.current = t)
        }, [n, t]), null == y || !t) return d;
    if ("popover" === y.type) {
        var v, E;
        let {
            action: e,
            title: t,
            body: n,
            textLink: i
        } = y;
        return (0, l.jsxs)(l.Fragment, {
            children: [(0, l.jsx)(a.AM, {
                targetElementRef: s,
                shouldShow: !0,
                position: "top",
                align: "center",
                onRequestClose: r,
                title: t,
                body: n,
                textLink: i,
                gradientColor: "purple",
                graphic: {
                    type: "image",
                    src: m.A
                },
                actions: [(v = function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))), r.forEach(function(t) {
                            var r;
                            r = n[t], t in e ? Object.defineProperty(e, t, {
                                value: r,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : e[t] = r
                        })
                    }
                    return e
                }({}, e), E = E = {
                    onClick: t => {
                        var n;
                        null == (n = e.onClick) || n.call(e, t), r()
                    }
                }, Object.getOwnPropertyDescriptors ? Object.defineProperties(v, Object.getOwnPropertyDescriptors(E)) : (function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        n.push.apply(n, r)
                    }
                    return n
                })(Object(E)).forEach(function(e) {
                    Object.defineProperty(v, e, Object.getOwnPropertyDescriptor(E, e))
                }), v)]
            }), d]
        })
    }
    let {
        children: C
    } = y;
    return (0, l.jsx)(o.YNO, {
        targetElementRef: A,
        shouldShow: !0,
        spacing: 10,
        position: "top",
        align: "left",
        renderPopout: e => {
            let {
                closePopout: t
            } = e;
            return (0, l.jsx)(C, {
                closePopout: t
            })
        },
        onRequestClose: r,
        children: () => (0, l.jsx)(o.DUT, {
            innerRef: A,
            onClick: r,
            children: d
        })
    })
}