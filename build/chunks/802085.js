/** chunk id: 802085 params = (module,exports,require) **/
n.d(t, {
    A: () => N
});
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(877413),
    o = n.n(r),
    c = n(311907),
    d = n(397927),
    u = n(843472),
    h = n(986692),
    m = n(93474),
    A = n(975571),
    g = n(465364),
    _ = n(986350),
    p = n(860227),
    f = n(291812),
    E = n(449859),
    C = n(652215),
    x = n(985018),
    S = n(147860),
    I = n(334211),
    T = n(992595);
let v = l.memo(function(e) {
        let {
            message: t,
            notice: n,
            compact: l = !1,
            onDismiss: a
        } = e;
        return (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsxs)("div", {
                className: s()(S.K1, {
                    [S.oE]: l
                }),
                children: [(0, i.jsx)("div", {
                    className: S.Oz,
                    children: (0, i.jsx)(d.lmn, {
                        size: "xs",
                        color: "currentColor",
                        className: S.F_
                    })
                }), (0, i.jsx)("div", {
                    className: S.jC,
                    children: (0, i.jsx)(d.Text, {
                        variant: "text-sm/normal",
                        color: "interactive-text-default",
                        children: (0, g.Tz)(n, void 0, t.channel_id)
                    })
                })]
            }), (0, i.jsx)("div", {
                className: s()(S.ah, {
                    [S.oE]: l
                }),
                children: (0, i.jsx)(_.A, {
                    message: t,
                    onDeleteMessage: a,
                    children: (0, i.jsx)(d.Text, {
                        variant: "text-xs/normal",
                        color: "interactive-text-default",
                        tag: "span",
                        className: S.C2,
                        children: x.intl.format(x.t["Nd3Gh+"], {
                            helpUrl: A.A.getArticleURL(C.MVz.GUILD_AUTOMOD_BLOCKED_MESSAGE)
                        })
                    })
                })
            })]
        })
    }),
    N = l.memo(function(e) {
        let {
            className: t,
            compact: n,
            message: a,
            children: r,
            content: d,
            onUpdate: A
        } = e, g = a.editedTimestamp?.toString(), _ = l.useRef(!1), C = (0, c.bG)([m.A], () => m.A.getMessage(a.id), [a.id]), N = l.useCallback(() => {
            C?.isBlockedEdit ? (0, h.j)(a.id) : u.A.deleteMessage(a.channel_id, a.id, !0)
        }, [a, C]);
        return l.useLayoutEffect(() => {
            _.current ? null != A && A() : _.current = !0
        }, [A, a.content, d, g, r]), (0, i.jsxs)("div", {
            id: (0, p.CJ)(a),
            className: s()(t, T.PT, {
                [I.BK]: !0,
                [I.nB]: "rtl" === o()(a.content),
                [S.Dy]: C?.isBlockedEdit,
                [S.bv]: !C?.isBlockedEdit
            }),
            children: [r ?? (0, f._A)(a, d), C?.isBlockedEdit && null != a.timestamp && (0, i.jsxs)(i.Fragment, {
                children: [" ", (0, i.jsx)(E.A, {
                    timestamp: a.timestamp,
                    isEdited: !0,
                    isInline: !1,
                    children: (0, i.jsxs)("span", {
                        className: I.oh,
                        children: ["(", x.intl.string(x.t.Z7eEx9), ")"]
                    })
                })]
            }), (0, i.jsx)(v, {
                notice: C?.errorMessage ?? x.intl.string(x.t.zQ69pv),
                message: a,
                compact: n,
                onDismiss: N
            })]
        })
    }, f.sP)