/** chunk id: 969128, original params: n,e,t (module,exports,require) **/
t.d(e, {
    A: () => o
});
var i = t(627968);
t(64700);
var r = t(311907),
    l = t(397927),
    a = t(816662),
    d = t(395504),
    s = t(543465),
    c = t(652215),
    A = t(985018);

function o(n) {
    let e = (0, d.jN)(n.guild_id),
        t = (0, r.bG)([s.Ay], () => s.Ay.isChannelOptedIn(n.guild_id, n.id)),
        o = (0, r.bG)([s.Ay], () => null != n.parent_id && s.Ay.isChannelOptedIn(n.guild_id, n.parent_id)),
        u = (0, r.bG)([s.Ay], () => s.Ay.isFavorite(n.guild_id, n.id)),
        h = () => {
            (0, a.AC)(n.guild_id, n.id, !t, {
                section: c.JJy.CONTEXT_MENU
            })
        };
    if (!e || n.isThread()) return null;
    if (n.isCategory()) return (0, i.jsx)(l.Drp, {
        id: "opt-into-category",
        label: t ? A.intl.string(A.t["3zySTA"]) : A.intl.string(A.t["9mysCh"]),
        action: () => h()
    });
    let g = u ? A.intl.string(A.t.M5PWSf) : A.intl.string(A.t.RMpwZu);
    return (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(l.Drp, {
            id: "opt-in-favorite-channel",
            label: g,
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
            label: t ? A.intl.string(A.t["3zySTA"]) : A.intl.string(A.t["9mysCh"]),
            action: () => h()
        })]
    })
}