/** chunk id: 842241, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => V
}), n(896048);
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    o = n(311907),
    s = n(342952),
    l = n(397927),
    c = n(956793),
    u = n(401843),
    d = n(475743),
    f = n(672979),
    p = n(717306),
    _ = n(323073),
    h = n(793574),
    m = n(688810),
    g = n(402216),
    E = n(450149),
    y = n(279250),
    b = n(734057),
    O = n(71393),
    v = n(576705),
    A = n(290863),
    I = n(607567),
    S = n(92240),
    T = n(257367),
    C = n(939496),
    N = n(584904),
    w = n(351638),
    R = n(316770),
    P = n(910607),
    D = n(70963),
    L = n(8738),
    x = n(652215),
    M = n(996988),
    j = n(985018),
    k = n(380297),
    U = n(402697),
    G = n(399162),
    F = n(181147);

function V(e) {
    let {
        user: t,
        currentUser: n,
        stream: i,
        className: V,
        onClose: B
    } = e, {
        themeType: H,
        theme: Y
    } = (0, C.E)(), W = (0, o.bG)([O.A], () => O.A.getGuild(null == i ? void 0 : i.guildId)), K = (0, o.bG)([b.A], () => b.A.getChannel(null == i ? void 0 : i.channelId)), z = (0, o.yK)([I.Ay], () => null != K ? I.Ay.getVoiceStatesForChannel(K).map(e => {
        let {
            user: t
        } = e;
        return t
    }) : []), q = (0, o.bG)([A.A], () => A.A.findActivity(t.id, e => (0, f.A)(e) && !(0, p.A)(e))), {
        analyticsLocations: Z
    } = (0, m.Ay)(h.A.USER_PROFILE_LIVE_ACTIVITY_CARD), Q = (0, S.A)({
        display: "live",
        voiceChannelId: null == K ? void 0 : K.id,
        user: t,
        stream: i,
        analyticsLocations: Z
    }), X = (0, T.A)({
        userId: t.id,
        onAction: Q
    }), {
        previewUrl: J,
        isLoading: $
    } = (0, E.A)(null == i ? void 0 : i.guildId, null == i ? void 0 : i.channelId, null == i ? void 0 : i.ownerId), [ee, et] = (0, y.zP)(K), en = (0, _.a9)() && (0, _.UK)(null == K ? void 0 : K.id), er = (0, o.bG)([v.A], () => null != K && !en && v.A.canBasicChannel(x.hVb.CONNECT, K)), ei = (0, d.A)($ ? null : J), ea = $ || null == J ? ei : J;
    if (null == W || null == K || !1 === i.discoverable) return null;
    let eo = () => {
            let e = e => {
                e.stopPropagation(), ee && (Q({
                    action: "PRESS_IMAGE"
                }), c.default.selectVoiceChannel(i.channelId), (0, u.Nl)(i), null == B || B())
            };
            return null == ea && $ ? (0, r.jsx)("div", {
                className: U.VH,
                children: (0, r.jsx)(l.y$y, {})
            }) : null == ea || en ? (0, r.jsxs)(l.DUT, {
                className: a()(U.VH, U.Lw, ee ? U.vk : U.r9),
                onClick: e,
                "aria-label": (0, y.CQ)(et),
                "aria-disabled": !ee,
                children: [(0, r.jsx)("img", {
                    alt: "",
                    src: Y === x.NJ8.LIGHT ? F : G
                }), H !== M.d.MODAL && H !== M.d.MODAL_V2 && (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(l.Text, {
                        className: U.um,
                        variant: "text-sm/medium",
                        color: "always-white",
                        children: (0, y.CT)(et)
                    }), (0, r.jsx)(l.Text, {
                        variant: "text-sm/medium",
                        children: er ? j.intl.string(j.t.uQZTBV) : j.intl.string(j.t.pgUTZC)
                    })]
                })]
            }) : (0, r.jsxs)(l.DUT, {
                className: a()(U.VH, U.Lw, ee ? U.vk : U.r9),
                onClick: e,
                "aria-label": (0, y.CQ)(et),
                "aria-disabled": !ee,
                children: [(0, r.jsx)("img", {
                    alt: "",
                    src: ea,
                    className: U.Sl
                }), H !== M.d.MODAL && H !== M.d.MODAL_V2 && (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(l.Text, {
                        className: U.um,
                        variant: "text-sm/medium",
                        color: "always-white",
                        children: (0, y.CT)(et)
                    }), (0, r.jsx)(l.pVd, {
                        size: "xs",
                        color: "currentColor",
                        className: U.wI
                    })]
                })]
            })
        },
        es = () => H !== M.d.MODAL && H !== M.d.MODAL_V2 ? null : (0, r.jsxs)("div", {
            className: k.zH,
            children: [(0, r.jsx)(R.A, {
                channel: K,
                guild: W,
                onAction: Q,
                onClose: B
            }), (0, r.jsx)(s.A, {
                users: z,
                guildId: W.id,
                channelId: K.id,
                maxUsers: P.k,
                size: l._3J.SIZE_16,
                onClickOverflow: e => {
                    null == e || e.stopPropagation(), null == Q || Q({
                        action: "PRESS_VOICE_CHANNEL_AVATARS"
                    })
                },
                onUserClick: e => e.stopPropagation(),
                disableUserPopout: e => e === t.id,
                overflowCountColor: "text-muted",
                "aria-label": j.intl.string(j.t["jNqDh/"])
            }), H === M.d.MODAL_V2 && ec()]
        }),
        el = () => H === M.d.MODAL || H === M.d.MODAL_V2 ? null : (0, r.jsx)(P.A, {
            user: t,
            guild: W,
            channel: K,
            onAction: Q,
            onClose: B
        }),
        ec = () => t.id === n.id ? null : (0, r.jsx)("div", {
            className: k.o1,
            children: (0, r.jsx)(D.A, {
                channel: K,
                onAction: Q,
                onClose: B
            })
        }),
        eu = null != q ? j.intl.formatToPlainString(j.t["4CQq9Q"], {
            name: q.name
        }) : j.intl.string(j.t["Jpkr/q"]);
    return (0, r.jsx)(m.f5, {
        value: Z,
        children: (0, r.jsxs)(N.A, {
            ref: X,
            className: V,
            onAction: Q,
            onClose: B,
            "aria-label": eu,
            children: [(0, r.jsx)(w.A, {
                text: eu,
                tags: (0, r.jsx)(g.Ay, {
                    size: g.ed.SMALL
                }),
                contextMenu: (0, r.jsx)(L.A, {
                    display: "live",
                    user: t,
                    onClose: B
                })
            }), (0, r.jsxs)("div", {
                className: k.rf,
                children: [(0, r.jsxs)("div", {
                    className: k.Qs,
                    children: [eo(), es(), H === M.d.MODAL && ec()]
                }), el()]
            }), H !== M.d.MODAL && H !== M.d.MODAL_V2 && ec()]
        })
    })
}