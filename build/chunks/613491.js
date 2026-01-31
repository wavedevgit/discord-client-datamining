/** chunk id: 613491, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => p
});
var r = n(627968);
n(64700);
var i = n(503698),
    l = n.n(i),
    o = n(397927),
    a = n(935649),
    s = n(847599),
    c = n(734057),
    u = n(309010),
    E = n(849736),
    d = n(354583),
    _ = n(366098),
    A = n(418208),
    T = n(985018),
    I = n(496447);

function O(e) {
    if (!e && (0, A.Cf)()) return void a.A.showAgeVerificationGetStartedModal({
        entryPoint: s.q1.STAGE_CHANNEL_RAISE_HAND
    });
    let t = u.A.getVoiceChannelId();
    if (null == t) return;
    let n = c.A.getChannel(t);
    null != n && (0, E.e7)(n, e)
}

function N(e) {
    var t, n;
    let {
        channelId: i
    } = e, o = null != (t = (0, _.D3)(i)) ? t : 0, a = null != (n = (0, _.Xk)(i)) ? n : 0;
    return o > 0 && a > 0 ? (0, r.jsx)("div", {
        className: I.Z5,
        children: (0, r.jsx)("div", {
            className: l()(I.qQ, I.lN),
            children: T.intl.string(T.t.xlJRfv)
        })
    }) : o > 0 ? (0, r.jsx)("div", {
        className: I.Z5,
        children: (0, r.jsx)("div", {
            className: l()(I.qQ, I.lN),
            children: T.intl.string(T.t.WYad9Z)
        })
    }) : a > 0 ? (0, r.jsx)("div", {
        className: I.Z5,
        children: (0, r.jsx)("div", {
            className: l()(I.qQ, I.lN),
            children: T.intl.string(T.t.eHq2OF)
        })
    }) : null
}

function p() {
    let e = (0, d.A)();
    return null == e ? null : (0, r.jsxs)(o.$Td, {
        className: I.kL,
        color: o.Hv$.DEFAULT,
        children: [T.intl.string(T.t.Ul1RJQ), (0, r.jsx)(N, {
            channelId: e.id
        }), (0, r.jsxs)(o.ButtonGroup, {
            size: "sm",
            className: I.GC,
            children: [(0, r.jsx)(o.Button, {
                variant: "overlay-primary",
                text: T.intl.string(T.t.MpO0px),
                onClick: () => O(!1)
            }), (0, r.jsx)(o.Button, {
                variant: "secondary",
                onClick: () => O(!0),
                text: T.intl.string(T.t["1YDv7a"])
            })]
        })]
    })
}