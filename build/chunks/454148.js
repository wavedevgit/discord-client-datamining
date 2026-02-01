/** chunk id: 454148, original params: e,t,n (module,exports,require) **/
n.d(t, {
    L: () => y
}), n(228524);
var l = n(627968),
    r = n(64700),
    i = n(731738),
    a = n(397927),
    s = n(832712),
    o = n(831062),
    c = n(662502),
    u = n(754302),
    d = n(632738),
    h = n(544231),
    p = n(349435),
    f = n(665909),
    m = n(576045),
    g = n(477427),
    A = n(56462),
    b = n(652215),
    _ = n(985018);

function y(e) {
    let {
        channelId: t,
        warningId: y,
        senderId: v
    } = e, E = (0, A.CW)(), O = r.useCallback(() => {
        (0, h.xi)(t, [y])
    }, [t, y]), C = e => {
        s.A.updateChannelOverrideSettings(null, t, {
            muted: !0
        }, g.fd.Muted), c.A.showMuteSuccessToast(v, t), (0, f._$)({
            channelId: t,
            warningId: y,
            senderId: v,
            warningType: p._j.LIKELY_ATO,
            cta: e
        }), O()
    };
    return r.useEffect(() => {
        (0, f.mO)(b.HAw.SAFETY_WARNING_VIEWED, {
            channelId: t,
            warningId: y,
            senderId: v,
            warningType: p._j.LIKELY_ATO
        }), o.A.increment({
            name: i.K.SAFETY_WARNING_VIEW
        })
    }, [t, y, v]), (0, l.jsx)(m.N, {
        channelId: t,
        warningId: y,
        senderId: v,
        warningType: p._j.LIKELY_ATO,
        header: _.intl.string(_.t.R8UsiI),
        description: _.intl.string(_.t.lI8nQl),
        onDismiss: O,
        buttons: [{
            text: _.intl.string(_.t.tC1pvL),
            variant: "primary",
            onClick: () => {
                (0, a.mMO)(async () => {
                    let {
                        default: e
                    } = await n.e("8546").then(n.bind(n, 63865));
                    return n => {
                        let {
                            transitionState: r,
                            onClose: i
                        } = n;
                        return (0, l.jsx)(e, {
                            transitionState: r,
                            onClose: i,
                            channelId: t,
                            warningId: y,
                            senderId: v,
                            description: _.intl.string(_.t["/uid3p"]),
                            safetyTipRows: E.map((e, t) => (0, l.jsx)(u.B, {
                                listType: "numbered",
                                index: t,
                                title: e.title,
                                description: e.description
                            }, t)),
                            actionRows: [(0, l.jsx)(d.PQ, {
                                title: _.intl.string(_.t.ftIK2A),
                                description: _.intl.string(_.t.w2ve0t),
                                buttonText: _.intl.string(_.t.ftIK2A),
                                onButtonPress: () => {
                                    C(f.Wm.USER_MODAL_MUTE), i()
                                }
                            }, "likely-ato-mute")],
                            learnMore: (0, l.jsx)(a.DUT, {
                                onClick: () => (0, f._$)({
                                    channelId: t,
                                    warningId: y,
                                    senderId: v,
                                    warningType: p._j.LIKELY_ATO,
                                    cta: f.Wm.USER_MODAL_LEARN_MORE
                                }),
                                children: (0, l.jsx)(a.Heading, {
                                    variant: "heading-sm/medium",
                                    color: "text-link",
                                    children: _.intl.format(_.t.UkH122, {
                                        learnMoreLink: A.u6
                                    })
                                })
                            })
                        })
                    }
                }), (0, f._$)({
                    channelId: t,
                    warningId: y,
                    senderId: v,
                    warningType: p._j.LIKELY_ATO,
                    cta: f.Wm.OPEN_MORE_TIPS
                })
            }
        }, {
            text: _.intl.string(_.t.ftIK2A),
            onClick: () => C(f.Wm.USER_BANNER_MUTE)
        }]
    })
}