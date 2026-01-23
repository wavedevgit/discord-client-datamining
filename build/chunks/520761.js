/** Chunk was on 47841 **/
/** chunk id: 520761, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => h
}), n(228524);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(990078),
    o = n(397927),
    c = n(599119),
    d = n(374084),
    u = n(734057),
    g = n(486020),
    m = n(199940),
    p = n(132514),
    f = n(985018),
    b = n(659233);
let h = function(e) {
    let {
        guildId: t,
        resourceChannel: l,
        index: h,
        onDragComplete: x,
        onDragStart: j,
        onDragReset: _
    } = e, {
        title: O,
        channelId: v,
        description: y
    } = l, A = u.A.getChannel(v), E = null;
    null != A && (0, d.Yt)(A) || (E = f.intl.string(f.t.kTdL8X));
    let N = null == y || 0 === y.length,
        S = g.Ay.getResourceChannelIconURL({
            channelId: l.channelId,
            icon: l.icon
        }),
        {
            drag: I,
            dragSourcePosition: T,
            drop: C,
            setIsDraggable: P
        } = (0, c.A)({
            type: "RESOURCE_CHANNEL",
            optionId: l.channelId,
            index: h,
            onDragStart: j,
            onDragComplete: x,
            onDragReset: _
        }),
        w = i.useCallback(e => {
            (0, m.z4)(l.channelId, e)
        }, [l.channelId]),
        R = i.useCallback((e, n) => {
            let r = p.A.getSettings();
            null != r && ((0, m.z4)(l.channelId, e), (0, m.W5)(t, r).then(() => {
                (0, m.E0)(t, e.channelId, n)
            }))
        }, [t, l]),
        D = i.useCallback(() => (0, o.mMO)(async () => {
            let {
                default: e
            } = await n.e("36354").then(n.bind(n, 983161));
            return n => {
                var i, s;
                return (0, r.jsx)(e, (i = function(e) {
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
                }({}, n), s = s = {
                    guildId: t,
                    resourceChannel: l,
                    onSave: w,
                    onDelete: () => (0, m.XD)(l.channelId),
                    onIconUpload: R
                }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(s)) : (function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        n.push.apply(n, r)
                    }
                    return n
                })(Object(s)).forEach(function(e) {
                    Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(s, e))
                }), i))
            }
        }), [t, l, w, R]);
    return null == A ? null : (0, r.jsxs)("div", {
        className: b.l5,
        children: [(0, r.jsxs)("div", {
            className: s()(b.Km, {
                [b.A]: null != T && h < T,
                [b.Ze]: null != T && h > T,
                [b._t]: null != E
            }),
            ref: e => {
                I(C(e))
            },
            children: [(0, r.jsx)("div", {
                className: b.cK,
                onMouseEnter: () => P(!0),
                onMouseLeave: () => P(!1),
                children: (0, r.jsx)(o.WP0, {
                    size: "xs",
                    color: "currentColor",
                    className: b.co
                })
            }), null != S && (0, r.jsx)("div", {
                className: b.P0,
                children: (0, r.jsx)("img", {
                    src: S,
                    className: b.Kk,
                    width: 32,
                    height: 32,
                    alt: "",
                    "aria-hidden": !0
                })
            }), (0, r.jsxs)("div", {
                className: b.DP,
                children: [(0, r.jsx)(o.Text, {
                    className: b.qj,
                    variant: "text-md/semibold",
                    color: "text-strong",
                    children: O
                }), !N && (0, r.jsx)(o.Text, {
                    className: b.ur,
                    variant: "text-xs/medium",
                    color: "text-muted",
                    lineClamp: 1,
                    children: y
                })]
            }), (0, r.jsx)(a.m, {
                text: f.intl.string(f.t.bt75uw),
                children: (0, r.jsx)(o.K0, {
                    icon: o.R2l,
                    size: "sm",
                    variant: "primary",
                    onClick: D,
                    "aria-label": f.intl.string(f.t.bt75uw)
                })
            })]
        }), null != E && (0, r.jsx)(o.Text, {
            variant: "text-xs/medium",
            color: "text-feedback-critical",
            children: E
        })]
    })
}