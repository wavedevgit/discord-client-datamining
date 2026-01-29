/** Chunk was on 1113 **/
/** chunk id: 454148, original params: e,t,n (module,exports,require) **/
n.d(t, {
    L: () => O
}), n(228524);
var r = n(627968),
    l = n(64700),
    i = n(731738),
    s = n(397927),
    a = n(832712),
    o = n(831062),
    c = n(662502),
    u = n(754302),
    d = n(632738),
    h = n(544231),
    p = n(349435),
    g = n(665909),
    f = n(576045),
    m = n(477427),
    b = n(56462),
    A = n(652215),
    y = n(985018);

function O(e) {
    let {
        channelId: t,
        warningId: O,
        senderId: _
    } = e, x = (0, b.CW)(), j = l.useCallback(() => {
        (0, h.xi)(t, [O])
    }, [t, O]), v = e => {
        a.A.updateChannelOverrideSettings(null, t, {
            muted: !0
        }, m.fd.Muted), c.A.showMuteSuccessToast(_, t), (0, g._$)({
            channelId: t,
            warningId: O,
            senderId: _,
            warningType: p._j.LIKELY_ATO,
            cta: e
        }), j()
    };
    return l.useEffect(() => {
        (0, g.mO)(A.HAw.SAFETY_WARNING_VIEWED, {
            channelId: t,
            warningId: O,
            senderId: _,
            warningType: p._j.LIKELY_ATO
        }), o.A.increment({
            name: i.K.SAFETY_WARNING_VIEW
        })
    }, [t, O, _]), (0, r.jsx)(f.N, {
        channelId: t,
        warningId: O,
        senderId: _,
        warningType: p._j.LIKELY_ATO,
        header: y.intl.string(y.t.R8UsiI),
        description: y.intl.string(y.t.lI8nQl),
        onDismiss: j,
        buttons: [{
            text: y.intl.string(y.t.tC1pvL),
            variant: "primary",
            onClick: () => {
                (0, s.mMO)(async () => {
                    let {
                        default: e
                    } = await n.e("8546").then(n.bind(n, 63865));
                    return n => {
                        let {
                            transitionState: l,
                            onClose: i
                        } = n;
                        return (0, r.jsx)(e, {
                            transitionState: l,
                            onClose: i,
                            channelId: t,
                            warningId: O,
                            senderId: _,
                            description: y.intl.string(y.t["/uid3p"]),
                            safetyTipRows: x.map((e, t) => (0, r.jsx)(u.B, {
                                listType: "numbered",
                                index: t,
                                title: e.title,
                                description: e.description
                            }, t)),
                            actionRows: [(0, r.jsx)(d.PQ, {
                                title: y.intl.string(y.t.ftIK2A),
                                description: y.intl.string(y.t.w2ve0t),
                                buttonText: y.intl.string(y.t.ftIK2A),
                                onButtonPress: () => {
                                    v(g.Wm.USER_MODAL_MUTE), i()
                                }
                            }, "likely-ato-mute")],
                            learnMore: (0, r.jsx)(s.DUT, {
                                onClick: () => (0, g._$)({
                                    channelId: t,
                                    warningId: O,
                                    senderId: _,
                                    warningType: p._j.LIKELY_ATO,
                                    cta: g.Wm.USER_MODAL_LEARN_MORE
                                }),
                                children: (0, r.jsx)(s.Heading, {
                                    variant: "heading-sm/medium",
                                    color: "text-link",
                                    children: y.intl.format(y.t.UkH122, {
                                        learnMoreLink: b.u6
                                    })
                                })
                            })
                        })
                    }
                }), (0, g._$)({
                    channelId: t,
                    warningId: O,
                    senderId: _,
                    warningType: p._j.LIKELY_ATO,
                    cta: g.Wm.OPEN_MORE_TIPS
                })
            }
        }, {
            text: y.intl.string(y.t.ftIK2A),
            onClick: () => v(g.Wm.USER_BANNER_MUTE)
        }]
    })
}