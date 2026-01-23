/** Chunk was on web.js **/
/** chunk id: 36149, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    $8: () => P,
    NI: () => w,
    Q9: () => M,
    ST: () => F,
    Sr: () => V,
    Wv: () => L,
    YU: () => j,
    b8: () => k,
    dZ: () => G,
    i2: () => N,
    lU: () => T,
    mK: () => B,
    nn: () => U,
    p9: () => C,
    uE: () => D,
    uN: () => x,
    yM: () => R
}), n(896048), n(747238);
var r = n(64700),
    i = n(311907),
    a = n(73153),
    s = n(155718),
    o = n(475743),
    l = n(662502),
    c = n(393033),
    u = n(105428),
    d = n(961350),
    f = n(320501),
    p = n(287809),
    _ = n(935649),
    h = n(847599),
    m = n(870383),
    g = n(295972),
    E = n(40449),
    y = n(652215),
    b = n(204925),
    O = n(835002),
    v = n(536242),
    A = n(985018);
let I = new Set([h.q1.STAGE_CHANNEL_AGE_VERIFICATION_PROMPT, h.q1.START_STAGE_PROMPT, h.q1.STAGE_CHANNEL_RAISE_HAND]),
    S = new Set([b.w_.NSFW_SERVER, b.w_.NSFW_SERVER_INVITE, b.w_.NSFW_SERVER_INVITE_EMBED, b.w_.LARGE_GUILD, b.w_.JOIN_LARGE_GUILD_UNDERAGE, b.w_.ACCESS_LARGE_GUILD_UNDERAGE]),
    T = e => S.has(e);

function C() {
    let e = p.default.getCurrentUser();
    return (null == e ? void 0 : e.ageVerificationStatus) !== s.Tk.VERIFIED_ADULT
}

function N() {
    let e = (0, i.bG)([p.default], () => p.default.getCurrentUser());
    return (null == e ? void 0 : e.ageVerificationStatus) !== s.Tk.VERIFIED_ADULT
}

function w() {
    let e = p.default.getCurrentUser();
    return (null == e ? void 0 : e.ageVerificationStatus) === s.Tk.VERIFIED_TEEN
}

function R() {
    let e = (0, i.bG)([p.default], () => p.default.getCurrentUser());
    return (null == e ? void 0 : e.ageVerificationStatus) === s.Tk.VERIFIED_TEEN
}

function P() {
    let e = p.default.getCurrentUser();
    return (null == e ? void 0 : e.ageVerificationStatus) === s.Tk.VERIFIED_ADULT
}

function D() {
    let e = (0, i.bG)([p.default], () => p.default.getCurrentUser());
    return (null == e ? void 0 : e.ageVerificationStatus) === s.Tk.VERIFIED_ADULT
}
var x = function(e) {
        return e.CTAS = "ctas", e.CONTENT_TYPE = "content_type", e
    }({}),
    L = function(e) {
        return e.VERIFIED_ADULT = "verified_adult", e.VERIFIED_TEEN = "verified_teen", e.ERROR = "error", e
    }({});

function j(e, t) {
    let n = f.A.getMessage(e, t);
    if (null == n || null == n.embeds || 0 === n.embeds.length || null == n.embeds[0].fields || n.embeds[0].type !== y.Auw.AGE_VERIFICATION_SYSTEM_NOTIFICATION) return !1;
    let r = n.embeds[0].fields.find(e => "ctas" === e.rawName);
    return null == r ? void 0 : r.rawValue.split(",").includes("retry")
}

function M() {
    let e = p.default.getCurrentUser();
    return (null == e ? void 0 : e.ageVerificationStatus) !== s.Tk.UNVERIFIED && (null == e ? void 0 : e.ageVerificationStatus) !== s.Tk.CLIENT_ONLY_PENDING
}

function k() {
    let e = (0, i.bG)([p.default], () => p.default.getCurrentUser());
    return (null == e ? void 0 : e.ageVerificationStatus) !== s.Tk.UNVERIFIED && (null == e ? void 0 : e.ageVerificationStatus) !== s.Tk.CLIENT_ONLY_PENDING
}

function U(e) {
    let {
        onComplete: t,
        entryPoint: n,
        isRetry: s = !1,
        visibleContent: o = null,
        shouldShowExpressiveModal: d = !1,
        classificationId: f = null
    } = e, [h, m] = r.useState(!1), E = (0, i.bG)([p.default], () => p.default.getCurrentUser()), {
        current: y
    } = r.useRef(null == E ? void 0 : E.ageVerificationStatus), b = (0, c.W$)(), v = r.useCallback(() => {
        a.h.dispatch({
            type: "CLOSE_AGE_VERIFICATION_MODAL",
            status: y
        }), s || b || u.A.maybeOpenAgeVerificationUserFeedback({
            location: "age_verification_intro_screen",
            visibleContent: o
        })
    }, [y, s, o, b]), A = r.useCallback(async e => {
        m(!0);
        try {
            a.h.dispatch({
                type: "INITIATE_AGE_VERIFICATION"
            });
            let r = await (0, g.uf)({
                method: e,
                classificationId: null != f ? f : void 0
            });
            _.A.showAgeVerification({
                webviewUrl: r.verification_webview_url,
                verificationRequestId: r.verification_request_id,
                verificationVendorName: r.verification_vendor_name,
                onComplete: t,
                onClose: v,
                onCancel: v,
                entryPoint: n,
                shouldShowExpressiveModal: d
            })
        } catch (e) {
            l.A.showFailedToast(O.OB.TIGGER_PAWTECT_ERROR), v()
        } finally {
            m(!1)
        }
    }, [t, v, d, f, n]);
    return {
        loading: h,
        initiateAgeVerification: A
    }
}

function G(e) {
    let t = (0, i.bG)([p.default], () => {
            var e;
            return null == (e = p.default.getCurrentUser()) ? void 0 : e.ageVerificationStatus
        }),
        n = (0, o.A)(t),
        a = (0, i.bG)([d.default], () => null != d.default.getSuspendedUserToken()),
        s = (0, i.bG)([d.default], () => d.default.isAuthenticated()),
        l = null != n && null != t && n !== t,
        c = !a && !s;
    r.useEffect(() => {
        (l || c) && e()
    }, [e, l, c])
}

function V(e) {
    return null != e && E.zn.has(e)
}

function F(e) {
    return I.has(e) ? A.intl.string(A.t.lSWVTM) : (0, m.H)(A.intl.string(A.t.JHNunj), A.intl.string(A.t.xYXsr6))
}

function B(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    return I.has(e) ? A.intl.string(A.t["S/xS/w"]) : n ? (0, m.H)(A.intl.string(v.default["1/6wta"]), A.intl.string(v.default.h7qzoa)) : null != t ? A.intl.format(v.default.RpMIT0, {
        handleOnHelpUrlHook: t
    }) : (0, m.H)(A.intl.string(A.t["+BLIGh"]), A.intl.string(A.t.HxS3oQ))
}