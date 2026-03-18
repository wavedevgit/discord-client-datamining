/** chunk id: 613491 params = (module,exports,require) **/
"use strict";
n.d(e, {
    A: () => R
});
var i = n(627968);
n(64700);
var r = n(503698),
    s = n.n(r),
    l = n(397927),
    a = n(935649),
    o = n(847599),
    c = n(734057),
    u = n(309010),
    d = n(849736),
    E = n(354583),
    _ = n(366098),
    T = n(418208),
    A = n(985018),
    I = n(496447);

function N(t) {
    if (!t && (0, T.Cf)()) return void a.A.showAgeVerificationGetStartedModal({
        entryPoint: o.q1.STAGE_CHANNEL_RAISE_HAND
    });
    let e = u.A.getVoiceChannelId();
    if (null == e) return;
    let n = c.A.getChannel(e);
    null != n && (0, d.e7)(n, t)
}

function p(t) {
    let {
        channelId: e
    } = t, n = (0, _.D3)(e) ?? 0, r = (0, _.Xk)(e) ?? 0;
    return n > 0 && r > 0 ? (0, i.jsx)("div", {
        className: I.Z5,
        children: (0, i.jsx)("div", {
            className: s()(I.qQ, I.lN),
            children: A.intl.string(A.t.xlJRfv)
        })
    }) : n > 0 ? (0, i.jsx)("div", {
        className: I.Z5,
        children: (0, i.jsx)("div", {
            className: s()(I.qQ, I.lN),
            children: A.intl.string(A.t.WYad9Z)
        })
    }) : r > 0 ? (0, i.jsx)("div", {
        className: I.Z5,
        children: (0, i.jsx)("div", {
            className: s()(I.qQ, I.lN),
            children: A.intl.string(A.t.eHq2OF)
        })
    }) : null
}

function R() {
    let t = (0, E.A)();
    return null == t ? null : (0, i.jsxs)(l.$Td, {
        className: I.kL,
        color: l.Hv$.DEFAULT,
        children: [A.intl.string(A.t.Ul1RJQ), (0, i.jsx)(p, {
            channelId: t.id
        }), (0, i.jsxs)(l.ButtonGroup, {
            size: "sm",
            className: I.GC,
            children: [(0, i.jsx)(l.Button, {
                variant: "overlay-primary",
                text: A.intl.string(A.t.MpO0px),
                onClick: () => N(!1)
            }), (0, i.jsx)(l.Button, {
                variant: "secondary",
                onClick: () => N(!0),
                text: A.intl.string(A.t["1YDv7a"])
            })]
        })]
    })
}