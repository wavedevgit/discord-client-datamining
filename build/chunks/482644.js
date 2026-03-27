/** chunk id: 482644 params = (module,exports,require) **/
"use strict";
n.r(t), n.d(t, {
    baseRules: () => E,
    customRules: () => I
});
var l = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(791332),
    o = n.n(r),
    u = n(397927),
    c = n(398590),
    d = n(46054),
    m = n(976860),
    g = n(780964),
    h = n(840065),
    A = n(954571),
    f = n(652215),
    p = n(559868),
    x = n(582756);
let v = o().defaultRules.link,
    C = {
        section: f.JJy.SETTINGS_CHANGELOG
    },
    N = e => {
        let {
            level: t,
            children: n,
            className: l
        } = e, s = (0, u.$Il)(), a = parseInt(t, 10), r = isNaN(a) ? 1 : a;
        return i.createElement(`h${s+r-1}`, {
            className: l
        }, n)
    },
    E = null != d.A ? d.A.defaultRules : null,
    I = {
        link: {
            parse(e, t, n) {
                let l, i = e[2],
                    s = i.startsWith("https://discordapp.com/nitro") || i.startsWith("https://discord.com/nitro"),
                    a = i.startsWith("/activities");
                return l = s ? e => {
                    A.default.track(f.HAw.PREMIUM_PROMOTION_OPENED, {
                        location: C
                    }), (0, h.openUserSettings)(g.X.NITRO_PANEL), n.changeLog.track(f.HAw.CHANGE_LOG_CTA_CLICKED, {
                        cta_type: "nitro"
                    }), (0, u.OoC)(p.lb), e.preventDefault()
                } : a ? e => {
                    (0, m.pX)(i), n.changeLog.track(f.HAw.CHANGE_LOG_CTA_CLICKED, {
                        ...A.default.getCampaignParams(i)
                    }), (0, c.bz)(), (0, u.OoC)(p.lb), e.preventDefault()
                } : () => {
                    n && "function" == typeof n.onLinkClick && n.onLinkClick(i), n.changeLog.track(f.HAw.CHANGE_LOG_CTA_CLICKED, {
                        target: i,
                        cta_type: "inline_link",
                        ...A.default.getCampaignParams(i)
                    })
                }, {
                    ...v.parse(e, t, n),
                    callToAction: l
                }
            },
            react: (e, t, n) => (0, l.jsx)(u.MzZ, {
                href: o().sanitizeUrl(e.target),
                title: e.title,
                onClick: e.callToAction,
                target: "_blank",
                className: e.callToAction ? "cta" : void 0,
                children: t(e.content, n)
            }, n.key)
        },
        lheading: e => ({
            react: (t, n, i) => {
                var s;
                return (0, l.jsx)(N, {
                    level: t.level,
                    className: a()(x["heading-md/bold"], ...null == (s = t.className) ? [] : s.split(" ").map(t => e[t])),
                    children: n(t.content, i)
                }, i.key)
            }
        }),
        heading: {
            react: (e, t, n) => (0, l.jsx)(N, {
                level: e.level,
                className: x["heading-md/bold"],
                children: t(e.content, n)
            }, n.key)
        },
        image: {
            react(e, t, i) {
                let s = n(274516)(`./${e.target}`);
                return (0, l.jsx)("img", {
                    alt: e.alt,
                    src: s
                }, i.key)
            }
        },
        blockQuote: {
            react: E?.blockQuote.react
        },
        list: e => ({
            react(t, n, i) {
                let s = t.ordered ? "ol" : "ul",
                    r = t.items.map((t, s) => (0, l.jsx)("li", {
                        className: a()(x["text-md/normal"], e.listItem),
                        children: n(t, i)
                    }, s));
                return (0, l.jsx)(s, {
                    className: e.list,
                    start: t.start,
                    children: r
                }, i.key)
            }
        }),
        paragraph: e => ({
            react: (t, n, i) => (0, l.jsx)("p", {
                className: a()(x["text-md/normal"], e.paragraph),
                children: n(t.content, i)
            }, i.key)
        })
    }