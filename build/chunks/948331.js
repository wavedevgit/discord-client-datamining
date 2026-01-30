/** chunk id: 948331, original params: e,t,r (module,exports,require) **/
r.d(t, {
    g: () => S
});
var n = r(627968),
    l = r(64700),
    s = r(934551),
    a = r(158954),
    i = r(421380),
    o = r(397927),
    c = r(793574),
    u = r(404374),
    d = r(465794),
    h = r(927578),
    p = r(226017),
    f = r(652215),
    g = r(788868),
    _ = r(985018),
    E = r(316163),
    A = r(7410),
    y = r(936037);

function S() {
    return (0, p.A)() ? (0, n.jsx)("div", {
        className: E.do,
        children: (0, n.jsxs)("div", {
            className: E.U6,
            children: [(0, n.jsx)("img", {
                src: A,
                className: E.Sl,
                alt: ""
            }), (0, n.jsx)(o.Heading, {
                className: E.wx,
                variant: "heading-xl/semibold",
                color: "text-default",
                children: _.intl.string(_.t.erEf2g)
            }), (0, n.jsx)(a.EYj, {
                variant: "text-md/medium",
                color: "text-muted",
                children: _.intl.string(_.t.NaRCXT)
            })]
        })
    }) : (0, n.jsxs)("div", {
        className: E.do,
        children: [(0, n.jsxs)("div", {
            className: E.U6,
            children: [(0, n.jsx)("img", {
                src: y,
                className: E.Sl,
                alt: ""
            }), (0, n.jsx)(o.Heading, {
                className: E.wx,
                variant: "heading-xl/semibold",
                color: "text-default",
                children: _.intl.string(_.t.w4DRbZ)
            }), (0, n.jsx)(a.EYj, {
                variant: "text-md/medium",
                color: "text-muted",
                children: _.intl.string(_.t.F6u3E3)
            })]
        }), (0, n.jsx)(b, {})]
    })
}

function b() {
    let e = (0, h.Dd)(g.PremiumTypes.TIER_2),
        t = l.useCallback(() => (0, o.mMO)(async () => {
            let {
                default: e
            } = await r.e("22540").then(r.bind(r, 530951));
            return t => (0, n.jsx)(e, function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    }))), n.forEach(function(t) {
                        var n;
                        n = r[t], t in e ? Object.defineProperty(e, t, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = n
                    })
                }
                return e
            }({
                source: c.A.FOR_LATER_POPOUT
            }, t))
        }), []),
        p = _.intl.format(_.t.qXh3fo, {
            nitroTierName: e,
            onClick: t
        });
    return (0, n.jsxs)("div", {
        className: E.Zj,
        children: [(0, n.jsx)(s.NitroWheelIcon, {
            size: "md",
            color: u.k0.PREMIUM_TIER_2
        }), (0, n.jsx)(a.EYj, {
            variant: "text-xs/medium",
            color: "text-strong",
            className: E.tD,
            children: p
        }), (0, n.jsx)(d.A, {
            className: E.Oy,
            size: i.lO.TINY,
            shinyButtonClassName: E.Oy,
            subscriptionTier: g.pe.TIER_2,
            premiumModalAnalyticsLocation: {
                section: f.JJy.FOR_LATER_POPOUT_UPSELL
            }
        })]
    })
}