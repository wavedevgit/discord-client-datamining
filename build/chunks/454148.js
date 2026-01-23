/** Chunk was on 97492 **/
/** chunk id: 454148, original params: e,t,n (module,exports,require) **/
n.d(t, {
    L: () => _
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
    p = n(544231),
    h = n(349435),
    f = n(665909),
    g = n(576045),
    m = n(477427),
    b = n(56462),
    A = n(652215),
    y = n(985018);

function _(e) {
    let {
        channelId: t,
        warningId: _,
        senderId: O
    } = e, j = (0, b.CW)(), v = l.useCallback(() => {
        (0, p.xi)(t, [_])
    }, [t, _]), x = e => {
        a.A.updateChannelOverrideSettings(null, t, {
            muted: !0
        }, m.fd.Muted), c.A.showMuteSuccessToast(O, t), (0, f._$)({
            channelId: t,
            warningId: _,
            senderId: O,
            warningType: h._j.LIKELY_ATO,
            cta: e
        }), v()
    };
    return l.useEffect(() => {
        (0, f.mO)(A.HAw.SAFETY_WARNING_VIEWED, {
            channelId: t,
            warningId: _,
            senderId: O,
            warningType: h._j.LIKELY_ATO
        }), o.A.increment({
            name: i.K.SAFETY_WARNING_VIEW
        })
    }, [t, _, O]), (0, r.jsx)(g.N, {
        channelId: t,
        warningId: _,
        senderId: O,
        warningType: h._j.LIKELY_ATO,
        header: y.intl.string(y.t.R8UsiI),
        description: y.intl.string(y.t.lI8nQl),
        onDismiss: v,
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
                            warningId: _,
                            senderId: O,
                            description: y.intl.string(y.t["/uid3p"]),
                            safetyTipRows: j.map((e, t) => (0, r.jsx)(u.B, {
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
                                    x(f.Wm.USER_MODAL_MUTE), i()
                                }
                            }, "likely-ato-mute")],
                            learnMore: (0, r.jsx)(s.DUT, {
                                onClick: () => (0, f._$)({
                                    channelId: t,
                                    warningId: _,
                                    senderId: O,
                                    warningType: h._j.LIKELY_ATO,
                                    cta: f.Wm.USER_MODAL_LEARN_MORE
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
                }), (0, f._$)({
                    channelId: t,
                    warningId: _,
                    senderId: O,
                    warningType: h._j.LIKELY_ATO,
                    cta: f.Wm.OPEN_MORE_TIPS
                })
            }
        }, {
            text: y.intl.string(y.t.ftIK2A),
            onClick: () => x(f.Wm.USER_BANNER_MUTE)
        }]
    })
}