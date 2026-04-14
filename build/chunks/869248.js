/** chunk id: 869248 params = (module,exports,require) **/
n.d(t, {
    A: () => N
});
var i = n(627968),
    l = n(64700),
    r = n(311907),
    a = n(397927),
    s = n(355622),
    o = n(58736),
    d = n(353428),
    c = n(380335),
    u = n(157550),
    A = n(336590),
    h = n(471271),
    _ = n(977347),
    m = n(378570),
    g = n(138298),
    p = n(761640),
    E = n(47167),
    I = n(698718),
    f = n(985018),
    C = n(368526),
    T = n(624739);

function N(e) {
    let {
        channel: t,
        baseChannelId: n
    } = e, N = (0, E.Ay)(t), S = (0, A.k)(), x = (0, A.r)(), v = (0, r.bG)([c.A], () => c.A.isMessageRequest(t.id)), b = (0, r.bG)([u.A], () => u.A.isSpam(t.id)), y = (0, _.D)(t.id, t.getRecipientId()), O = l.useCallback(() => {
        g.A.closeChannelSidebar(p.fe), v && S && (0, m.iN)(t.id), b && x && (0, m.iN)(t.id)
    }, [t.id, b, x, v, S]), L = l.useCallback(() => {
        (0, a.showToast)((0, a.createToast)(f.intl.string(f.t.pIQ3h4), a.ToastType.FAILURE))
    }, []), {
        markAsNotSpam: R
    } = (0, h.t)({
        onAcceptSuccess: O,
        onError: L
    });
    if (null == t || !t.isDM()) return null;
    let P = [(0, i.jsx)(o.Ay.Icon, {
        icon: a.PGe,
        tooltip: f.intl.string(f.t.cpT0Cq),
        onClick: () => g.A.closeChannelSidebar(n)
    }, "close")];
    return (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(o.Ay, {
            toolbar: P,
            "aria-label": f.intl.string(f.t.BIYAqa),
            children: (0, d.zF)({
                channel: t,
                channelName: N,
                inSidebar: !0
            })
        }), b && (0, i.jsxs)("div", {
            className: T.F,
            children: [(0, i.jsx)(a.Text, {
                variant: "text-sm/normal",
                children: f.intl.string(f.t.XVOKgj)
            }), (0, i.jsx)("div", {
                className: T.$,
                children: (0, i.jsx)(a.Button, {
                    size: "sm",
                    onClick: () => R(t, y),
                    text: f.intl.string(f.t.koqL3Z)
                })
            })]
        }), (0, i.jsx)("div", {
            className: C.T,
            children: (0, i.jsx)(I.A, {
                channel: t,
                guild: null,
                chatInputType: s.oU.SIDEBAR
            }, t.id)
        })]
    })
}