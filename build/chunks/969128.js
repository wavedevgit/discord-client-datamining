/** chunk id: 969128, original params: n,t,e (module,exports,require) **/
e.d(t, {
    A: () => o
});
var i = e(627968);
e(64700);
var r = e(311907),
    l = e(397927),
    a = e(816662),
    d = e(395504),
    s = e(543465),
    c = e(652215),
    A = e(985018);

function o(n) {
    let t = (0, d.jN)(n.guild_id),
        e = (0, r.bG)([s.Ay], () => s.Ay.isChannelOptedIn(n.guild_id, n.id)),
        o = (0, r.bG)([s.Ay], () => null != n.parent_id && s.Ay.isChannelOptedIn(n.guild_id, n.parent_id)),
        u = (0, r.bG)([s.Ay], () => s.Ay.isFavorite(n.guild_id, n.id)),
        g = () => {
            (0, a.AC)(n.guild_id, n.id, !e, {
                section: c.JJy.CONTEXT_MENU
            })
        };
    if (!t || n.isThread()) return null;
    if (n.isCategory()) return (0, i.jsx)(l.Drp, {
        id: "opt-into-category",
        label: e ? A.intl.string(A.t["3zySTA"]) : A.intl.string(A.t["9mysCh"]),
        action: () => g()
    });
    let h = u ? A.intl.string(A.t.z7I3gd) : A.intl.string(A.t["N2c/Un"]);
    return u ? A.intl.string(A.t.M5PWSf) : A.intl.string(A.t.RMpwZu), (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(l.Drp, {
            id: "opt-in-favorite-channel",
            label: h,
            action: () => {
                (0, a.jA)(n.guild_id, n.id, !u, {
                    section: c.JJy.CONTEXT_MENU
                })
            }
        }), o ? (0, i.jsx)(l.Drp, {
            id: "opt-out-category",
            label: A.intl.string(A.t.jNphKT),
            action: () => void(null != n.parent_id && (0, a.AC)(n.guild_id, n.parent_id, !1, {
                section: c.JJy.CONTEXT_MENU
            }))
        }) : (0, i.jsx)(l.Drp, {
            id: "opt-into-channel",
            label: e ? A.intl.string(A.t["3zySTA"]) : A.intl.string(A.t["9mysCh"]),
            action: () => g()
        })]
    })
}