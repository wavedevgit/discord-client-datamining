/** chunk id: 613491 params = (module,exports,require) **/
n.d(t, {
    A: () => h
});
var i = n(627968);
n(64700);
var l = n(503698),
    r = n.n(l),
    s = n(397927),
    a = n(935649),
    o = n(847599),
    c = n(734057),
    u = n(309010),
    d = n(849736),
    _ = n(354583),
    E = n(366098),
    A = n(418208),
    T = n(985018),
    I = n(826006);

function N(e) {
    if (!e && (0, A.Cf)()) return void a.A.showAgeVerificationGetStartedModal({
        entryPoint: o.q1.STAGE_CHANNEL_RAISE_HAND
    });
    let t = u.A.getVoiceChannelId();
    if (null == t) return;
    let n = c.A.getChannel(t);
    null != n && (0, d.e7)(n, e)
}

function p(e) {
    let {
        channelId: t
    } = e, n = (0, E.D3)(t) ?? 0, l = (0, E.Xk)(t) ?? 0;
    return n > 0 && l > 0 ? (0, i.jsx)("div", {
        className: I.Z5,
        children: (0, i.jsx)("div", {
            className: r()(I.qQ, I.lN),
            children: T.intl.string(T.t.xlJRfv)
        })
    }) : n > 0 ? (0, i.jsx)("div", {
        className: I.Z5,
        children: (0, i.jsx)("div", {
            className: r()(I.qQ, I.lN),
            children: T.intl.string(T.t.WYad9Z)
        })
    }) : l > 0 ? (0, i.jsx)("div", {
        className: I.Z5,
        children: (0, i.jsx)("div", {
            className: r()(I.qQ, I.lN),
            children: T.intl.string(T.t.eHq2OF)
        })
    }) : null
}

function h() {
    let e = (0, _.A)();
    return null == e ? null : (0, i.jsxs)(s.$Td, {
        className: I.kL,
        color: s.Hv$.DEFAULT,
        children: [T.intl.string(T.t.Ul1RJQ), (0, i.jsx)(p, {
            channelId: e.id
        }), (0, i.jsxs)(s.ButtonGroup, {
            size: "sm",
            className: I.GC,
            children: [(0, i.jsx)(s.Button, {
                variant: "overlay-primary",
                text: T.intl.string(T.t.MpO0px),
                onClick: () => N(!1)
            }), (0, i.jsx)(s.Button, {
                variant: "secondary",
                onClick: () => N(!0),
                text: T.intl.string(T.t["1YDv7a"])
            })]
        })]
    })
}