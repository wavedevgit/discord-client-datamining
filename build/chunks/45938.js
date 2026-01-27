/** Chunk was on web.js **/
/** chunk id: 45938, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    AK: () => W,
    GM: () => Y,
    Ik: () => k,
    Kx: () => U,
    UJ: () => q,
    Vd: () => $,
    Vt: () => ee,
    X6: () => G,
    YI: () => J,
    Zq: () => H,
    e7: () => B,
    eN: () => et,
    e_: () => Q,
    lo: () => j,
    n$: () => z,
    pF: () => V,
    tB: () => M,
    u1: () => X,
    v3: () => K
}), n(896048), n(591487), n(727858), n(747238), n(812715), n(801541), n(733351);
var r = n(889137),
    i = n(607399),
    a = n(311907),
    o = n(178253),
    s = n(491509),
    l = n(419212),
    c = n(287809),
    u = n(954571),
    d = n(403362),
    f = n(927578),
    p = n(257120),
    _ = n(371794),
    h = n(652215),
    m = n(788868),
    g = n(985018);

function E(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function y(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            E(e, t, n[t])
        })
    }
    return e
}
let b = ["discordapp.com/gifts", "discord.com/gifts"],
    O = 3,
    v = [p.A.escape(window.GLOBAL_ENV.GIFT_CODE_HOST), ...b.map(e => p.A.escape(e))].join("|"),
    A = RegExp("(?: |^|https?://)(?:".concat(v, ")/([a-z0-9-]+)"), "gi"),
    I = [...["discord.com/billing/promotions", "promos.discord.gg"].map(e => p.A.escape(e))].join("|"),
    S = RegExp("(?: |^|https?://)(?:".concat(I, ")(/|(/)?\\?code=)([a-z0-9-]+)"), "gi"),
    T = "abcdefghjkmnpqrstuvwxyzABCDEFGHJKMNPQRSTUVWXYZ23456789",
    C = (e, t) => Array(t).fill(void 0).map(() => "[".concat(T, "]{").concat(e, "}")).join("-?"),
    N = C(4, 4),
    w = C(4, 6),
    R = C(5, 3),
    P = "WUMP-?",
    D = [N, w, R, "[a-zA-Z]{4}-?[0-9a-zA-Z]{4}-?[a-zA-Z]{4}"].join("|"),
    L = new RegExp("^(".concat(P, ")?(").concat(D, ")$")),
    x = "-";
var M = function(e) {
    return e[e.DEFAULT = 0] = "DEFAULT", e[e.CUSTOM_STYLE = 1] = "CUSTOM_STYLE", e[e.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD = 2] = "CUSTOM_MESSAGE_EMOJI_SOUNDBOARD", e
}({});
let j = (e, t) => i.Fr || i.v1 ? 0 : null != e || t ? 2 : 1,
    k = e => 0 !== j(e);

function U(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        n = arguments.length > 2 ? arguments[2] : void 0;
    return "".concat(e, ":").concat(null != t ? t : "", ":").concat(null != n ? n : "")
}

function G(e) {
    let [t, n, r] = e.split(":");
    return {
        skuId: t,
        subscriptionPlanId: "" === n ? null : n,
        giftStyle: "" !== r && null != r ? Number.parseInt(r) : void 0
    }
}

function F(e) {
    return e.replace(/[^A-Za-z0-9]/g, "")
}
let V = e => {
        var t;
        return (null == e ? void 0 : e.type) === h.lAJ.CUSTOM_GIFT && (null == e || null == (t = e.embeds) ? void 0 : t.length) === 1 && (null == e ? void 0 : e.embeds[0].type) === h.Auw.GIFT
    },
    B = e => {
        let t;
        if (null == e) return [];
        let n = new Set;
        for (; null != (t = A.exec(e)) && n.size < O;) n.add(F(t[1]));
        for (; null != (t = S.exec(e)) && n.size < O;) n.add(F(t[t.length - 1]));
        return Array.from(n)
    };

function H() {
    let e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
        n = window.GLOBAL_ENV.GIFT_CODE_HOST;
    return null != n ? e = "/".concat(t) : (n = location.host, e = "/gifts/".concat(t)), "".concat(location.protocol, "//").concat(n).concat(e)
}
async function Y(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    try {
        let r = (await (0, _.aP)({
            url: h.Rsh.GIFT_CODE_RESOLVE(e),
            query: {
                with_application: t,
                with_subscription_plan: n
            },
            oldFormErrors: !0,
            rejectWithError: !1
        })).body;
        return u.default.track(h.HAw.GIFT_CODE_RESOLVED, {
            resolved: !0,
            gift_code: r.code,
            gift_code_max_uses: r.max_uses,
            sku_id: r.store_listing.sku.id,
            sku_type: r.store_listing.sku.type,
            application_id: r.store_listing.sku.application_id,
            store_title: r.store_listing.sku.name
        }, {
            flush: !0
        }), r
    } catch (t) {
        throw u.default.track(h.HAw.GIFT_CODE_RESOLVED, {
            resolved: !1,
            gift_code: e
        }), new o.A(t)
    }
}

function W(e, t) {
    u.default.track(h.HAw.GIFT_CODE_COPIED, y({}, (0, s.A)(t, !1, !1), e.analyticsData))
}

function K(e, t, n) {
    let {
        error: r,
        accepted: i,
        accepting: a,
        opened: o,
        isCustomGift: s
    } = n;
    return null == r && (i || a || null == e) ? !s || o || i || a ? i && (t.isSubscription || null != e) ? h.frR.SUCCESS : h.frR.CONFIRM : h.frR.OPEN : h.frR.ERROR
}

function z(e, t, n) {
    switch (e) {
        case h.frR.ERROR:
            return g.intl.formatToMarkdownString(g.t.JUvC0s, {});
        case h.frR.SUCCESS:
            return t.isSubscription ? g.intl.formatToPlainString(g.t["1C2BG/"], {
                skuName: n.name
            }) : g.intl.string(g.t["+BNMcF"]);
        case h.frR.CONFIRM:
        default:
            return t.isSubscription ? g.intl.formatToPlainString(g.t["2VN4N9"], {
                skuName: n.name
            }) : g.intl.string(g.t.RmamAI)
    }
}

function q(e, t, n) {
    let {
        isCustomGift: r
    } = n;
    switch (e) {
        case h.frR.ERROR:
            return g.intl.string(g.t.w19zb6);
        case h.frR.SUCCESS:
            if (__OVERLAY__) return g.intl.string(g.t.zW87EM);
            if (t.isSubscription) return g.intl.string(g.t.ex5TKr);
            return g.intl.string(g.t.OOkjql);
        case h.frR.OPEN:
            return g.intl.string(g.t.F8ktci);
        case h.frR.CONFIRM:
        default:
            if (null != r && r) return g.intl.string(g.t.n6I6k4);
            if (null != t.giftStyle) return t.isClaimed ? g.intl.string(g.t.OgpR0c) : g.intl.string(g.t["2BWscv"]);
            return t.isSubscription ? g.intl.string(g.t.wQ1FHy) : g.intl.string(g.t.OgpR0c)
    }
}

function Z(e) {
    return (0, r.YW)(e).with({
        interval: m.WT.MONTH,
        premiumSubscriptionType: m.PremiumTypes.TIER_2
    }, () => g.intl.formatToPlainString(g.t["vFfV+J"], {
        timeInterval: g.intl.string(g.t.FPybU7)
    })).with({
        interval: m.WT.YEAR,
        premiumSubscriptionType: m.PremiumTypes.TIER_2
    }, () => g.intl.formatToPlainString(g.t["vFfV+J"], {
        timeInterval: g.intl.string(g.t.tfqrhj)
    })).with({
        interval: m.WT.MONTH,
        premiumSubscriptionType: m.PremiumTypes.TIER_1
    }, () => g.intl.formatToPlainString(g.t.gjKbF4, {
        intervalCount: e.intervalCount
    })).with({
        interval: m.WT.YEAR,
        premiumSubscriptionType: m.PremiumTypes.TIER_1
    }, () => g.intl.formatToPlainString(g.t.GIe7Bw, {
        intervalCount: e.intervalCount
    })).otherwise(() => g.intl.string(g.t["5ayf7w"]))
}

function Q(e) {
    let {
        step: t,
        sku: n,
        libraryApplication: r,
        error: i,
        accepted: a,
        accepting: o,
        onGoToLibrary: s,
        subscriptionPlan: l = null
    } = e;
    switch (t) {
        case h.frR.ERROR:
            return X(r, i, a, o, s);
        case h.frR.SUCCESS:
            if (null != l) return Z(l);
            return g.intl.formatToPlainString(g.t["3CPsbo"], {
                skuName: n.name
            });
        case h.frR.CONFIRM:
        default:
            if (null != l) {
                let e = l.interval === m.WT.MONTH ? g.t.P9eTKt : g.t.d8rUdy;
                return g.intl.format(e, {
                    skuName: n.name,
                    intervalCount: l.intervalCount
                })
            }
            return g.intl.formatToPlainString(g.t.l6Ea4Z, {
                skuName: n.name
            })
    }
}

function X(e, t, n, r, i) {
    let a = n || r ? void 0 : e,
        o = g.intl.format(g.t["5zyz9y"], {
            onGoToLibrary: i
        });
    return null != a ? o : null == t ? null : et(t, c.default.getCurrentUser())
}

function J(e, t, n) {
    let r = t.applicationId,
        i = e.length > 0 ? e : [r],
        a = i.map(e => n.getLibraryApplication(r, e, !0)).filter(d.Vq);
    return a.length === i.length ? a[0] : null
}

function $(e) {
    let t = e.trim().split("/").pop().match(L);
    if (null == t) return null;
    let [n, r, i] = t;
    return null == i ? null : i.replace(RegExp(x, "g"), "")
}
let ee = (e, t) => (0, a.bG)([l.A], () => {
    if (null == e || !t) return null;
    let n = l.A.getGiftCode(e);
    return null == n || "" === n ? null : n
});

function et(e, t) {
    switch (e.code) {
        case h.t02.INVALID_GIFT_SELF_REDEMPTION:
            return g.intl.string(g.t.wa9h7F);
        case h.t02.INVALID_GIFT_REDEMPTION_EXHAUSTED:
            return g.intl.string(g.t.Iw2TUW);
        case h.t02.INVALID_GIFT_REDEMPTION_OWNED:
            return g.intl.string(g.t.mdLtb5);
        case h.t02.UNKNOWN_GIFT_CODE:
            return g.intl.string(g.t.roztIr);
        case h.t02.INVALID_GIFT_REDEMPTION_SUBSCRIPTION_INCOMPATIBLE:
            return g.intl.formatToPlainString(g.t["4YTHKw"], {
                planName: (0, f.YE)(t, m.PremiumTypes.TIER_2) ? g.intl.string(g.t.lG6a5x) : g.intl.string(g.t.FSOz78)
            });
        case h.t02.INVALID_GIFT_REDEMPTION_SUBSCRIPTION_MANAGED:
            return g.intl.string(g.t["9i1J30"]);
        case h.t02.INVALID_GIFT_REDEMPTION_INVOICE_OPEN:
            return g.intl.string(g.t["U26WX+"]);
        case h.t02.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED:
            return g.intl.string(g.t.ypuSd8);
        case h.t02.BILLING_NON_REFUNDABLE_PAYMENT_SOURCE:
            return g.intl.string(g.t.mXMmWE);
        default:
            return g.intl.string(g.t["s9+XlB"])
    }
}