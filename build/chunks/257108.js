/** Chunk was on web.js **/
/** chunk id: 257108, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => E
});
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    o = n(311907),
    s = n(990078),
    l = n(397927),
    c = n(793574),
    u = n(688810),
    d = n(135621),
    f = n(287809),
    p = n(927578),
    _ = n(48862),
    h = n(652215),
    m = n(985018),
    g = n(587590);

function E(e) {
    var t, n;
    let {
        type: i,
        textValue: E,
        maxCharacterCount: y,
        showRemainingCharsAfterCount: b,
        className: O
    } = e, v = (0, o.bG)([f.default], () => p.Ay.canUseIncreasedMessageLength(f.default.getCurrentUser())), A = (0, d.A)(), I = null != y ? y : A, S = null != (t = null != b ? b : y) ? t : A / 10, T = E.length, C = null != i.upsellLongMessages && (null != T ? T : 0) > h.uvi && v, N = null != i.upsellLongMessages && !v, w = I - T, R = w > S, P = 0 === w ? m.intl.string(m.t.tU6YQ7) : w > 0 ? m.intl.formatToPlainString(m.t.qH8uFW, {
        count: w
    }) : m.intl.string(m.t.YSRIqa), {
        analyticsLocations: D
    } = (0, u.Ay)(c.A.CHARACTER_COUNT);
    if (!(C && w >= 0 || !R || N && !R)) return null;
    let L = w >= 0;
    return (0, r.jsx)(u.f5, {
        value: D,
        children: (0, r.jsxs)("div", {
            className: a()(O, g.Dq),
            children: [(0, r.jsxs)("div", {
                className: g.SW,
                children: [C && L ? (0, r.jsx)(s.m, {
                    text: m.intl.formatToPlainString(m.t.vcvHa0, {
                        maxLength: I
                    }),
                    position: "top",
                    children: (0, r.jsx)(l.tvc, {
                        size: "md",
                        color: "currentColor",
                        className: g.y
                    })
                }) : null, R ? null : (0, r.jsx)(s.m, {
                    text: P,
                    position: "top",
                    children: (0, r.jsx)(l.Text, {
                        variant: "text-sm/semibold",
                        tabularNumbers: !0,
                        "aria-hidden": !0,
                        color: L ? "text-default" : "text-feedback-critical",
                        children: w
                    })
                })]
            }), (0, r.jsx)(l.AC4, {
                children: m.intl.format(m.t.qH8uFW, {
                    count: w
                })
            }), N && !R ? (0, r.jsx)(_.A, {
                className: g.UX,
                iconOnly: (null == (n = i.upsellLongMessages) ? void 0 : n.iconOnly) || !1,
                remaining: w
            }) : null]
        })
    })
}