/** Chunk was on 78528 **/
/** chunk id: 534189, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => P
});
var r = n(627968);
n(64700);
var l = n(934551),
    i = n(311907),
    s = n(827734),
    a = n(922590),
    o = n(821269),
    c = n(437774),
    u = n(994500),
    d = n(351906),
    p = n(562153),
    h = n(622543),
    f = n(987112),
    g = n(31432),
    m = n(389996),
    b = n(559506),
    A = n(361311),
    y = n(886891),
    _ = n(743987),
    O = n(383448),
    j = n(900179),
    v = n(646986),
    x = n(946356),
    E = n(810396),
    C = n(243166),
    S = n(652215),
    I = n(996988),
    N = n(985018),
    T = n(673721);

function P(e) {
    let {
        user: t,
        currentUser: n,
        displayProfile: P,
        channel: w,
        isHoveringOrFocusing: R,
        onOpenProfile: D
    } = e, {
        relationshipType: M,
        originApplicationId: L
    } = (0, i.cf)([u.A], () => ({
        relationshipType: u.A.getRelationshipType(t.id),
        originApplicationId: u.A.getOriginApplicationId(t.id)
    })), k = (0, a.fi)(t.id), U = (0, o.q)({
        userId: t.id
    }), G = (0, i.bG)([d.A], () => d.A.hidePersonalInformation), B = (0, i.bG)([h.A], () => {
        var e;
        return null == (e = h.A.getUserProfile(t.id)) ? void 0 : e.application
    });
    return (0, r.jsxs)("div", {
        className: T.rf,
        children: [(0, r.jsx)(b.A, {
            userId: t.id
        }), (0, r.jsx)(E.A, {
            user: t,
            guildId: w.guild_id,
            nickname: p.Ay.getName(null, w.id, t),
            pronouns: null == P ? void 0 : P.pronouns,
            onOpenProfile: D,
            tags: (0, r.jsx)(g.A, {
                displayProfile: P,
                themeType: I.d.SIDEBAR
            }),
            nicknameIcons: G ? null : (0, r.jsx)(C.A, {
                userId: t.id,
                isVisible: R,
                onOpenProfile: D
            })
        }), M === S.eA$.PENDING_INCOMING && (0, r.jsx)(x.A.Overlay, {
            children: (0, r.jsx)(y.A, {
                user: t,
                channelId: w.id,
                applicationId: L
            })
        }), k.map(e => (0, r.jsx)(x.A.Overlay, {
            children: (0, r.jsx)(y.A, {
                user: t,
                isGameRelationship: !0,
                applicationId: e.applicationId,
                channelId: w.id
            })
        }, e.applicationId)), (0, r.jsx)(O.A, {
            user: t
        }), t.isProvisional && (0, r.jsx)(x.A.Overlay, {
            children: (0, r.jsx)(j.A, {
                heading: N.intl.string(N.t.Iyka0U),
                headingIcon: (0, r.jsx)(l.CircleErrorIcon, {
                    size: "xxs",
                    color: s.A.colors.TEXT_STRONG
                }),
                headingColor: "text-strong",
                children: (0, r.jsx)(c.T, {
                    userId: t.id
                })
            })
        }), (0, r.jsx)(v.A, {
            user: t,
            currentUser: n,
            onOpenUserProfileModal: D
        }), (0, r.jsxs)(x.A.Overlay, {
            className: T.Lw,
            children: [!G && (null == P ? void 0 : P.bio) != null && (null == P ? void 0 : P.bio) !== "" && (0, r.jsx)(j.A, {
                heading: N.intl.string(N.t["61W33d"]),
                headingColor: "text-strong",
                children: (0, r.jsx)(m.A, {
                    userId: t.id,
                    userBio: P.bio,
                    isHoveringOrFocusing: R,
                    animateOnHoverOrFocusOnly: !0
                })
            }), (null == B ? void 0 : B.popularApplicationCommandIds) != null && (0, r.jsx)(f.A, {
                applicationId: B.id,
                commandIds: B.popularApplicationCommandIds,
                channel: w
            }), U.length > 0 && (0, r.jsx)(j.A, {
                heading: N.intl.string(N.t["Uv/eTx"]),
                headingColor: "text-strong",
                children: (0, r.jsx)(A.A, {
                    applicationIds: U
                })
            }), (0, r.jsx)(j.A, {
                heading: t.bot ? N.intl.string(N.t["A//N4k"]) : N.intl.string(N.t.a6XYD9),
                headingColor: "text-strong",
                children: (0, r.jsx)(_.A, {
                    userId: t.id
                })
            })]
        })]
    })
}