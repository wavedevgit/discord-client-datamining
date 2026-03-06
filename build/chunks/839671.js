/** chunk id: 839671 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => g,
    R: () => _
});
var l = n(627968);
n(64700);
var a = n(503698),
    i = n.n(a),
    r = n(505779),
    s = n(990078),
    c = n(397927),
    o = n(409626),
    d = n(985018),
    u = n(728528),
    m = n(612617);
let x = [r.V.OFFICIAL, r.V.TWITTER, r.V.YOUTUBE];

function h(e) {
    switch (e.category) {
        case r.V.OFFICIAL:
            return {
                icon: (0, l.jsx)(c.L_e, {
                    colorClass: m.wP
                }), action: o.Ws.WebsiteLink, title: d.intl.string(d.t.fOUKvg)
            };
        case r.V.TWITTER:
            return {
                icon: (0, l.jsx)(c.p3p, {
                    colorClass: m.wP
                }), action: o.Ws.XLink, title: d.intl.string(d.t.INic4y)
            };
        case r.V.YOUTUBE:
            return {
                action: o.Ws.YouTubeLink, icon: (0, l.jsx)(c.CiD, {
                    colorClass: m.wP
                }), title: d.intl.string(d.t.lNmxbE)
            };
        default:
            throw Error("Unknown website category")
    }
}

function f(e) {
    let {
        website: t,
        trackClick: n
    } = e, {
        action: a,
        icon: i,
        title: r
    } = h(t);
    return (0, l.jsx)(s.m, {
        text: r,
        children: (0, l.jsx)(c.MzZ, {
            onClick: () => {
                n(a)
            },
            className: m.yO,
            href: t.url,
            target: "_blank",
            "aria-label": r,
            children: i
        })
    })
}
let g = function(e) {
    let {
        detectedGame: t,
        trackClick: n
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
            className: u.bV,
            variant: "text-xs/semibold",
            color: "text-default",
            children: d.intl.string(d.t["Oj3o1/"])
        }), (0, l.jsx)("div", {
            className: i()(u.nM, u.mX),
            children: a.map(e => (0, l.jsx)(f, {
                website: e,
                trackClick: n
            }, e.url))
        })]
    })
};

function p(e) {
    let {
        website: t,
        trackClick: n
    } = e, {
        action: a,
        icon: i,
        title: r
    } = h(t);
    return (0, l.jsx)(s.m, {
        __unsupportedReactNodeAsText: t.url,
        children: (0, l.jsx)(c.DUT, {
            tag: "a",
            onClick: () => {
                n(a)
            },
            className: m.yO,
            title: r,
            href: t.url,
            target: "_blank",
            rel: "noreferrer noopener",
            children: i
        })
    })
}

function _(e) {
    let {
        detectedGame: t,
        trackClick: n
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
            className: u.bV,
            variant: "text-xs/semibold",
            color: "text-default",
            children: d.intl.string(d.t["Oj3o1/"])
        }), (0, l.jsx)("div", {
            className: i()(u.nM, u.mX),
            children: a.map(e => (0, l.jsx)(p, {
                website: e,
                trackClick: n
            }, e.url))
        })]
    })
}