/** Chunk was on web.js **/
/** chunk id: 282797, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => N
});
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(311907),
    o = n(990078),
    l = n(397927),
    c = n(793574),
    u = n(688810),
    d = n(47167),
    f = n(71393),
    p = n(798031),
    _ = n(575731),
    h = n(92240),
    m = n(257367),
    g = n(939496),
    E = n(584904),
    y = n(351638),
    b = n(316770),
    O = n(42002),
    v = n(560859),
    A = n(70963),
    I = n(8738),
    S = n(996988),
    T = n(985018),
    C = n(380297);

function N(e) {
    let {
        user: t,
        currentUser: n,
        voiceChannel: i,
        className: N,
        onClose: w
    } = e, {
        themeType: R
    } = (0, g.E)(), {
        analyticsLocations: P
    } = (0, u.Ay)(c.A.USER_PROFILE_VOICE_ACTIVITY_CARD), D = (0, h.A)({
        display: "voice",
        activity: {
            type: "VOICE"
        },
        voiceChannelId: i.id,
        user: t,
        analyticsLocations: P
    }), x = (0, m.A)({
        userId: t.id,
        onAction: D
    }), L = (0, s.bG)([f.A], () => f.A.getGuild(i.guild_id)), j = (0, _.A)(i), M = (0, d.Ay)(i), {
        channelStatusEnabled: k
    } = (0, p.e)({
        location: "UserProfileVoiceActivityCard"
    }), U = () => {
        if (t.id !== n.id) return null;
        let e = i.isDM() || i.isGroupDM() ? T.intl.string(T.t["+DsWbX"]) : T.intl.string(T.t.xOVEjc);
        return (0, r.jsx)(o.m, {
            text: e,
            children: (0, r.jsx)(l.mir, {
                size: "xxs"
            })
        })
    }, G = () => (0, r.jsx)("div", {
        className: C.o1,
        children: (0, r.jsx)(A.A, {
            channel: i,
            onAction: D,
            onClose: w
        })
    }), V = i.isDM() || i.isGroupDM() ? T.intl.string(T.t["9FaEzi"]) : i.isGuildStageVoice() ? T.intl.string(T.t.QygGCN) : T.intl.string(T.t.msxteM);
    return (0, r.jsx)(u.f5, {
        value: P,
        children: (0, r.jsxs)(E.A, {
            ref: x,
            className: a()(C.Nr, N),
            onAction: D,
            onClose: w,
            "aria-label": "".concat(V, ", ").concat(M),
            children: [(0, r.jsx)(y.A, {
                text: V,
                tags: U(),
                contextMenu: (0, r.jsx)(I.A, {
                    display: "voice",
                    user: t,
                    onClose: w
                })
            }), (0, r.jsx)("div", {
                className: C.rf,
                children: (0, r.jsxs)("div", {
                    className: C.Qs,
                    children: [(0, r.jsx)(O.A, {
                        users: j,
                        channel: i
                    }), (0, r.jsxs)("div", {
                        className: C.zH,
                        children: [(0, r.jsx)(b.A, {
                            channel: i,
                            guild: L,
                            onAction: D,
                            onClose: w
                        }), k && i.isGuildVoice() && (0, r.jsx)(v.A, {
                            voiceChannel: i,
                            onAction: D,
                            onClose: w
                        }), R === S.d.MODAL_V2 && G()]
                    }), R === S.d.MODAL && G()]
                })
            }), R !== S.d.MODAL && R !== S.d.MODAL_V2 && G()]
        })
    })
}