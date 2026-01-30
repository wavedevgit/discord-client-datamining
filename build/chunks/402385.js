/** chunk id: 402385, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => L
}), n(896048), n(321073);
var r = n(627968),
    l = n(64700),
    i = n(311907),
    s = n(554146),
    a = n(342494),
    o = n(397927),
    c = n(387755),
    u = n(956793),
    d = n(775602),
    h = n(641703),
    p = n(313961),
    g = n(826673),
    f = n(379848),
    m = n(753727),
    b = n(267102),
    A = n(222692),
    y = n(442353),
    O = n(470710),
    _ = n(186111),
    j = n(430452),
    x = n(994500),
    v = n(287809),
    E = n(977997),
    C = n(203982),
    S = n(58736),
    I = n(652215),
    N = n(360469),
    T = n(49999),
    P = n(731854),
    w = n(985018);

function R(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
class D extends l.PureComponent {
    componentDidMount() {
        C._.subscribe(I.jej.CALL_START, this.handleVoiceClick)
    }
    componentWillUnmount() {
        C._.unsubscribe(I.jej.CALL_START, this.handleVoiceClick)
    }
    renderVideoCallButton() {
        let e, {
            inCall: t,
            callActive: n,
            callUnavailable: l,
            isBlocked: i,
            channel: s,
            mode: a,
            isProvisional: c
        } = this.props;
        if (t || n && a === I._Of.VOICE) return null;
        let u = s.isManaged(),
            d = null,
            h = !1;
        return c ? (h = !0, d = w.intl.string(w.t.izMR7o)) : j.A.supports(P.O5.VIDEO) ? i ? (d = w.intl.string(w.t.PHzjvX), h = !0) : n && a === I._Of.VIDEO ? (e = this.handleJoinVideoCall, d = u ? w.intl.string(w.t.S0W8Z5) : w.intl.string(w.t.W68MhH)) : (e = this.handleStartVideoCall, d = u ? w.intl.string(w.t.S0W8Z5) : w.intl.string(w.t.oCqlGG)) : (h = !0, e = this.handleBrowserNotSupported, d = w.intl.string(w.t.UVpg3U)), (0, r.jsx)(S.Ay.Icon, {
            icon: o.npA,
            onClick: e,
            disabled: h || l,
            tooltip: d
        })
    }
    renderVoiceCallButton() {
        let e, {
            inCall: t,
            callActive: n,
            callUnavailable: l,
            isBlocked: i,
            channel: c,
            dismissibleContentTypes: u,
            isProvisional: d
        } = this.props;
        if (t) return null;
        let h = c.isManaged(),
            p = !1;
        d ? (p = !0, e = w.intl.string(w.t.izMR7o)) : l ? (e = h ? w.intl.string(w.t.LW2Ghr) : w.intl.string(w.t.rF7lN5), p = !0) : i ? (e = w.intl.string(w.t.PHzjvX), p = !0) : e = n ? h ? w.intl.string(w.t.S0W8Z5) : w.intl.string(w.t.fdEeb5) : h ? w.intl.string(w.t.S0W8Z5) : w.intl.string(w.t.focH1t);
        let g = (0, r.jsx)(S.Ay.Icon, {
            ref: this.iconRef,
            icon: o._jp,
            onClick: this.handleVoiceClick,
            disabled: p,
            tooltip: e
        });
        return (0, r.jsxs)(r.Fragment, {
            children: [g, (0, r.jsx)(f.Ay, {
                contentTypes: u,
                children: e => {
                    let {
                        visibleContent: t,
                        markAsDismissed: n
                    } = e;
                    return t === s.M.ACTIVITY_GDM_CALL_TOOLTIP ? (0, r.jsx)(a.AM, {
                        targetElementRef: this.iconRef,
                        title: w.intl.string(w.t.HOPqzR),
                        body: w.intl.format(w.t.xAW71b, {
                            helpdeskUrl: N.DY
                        }),
                        position: "bottom",
                        align: "center",
                        caretConfig: {
                            align: "center"
                        },
                        onRequestClose: () => n(T.i.USER_DISMISS)
                    }) : null
                }
            })]
        })
    }
    render() {
        return (0, r.jsxs)(l.Fragment, {
            children: [this.renderVoiceCallButton(), this.renderVideoCallButton()]
        })
    }
    constructor(...e) {
        super(...e), R(this, "iconRef", l.createRef()), R(this, "handleStartCall", (e, t) => {
            let {
                channel: n,
                notFriend: r,
                appContext: l
            } = this.props, i = r ? n.getRecipientId() : null, s = () => c.A.call(n.id, t, !r && !n.isManaged() && !(null == e ? void 0 : e.shiftKey), i);
            t ? (0, y.A)(s, l) : s()
        }), R(this, "handleJoinCall", e => {
            u.default.selectVoiceChannel(this.props.channel.id, e)
        }), R(this, "handleVoiceClick", e => {
            let {
                callUnavailable: t,
                callActive: n,
                dismissibleContentTypes: r
            } = this.props;
            if (r.includes(s.M.ACTIVITY_GDM_CALL_TOOLTIP) && (0, g.Dr)(s.M.ACTIVITY_GDM_CALL_TOOLTIP, {
                    dismissAction: T.i.AUTO
                }), t);
            else if (n) return this.handleJoinCall(!1);
            else return this.handleStartCall(e, !1)
        }), R(this, "handleStartVideoCall", e => {
            this.handleStartCall(e, !0)
        }), R(this, "handleJoinVideoCall", () => {
            let {
                appContext: e
            } = this.props, t = () => this.handleJoinCall(!0);
            (0, y.A)(t, e)
        }), R(this, "handleBrowserNotSupported", () => {
            (0, A.A)()
        })
    }
}

function L(e) {
    var t;
    let {
        channel: n
    } = e, l = (0, m.A)(), a = (0, i.bG)([p.A], () => p.A.getMode(n.id)), o = (0, i.bG)([E.A], () => E.A.isInChannel(n.id)), c = (0, i.bG)([d.A], () => d.A.useReducedMotion), {
        callActive: u,
        callUnavailable: g
    } = (0, i.cf)([O.A], () => ({
        callActive: O.A.isCallActive(n.id),
        callUnavailable: O.A.isCallUnavailable(n.id)
    })), f = n.getRecipientId(), {
        notFriend: A,
        isBlocked: y
    } = (0, i.cf)([x.A], () => ({
        notFriend: n.type === I.rbe.DM && null != f && !x.A.isFriend(f),
        isBlocked: n.type === I.rbe.DM && null != f && x.A.isBlocked(f)
    })), j = (0, i.bG)([v.default], () => v.default.getUser(f)), C = (0, b.Us)(), S = [], N = (0, h.A)(n.id), T = (0, i.bG)([_.A], () => _.A.hasLayers());
    return (N && !T && S.push(s.M.ACTIVITY_GDM_CALL_TOOLTIP), l || (null == j ? void 0 : j.bot)) ? null : (0, r.jsx)(D, {
        channel: n,
        mode: a,
        inCall: o,
        callActive: u,
        isProvisional: null != (t = null == j ? void 0 : j.isProvisional) && t,
        callUnavailable: g,
        notFriend: A,
        isBlocked: y,
        appContext: C,
        dismissibleContentTypes: S,
        useReducedMotion: c
    })
}