/** chunk id: 868018 params = (module,exports,require) **/
n.d(t, {
    O: () => h
});
var i = n(627968),
    s = n(311907),
    l = n(743790),
    r = n(419954),
    a = n(933297),
    o = n(71393),
    d = n(711014),
    c = n(253932),
    u = n(780964),
    _ = n(985018);

function m() {
    let e = c.JG.useSetting();
    return (0, s.bG)([d.Ay, o.A], () => {
        let t = new Set(e);
        return d.Ay.getFlattenedGuildIds().filter(e => null != o.A.getGuild(e) && !t.has(e))
    }, [e])
}
let g = {
        type: a.wF.STACKED_ICONS,
        useIcons: function() {
            let e = m(),
                t = (0, s.bG)([o.A], () => e.slice(0, 2).map(e => o.A.getGuild(e)).filter(e => null != e), [e]);
            return 0 === t.length ? null : t.length >= 2 ? {
                frontIcon: {
                    icon: (0, i.jsx)(l.$, {
                        guild: t[0],
                        size: 48
                    }),
                    shape: a.NF.SQUIRCLE
                },
                backIcon: {
                    icon: (0, i.jsx)(l.$, {
                        guild: t[1],
                        size: 48
                    }),
                    shape: a.NF.SQUIRCLE
                }
            } : {
                frontIcon: {
                    icon: (0, i.jsx)(l.$, {
                        guild: t[0],
                        size: 48
                    }),
                    shape: a.NF.SQUIRCLE
                }
            }
        }
    },
    A = (0, r.AK)(u.X.PROFILE_PRIVACY_TO_ACTIVITY_PRIVACY_NAVIGATOR, {
        useSubtitle: function() {
            let e = m();
            if (0 === e.length) return _.intl.format(_.t.QJIJ5p, {});
            let t = o.A.getGuild(e[0]),
                n = t?.name ?? "",
                i = e.length - 1;
            return 0 === i ? _.intl.format(_.t["T+8J4A"], {
                guildName: n
            }) : _.intl.format(_.t["3JyODQ"], {
                guildName: n,
                count: i
            })
        },
        useTrailingDecoration: function() {
            return g
        },
        destinationKey: u.X.ACTIVITY_PRIVACY_PANEL
    }),
    h = (0, r.gN)(u.X.PROFILE_PRIVACY_RELATED_SETTINGS, {
        buildLayout: () => [A]
    })