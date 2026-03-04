/** chunk id: 839671, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => f,
    R: () => p
});
var i = n(627968);
n(64700);
var l = n(503698),
    a = n.n(l),
    s = n(505779),
    r = n(990078),
    o = n(397927),
    c = n(409626),
    d = n(985018),
    u = n(851822),
    m = n(307291);
let x = [s.V.OFFICIAL, s.V.TWITTER, s.V.YOUTUBE];

function g(e) {
    switch (e.category) {
        case s.V.OFFICIAL:
            return {
                icon: (0, i.jsx)(o.L_e, {
                    colorClass: m.wP
                }), action: c.Ws.WebsiteLink, title: d.intl.string(d.t.fOUKvg)
            };
        case s.V.TWITTER:
            return {
                icon: (0, i.jsx)(o.p3p, {
                    colorClass: m.wP
                }), action: c.Ws.XLink, title: d.intl.string(d.t.INic4y)
            };
        case s.V.YOUTUBE:
            return {
                action: c.Ws.YouTubeLink, icon: (0, i.jsx)(o.CiD, {
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
        trackClick: n
    } = e, {
        action: l,
        icon: a,
        title: s
    } = g(t);
    return (0, i.jsx)(r.m, {
        text: s,
        children: (0, i.jsx)(o.MzZ, {
            onClick: () => {
                n(l)
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
        trackClick: n
    } = e;
    if (null == t.websites) return null;
    let l = t.websites.filter(e => {
        let {
            category: t
        } = e;
        return x.includes(t)
    }).sort((e, t) => e.category - t.category);
    return 0 === l.length ? null : (0, i.jsxs)("div", {
        children: [(0, i.jsx)(o.Heading, {
            className: u.bV,
            variant: "text-xs/semibold",
            color: "text-default",
            children: d.intl.string(d.t["Oj3o1/"])
        }), (0, i.jsx)("div", {
            className: a()(u.nM, u.mX),
            children: l.map(e => (0, i.jsx)(h, {
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
    } = e, {
        action: l,
        icon: a,
        title: s
    } = g(t);
    return (0, i.jsx)(r.m, {
        __unsupportedReactNodeAsText: t.url,
        children: (0, i.jsx)(o.DUT, {
            tag: "a",
            onClick: () => {
                n(l)
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

function p(e) {
    let {
        detectedGame: t,
        trackClick: n
    } = e;
    if (null == t.websites) return null;
    let l = t.websites.filter(e => {
        let {
            category: t
        } = e;
        return x.includes(t)
    }).sort((e, t) => e.category - t.category);
    return 0 === l.length ? null : (0, i.jsxs)("div", {
        children: [(0, i.jsx)(o.Heading, {
            className: u.bV,
            variant: "text-xs/semibold",
            color: "text-default",
            children: d.intl.string(d.t["Oj3o1/"])
        }), (0, i.jsx)("div", {
            className: a()(u.nM, u.mX),
            children: l.map(e => (0, i.jsx)(j, {
                website: e,
                trackClick: n
            }, e.url))
        })]
    })
}