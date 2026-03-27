/** chunk id: 869248 params = (module,exports,require) **/
n.d(t, {
    A: () => N
});
var i = n(627968),
    a = n(64700),
    l = n(311907),
    r = n(397927),
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
    C = n(121603),
    T = n(717316);

function N(e) {
    let {
        channel: t,
        baseChannelId: n
    } = e, N = (0, E.Ay)(t), S = (0, A.k)(), x = (0, A.r)(), v = (0, l.bG)([c.A], () => c.A.isMessageRequest(t.id)), y = (0, l.bG)([u.A], () => u.A.isSpam(t.id)), b = (0, _.D)(t.id, t.getRecipientId()), O = a.useCallback(() => {
        g.A.closeChannelSidebar(p.fe), v && S && (0, m.iN)(t.id), y && x && (0, m.iN)(t.id)
    }, [t.id, y, x, v, S]), L = a.useCallback(() => {
        (0, r.showToast)((0, r.createToast)(f.intl.string(f.t.pIQ3h4), r.ToastType.FAILURE))
    }, []), {
        markAsNotSpam: R
    } = (0, h.t)({
        onAcceptSuccess: O,
        onError: L
    });
    if (null == t || !t.isDM()) return null;
    let P = [(0, i.jsx)(o.Ay.Icon, {
        icon: r.PGe,
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
        }), y && (0, i.jsxs)("div", {
            className: T.F,
            children: [(0, i.jsx)(r.Text, {
                variant: "text-sm/normal",
                children: f.intl.string(f.t.XVOKgj)
            }), (0, i.jsx)("div", {
                className: T.$,
                children: (0, i.jsx)(r.Button, {
                    size: "sm",
                    onClick: () => R(t, b),
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