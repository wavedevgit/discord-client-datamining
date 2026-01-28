/** Chunk was on 78528 **/
/** chunk id: 802085, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => C
});
var r = n(627968),
    l = n(64700),
    i = n(503698),
    s = n.n(i),
    a = n(877413),
    o = n.n(a),
    c = n(311907),
    u = n(397927),
    d = n(843472),
    p = n(986692),
    h = n(93474),
    f = n(975571),
    g = n(465364),
    m = n(986350),
    b = n(860227),
    A = n(291812),
    y = n(449859),
    _ = n(652215),
    O = n(985018),
    j = n(397405),
    v = n(679740),
    x = n(206314);
let E = l.memo(function(e) {
        let {
            message: t,
            notice: n,
            compact: l = !1,
            onDismiss: i
        } = e;
        return (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsxs)("div", {
                className: s()(j.K1, {
                    [j.oE]: l
                }),
                children: [(0, r.jsx)("div", {
                    className: j.Oz,
                    children: (0, r.jsx)(u.lmn, {
                        size: "xs",
                        color: "currentColor",
                        className: j.F_
                    })
                }), (0, r.jsx)("div", {
                    className: j.jC,
                    children: (0, r.jsx)(u.Text, {
                        variant: "text-sm/normal",
                        color: "interactive-text-default",
                        children: (0, g.Tz)(n, void 0, t.channel_id)
                    })
                })]
            }), (0, r.jsx)("div", {
                className: s()(j.ah, {
                    [j.oE]: l
                }),
                children: (0, r.jsx)(m.A, {
                    message: t,
                    onDeleteMessage: i,
                    children: (0, r.jsx)(u.Text, {
                        variant: "text-xs/normal",
                        color: "interactive-text-default",
                        tag: "span",
                        className: j.C2,
                        children: O.intl.format(O.t["Nd3Gh+"], {
                            helpUrl: f.A.getArticleURL(_.MVz.GUILD_AUTOMOD_BLOCKED_MESSAGE)
                        })
                    })
                })
            })]
        })
    }),
    C = l.memo(function(e) {
        var t, n;
        let {
            className: i,
            compact: a,
            message: u,
            children: f,
            content: g,
            onUpdate: m
        } = e, _ = null == (n = u.editedTimestamp) ? void 0 : n.toString(), C = l.useRef(!1), S = (0, c.bG)([h.A], () => h.A.getMessage(u.id), [u.id]), I = l.useCallback(() => {
            (null == S ? void 0 : S.isBlockedEdit) ? (0, p.j)(u.id) : d.A.deleteMessage(u.channel_id, u.id, !0)
        }, [u, S]);
        return l.useLayoutEffect(() => {
            C.current ? null != m && m() : C.current = !0
        }, [m, u.content, g, _, f]), (0, r.jsxs)("div", {
            id: (0, b.CJ)(u),
            className: s()(i, x.PT, {
                [v.BK]: !0,
                [v.nB]: "rtl" === o()(u.content),
                [j.Dy]: null == S ? void 0 : S.isBlockedEdit,
                [j.bv]: !(null == S ? void 0 : S.isBlockedEdit)
            }),
            children: [null != f ? f : (0, A._A)(u, g), (null == S ? void 0 : S.isBlockedEdit) && null != u.timestamp && (0, r.jsxs)(r.Fragment, {
                children: [" ", (0, r.jsx)(y.A, {
                    timestamp: u.timestamp,
                    isEdited: !0,
                    isInline: !1,
                    children: (0, r.jsxs)("span", {
                        className: v.oh,
                        children: ["(", O.intl.string(O.t.Z7eEx9), ")"]
                    })
                })]
            }), (0, r.jsx)(E, {
                notice: null != (t = null == S ? void 0 : S.errorMessage) ? t : O.intl.string(O.t.zQ69pv),
                message: u,
                compact: a,
                onDismiss: I
            })]
        })
    }, A.sP)