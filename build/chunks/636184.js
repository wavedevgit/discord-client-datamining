/** chunk id: 636184 params = (module,exports,require) **/
n.d(t, {
    h: () => E
});
var i = n(627968),
    r = n(64700),
    a = n(503698),
    s = n.n(a),
    l = n(158954),
    o = n(311907),
    c = n(582754),
    d = n(397927),
    u = n(308528),
    _ = n(854627),
    m = n(779733),
    p = n(954571),
    A = n(975571),
    g = n(427262),
    f = n(326084),
    h = n(851746),
    b = n(652215),
    x = n(985018),
    R = n(494025),
    C = n(299148);
let N = e => {
        let {
            recipient: t,
            status: n,
            onClose: r
        } = e, {
            avatarSrc: a,
            eventHandlers: l
        } = (0, _.A)({
            userId: t?.id,
            size: d._3J.SIZE_56
        }), o = g.Ay.getName(t), c = n === f.o.FAIL;
        return (0, i.jsxs)("div", {
            className: R.w4,
            children: [(0, i.jsx)(d.euF, {
                imageClassName: s()({
                    [R.jN]: c
                }),
                src: a,
                "aria-label": o,
                size: d._3J.SIZE_32,
                ...l
            }), c ? (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)(d.Text, {
                    className: R.E0,
                    variant: "text-md/medium",
                    color: "text-strong",
                    children: o
                }), (0, i.jsx)(d.Text, {
                    variant: "text-md/medium",
                    className: R.nT,
                    color: "text-strong",
                    children: x.intl.format(x.t.RO3T4B, {
                        userName: o
                    })
                })]
            }) : (0, i.jsx)(d.Text, {
                variant: "text-md/medium",
                className: R.Pm,
                color: "text-strong",
                children: o
            }), (0, i.jsx)(d.Button, {
                variant: "secondary",
                size: "sm",
                text: x.intl.string(x.t["g33r/P"]),
                icon: d.oyn,
                onClick: () => {
                    var e;
                    return e = t.id, void((0, m.default)(), u.A.openPrivateChannel({
                        recipientIds: e
                    }), r())
                }
            })]
        })
    },
    E = e => {
        let {
            transitionState: t,
            results: n,
            onClose: a,
            isReminderConfirmation: s
        } = e, u = (0, o.bG)([h.A], () => h.A.getReferralsRemaining());
        p.default.track(b.HAw.REFERRAL_PROGRAM_SHARE_CTA_CLICKED);
        let {
            reducedMotion: _
        } = r.useContext(c.CZ);
        return null === u ? (0, i.jsx)(d.y$y, {}) : (0, i.jsx)(l.ExpressiveModal, {
            graphic: _.enabled ? {
                src: C.A,
                type: "image"
            } : {
                rive: d.lBW,
                type: "rive"
            },
            gradientColor: "nitro-pink",
            title: 0 === n.filter(e => e.status === f.o.SUCCESS).length ? x.intl.string(x.t["7VBEue"]) : !0 === s ? x.intl.string(x.t.GP5lbq) : x.intl.string(x.t.tKCltd),
            subtitle: !0 === s ? x.intl.format(x.t["4gJJfD"], {
                helpdeskArticle: A.A.getArticleURL(b.MVz.REFERRAL_PROGRAM)
            }) : x.intl.format(x.t.AwGSWl, {
                helpdeskArticle: A.A.getArticleURL(b.MVz.REFERRAL_PROGRAM)
            }),
            onClose: a,
            transitionState: t,
            children: (0, i.jsx)("div", {
                className: R.Hz,
                children: n.map(e => (0, i.jsx)(N, {
                    recipient: e.recipient,
                    status: e.status,
                    onClose: a
                }, e.recipient.id))
            })
        })
    }