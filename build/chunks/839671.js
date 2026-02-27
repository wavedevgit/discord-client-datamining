/** chunk id: 839671, original params: e,t,i (module,exports,require) **/
i.d(t, {
    A: () => f,
    R: () => v
});
var n = i(627968);
i(64700);
var l = i(503698),
    a = i.n(l),
    s = i(505779),
    r = i(990078),
    c = i(397927),
    o = i(409626),
    d = i(985018),
    u = i(851822),
    m = i(307291);
let x = [s.V.OFFICIAL, s.V.TWITTER, s.V.YOUTUBE];

function g(e) {
    switch (e.category) {
        case s.V.OFFICIAL:
            return {
                icon: (0, n.jsx)(c.L_e, {
                    colorClass: m.wP
                }), action: o.Ws.WebsiteLink, title: d.intl.string(d.t.fOUKvg)
            };
        case s.V.TWITTER:
            return {
                icon: (0, n.jsx)(c.p3p, {
                    colorClass: m.wP
                }), action: o.Ws.XLink, title: d.intl.string(d.t.INic4y)
            };
        case s.V.YOUTUBE:
            return {
                action: o.Ws.YouTubeLink, icon: (0, n.jsx)(c.CiD, {
                    colorClass: m.wP
                }), title: d.intl.string(d.t.lNmxbE)
            };
        default:
            throw Error("Unknown website category")
    }
}

function h(e) {
    let {
        website: t,
        trackClick: i
    } = e, {
        action: l,
        icon: a,
        title: s
    } = g(t);
    return (0, n.jsx)(r.m, {
        text: s,
        children: (0, n.jsx)(c.MzZ, {
            onClick: () => {
                i(l)
            },
            className: m.yO,
            href: t.url,
            target: "_blank",
            "aria-label": s,
            children: a
        })
    })
}
let f = function(e) {
    let {
        detectedGame: t,
        trackClick: i
    } = e;
    if (null == t.websites) return null;
    let l = t.websites.filter(e => {
        let {
            category: t
        } = e;
        return x.includes(t)
    }).sort((e, t) => e.category - t.category);
    return 0 === l.length ? null : (0, n.jsxs)("div", {
        children: [(0, n.jsx)(c.Heading, {
            className: u.bV,
            variant: "text-xs/semibold",
            color: "text-default",
            children: d.intl.string(d.t["Oj3o1/"])
        }), (0, n.jsx)("div", {
            className: a()(u.nM, u.mX),
            children: l.map(e => (0, n.jsx)(h, {
                website: e,
                trackClick: i
            }, e.url))
        })]
    })
};

function j(e) {
    let {
        website: t,
        trackClick: i
    } = e, {
        action: l,
        icon: a,
        title: s
    } = g(t);
    return (0, n.jsx)(r.m, {
        __unsupportedReactNodeAsText: t.url,
        children: (0, n.jsx)(c.DUT, {
            tag: "a",
            onClick: () => {
                i(l)
            },
            className: m.yO,
            title: s,
            href: t.url,
            target: "_blank",
            rel: "noreferrer noopener",
            children: a
        })
    })
}

function v(e) {
    let {
        detectedGame: t,
        trackClick: i
    } = e;
    if (null == t.websites) return null;
    let l = t.websites.filter(e => {
        let {
            category: t
        } = e;
        return x.includes(t)
    }).sort((e, t) => e.category - t.category);
    return 0 === l.length ? null : (0, n.jsxs)("div", {
        children: [(0, n.jsx)(c.Heading, {
            className: u.bV,
            variant: "text-xs/semibold",
            color: "text-default",
            children: d.intl.string(d.t["Oj3o1/"])
        }), (0, n.jsx)("div", {
            className: a()(u.nM, u.mX),
            children: l.map(e => (0, n.jsx)(j, {
                website: e,
                trackClick: i
            }, e.url))
        })]
    })
}