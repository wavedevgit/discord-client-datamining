/** chunk id: 482644 params = (module,exports,require) **/
"use strict";
l.r(t), l.d(t, {
    baseRules: () => C,
    customRules: () => y
});
var a = l(627968),
    n = l(64700),
    r = l(503698),
    s = l.n(r),
    i = l(791332),
    o = l.n(i),
    d = l(397927),
    c = l(398590),
    u = l(46054),
    _ = l(976860),
    m = l(780964),
    h = l(840065),
    p = l(954571),
    g = l(652215),
    b = l(559868),
    f = l(266585);
let x = o().defaultRules.link,
    k = {
        section: g.JJy.SETTINGS_CHANGELOG
    },
    A = e => {
        let {
            level: t,
            children: l,
            className: a
        } = e, r = (0, d.$Il)(), s = parseInt(t, 10), i = isNaN(s) ? 1 : s;
        return n.createElement(`h${r+i-1}`, {
            className: a
        }, l)
    },
    C = null != u.A ? u.A.defaultRules : null,
    y = {
        link: {
            parse(e, t, l) {
                let a, n = e[2],
                    r = n.startsWith("https://discordapp.com/nitro") || n.startsWith("https://discord.com/nitro"),
                    s = n.startsWith("/activities");
                return a = r ? e => {
                    p.default.track(g.HAw.PREMIUM_PROMOTION_OPENED, {
                        location: k
                    }), (0, h.openUserSettings)(m.X.NITRO_PANEL), l.changeLog.track(g.HAw.CHANGE_LOG_CTA_CLICKED, {
                        cta_type: "nitro"
                    }), (0, d.OoC)(b.lb), e.preventDefault()
                } : s ? e => {
                    (0, _.pX)(n), l.changeLog.track(g.HAw.CHANGE_LOG_CTA_CLICKED, {
                        ...p.default.getCampaignParams(n)
                    }), (0, c.bz)(), (0, d.OoC)(b.lb), e.preventDefault()
                } : () => {
                    l && "function" == typeof l.onLinkClick && l.onLinkClick(n), l.changeLog.track(g.HAw.CHANGE_LOG_CTA_CLICKED, {
                        target: n,
                        cta_type: "inline_link",
                        ...p.default.getCampaignParams(n)
                    })
                }, {
                    ...x.parse(e, t, l),
                    callToAction: a
                }
            },
            react: (e, t, l) => (0, a.jsx)(d.MzZ, {
                href: o().sanitizeUrl(e.target),
                title: e.title,
                onClick: e.callToAction,
                target: "_blank",
                className: e.callToAction ? "cta" : void 0,
                children: t(e.content, l)
            }, l.key)
        },
        lheading: e => ({
            react: (t, l, n) => {
                var r;
                return (0, a.jsx)(A, {
                    level: t.level,
                    className: s()(f["heading-md/bold"], ...null == (r = t.className) ? [] : r.split(" ").map(t => e[t])),
                    children: l(t.content, n)
                }, n.key)
            }
        }),
        heading: {
            react: (e, t, l) => (0, a.jsx)(A, {
                level: e.level,
                className: f["heading-md/bold"],
                children: t(e.content, l)
            }, l.key)
        },
        image: {
            react(e, t, n) {
                let r = l(274516)(`./${e.target}`);
                return (0, a.jsx)("img", {
                    alt: e.alt,
                    src: r
                }, n.key)
            }
        },
        blockQuote: {
            react: C?.blockQuote.react
        },
        list: e => ({
            react(t, l, n) {
                let r = t.ordered ? "ol" : "ul",
                    i = t.items.map((t, r) => (0, a.jsx)("li", {
                        className: s()(f["text-md/normal"], e.listItem),
                        children: l(t, n)
                    }, r));
                return (0, a.jsx)(r, {
                    className: e.list,
                    start: t.start,
                    children: i
                }, n.key)
            }
        }),
        paragraph: e => ({
            react: (t, l, n) => (0, a.jsx)("p", {
                className: s()(f["text-md/normal"], e.paragraph),
                children: l(t.content, n)
            }, n.key)
        })
    }