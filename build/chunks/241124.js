/** chunk id: 241124, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    Gk: () => g,
    Sn: () => m,
    jY: () => h
}), n(65821), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(158390),
    o = n(621466),
    s = n(954571),
    l = n(728458),
    c = n(652215);
let u = 3,
    d = i.createContext({
        registerAsset: () => () => {},
        unregisterAsset: () => {},
        hasError: !1,
        isLoading: !0
    });

function f(e) {
    return (0, o.vq)(e, HTMLImageElement) ? e.complete : (0, o.vq)(e, HTMLVideoElement) ? e.readyState >= 2 : !!(0, o.vq)(e, HTMLDivElement) || !0
}

function p(e) {
    return (0, o.vq)(e, HTMLImageElement) ? "load" : (0, o.vq)(e, HTMLVideoElement) ? "canplaythrough" : ((0, o.vq)(e, HTMLDivElement), "load")
}

function _(e) {
    var t, n;
    return (0, o.vq)(e, HTMLImageElement) ? e.getAttribute("src") : (0, o.vq)(e, HTMLVideoElement) ? null != (t = null == (n = e.querySelectorAll("source")[0]) ? void 0 : n.getAttribute("src")) ? t : "video" : ((0, o.vq)(e, HTMLDivElement), e.tagName)
}

function h(e) {
    let {
        children: t,
        isPreview: n = !1,
        source: h,
        questId: m,
        listenForSourceError: g = !1,
        retrySourceLoadOnError: E = !1
    } = e, [y, b] = i.useState(!1), [O, v] = i.useState(new Set), [A, I] = i.useState(!1), S = i.useRef(!1);
    i.useEffect(() => {
        let e = new Set;
        for (let t of O) f(t) || e.add(t);
        e.size !== O.size && v(e)
    }, [O]);
    let T = i.useCallback(e => {
            let {
                assetNode: t,
                nodeId: r,
                errorPrefix: i,
                errorMessage: a
            } = e;
            if (n || null == h) return;
            let u = (0, o.vq)(t, HTMLVideoElement) ? t.networkState : void 0;
            s.default.track(c.HAw.QUEST_ASSET_LOADING_FAILURE, {
                source: h,
                quest_id: m,
                asset_id: _(t),
                video_network_state: u
            }), l.A.captureException(Error("".concat(i, ": ").concat(null != a ? "".concat(a, ", ") : "").concat(_(t), ", ").concat(r)), {
                tags: {
                    source: h
                }
            }), b(!0)
        }, [n, h, m]),
        C = i.useCallback(e => {
            v(t => {
                let n = new Set(t);
                return n.delete(e), n
            })
        }, []),
        N = i.useCallback((e, t) => {
            I(!0);
            let n = p(e),
                r = new AbortController,
                i = new a.A;

            function s() {
                i.succeed(), C(e), e.removeEventListener(n, s)
            }

            function l(n) {
                d(), C(e), T({
                    assetNode: e,
                    nodeId: t,
                    errorPrefix: "Error loading asset",
                    errorMessage: "message" in n ? n.message : null
                })
            }

            function c(t) {
                E && i.fails < u && (0, o.vq)(e, HTMLVideoElement) ? i.fail(() => {
                    e.load()
                }) : l(t)
            }
            if (f(e) || (v(t => {
                    let n = new Set(t);
                    return n.add(e), n
                }), e.addEventListener(n, s)), e.addEventListener("error", l, {
                    signal: r.signal
                }), g && (0, o.vq)(e, HTMLVideoElement)) {
                let t = e.querySelectorAll("source"),
                    n = t[t.length - 1];
                null == n || n.addEventListener("error", c, {
                    signal: r.signal
                })
            }

            function d() {
                if (i.cancel(), r.abort(), e.removeEventListener(n, s), e.removeEventListener("error", l), g && (0, o.vq)(e, HTMLVideoElement)) {
                    let t = e.querySelectorAll("source"),
                        n = t[t.length - 1];
                    null == n || n.removeEventListener("error", c)
                }
            }
            return d
        }, [T, C, g, E]),
        w = i.useMemo(() => O.size > 0 || !A, [A, O]);
    i.useEffect(() => {
        w || (S.current = !0)
    }, [w]);
    let R = i.useMemo(() => ({
        registerAsset: N,
        unregisterAsset: C,
        hasError: y,
        isLoading: w && !S.current
    }), [N, C, y, w]);
    return (0, r.jsx)(d.Provider, {
        value: R,
        children: t
    })
}

function m(e) {
    let {
        id: t,
        children: n
    } = e, {
        registerAsset: r,
        unregisterAsset: a
    } = i.useContext(d), o = i.useRef(null);
    return i.useEffect(() => {
        let e, n = o.current;
        return null != n && (e = r(n, t)), () => {
            null == e || e(), null != n && a(n)
        }
    }, [r, a, t]), n(o)
}

function g() {
    let {
        hasError: e,
        isLoading: t
    } = i.useContext(d);
    return {
        hasError: e,
        isLoading: t
    }
}