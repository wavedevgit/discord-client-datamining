/** chunk id: 802085, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => S
});
var l = n(627968),
    r = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(877413),
    o = n.n(s),
    c = n(311907),
    u = n(397927),
    d = n(843472),
    h = n(986692),
    p = n(93474),
    f = n(975571),
    m = n(465364),
    g = n(986350),
    A = n(860227),
    b = n(291812),
    _ = n(449859),
    y = n(652215),
    v = n(985018),
    E = n(397405),
    O = n(679740),
    C = n(206314);
let x = r.memo(function(e) {
        let {
            message: t,
            notice: n,
            compact: r = !1,
            onDismiss: i
        } = e;
        return (0, l.jsxs)(l.Fragment, {
            children: [(0, l.jsxs)("div", {
                className: a()(E.K1, {
                    [E.oE]: r
                }),
                children: [(0, l.jsx)("div", {
                    className: E.Oz,
                    children: (0, l.jsx)(u.lmn, {
                        size: "xs",
                        color: "currentColor",
                        className: E.F_
                    })
                }), (0, l.jsx)("div", {
                    className: E.jC,
                    children: (0, l.jsx)(u.Text, {
                        variant: "text-sm/normal",
                        color: "interactive-text-default",
                        children: (0, m.Tz)(n, void 0, t.channel_id)
                    })
                })]
            }), (0, l.jsx)("div", {
                className: a()(E.ah, {
                    [E.oE]: r
                }),
                children: (0, l.jsx)(g.A, {
                    message: t,
                    onDeleteMessage: i,
                    children: (0, l.jsx)(u.Text, {
                        variant: "text-xs/normal",
                        color: "interactive-text-default",
                        tag: "span",
                        className: E.C2,
                        children: v.intl.format(v.t["Nd3Gh+"], {
                            helpUrl: f.A.getArticleURL(y.MVz.GUILD_AUTOMOD_BLOCKED_MESSAGE)
                        })
                    })
                })
            })]
        })
    }),
    S = r.memo(function(e) {
        var t, n;
        let {
            className: i,
            compact: s,
            message: u,
            children: f,
            content: m,
            onUpdate: g
        } = e, y = null == (n = u.editedTimestamp) ? void 0 : n.toString(), S = r.useRef(!1), j = (0, c.bG)([p.A], () => p.A.getMessage(u.id), [u.id]), I = r.useCallback(() => {
            (null == j ? void 0 : j.isBlockedEdit) ? (0, h.j)(u.id) : d.A.deleteMessage(u.channel_id, u.id, !0)
        }, [u, j]);
        return r.useLayoutEffect(() => {
            S.current ? null != g && g() : S.current = !0
        }, [g, u.content, m, y, f]), (0, l.jsxs)("div", {
            id: (0, A.CJ)(u),
            className: a()(i, C.PT, {
                [O.BK]: !0,
                [O.nB]: "rtl" === o()(u.content),
                [E.Dy]: null == j ? void 0 : j.isBlockedEdit,
                [E.bv]: !(null == j ? void 0 : j.isBlockedEdit)
            }),
            children: [null != f ? f : (0, b._A)(u, m), (null == j ? void 0 : j.isBlockedEdit) && null != u.timestamp && (0, l.jsxs)(l.Fragment, {
                children: [" ", (0, l.jsx)(_.A, {
                    timestamp: u.timestamp,
                    isEdited: !0,
                    isInline: !1,
                    children: (0, l.jsxs)("span", {
                        className: O.oh,
                        children: ["(", v.intl.string(v.t.Z7eEx9), ")"]
                    })
                })]
            }), (0, l.jsx)(x, {
                notice: null != (t = null == j ? void 0 : j.errorMessage) ? t : v.intl.string(v.t.zQ69pv),
                message: u,
                compact: s,
                onDismiss: I
            })]
        })
    }, b.sP)