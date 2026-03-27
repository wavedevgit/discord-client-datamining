/** chunk id: 839671 params = (module,exports,require) **/
n.d(t, {
    A: () => A,
    K: () => j
});
var a = n(627968),
    i = n(64700),
    l = n(503698),
    r = n.n(l),
    s = n(505779),
    c = n(990078),
    o = n(397927),
    d = n(409626),
    u = n(37948),
    m = n(985018),
    x = n(325952),
    h = n(123513);
let f = [s.V.OFFICIAL, s.V.TWITTER, s.V.YOUTUBE],
    g = {
        colorClass: h.wP
    },
    _ = {
        size: "xs",
        colorClass: h.wP
    };

function p(e, t) {
    switch (e.category) {
        case s.V.OFFICIAL:
            return {
                icon: (0, a.jsx)(o.L_e, {
                    ...t
                }), action: d.Ws.WebsiteLink, title: m.intl.string(m.t.fOUKvg)
            };
        case s.V.TWITTER:
            return {
                icon: (0, a.jsx)(o.p3p, {
                    ...t
                }), action: d.Ws.XLink, title: m.intl.string(m.t.INic4y)
            };
        case s.V.YOUTUBE:
            return {
                action: d.Ws.YouTubeLink, icon: (0, a.jsx)(o.CiD, {
                    ...t
                }), title: m.intl.string(m.t.lNmxbE)
            };
        case s.V.FACEBOOK:
            return {
                icon: (0, a.jsx)(o.Zc1, {
                    ...t
                }), action: d.Ws.FacebookLink, title: m.intl.string(m.t.FjyREK)
            };
        case s.V.INSTAGRAM:
            return {
                icon: (0, a.jsx)(o.LyU, {
                    ...t
                }), action: d.Ws.InstagramLink, title: m.intl.string(m.t["cgR+IK"])
            };
        case s.V.BLUESKY:
            return {
                icon: (0, a.jsx)(o.akf, {
                    ...t
                }), action: d.Ws.BlueskyLink, title: m.intl.string(m.t["D/PHq5"])
            };
        case s.V.REDDIT:
            return {
                icon: (0, a.jsx)(o.T1e, {
                    ...t
                }), action: d.Ws.RedditLink, title: m.intl.string(m.t["Hgb+fc"])
            };
        case s.V.TWITCH:
            return {
                icon: (0, a.jsx)(o.aWO, {
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
        trackAction: n
    } = e, {
        action: l,
        icon: r,
        title: s
    } = p(t, g), d = i.useCallback(() => {
        n(l)
    }, [l, n]);
    return (0, a.jsx)(c.m, {
        text: s,
        children: (0, a.jsx)(o.MzZ, {
            onClick: d,
            className: h.yO,
            href: t.url,
            target: "_blank",
            "aria-label": s,
            children: r
        })
    })
}
let A = function(e) {
    let {
        detectedGame: t,
        trackAction: n
    } = e;
    if (null == t.websites) return null;
    let i = t.websites.filter(e => {
        let {
            category: t
        } = e;
        return f.includes(t)
    }).sort((e, t) => e.category - t.category);
    return 0 === i.length ? null : (0, a.jsxs)("div", {
        children: [(0, a.jsx)(o.Heading, {
            className: x.bV,
            variant: "text-xs/semibold",
            color: "text-default",
            children: m.intl.string(m.t["Oj3o1/"])
        }), (0, a.jsx)("div", {
            className: r()(x.nM, x.mX),
            children: i.map(e => (0, a.jsx)(v, {
                website: e,
                trackAction: n
            }, e.url))
        })]
    })
};

function j(e) {
    let {
        website: t,
        trackAction: n
    } = e, l = (0, u.A)(), {
        action: r,
        icon: s,
        title: d
    } = p(t, _), m = i.useCallback(() => {
        n(r), l(t.url)
    }, [r, l, n, t.url]);
    return (0, a.jsx)(c.m, {
        text: d,
        children: (0, a.jsx)(o.DUT, {
            onClick: m,
            className: h.yO,
            title: d,
            children: s
        })
    })
}