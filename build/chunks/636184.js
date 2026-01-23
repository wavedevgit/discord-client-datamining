/** Chunk was on web.js **/
/** chunk id: 636184, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    h: () => C
});
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(158954),
    l = n(311907),
    c = n(582754),
    u = n(397927),
    d = n(308528),
    f = n(854627),
    p = n(12901),
    _ = n(954571),
    h = n(975571),
    m = n(427262),
    g = n(326084),
    E = n(851746),
    y = n(652215),
    b = n(985018),
    O = n(185914),
    v = n(299148);

function A(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function I(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            A(e, t, n[t])
        })
    }
    return e
}
let S = (e, t) => {
        (0, p.default)(), d.A.openPrivateChannel({
            recipientIds: e
        }), t()
    },
    T = e => {
        let {
            recipient: t,
            status: n,
            onClose: i
        } = e, {
            avatarSrc: a,
            eventHandlers: o
        } = (0, f.A)({
            userId: null == t ? void 0 : t.id,
            size: u._3J.SIZE_56
        }), l = m.Ay.getName(t), c = n === g.o.FAIL;
        return (0, r.jsxs)("div", {
            className: O.w4,
            children: [(0, r.jsx)(u.euF, I({
                imageClassName: s()({
                    [O.jN]: c
                }),
                src: a,
                "aria-label": l,
                size: u._3J.SIZE_32
            }, o)), c ? (0, r.jsxs)(r.Fragment, {
                children: [(0, r.jsx)(u.Text, {
                    className: O.E0,
                    variant: "text-md/medium",
                    color: "text-strong",
                    children: l
                }), (0, r.jsx)(u.Text, {
                    variant: "text-md/medium",
                    className: O.nT,
                    color: "text-strong",
                    children: b.intl.format(b.t.RO3T4B, {
                        userName: l
                    })
                })]
            }) : (0, r.jsx)(u.Text, {
                variant: "text-md/medium",
                className: O.Pm,
                color: "text-strong",
                children: l
            }), (0, r.jsx)(u.Button, {
                variant: "secondary",
                size: "sm",
                text: b.intl.string(b.t["g33r/P"]),
                icon: u.oyn,
                onClick: () => S(t.id, i)
            })]
        })
    },
    C = e => {
        let {
            results: t,
            onClose: n,
            isReminderConfirmation: a
        } = e, s = (0, l.bG)([E.A], () => E.A.getReferralsRemaining());
        _.default.track(y.HAw.REFERRAL_PROGRAM_SHARE_CTA_CLICKED);
        let {
            reducedMotion: d
        } = i.useContext(c.CZ);
        if (null === s) return (0, r.jsx)(u.y$y, {});
        let f = () => d.enabled ? {
                src: v.A,
                type: "image"
            } : {
                rive: u.lBW,
                type: "rive"
            },
            p = () => 0 === t.filter(e => e.status === g.o.SUCCESS).length ? b.intl.string(b.t["7VBEue"]) : !0 === a ? b.intl.string(b.t.GP5lbq) : b.intl.string(b.t.tKCltd),
            m = () => !0 === a ? b.intl.format(b.t["4gJJfD"], {
                helpdeskArticle: h.A.getArticleURL(y.MVz.REFERRAL_PROGRAM)
            }) : b.intl.format(b.t.AwGSWl, {
                helpdeskArticle: h.A.getArticleURL(y.MVz.REFERRAL_PROGRAM)
            }),
            A = () => (0, r.jsx)("div", {
                className: O.Hz,
                children: t.map(e => (0, r.jsx)(T, {
                    recipient: e.recipient,
                    status: e.status,
                    onClose: n
                }, e.recipient.id))
            });
        return (0, r.jsx)(o.ExpressiveModal, {
            graphic: f(),
            gradientColor: "nitro-pink",
            title: p(),
            subtitle: m(),
            onClose: n,
            transitionState: o.ip4.ENTERED,
            children: A()
        })
    }