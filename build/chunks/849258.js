/** chunk id: 849258, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    Ay: () => R
}), n(747238), n(812715), n(866193);
var r = n(627968),
    i = n(64700),
    a = n(311907),
    o = n(397927),
    s = n(833349),
    l = n(765379),
    c = n(359549),
    u = n(284525),
    d = n(793574),
    f = n(297486),
    p = n(627363),
    _ = n(773669),
    h = n(403362),
    m = n(562153),
    g = n(939341),
    E = n(576757),
    y = n(583846),
    b = n(398328),
    O = n(176563),
    v = n(506326),
    A = n(910692),
    I = n(299846),
    S = n(652215),
    T = n(985018);
let C = (e, t) => T.intl.formatToPlainString(T.t.tAwI1k, {
        username: t.username,
        activity: e.extra.activity_name
    }),
    N = (e, t, n) => {
        let r = T.t["bES+y2"],
            i = m.Ay.getName(t.guild_id, t.id, n),
            a = e.extra.activity_name;
        return T.intl.formatToMarkdownString(r, {
            gameName: a,
            userName: i
        }).replaceAll("*", "")
    },
    w = e => {
        let {
            entry: t,
            channel: n,
            users: r,
            countOthers: i
        } = e, a = T.t["7j/5mg"];
        return T.intl.formatToMarkdownString(a, {
            gameName: t.extra.activity_name,
            user1: m.Ay.getName(null == n ? void 0 : n.guild_id, null == n ? void 0 : n.id, r[0]),
            user2: m.Ay.getName(null == n ? void 0 : n.guild_id, null == n ? void 0 : n.id, r[1]),
            countOthers: i
        }).replaceAll("*", "")
    },
    R = e => {
        let {
            channel: t,
            entry: n,
            onReaction: m,
            onVoiceChannelPreview: R,
            disableActivityProfileLinks: P
        } = e, {
            largeImage: D
        } = (0, g.nO)({
            entry: n,
            showCoverImage: !1
        }), {
            user: L,
            details: x,
            activity: M,
            embeddedActivity: j
        } = (0, I.u)(n), {
            primaryColor: k,
            secondaryColor: U
        } = (0, O.A)(null == D ? void 0 : D.src), G = (0, a.bG)([_.default], () => _.default.locale), {
            displayParticipants: F,
            participant1: V,
            participant2: B,
            numOtherParticipants: H
        } = (0, E.A)(n, 3), Y = () => {
            (0, f.hg)(n.extra.application_id)
        }, W = i.useCallback(e => {
            if ((null == D ? void 0 : D.src) == null || null == t || null == L) return;
            let r = H > 0 ? w({
                entry: n,
                channel: t,
                users: [V, B],
                countOthers: H
            }) : N(n, t, L);
            return (0, b.Vq)({
                entry: n,
                applicationImageSrc: null == D ? void 0 : D.src,
                avatarSrcs: F.map(e => e.getAvatarURL(t.guild_id, 128)),
                description: r,
                timestamp: (0, y.As)(n, G),
                colors: [k, U],
                channelId: e
            })
        }, [null == D ? void 0 : D.src, t, F, n, G, H, V, B, k, U, L]), {
            data: K
        } = (0, p.YY)(n.extra.application_id), z = (0, c.A)({
            application: K,
            analyticsLocations: [d.A.MEMBER_LIST_ACTIVITY_CONTENT_POPOUT]
        });
        if (null == L) return null;
        let q = (0, r.jsx)(v.iT, {
                location: v.N5.POPOUT,
                entry: n
            }),
            Z = (0, r.jsx)(A.BC, {
                channel: t,
                userDescription: (0, y.JM)(n) ? T.t.vPg1JT : T.t.rPqqts,
                title: n.extra.activity_name,
                subtitle: x,
                badges: q,
                entry: n,
                showCoverImage: !1,
                onClickTitle: P ? void 0 : Y,
                onClickSubtitle: P ? void 0 : Y,
                onClickThumbnail: P ? void 0 : Y
            }),
            Q = (0, s.A)(M, S.jUm.JOIN) || (0, l.A)(M),
            X = Q ? (0, r.jsx)(u.A, {
                embeddedActivity: j,
                activity: M,
                user: L,
                variant: "primary",
                size: "md",
                icon: o.Ihz
            }) : null,
            J = null == z ? null : (0, r.jsx)(o.Button, {
                variant: "primary",
                size: "md",
                fullWidth: !0,
                onClick: z,
                text: T.intl.string(T.t["jaYS/h"]),
                icon: o.hpF
            }),
            $ = null != J || P ? null : (0, r.jsx)(o.Button, {
                variant: "primary",
                size: "md",
                fullWidth: !0,
                onClick: Y,
                text: T.intl.string(T.t.GDWYR8),
                icon: o.k9F
            }),
            ee = [J, Q && !P ? X : $].filter(h.Vq);
        return (0, r.jsxs)(A.YN, {
            children: [Z, (0, r.jsx)(A.Eh, {
                children: (0, r.jsx)(A.fD, {
                    onReaction: m,
                    onVoiceChannelPreview: R,
                    user: L,
                    channel: t,
                    generateReactionImage: W,
                    reactionImageAltText: C(n, L),
                    entry: n,
                    buttons: ee
                })
            })]
        })
    }