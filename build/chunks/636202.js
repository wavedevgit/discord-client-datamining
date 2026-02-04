/** chunk id: 636202, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => G,
    n: () => U
}), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(808380),
    o = n(311907),
    s = n(397927),
    l = n(833349),
    c = n(765379),
    u = n(960076),
    d = n(359549),
    f = n(566021),
    p = n(284525),
    _ = n(648246),
    h = n(793574),
    m = n(627363),
    g = n(308335),
    E = n(773669),
    y = n(790381),
    b = n(266080),
    O = n(403362),
    v = n(939341),
    A = n(576757),
    I = n(202195),
    S = n(583846),
    T = n(821988),
    C = n(329575),
    N = n(434200),
    w = n(176563),
    R = n(322789),
    P = n(506326),
    D = n(910692),
    L = n(18282),
    x = n(299846),
    M = n(652215),
    j = n(985018);
let k = [...R.n, P.Yq],
    U = {
        [a.Y.DESKTOP]: null,
        [a.Y.LINUX]: null,
        [a.Y.MACOS]: null,
        [a.Y.NINTENDO]: null,
        [a.Y.IOS]: null,
        [a.Y.ANDROID]: null,
        [a.Y.XBOX]: b.A,
        [a.Y.PLAYSTATION]: y.A
    },
    G = e => {
        var t, n;
        let {
            channel: y,
            entry: b,
            disableGameProfileLinks: R,
            onReaction: G,
            onVoiceChannelPreview: F,
            onUserPopoutClosed: V,
            trackRankingItemInteraction: B
        } = e, {
            largeImage: H
        } = (0, v.nO)({
            entry: b
        }), {
            user: Y,
            details: W,
            appName: K,
            activity: z,
            embeddedActivity: q
        } = (0, x.u)(b), {
            primaryColor: Z,
            secondaryColor: Q
        } = (0, w.A)(null == H ? void 0 : H.src), X = (0, o.bG)([E.default], () => E.default.locale), {
            streamPreviewUrl: J,
            stream: $
        } = (0, I.A)(b), {
            displayParticipants: ee,
            participant1: et,
            participant2: en,
            numOtherParticipants: er
        } = (0, A.A)(b, 3), ei = b.extra.platform, ea = null != ei ? U[ei] : null, eo = ei === a.Y.XBOX ? M.fg2.XBOX : ei === a.Y.PLAYSTATION ? M.fg2.PLAYSTATION : void 0, es = (0, N.A)(eo), {
            data: el
        } = (0, m.YY)(b.extra.application_id), ec = (0, d.J)(el), eu = (0, g.o)(null != (t = null != (n = null == z ? void 0 : z.application_id) ? n : null == q ? void 0 : q.applicationId) ? t : null == el ? void 0 : el.id), ed = i.useCallback(e => {
            if ((null == H ? void 0 : H.src) == null || null == y || null == Y) return;
            let t = er > 0 ? (0, C.v$)({
                entry: b,
                channel: y,
                users: [et, en],
                countOthers: er
            }) : (0, C.op)(b, y, Y);
            return (0, T.p6)({
                entry: b,
                applicationImageSrc: null == H ? void 0 : H.src,
                avatarSrcs: ee.map(e => e.getAvatarURL(y.guild_id, 128)),
                description: t,
                timestamp: (0, S.As)(b, X),
                colors: [Z, Q],
                channelId: e
            })
        }, [null == H ? void 0 : H.src, y, ee, b, X, er, et, en, Z, Q, Y]);
        if (null == Y) return null;
        let ef = (0, r.jsx)(P.mG, {
                location: null == J ? P.N5.POPOUT : P.N5.STREAMING_POPOUT,
                children: k.map((e, t) => (0, r.jsx)(e, {
                    entry: b
                }, t))
            }),
            ep = null == $ ? (0, r.jsx)(D.BC, {
                channel: y,
                headerIcons: null == ea ? null : (0, r.jsx)(L.A, {
                    onClick: es,
                    Icon: ea,
                    "aria-label": j.intl.string(j.t.YR4cHH)
                }),
                userDescription: (0, S.JM)(b) ? j.t.vPg1JT : j.t.rPqqts,
                title: K,
                subtitle: W,
                badges: ef,
                entry: b,
                disableGameProfileLinks: R,
                onUserPopoutClosed: V,
                trackRankingItemInteraction: B
            }) : (0, r.jsx)(D.Fl, {
                channel: y,
                title: b.extra.game_name,
                subtitle: W,
                badges: ef,
                userDescription: j.t["6oWFUN"],
                entry: b,
                stream: $,
                onUserPopoutClosed: V,
                trackRankingItemInteraction: B
            }),
            e_ = !eu && ec ? (0, r.jsx)(f.A, {
                application: el,
                analyticsLocation: h.A.MEMBER_LIST_GAMING_CONTENT_POPOUT
            }, "cloud-play") : null,
            eh = [null == e_ && ((0, l.A)(z, M.jUm.JOIN) || (0, c.A)(z)) ? (0, r.jsx)(p.A, {
                activity: z,
                user: Y,
                variant: "primary",
                size: "md",
                icon: s._xR
            }, "join") : null, (0, u.A)(z) ? (0, r.jsx)(_.A, {
                activity: z,
                size: "md",
                variant: "primary",
                icon: s.bMW
            }, "watch") : null, e_].filter(O.Vq);
        return (0, r.jsxs)(D.YN, {
            children: [ep, (0, r.jsx)(D.Eh, {
                children: (0, r.jsx)(D.fD, {
                    onReaction: G,
                    onVoiceChannelPreview: F,
                    user: Y,
                    channel: y,
                    generateReactionImage: ed,
                    reactionImageAltText: (0, C.uG)(b, Y),
                    entry: b,
                    buttons: eh
                })
            })]
        })
    }