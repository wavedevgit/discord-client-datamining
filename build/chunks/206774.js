/** chunk id: 206774, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => S
});
var r = n(627968),
    i = n(64700),
    l = n(284009),
    s = n.n(l),
    a = n(311907),
    o = n(397927),
    c = n(58149),
    d = n(495273),
    u = n(619006),
    g = n(576705),
    m = n(954571),
    p = n(403362),
    f = n(642133),
    h = n(555337),
    b = n(396816),
    x = n(856644),
    j = n(614164),
    _ = n(28495),
    O = n(869568),
    v = n(541285),
    y = n(728713),
    A = n(927573),
    E = n(652215),
    N = n(326028);

function S(e) {
    let t, {
            editRoleId: n,
            setEditRoleId: l,
            selectedSection: S,
            setSelectedSection: I
        } = e,
        T = (0, a.bG)([b.A], () => b.A.guild, []);
    s()(null != T, "guildId cannot be null here");
    let {
        role: C,
        permissionSearchQuery: P
    } = (0, a.cf)([b.A], () => ({
        role: b.A.getRole(n),
        permissionSearchQuery: b.A.getPermissionSearchQuery()
    }), [n]);
    i.useEffect(() => {
        null == C && l(null)
    }, [C, l]);
    let w = (0, a.bG)([g.A], () => g.A.getHighestRole(T), [T]),
        R = (0, a.bG)([g.A], () => !g.A.isRoleHigher(T, w, C)),
        D = i.useRef(null),
        G = (0, a.bG)([h.A], () => h.A.getProps().integrations),
        L = {
            role: C,
            editRoleId: n
        },
        k = i.useRef(L);
    if (i.useEffect(() => {
            k.current = L
        }), i.useEffect(() => {
            var e, t;
            let {
                role: n,
                editRoleId: r
            } = k.current, i = (0, x.L9)(S), l = null != (e = null == (t = f.A.getRoleMemberCount(T.id)) ? void 0 : t[r]) ? e : 0;
            m.default.track(E.HAw.ROLE_PAGE_VIEWED, function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))), r.forEach(function(t) {
                        var r;
                        r = n[t], t in e ? Object.defineProperty(e, t, {
                            value: r,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = r
                    })
                }
                return e
            }({
                tab_opened: i,
                is_everyone: (0, d.N8)(T.id, r),
                role_id: r,
                role_mentionable: null == n ? void 0 : n.mentionable,
                role_hoist: null == n ? void 0 : n.hoist,
                role_permissions: null == n ? void 0 : n.permissions.toString(),
                role_num_members: l
            }, (0, c.H$)(T.id)))
        }, [S, T.id, null == C ? void 0 : C.id]), i.useEffect(() => {
            (null == C ? void 0 : C.id) != null && (0, u.os)(T.id, C.id)
        }, [T.id, null == C ? void 0 : C.id]), null == C) return null;
    switch (S) {
        case A.T$.DISPLAY:
            t = (0, r.jsx)(_.Ay, {
                guild: T,
                role: C,
                locked: R,
                highestRole: w,
                setSelectedSection: I
            });
            break;
        case A.T$.PERMISSIONS:
            t = (0, r.jsx)(v.Ay, {
                guild: T,
                role: C,
                locked: R,
                setSelectedSection: I,
                initialSearchQuery: P
            });
            break;
        case A.T$.VERIFICATIONS:
            t = (0, r.jsx)(j.A, {
                guild: T,
                role: C,
                locked: R,
                setSelectedSection: I,
                integrations: null != G ? G : void 0
            });
            break;
        case A.T$.MEMBERS:
            t = (0, r.jsx)(O.Ay, {
                guild: T,
                role: C,
                locked: R,
                setSelectedSection: I
            });
            break;
        default:
            (0, p.xb)(S)
    }
    return (0, r.jsxs)("div", {
        className: N.MY,
        children: [(0, r.jsx)(y.A, {
            guild: T,
            currentRoleId: n,
            setCurrentRoleId: l,
            setSelectedSection: I
        }), (0, r.jsx)("div", {
            className: N.hQ,
            ref: D,
            children: (0, r.jsx)(o.xpW, {
                containerRef: D,
                children: t
            })
        })]
    })
}