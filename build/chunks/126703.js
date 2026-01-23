/** Chunk was on 41917 **/
/** chunk id: 126703, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    default: () => b
});
var r = n(627968);
n(64700);
var o = n(397927),
    s = n(889058),
    i = n(710656),
    a = n(218390),
    l = n(13457),
    c = n(51937),
    d = n(949653),
    p = n(25765),
    u = n(652215),
    f = n(689588);

function b(e) {
    let {
        transitionState: t,
        onClose: n,
        analyticsLocation: b
    } = e, {
        slide: g,
        gotoNext: _,
        gotoError: h,
        handleWaitingForConnection: x,
        handleAuthToken: C,
        expectedCallbackState: m,
        callbackData: y
    } = (0, s.m)(b, u.fg2.XBOX);
    return (0, r.jsx)(o.EOs, {
        "data-migration-pending": !0,
        className: f.yl,
        transitionState: t,
        disableTrack: !0,
        parentComponent: "XboxLinkModal",
        children: (0, r.jsxs)(o.tN_, {
            activeSlide: g,
            width: 408,
            children: [(0, r.jsx)(o.q7S, {
                id: p.N.LANDING,
                children: (0, r.jsx)(l.A, {
                    onContinue: _,
                    onClose: n
                })
            }), (0, r.jsx)(o.q7S, {
                id: p.N.PRE_CONNECT,
                children: (0, r.jsx)(c.A, {
                    isWaitingForConnection: !1,
                    onWaitingForConnection: x,
                    onAuthToken: C,
                    onError: h,
                    onClose: n
                })
            }), (0, r.jsx)(o.q7S, {
                id: p.N.PRE_CONNECT_WAITING,
                children: (0, r.jsx)(c.A, {
                    isWaitingForConnection: !0,
                    expectedCallbackState: m,
                    onAuthToken: C,
                    onError: h,
                    onClose: n
                })
            }), (0, r.jsx)(o.q7S, {
                id: p.N.DISCORD_CONSENT,
                children: (0, r.jsx)(i.A, {
                    authToken: y,
                    onContinue: _,
                    onError: h,
                    onClose: n
                })
            }), (0, r.jsx)(o.q7S, {
                id: p.N.ERROR,
                children: (0, r.jsx)(a.A, {
                    onContinue: _,
                    onClose: n
                })
            }), (0, r.jsx)(o.q7S, {
                id: p.N.SUCCESS,
                children: (0, r.jsx)(d.A, {
                    onClose: n
                })
            })]
        })
    })
}