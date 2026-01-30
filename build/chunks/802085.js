/** Chunk was on 1113 **/
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
    h = n(986692),
    p = n(93474),
    g = n(975571),
    f = n(465364),
    m = n(986350),
    b = n(860227),
    A = n(291812),
    y = n(449859),
    O = n(652215),
    _ = n(985018),
    j = n(397405),
    x = n(679740),
    v = n(206314);
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
                        children: (0, f.Tz)(n, void 0, t.channel_id)
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
                        children: _.intl.format(_.t["Nd3Gh+"], {
                            helpUrl: g.A.getArticleURL(O.MVz.GUILD_AUTOMOD_BLOCKED_MESSAGE)
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
            children: g,
            content: f,
            onUpdate: m
        } = e, O = null == (n = u.editedTimestamp) ? void 0 : n.toString(), C = l.useRef(!1), S = (0, c.bG)([p.A], () => p.A.getMessage(u.id), [u.id]), I = l.useCallback(() => {
            (null == S ? void 0 : S.isBlockedEdit) ? (0, h.j)(u.id) : d.A.deleteMessage(u.channel_id, u.id, !0)
        }, [u, S]);
        return l.useLayoutEffect(() => {
            C.current ? null != m && m() : C.current = !0
        }, [m, u.content, f, O, g]), (0, r.jsxs)("div", {
            id: (0, b.CJ)(u),
            className: s()(i, v.PT, {
                [x.BK]: !0,
                [x.nB]: "rtl" === o()(u.content),
                [j.Dy]: null == S ? void 0 : S.isBlockedEdit,
                [j.bv]: !(null == S ? void 0 : S.isBlockedEdit)
            }),
            children: [null != g ? g : (0, A._A)(u, f), (null == S ? void 0 : S.isBlockedEdit) && null != u.timestamp && (0, r.jsxs)(r.Fragment, {
                children: [" ", (0, r.jsx)(y.A, {
                    timestamp: u.timestamp,
                    isEdited: !0,
                    isInline: !1,
                    children: (0, r.jsxs)("span", {
                        className: x.oh,
                        children: ["(", _.intl.string(_.t.Z7eEx9), ")"]
                    })
                })]
            }), (0, r.jsx)(E, {
                notice: null != (t = null == S ? void 0 : S.errorMessage) ? t : _.intl.string(_.t.zQ69pv),
                message: u,
                compact: a,
                onDismiss: I
            })]
        })
    }, A.sP)