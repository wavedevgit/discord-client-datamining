/** Chunk was on 13530 **/
/** chunk id: 839671, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => x
}), n(65821), n(638769);
var l = n(627968);
n(64700);
var r = n(503698),
    i = n.n(r),
    a = n(798236),
    s = n(990078),
    o = n(397927),
    c = n(409626),
    u = n(985018),
    d = n(851822),
    m = n(307291);
let f = [a.w.OFFICIAL, a.w.TWITTER, a.w.YOUTUBE];

function g(e) {
    let {
        website: t,
        trackClick: n
    } = e, {
        action: r,
        icon: i,
        title: d
    } = function(e) {
        switch (e.category) {
            case a.w.OFFICIAL:
                return {
                    icon: (0, l.jsx)(o.L_e, {
                        colorClass: m.wP
                    }), action: c.Ws.WebsiteLink, title: u.intl.string(u.t.fOUKvg)
                };
            case a.w.TWITTER:
                return {
                    icon: (0, l.jsx)(o.p3p, {
                        colorClass: m.wP
                    }), action: c.Ws.XLink, title: u.intl.string(u.t.INic4y)
                };
            case a.w.YOUTUBE:
                return {
                    action: c.Ws.YouTubeLink, icon: (0, l.jsx)(o.CiD, {
                        colorClass: m.wP
                    }), title: u.intl.string(u.t.lNmxbE)
                };
            default:
                throw Error("Unknown IGDB website category")
        }
    }(t);
    return (0, l.jsx)(s.m, {
        __unsupportedReactNodeAsText: t.url,
        children: (0, l.jsx)(o.MzZ, {
            onClick: () => {
                n(r)
            },
            className: m.yO,
            title: d,
            href: t.url,
            target: "_blank",
            children: i
        })
    })
}
let x = function(e) {
    let {
        detectedGame: t,
        trackClick: n
    } = e;
    if (null == t.websites) return null;
    let r = t.websites.filter(e => {
        let {
            category: t
        } = e;
        return f.includes(t)
    }).sort((e, t) => e.category - t.category);
    return 0 === r.length ? null : (0, l.jsxs)("div", {
        children: [(0, l.jsx)(o.Heading, {
            className: d.bV,
            variant: "text-xs/semibold",
            color: "text-default",
            children: u.intl.string(u.t["Oj3o1/"])
        }), (0, l.jsx)("div", {
            className: i()(d.nM, d.mX),
            children: r.map(e => (0, l.jsx)(g, {
                website: e,
                trackClick: n
            }, e.url))
        })]
    })
}