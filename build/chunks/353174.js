/** Chunk was on 26489 **/
/** chunk id: 353174, original params: e,t,i (module,exports,require) **/
i.d(t, {
    A: () => w
}), i(896048);
var s = i(627968);
i(64700);
var a = i(503698),
    r = i.n(a),
    l = i(284009),
    n = i.n(l),
    C = i(311907),
    d = i(990078),
    o = i(582754),
    c = i(397927),
    x = i(308528),
    p = i(398590),
    h = i(736653),
    f = i(854627),
    u = i(186111),
    _ = i(975571),
    j = i(427262),
    m = i(326084),
    g = i(851746),
    L = i(558450),
    y = i(614298);
i(232198);
var v = i(652215),
    A = i(985018),
    S = i(535828);
let b = e => {
        let {
            user: t,
            trialCreationResult: i,
            onClose: a
        } = e, {
            avatarSrc: l,
            eventHandlers: n
        } = (0, f.A)({
            userId: null == t ? void 0 : t.id,
            size: c._3J.SIZE_56
        }), C = j.Ay.getName(t), o = t.username !== C && i === m.o.SUCCESS, h = i === m.o.FAIL;
        return (0, s.jsxs)("div", {
            className: S.El,
            children: [(0, s.jsx)(c.euF, function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var i = null != arguments[t] ? arguments[t] : {},
                        s = Object.keys(i);
                    "function" == typeof Object.getOwnPropertySymbols && (s = s.concat(Object.getOwnPropertySymbols(i).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(i, e).enumerable
                    }))), s.forEach(function(t) {
                        var s;
                        s = i[t], t in e ? Object.defineProperty(e, t, {
                            value: s,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = s
                    })
                }
                return e
            }({
                imageClassName: r()({
                    [S.jN]: h
                }),
                src: l,
                "aria-label": C,
                size: c._3J.SIZE_56
            }, n)), (0, s.jsxs)("div", {
                className: S.Dp,
                children: [h ? (0, s.jsxs)(s.Fragment, {
                    children: [(0, s.jsx)(c.Text, {
                        className: S.E0,
                        variant: "text-md/medium",
                        children: C
                    }), (0, s.jsx)(c.Text, {
                        variant: "text-md/medium",
                        className: S.nT,
                        children: A.intl.format(A.t.RO3T4B, {
                            userName: C
                        })
                    })]
                }) : (0, s.jsx)(d.m, {
                    asContainer: !0,
                    text: A.intl.string(A.t.xkVQPN),
                    position: "right",
                    children: (0, s.jsx)(c.DUT, {
                        onClick: () => {
                            var e;
                            return e = t.id, void(u.A.hasLayers() && (0, p.jH)(), x.A.openPrivateChannel({
                                recipientIds: e
                            }), a())
                        },
                        className: S.t0,
                        children: (0, s.jsx)(c.Text, {
                            variant: "text-md/medium",
                            className: S.QC,
                            children: C
                        })
                    })
                }), o && (0, s.jsx)(c.Text, {
                    variant: "text-md/medium",
                    className: S.nT,
                    children: t.username
                })]
            })]
        })
    },
    w = e => {
        let {
            selectedUsers: t,
            trialCreationResult: i,
            onClose: a
        } = e, r = [...t].map(e => (0, s.jsx)(b, {
            user: e,
            trialCreationResult: i.get(e.id),
            onClose: a
        }, e.id)), l = (0, C.bG)([g.A], () => g.A.getReferralsRemaining());
        n()(null !== l, "Referrals remaining should not be null");
        let d = (0, h.DP)(),
            x = (0, o.qB)(d) ? y.A : L.A,
            p = A.intl.string(A.t.Pcb7KF),
            f = [...i.values()].filter(e => e === m.o.SUCCESS).length;
        return l > 0 && (p = A.intl.formatToPlainString(A.t.iWtOfC, {
            numReferrals: f
        })), 0 === f && (p = A.intl.string(A.t["7VBEue"])), (0, s.jsxs)("div", {
            className: S.Jc,
            children: [(0, s.jsx)(c.DUT, {
                onClick: a,
                className: S.cG,
                children: (0, s.jsx)(c.PGe, {
                    size: "custom",
                    width: 20,
                    height: 20
                })
            }), (0, s.jsx)(x, {
                className: S.nr
            }), (0, s.jsx)(c.Heading, {
                variant: "heading-lg/bold",
                className: S.R_,
                children: p
            }), (0, s.jsx)("div", {
                className: S.wj,
                children: r
            }), (0, s.jsx)(c.Text, {
                variant: "text-md/medium",
                children: A.intl.format(A.t.CZaMHn, {
                    days: 10,
                    helpdeskArticle: _.A.getArticleURL(v.MVz.REFERRAL_PROGRAM)
                })
            })]
        })
    }