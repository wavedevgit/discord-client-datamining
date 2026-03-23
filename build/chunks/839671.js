/** chunk id: 839671 params = (module,exports,require) **/
n.d(t, {
    A: () => A,
    K: () => j
});
var a = n(627968),
    l = n(64700),
    i = n(503698),
    r = n.n(i),
    s = n(505779),
    o = n(990078),
    c = n(397927),
    d = n(409626),
    u = n(37948),
    m = n(985018),
    x = n(851822),
    _ = n(307291);
let g = [s.V.OFFICIAL, s.V.TWITTER, s.V.YOUTUBE],
    f = {
        colorClass: _.wP
    },
    p = {
        size: "xs",
        colorClass: _.wP
    };

function h(e, t) {
    switch (e.category) {
        case s.V.OFFICIAL:
            return {
                icon: (0, a.jsx)(c.L_e, {
                    ...t
                }), action: d.Ws.WebsiteLink, title: m.intl.string(m.t.fOUKvg)
            };
        case s.V.TWITTER:
            return {
                icon: (0, a.jsx)(c.p3p, {
                    ...t
                }), action: d.Ws.XLink, title: m.intl.string(m.t.INic4y)
            };
        case s.V.YOUTUBE:
            return {
                action: d.Ws.YouTubeLink, icon: (0, a.jsx)(c.CiD, {
                    ...t
                }), title: m.intl.string(m.t.lNmxbE)
            };
        case s.V.FACEBOOK:
            return {
                icon: (0, a.jsx)(c.Zc1, {
                    ...t
                }), action: d.Ws.FacebookLink, title: m.intl.string(m.t.FjyREK)
            };
        case s.V.INSTAGRAM:
            return {
                icon: (0, a.jsx)(c.LyU, {
                    ...t
                }), action: d.Ws.InstagramLink, title: m.intl.string(m.t["cgR+IK"])
            };
        case s.V.BLUESKY:
            return {
                icon: (0, a.jsx)(c.akf, {
                    ...t
                }), action: d.Ws.BlueskyLink, title: m.intl.string(m.t["D/PHq5"])
            };
        case s.V.REDDIT:
            return {
                icon: (0, a.jsx)(c.T1e, {
                    ...t
                }), action: d.Ws.RedditLink, title: m.intl.string(m.t["Hgb+fc"])
            };
        case s.V.TWITCH:
            return {
                icon: (0, a.jsx)(c.aWO, {
                    ...t
                }), action: d.Ws.TwitchLink, title: m.intl.string(m.t["7xtz4G"])
            };
        default:
            throw Error("Unknown website category")
    }
}

function v(e) {
    let {
        website: t,
        trackClick: n
    } = e, {
        action: l,
        icon: i,
        title: r
    } = h(t, f);
    return (0, a.jsx)(o.m, {
        text: r,
        children: (0, a.jsx)(c.MzZ, {
            onClick: () => {
                n(l)
            },
            className: _.yO,
            href: t.url,
            target: "_blank",
            "aria-label": r,
            children: i
        })
    })
}
let A = function(e) {
    let {
        detectedGame: t,
        trackClick: n
    } = e;
    if (null == t.websites) return null;
    let l = t.websites.filter(e => {
        let {
            category: t
        } = e;
        return g.includes(t)
    }).sort((e, t) => e.category - t.category);
    return 0 === l.length ? null : (0, a.jsxs)("div", {
        children: [(0, a.jsx)(c.Heading, {
            className: x.bV,
            variant: "text-xs/semibold",
            color: "text-default",
            children: m.intl.string(m.t["Oj3o1/"])
        }), (0, a.jsx)("div", {
            className: r()(x.nM, x.mX),
            children: l.map(e => (0, a.jsx)(v, {
                website: e,
                trackClick: n
            }, e.url))
        })]
    })
};

function j(e) {
    let {
        website: t,
        trackClick: n
    } = e, i = (0, u.A)(), {
        action: r,
        icon: s,
        title: d
    } = h(t, p), m = l.useCallback(() => {
        n(r), i(t.url)
    }, [r, i, n, t.url]);
    return (0, a.jsx)(o.m, {
        text: d,
        children: (0, a.jsx)(c.DUT, {
            onClick: m,
            className: _.yO,
            title: d,
            children: s
        })
    })
}