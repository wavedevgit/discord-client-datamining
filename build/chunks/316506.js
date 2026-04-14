/** chunk id: 316506 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => f,
    u: () => A
});
var i = n(627968),
    s = n(64700),
    l = n(311907),
    r = n(397927),
    a = n(442433),
    o = n(145643),
    d = n(665013),
    c = n(34457),
    u = n(642133),
    m = n(458334),
    g = n(927573),
    x = n(652215),
    h = n(985018),
    _ = n(873494),
    p = n(146583);

function A() {
    let [e, t] = s.useState(!0);
    return {
        scrolledToTop: e,
        handleScroll: function(e) {
            t(0 === e.currentTarget.scrollTop)
        }
    }
}

function f(e) {
    let {
        guild: t,
        role: A,
        selectedSection: f,
        setSelectedSection: j
    } = e, N = s.useCallback(e => {
        j(e)
    }, [j]), E = (0, l.bG)([u.A], () => u.A.getRoleMemberCount(t.id)?.[A.id], [A.id, t.id]), C = (0, c.Oy)(A), T = (0, m.A)(t.id, A), I = (0, l.bG)([o.A], () => {
        let e = o.A.getGuildRoleConnectionsConfiguration(A.id);
        return null != e && e.some(e => e.some(e => e.connectionType === x.fg2.RIOT_GAMES || e.connectionType === x.fg2.LEAGUE_OF_LEGENDS))
    });
    s.useEffect(() => {
        C && j(g.T$.PERMISSIONS)
    }, [C, j]);
    let b = (0, d.x)(t, A);
    return (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsxs)("div", {
            className: p.gn,
            children: [(0, i.jsx)(r.Text, {
                className: p.Qw,
                color: "text-strong",
                variant: "text-md/semibold",
                children: h.intl.format(h.t.BUdGkE, {
                    roleName: A.name
                })
            }), b ? (0, i.jsx)(r.DUT, {
                className: p.MK,
                onClick: function(e) {
                    (0, a.L3)(e, async () => {
                        let {
                            default: e
                        } = await Promise.resolve().then(n.bind(n, 665013));
                        return n => (0, i.jsx)(e, {
                            ...n,
                            guild: t,
                            role: A
                        })
                    })
                },
                "aria-label": h.intl.string(h.t.PdRCRg),
                children: (0, i.jsx)(r.jNK, {
                    size: "md",
                    color: "currentColor"
                })
            }) : null]
        }), (0, i.jsxs)("div", {
            className: p.QR,
            children: [null != T ? (0, i.jsx)(r.po8, {
                messageType: r.YCn.WARNING,
                children: T
            }) : null, I ? (0, i.jsx)(r.po8, {
                messageType: r.YCn.WARNING,
                children: h.intl.format(_.default.sbMMtk, {})
            }) : null]
        }), (0, i.jsx)(r.hKd, {
            size: 6
        }), (0, i.jsxs)(r.VQ0, {
            className: p.$H,
            "aria-label": h.intl.string(h.t["+1H47t"]),
            selectedItem: f,
            type: "top",
            look: "brand",
            onItemSelect: N,
            children: [(0, i.jsx)(r.VQ0.Item, {
                className: p.YU,
                id: g.T$.DISPLAY,
                disabled: C,
                children: h.intl.string(h.t.hmdomw)
            }), (0, i.jsx)(r.VQ0.Item, {
                className: p.YU,
                id: g.T$.PERMISSIONS,
                children: h.intl.string(h.t.WIDE1L)
            }), (0, i.jsx)(r.VQ0.Item, {
                className: p.YU,
                id: g.T$.VERIFICATIONS,
                disabled: C,
                children: h.intl.string(h.t["5//Muu"])
            }), (0, i.jsx)(r.VQ0.Item, {
                className: p.YU,
                id: g.T$.MEMBERS,
                disabled: C,
                children: C ? h.intl.string(h.t["kg//+7"]) : h.intl.formatToPlainString(h.t.bHnZWW, {
                    numMembers: String(E)
                })
            })]
        })]
    })
}