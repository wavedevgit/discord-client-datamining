/** Chunk was on 8546 **/
/** chunk id: 63865, original params: t,e,n (module,exports,require) **/
n.d(e, {
    default: () => h
}), n(228524);
var s = n(627968),
    a = n(64700),
    i = n(731738),
    l = n(158954),
    c = n(417597),
    r = n(397927),
    o = n(831062),
    d = n(754302),
    u = n(632738),
    _ = n(349435),
    x = n(665909),
    m = n(299921),
    p = n(652215),
    g = n(985018),
    T = n(546);

function h(t) {
    let {
        transitionState: e,
        onClose: n,
        channelId: h,
        warningId: v,
        senderId: b,
        description: f,
        safetyTipRows: y,
        actionRows: j,
        learnMore: A
    } = t, N = (0, c.bG)([_.Ay], () => _.Ay.getChannelSafetyWarning(h, v));
    return a.useEffect(() => {
        (0, x.mO)(p.HAw.SAFETY_WARNING_MODAL_VIEWED, {
            channelId: h,
            warningId: v,
            senderId: b,
            warningType: null == N ? void 0 : N.type
        }), o.A.increment({
            name: i.K.SAFETY_WARNING_MODAL_VIEW
        })
    }, [h, v, b, N]), (0, s.jsx)(l.ExpressiveModal, {
        onClose: n,
        transitionState: e,
        graphic: {
            type: "image",
            src: T.A
        },
        gradientColor: "blue",
        title: g.intl.string(g.t.lyt43P),
        subtitle: f,
        actions: [],
        children: (0, s.jsxs)(r.BJc, {
            gap: 24,
            children: [(0, s.jsxs)(r.BJc, {
                gap: 8,
                children: [(0, s.jsx)(d.q, {
                    children: y
                }), null != A ? A : null]
            }), (0, s.jsxs)(r.BJc, {
                gap: 4,
                children: [(0, s.jsx)(r.Text, {
                    variant: "eyebrow",
                    color: "text-default",
                    children: g.intl.string(g.t.K5FKtc)
                }), (0, s.jsx)(u.Y0, {
                    children: j
                })]
            }), (0, s.jsx)(m.A, {
                channelId: h,
                warningId: v,
                senderId: b,
                safetyWarning: N
            })]
        })
    })
}