/** Chunk was on 39048 **/
/** chunk id: 600292, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => f,
    q: () => h
});
var r = n(627968);
n(64700);
var i = n(503698),
    l = n.n(i),
    s = n(397927),
    a = n(147925),
    o = n(371794),
    c = n(500345),
    d = n(11351),
    u = n(985018),
    g = n(100634);

function m(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            var r;
            r = n[t], t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r
        })
    }
    return e
}

function p(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
        }
        return n
    })(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}

function f(e) {
    let {
        channelBenefits: t,
        intangibleBenefits: i,
        subscriptionListings: a,
        onImport: f
    } = e, h = (0, d.gN)();
    return (0, r.jsx)("div", {
        className: g.kL,
        children: a.map(e => (0, r.jsxs)("div", {
            className: g.nM,
            children: [(0, r.jsx)("img", {
                alt: "",
                src: null == e.image_asset ? void 0 : (0, o.YE)(e.application_id, e.image_asset, 512),
                className: l()(g.aL, g.mi)
            }), (0, r.jsxs)("div", {
                className: g.fw,
                children: [(0, r.jsx)(s.Text, {
                    variant: "text-md/normal",
                    color: "text-strong",
                    className: l()(g.qg, g.Wo),
                    children: e.name
                }), (0, r.jsx)(s.Text, {
                    color: "text-default",
                    variant: "text-sm/normal",
                    children: u.intl.format(u.t["QMj+In"], {
                        channels: e.role_benefits.benefits.filter(c.B1).length,
                        benefits: e.role_benefits.benefits.filter(c.b1).length
                    })
                })]
            }), (0, r.jsx)(s.Button, {
                variant: "secondary",
                onClick: () => {
                    (0, s.mMO)(async () => {
                        let {
                            ImportBenefitsFromSubscriptionListingModal: l
                        } = await n.e("66946").then(n.bind(n, 362937));
                        return n => (0, r.jsx)(l, p(m({}, n), {
                            fromSubscriptionListing: e,
                            existingChannelBenefits: t,
                            existingIntangibleBenefits: i,
                            onSubmit: f
                        }))
                    })
                },
                disabled: h,
                text: u.intl.string(u.t["90bIv9"])
            })]
        }, e.id))
    })
}

function h(e) {
    let {
        guildId: t,
        onImport: i,
        disabled: o = !1
    } = e;
    return (0, r.jsxs)(s.DUT, {
        className: l()(g.eZ, {
            [g.r9]: o
        }),
        onClick: o ? void 0 : function() {
            (0, s.mMO)(async () => {
                let {
                    ImportBenefitsFromRoleModal: e
                } = await n.e("66946").then(n.bind(n, 362937));
                return n => (0, r.jsx)(e, p(m({}, n), {
                    guildId: t,
                    onImport: i
                }))
            })
        },
        "aria-disabled": o,
        children: [(0, r.jsx)(s.iTF, {
            size: "custom",
            width: 23,
            height: 23,
            color: "currentColor",
            className: g.aL
        }), (0, r.jsx)(s.Text, {
            variant: "text-md/normal",
            color: "text-strong",
            className: g.qg,
            children: u.intl.string(u.t.xK9pBC)
        }), (0, r.jsx)(a.A, {
            direction: a.A.Directions.RIGHT,
            className: g.OW
        })]
    })
}