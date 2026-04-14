/** chunk id: 259407 params = (module,exports,require) **/
l.d(t, {
    Ay: () => _,
    mt: () => p
});
var r, n = l(627968),
    i = l(64700),
    a = l(998218),
    s = l(652215),
    o = l(560856);
let d = "allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts";

function c(e, t) {
    let l = a.A.toURLSafe(e ?? "");
    if (null === l) return "";
    if (null == t) return l.toString();
    for (let e in t) {
        let r = t[e];
        null != r && l.searchParams.set(e, r)
    }
    return l.toString()
}

function u(e) {
    let {
        src: t,
        autoMute: l,
        ...r
    } = e, a = i.useRef(null), s = i.useCallback(e => {
        e.data["x-tiktok-player"] && "https://www.tiktok.com" === e.origin && "onPlayerReady" === e.data.type && (l && a.current?.contentWindow?.postMessage({
            type: "mute",
            "x-tiktok-player": !0
        }, e.origin), a.current?.contentWindow?.postMessage({
            type: "play",
            "x-tiktok-player": !0
        }, e.origin))
    }, [l]);
    i.useEffect(() => (window.addEventListener("message", s), () => window.removeEventListener("message", s)), [s]);
    let o = c(t, {
        utm_source: "discord.gg"
    });
    return (0, n.jsx)(m, {
        src: o,
        ref: a,
        ...r
    })
}

function h(e) {
    let {
        src: t,
        autoMute: l,
        ...r
    } = e, i = c(t, {
        autoplay: "1",
        auto_play: "1",
        mute: l ? "1" : void 0,
        pageType: s.NzX
    });
    return (0, n.jsx)(m, {
        src: i,
        ...r
    })
}
let m = i.forwardRef(function(e, t) {
    let {
        allowFullScreen: l,
        ...r
    } = e, i = l ? `${d} allow-fullscreen` : d;
    return (0, n.jsx)("iframe", {
        ref: t,
        className: o.Qu,
        allow: l ? "autoplay; fullscreen" : "autoplay",
        frameBorder: 0,
        scrolling: "no",
        sandbox: i,
        allowFullScreen: l,
        ...r
    })
});
var p = ((r = {}).YOUTUBE = "YouTube", r.TIKTOK = "TikTok", r);

function _(e) {
    switch (e.provider) {
        case "YouTube":
            return (0, n.jsx)(h, {
                ...e
            });
        case "TikTok":
            return (0, n.jsx)(u, {
                ...e
            });
        default:
            return (0, n.jsx)(m, {
                ...e
            })
    }
}