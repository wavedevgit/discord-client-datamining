/** Chunk was on web.js **/
/** chunk id: 320819, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => L
});
var r = n(627968),
    i = n(311907),
    a = n(397927),
    o = n(922590),
    s = n(437774),
    l = n(994500),
    c = n(351906),
    u = n(562153),
    d = n(927578),
    f = n(970354),
    p = n(31432),
    _ = n(223330),
    h = n(559506),
    m = n(886891),
    g = n(383448),
    E = n(900179),
    y = n(646986),
    b = n(379654),
    O = n(946356),
    v = n(810396),
    A = n(243166),
    I = n(442228),
    S = n(192867),
    T = n(403369),
    C = n(360563),
    N = n(989461),
    w = n(652215),
    R = n(996988),
    P = n(985018),
    D = n(183959);

function L(e) {
    let {
        user: t,
        currentUser: n,
        displayProfile: L,
        guild: x,
        isHoveringOrFocusing: M,
        onOpenProfile: j,
        channelId: k,
        onClose: U
    } = e, G = u.Ay.useName(null == x ? void 0 : x.id, k, t), {
        relationshipType: F,
        originApplicationId: V
    } = (0, i.cf)([l.A], () => ({
        relationshipType: l.A.getRelationshipType(t.id),
        originApplicationId: l.A.getOriginApplicationId(t.id)
    })), B = (0, o.fi)(t.id), H = (0, i.bG)([c.A], () => c.A.hidePersonalInformation), {
        enabled: Y
    } = (0, f.u)({
        location: "UserProfilePopoutBody"
    }), W = t.id === n.id, K = (null == L ? void 0 : L.widgets) != null && L.widgets.length > 0, z = (0, d.TW)(n);
    return (0, r.jsxs)(a.HOs, {
        fade: !0,
        className: D.rf,
        children: [(0, r.jsx)(h.A, {
            userId: t.id
        }), (0, r.jsx)(v.A, {
            user: t,
            guildId: null == x ? void 0 : x.id,
            onOpenProfile: j,
            onClose: U,
            usernameIcon: t.hasAvatarForGuild(null == x ? void 0 : x.id) && (0, r.jsx)(S.A, {
                user: t,
                nickname: G
            }),
            nickname: G,
            pronouns: null == L ? void 0 : L.pronouns,
            tags: (0, r.jsx)(p.A, {
                displayProfile: L,
                themeType: R.d.POPOUT,
                onClose: U
            }),
            nicknameIcons: H ? null : (0, r.jsx)(A.A, {
                userId: t.id,
                isVisible: M,
                onOpenProfile: j
            })
        }), F === w.eA$.PENDING_INCOMING && (0, r.jsx)(O.A.Overlay, {
            children: (0, r.jsx)(m.A, {
                user: t,
                guildId: null == x ? void 0 : x.id,
                channelId: k,
                applicationId: V
            })
        }), B.map(e => (0, r.jsx)(O.A.Overlay, {
            children: (0, r.jsx)(m.A, {
                user: t,
                isGameRelationship: !0,
                applicationId: e.applicationId,
                channelId: k
            })
        }, e.applicationId)), (0, r.jsx)(g.A, {
            user: t
        }), !W && (0, r.jsx)(C.A, {
            user: t,
            onOpenProfile: e => null == j ? void 0 : j({
                tabSection: e
            })
        }), t.isProvisional ? (0, r.jsx)(O.A.Overlay, {
            className: D.Nr,
            children: (0, r.jsx)(E.A, {
                heading: P.intl.string(P.t.Iyka0U),
                headingIcon: (0, r.jsx)(a.EpV, {
                    size: "xxs",
                    color: a.LU0.colors.TEXT_STRONG
                }),
                headingColor: "text-strong",
                children: (0, r.jsx)(s.T, {
                    userId: t.id
                })
            })
        }) : (0, r.jsx)(I.A, {
            user: t,
            bio: null == L ? void 0 : L.bio,
            hidePersonalInformation: H,
            onClose: U
        }), K && (0, r.jsx)(b.A, {
            user: t,
            widgets: null == L ? void 0 : L.widgets,
            onOpenUserProfileModal: j
        }), W && (0, r.jsx)(_.A, {
            isPremiumUser: z,
            onInteraction: U
        }), (0, r.jsx)(y.A, {
            user: t,
            currentUser: n,
            guildId: null == x ? void 0 : x.id,
            onOpenUserProfileModal: j,
            onClose: U
        }), Y && !W && (0, r.jsx)(N.A, {
            user: t,
            onOpenProfile: j
        }), null != x && (0, r.jsx)(T.A, {
            userId: t.id,
            guild: x
        })]
    })
}