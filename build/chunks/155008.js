/** Chunk was on 39048 **/
/** chunk id: 155008, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => v
});
var r = n(627968),
    i = n(64700),
    l = n(311907),
    s = n(554146),
    a = n(397927),
    o = n(826673),
    c = n(774780),
    d = n(532197),
    u = n(71393),
    g = n(555337),
    m = n(203498),
    p = n(982832),
    f = n(660496),
    h = n(88613),
    b = n(807334),
    x = n(5558),
    j = n(49999),
    _ = n(985018),
    O = n(690450);

function v() {
    let e, t = (0, l.bG)([g.A], () => g.A.getGuildId()),
        n = (0, l.bG)([u.A], () => u.A.getGuild(t)),
        v = (0, l.bG)([p.A], () => p.A.getCurrentPage());
    if (i.useEffect(() => {
            (0, o.Dr)(s.M.COMMUNITY_GUILD_SETTINGS_SAFETY, {
                dismissAction: j.i.AUTO
            })
        }, []), null == n) return null;
    let y = (0, x.N)(n);
    switch (v) {
        case f.C.OVERVIEW:
            e = (0, r.jsx)(h.A, {
                guild: n
            });
            break;
        case f.C.CAPTCHA_AND_RAID_PROTECTION:
            e = (0, r.jsx)(b.A, {
                title: _.intl.string(_.t["53eF5o"]),
                settings: y[f.C.CAPTCHA_AND_RAID_PROTECTION]
            });
            break;
        case f.C.DM_AND_SPAM_PROTECTION:
            e = (0, r.jsx)(b.A, {
                title: _.intl.string(_.t.O0SfFy),
                settings: y[f.C.DM_AND_SPAM_PROTECTION]
            });
            break;
        case f.C.AUTOMOD:
            e = (0, r.jsx)(c.A, {
                guildId: n.id
            });
            break;
        case f.C.PERMISSIONS:
            e = (0, r.jsx)(b.A, {
                title: _.intl.string(_.t.BXoNiT),
                settings: y[f.C.PERMISSIONS]
            })
    }
    return (0, r.jsxs)(r.Fragment, {
        children: [v !== f.C.OVERVIEW && (0, r.jsx)(a.DUT, {
            className: O.aX,
            onClick: () => {
                (0, m.K)(f.C.OVERVIEW)
            },
            children: (0, r.jsxs)("div", {
                className: O.Gv,
                children: [(0, r.jsx)(d.A, {
                    direction: d.A.Directions.LEFT
                }), (0, r.jsx)(a.Text, {
                    variant: "text-sm/semibold",
                    color: "interactive-text-default",
                    children: _.intl.string(_.t["13/7kX"])
                })]
            })
        }), e]
    })
}