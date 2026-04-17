/** chunk id: 839671 params = (module,exports,require) **/
n.d(t, {
    A: () => A,
    K: () => b
});
var l = n(627968),
    a = n(64700),
    i = n(503698),
    r = n.n(i),
    s = n(505779),
    o = n(990078),
    c = n(397927),
    d = n(409626),
    u = n(37948),
    m = n(985018),
    f = n(141535),
    h = n(262420);
let x = [s.V.OFFICIAL, s.V.TWITTER, s.V.YOUTUBE],
    g = {
        colorClass: h.wP
    },
    p = {
        size: "xs",
        colorClass: h.wP
    };

function _(e, t) {
    switch (e.category) {
        case s.V.OFFICIAL:
            return {
                icon: (0, l.jsx)(c.L_e, {
                    ...t
                }), action: d.Ws.WebsiteLink, title: m.intl.string(m.t.fOUKvg)
            };
        case s.V.TWITTER:
            return {
                icon: (0, l.jsx)(c.p3p, {
                    ...t
                }), action: d.Ws.XLink, title: m.intl.string(m.t.INic4y)
            };
        case s.V.YOUTUBE:
            return {
                action: d.Ws.YouTubeLink, icon: (0, l.jsx)(c.CiD, {
                    ...t
                }), title: m.intl.string(m.t.lNmxbE)
            };
        case s.V.FACEBOOK:
            return {
                icon: (0, l.jsx)(c.Zc1, {
                    ...t
                }), action: d.Ws.FacebookLink, title: m.intl.string(m.t.FjyREK)
            };
        case s.V.INSTAGRAM:
            return {
                icon: (0, l.jsx)(c.LyU, {
                    ...t
                }), action: d.Ws.InstagramLink, title: m.intl.string(m.t["cgR+IK"])
            };
        case s.V.BLUESKY:
            return {
                icon: (0, l.jsx)(c.akf, {
                    ...t
                }), action: d.Ws.BlueskyLink, title: m.intl.string(m.t["D/PHq5"])
            };
        case s.V.REDDIT:
            return {
                icon: (0, l.jsx)(c.T1e, {
                    ...t
                }), action: d.Ws.RedditLink, title: m.intl.string(m.t["Hgb+fc"])
            };
        case s.V.TWITCH:
            return {
                icon: (0, l.jsx)(c.aWO, {
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
        action: i,
        icon: r,
        title: s
    } = _(t, g), d = a.useCallback(() => {
        n(i)
    }, [i, n]);
    return (0, l.jsx)(o.m, {
        text: s,
        children: (0, l.jsx)(c.MzZ, {
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
        game: t,
        trackAction: n
    } = e;
    if (null == t.websites) return null;
    let a = t.websites.filter(e => {
        let {
            category: t
        } = e;
        return x.includes(t)
    }).sort((e, t) => e.category - t.category);
    return 0 === a.length ? null : (0, l.jsxs)("div", {
        children: [(0, l.jsx)(c.Heading, {
            className: f.bV,
            variant: "text-xs/semibold",
            color: "text-default",
            children: m.intl.string(m.t["Oj3o1/"])
        }), (0, l.jsx)("div", {
            className: r()(f.nM, f.mX),
            children: a.map(e => (0, l.jsx)(v, {
                website: e,
                trackAction: n
            }, e.url))
        })]
    })
};

function b(e) {
    let {
        website: t,
        trackAction: n
    } = e, i = (0, u.A)(), {
        action: r,
        icon: s,
        title: d
    } = _(t, p), m = a.useCallback(() => {
        n(r), i(t.url)
    }, [r, i, n, t.url]);
    return (0, l.jsx)(o.m, {
        text: d,
        children: (0, l.jsx)(c.DUT, {
            onClick: m,
            className: h.yO,
            title: d,
            children: s
        })
    })
}