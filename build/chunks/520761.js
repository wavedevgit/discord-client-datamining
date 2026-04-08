/** chunk id: 520761 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => p
});
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(990078),
    o = n(397927),
    d = n(599119),
    c = n(374084),
    u = n(734057),
    m = n(486020),
    g = n(199940),
    x = n(132514),
    h = n(985018),
    _ = n(927548);
let p = function(e) {
    let {
        guildId: t,
        resourceChannel: l,
        index: p,
        onDragComplete: A,
        onDragStart: f,
        onDragReset: j
    } = e, {
        title: N,
        channelId: E,
        description: C
    } = l, T = u.A.getChannel(E), I = null;
    null != T && (0, c.Yt)(T) || (I = h.intl.string(h.t.kTdL8X));
    let b = null == C || 0 === C.length,
        v = m.Ay.getResourceChannelIconURL({
            channelId: l.channelId,
            icon: l.icon
        }),
        {
            drag: S,
            dragSourcePosition: y,
            drop: R,
            setIsDraggable: O
        } = (0, d.A)({
            type: "RESOURCE_CHANNEL",
            optionId: l.channelId,
            index: p,
            onDragStart: f,
            onDragComplete: A,
            onDragReset: j
        }),
        G = s.useCallback(e => {
            (0, g.z4)(l.channelId, e)
        }, [l.channelId]),
        L = s.useCallback((e, n) => {
            let i = x.A.getSettings();
            null != i && ((0, g.z4)(l.channelId, e), (0, g.W5)(t, i).then(() => {
                (0, g.E0)(t, e.channelId, n)
            }))
        }, [t, l]),
        D = s.useCallback(() => (0, o.mMO)(async () => {
            let {
                default: e
            } = await n.e("36354").then(n.bind(n, 983161));
            return n => (0, i.jsx)(e, {
                ...n,
                guildId: t,
                resourceChannel: l,
                onSave: G,
                onDelete: () => (0, g.XD)(l.channelId),
                onIconUpload: L
            })
        }), [t, l, G, L]);
    return null == T ? null : (0, i.jsxs)("div", {
        className: _.l5,
        children: [(0, i.jsxs)("div", {
            className: r()(_.Km, {
                [_.A]: null != y && p < y,
                [_.Ze]: null != y && p > y,
                [_._t]: null != I
            }),
            ref: e => {
                S(R(e))
            },
            children: [(0, i.jsx)("div", {
                className: _.cK,
                onMouseEnter: () => O(!0),
                onMouseLeave: () => O(!1),
                children: (0, i.jsx)(o.WP0, {
                    size: "xs",
                    color: "currentColor",
                    className: _.co
                })
            }), null != v && (0, i.jsx)("div", {
                className: _.P0,
                children: (0, i.jsx)("img", {
                    src: v,
                    className: _.Kk,
                    width: 32,
                    height: 32,
                    alt: "",
                    "aria-hidden": !0
                })
            }), (0, i.jsxs)("div", {
                className: _.DP,
                children: [(0, i.jsx)(o.Text, {
                    className: _.qj,
                    variant: "text-md/semibold",
                    color: "text-strong",
                    children: N
                }), !b && (0, i.jsx)(o.Text, {
                    className: _.ur,
                    variant: "text-xs/medium",
                    color: "text-muted",
                    lineClamp: 1,
                    children: C
                })]
            }), (0, i.jsx)(a.m, {
                text: h.intl.string(h.t.bt75uw),
                children: (0, i.jsx)(o.K0, {
                    icon: o.R2l,
                    size: "sm",
                    variant: "primary",
                    onClick: D,
                    "aria-label": h.intl.string(h.t.bt75uw)
                })
            })]
        }), null != I && (0, i.jsx)(o.Text, {
            variant: "text-xs/medium",
            color: "text-feedback-critical",
            children: I
        })]
    })
}