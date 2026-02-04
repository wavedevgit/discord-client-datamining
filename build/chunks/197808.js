/** chunk id: 197808, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => G
}), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(311907),
    o = n(31728),
    s = n(933958),
    l = n(216418),
    c = n(969151),
    u = n(108959),
    d = n(449571),
    f = n(313961),
    p = n(71855),
    _ = n(91242),
    h = n(210954),
    m = n(26113),
    g = n(205297),
    E = n(699426),
    y = n(923917),
    b = n(869146),
    O = n(544028),
    v = n(964404),
    A = n(806911),
    I = n(734057),
    S = n(334463),
    T = n(309010),
    C = n(531685),
    N = n(403362),
    w = n(652215),
    R = n(5867),
    P = n(806931),
    D = n(165610),
    L = n(315253);

function x(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
let M = {
        [w.o1q.VIDEO]: A.A,
        [w.o1q.ACTIVITY]: d.A,
        [w.o1q.FRAME]: h.A,
        [w.o1q.HAVEN]: m.A
    },
    j = {
        minWidth: P.mn[P.R8.VIDEO],
        maxWidth: P.cF[P.R8.VIDEO]
    },
    k = [];
class U extends i.PureComponent {
    render() {
        let {
            selectedPIPWindow: e,
            pipWindows: t,
            pipWidth: n,
            maxX: i,
            maxY: a,
            theme: o,
            dockedRect: s,
            appContext: l,
            roundCorners: c,
            getDockedRectPositionY: u,
            windowSize: d,
            inPopoutWindow: f,
            activityPIPWindow: p,
            chatOpen: _,
            callChatSidebarWidth: h
        } = this.props, m = document.body.style.getPropertyValue("--custom-guild-sidebar-width"), y = "" !== m ? parseInt(m, 10) : w.MdR, b = d.width - y - (_ ? h : 0), O = null != p, v = !f && O && _ && b < 550;
        return (0, r.jsxs)(E.ic, {
            children: [(0, r.jsx)(g.A, {
                pictureInPictureComponents: M,
                selectedPIPWindow: e,
                pipWindows: t,
                pipWidth: n,
                maxX: i,
                maxY: a,
                dockedRect: s,
                theme: o,
                onWindowMove: this.handleWindowMove,
                onWindowResize: this.handleWindowResize,
                appContext: l,
                roundCorners: c,
                resizeConfig: j,
                getDockedRectPositionY: u
            }), (0, r.jsx)(E.Md, {
                className: v ? L.ah : void 0
            })]
        })
    }
    constructor(...e) {
        super(...e), x(this, "handleWindowMove", (e, t) => {
            o.tw(e, t)
        }), x(this, "handleWindowResize", e => {
            o.EB(e, P.R8.VIDEO)
        })
    }
}
let G = a.Ay.connectStores([b.A, s.Ay, C.A, O.A, I.A, T.A, S.A, f.A, v.Ay, _.A], e => {
    var t, n, r, i, a, o, d, h;
    let m, {
            popoutWindowKey: g,
            popoutWindowHasTitleBar: E = !1
        } = e,
        A = b.A.getWindowOpen(w.MLl.CHANNEL_CALL_POPOUT),
        L = b.A.getWindowOpen(w.MLl.ACTIVITY_POPOUT),
        x = s.Ay.getCurrentEmbeddedActivity(),
        M = (0, c.H)(null == x ? void 0 : x.location),
        j = null != x && !(0, u.A)(M, I.A, T.A),
        U = s.Ay.getActivityPanelMode(),
        G = j && U === R.Gd.PANEL,
        V = null != x && null != M && (null == (n = f.A.getSelectedParticipant(M)) ? void 0 : n.type) === P.lp.ACTIVITY,
        F = _.A.getConnectedFrame(),
        B = _.A.getFrameLayoutMode() === D.y.FOCUSED,
        H = null != g,
        Y = H ? b.A.getWindow(g) : null,
        W = !!H && b.A.isWindowFullScreen(g),
        K = C.A.windowSize();
    H && (K = null == Y ? K : {
        width: Y.innerWidth,
        height: Y.innerHeight
    });
    let z = H ? w.BRT.POPOUT : w.BRT.APP,
        q = e => H && (0, y.q)({
            withTitleBar: E,
            isFullScreen: W
        }) ? e - (0, p.LI)({
            isPopoutWindow: H
        }) : e;
    m = null != x && L || H && j || H && null != F ? null : H || !A || j || null != F ? null != x && G ? null != (r = S.A.pipActivityWindow) ? r : S.A.pipVideoWindow : null != F && B ? null != (i = null != (a = S.A.pipFrameWindow) ? a : S.A.pipVideoWindow) ? i : S.A.pipActivityWindow : null != (o = null != (d = null != (h = S.A.pipHavenWindow) ? h : S.A.pipVideoWindow) ? d : S.A.pipActivityWindow) ? o : S.A.pipFrameWindow : null;
    let Z = Array.from(S.A.pipWindows.values()),
        Q = S.A.pipWidth(P.R8.VIDEO),
        X = Z.find(e => e.component === w.o1q.VIDEO),
        J = Z.find(e => e.component === w.o1q.ACTIVITY),
        $ = Z.find(e => e.component === w.o1q.FRAME),
        ee = [Z.find(e => e.component === w.o1q.HAVEN), X, J, $].filter(N.Vq),
        et = v.Ay.callChatSidebarWidth,
        en = T.A.getVoiceChannelId(),
        er = T.A.getChannelId() === en,
        ei = null != en && f.A.getChatOpen(en),
        ea = G || V,
        eo = ea && null != x && (0, l.q)(x.applicationId),
        es = !ea && null != m && er && ei;
    return {
        selectedPIPWindow: m,
        pipWindows: 0 === ee.length ? k : ee,
        pipWidth: Q,
        maxX: K.width - (es ? et : 0),
        maxY: K.height,
        theme: O.A.theme,
        dockedRect: S.A.getDockedRect(null != (t = null == m ? void 0 : m.id) ? t : ""),
        getDockedRectPositionY: q,
        appContext: z,
        roundCorners: !eo,
        windowSize: K,
        inPopoutWindow: H,
        activityPIPWindow: J,
        chatOpen: ei,
        callChatSidebarWidth: et
    }
})(U)