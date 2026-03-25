/** chunk id: 636184 params = (module,exports,require) **/
n.d(t, {
    h: () => x
});
var i = n(627968),
    a = n(64700),
    l = n(503698),
    r = n.n(l),
    s = n(158954),
    o = n(311907),
    c = n(582754),
    d = n(397927),
    u = n(308528),
    _ = n(854627),
    m = n(12901),
    A = n(954571),
    E = n(975571),
    I = n(427262),
    T = n(326084),
    f = n(851746),
    N = n(652215),
    g = n(985018),
    C = n(185914),
    p = n(299148);
let h = e => {
        let {
            recipient: t,
            status: n,
            onClose: a
        } = e, {
            avatarSrc: l,
            eventHandlers: s
        } = (0, _.A)({
            userId: t?.id,
            size: d._3J.SIZE_56
        }), o = I.Ay.getName(t), c = n === T.o.FAIL;
        return (0, i.jsxs)("div", {
            className: C.w4,
            children: [(0, i.jsx)(d.euF, {
                imageClassName: r()({
                    [C.jN]: c
                }),
                src: l,
                "aria-label": o,
                size: d._3J.SIZE_32,
                ...s
            }), c ? (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)(d.Text, {
                    className: C.E0,
                    variant: "text-md/medium",
                    color: "text-strong",
                    children: o
                }), (0, i.jsx)(d.Text, {
                    variant: "text-md/medium",
                    className: C.nT,
                    color: "text-strong",
                    children: g.intl.format(g.t.RO3T4B, {
                        userName: o
                    })
                })]
            }) : (0, i.jsx)(d.Text, {
                variant: "text-md/medium",
                className: C.Pm,
                color: "text-strong",
                children: o
            }), (0, i.jsx)(d.Button, {
                variant: "secondary",
                size: "sm",
                text: g.intl.string(g.t["g33r/P"]),
                icon: d.oyn,
                onClick: () => {
                    var e;
                    return e = t.id, void((0, m.default)(), u.A.openPrivateChannel({
                        recipientIds: e
                    }), a())
                }
            })]
        })
    },
    x = e => {
        let {
            transitionState: t,
            results: n,
            onClose: l,
            isReminderConfirmation: r
        } = e, u = (0, o.bG)([f.A], () => f.A.getReferralsRemaining());
        A.default.track(N.HAw.REFERRAL_PROGRAM_SHARE_CTA_CLICKED);
        let {
            reducedMotion: _
        } = a.useContext(c.CZ);
        return null === u ? (0, i.jsx)(d.y$y, {}) : (0, i.jsx)(s.ExpressiveModal, {
            graphic: _.enabled ? {
                src: p.A,
                type: "image"
            } : {
                rive: d.lBW,
                type: "rive"
            },
            gradientColor: "nitro-pink",
            title: 0 === n.filter(e => e.status === T.o.SUCCESS).length ? g.intl.string(g.t["7VBEue"]) : !0 === r ? g.intl.string(g.t.GP5lbq) : g.intl.string(g.t.tKCltd),
            subtitle: !0 === r ? g.intl.format(g.t["4gJJfD"], {
                helpdeskArticle: E.A.getArticleURL(N.MVz.REFERRAL_PROGRAM)
            }) : g.intl.format(g.t.AwGSWl, {
                helpdeskArticle: E.A.getArticleURL(N.MVz.REFERRAL_PROGRAM)
            }),
            onClose: l,
            transitionState: t,
            children: (0, i.jsx)("div", {
                className: C.Hz,
                children: n.map(e => (0, i.jsx)(h, {
                    recipient: e.recipient,
                    status: e.status,
                    onClose: l
                }, e.recipient.id))
            })
        })
    }